// Builds Instagram reels and carousels from a spec.json: node scripts/social/build.mjs social/instagram/2026-11 [id ...]
// Slides and text overlays are HTML pages screenshotted by headless Chrome; reels are put together with ffmpeg.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';

const repo = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const dir = path.resolve(process.argv[2]);
const only = process.argv.slice(3);
const spec = JSON.parse(fs.readFileSync(path.join(dir, 'spec.json'), 'utf8'));
const images = path.join(repo, 'src/content/images');
const logo = path.join(images, '2025/09/IMG_6106.JPG');
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sagix-social-'));
const handle = spec.handle;

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const img = (p) => 'file://' + path.join(images, p);

const css = `
  :root { --ink:#0d0b08; --paper:#f3ead8; --gold:#d4ad5b; --muted:#cbbd9f; }
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:100%; height:100%; background:transparent; }
  body { font-family: "Baskerville", "Georgia", serif; color: var(--paper); -webkit-font-smoothing: antialiased; }
  .label { font-family:"Avenir Next", "Helvetica Neue", sans-serif; font-weight:600; text-transform:uppercase; letter-spacing:.2em; color:var(--gold); }
  .sans { font-family:"Avenir Next", "Helvetica Neue", sans-serif; }
`;

function render(html, file, w, h, transparent) {
  const htmlFile = path.join(tmp, path.basename(file) + '.html');
  fs.writeFileSync(htmlFile, `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${html}</body></html>`);
  const args = ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', `--window-size=${w},${h}`, `--screenshot=${file}`, '--allow-file-access-from-files', '--virtual-time-budget=3000'];
  if (transparent) args.push('--default-background-color=00000000');
  execFileSync(chrome, [...args, 'file://' + htmlFile], { stdio: 'ignore' });
}

// ---------- reels ----------
function reelOverlay(card, label, i, n) {
  const hook = card.kind === 'hook';
  const words = (card.head + ' ' + (card.sub || '')).split(/\s+/).length;
  const size = hook ? (card.head.length > 60 ? 84 : 96) : (card.head.length > 70 ? 70 : 78);
  return `
  <div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(13,11,8,.78) 0%, rgba(13,11,8,0) 22%, rgba(13,11,8,0) 38%, rgba(13,11,8,.82) 64%, rgba(13,11,8,.95) 100%);"></div>
  <div class="label" style="position:absolute;top:150px;left:80px;right:140px;font-size:30px;">${esc(label)}</div>
  <div style="position:absolute;top:200px;left:80px;width:120px;height:3px;background:var(--gold);opacity:.9"></div>
  <div style="position:absolute;left:80px;right:150px;bottom:${hook ? 520 : 470}px;">
    <div style="font-size:${size}px;line-height:1.14;letter-spacing:-.005em;">${esc(card.head)}</div>
    ${card.sub ? `<div class="sans" style="margin-top:38px;font-size:44px;line-height:1.3;color:var(--gold);font-weight:500;">${esc(card.sub)}</div>` : ''}
  </div>
  <div class="sans" style="position:absolute;left:80px;bottom:330px;font-size:30px;color:var(--muted);letter-spacing:.04em;">${esc(handle)}</div>
  <div style="position:absolute;right:150px;bottom:342px;display:flex;gap:12px;">${Array.from({ length: n }, (_, k) => `<span style="width:14px;height:14px;border-radius:7px;background:${k === i ? 'var(--gold)' : 'rgba(243,234,216,.35)'}"></span>`).join('')}</div>`;
}

function reelEnd(end, label) {
  return `
  <img src="${img(end.img)}" style="position:absolute;inset:-60px;width:calc(100% + 120px);height:calc(100% + 120px);object-fit:cover;filter:blur(26px) brightness(.32) saturate(.8);">
  <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 110px 160px;">
    <img src="file://${logo}" style="width:190px;height:190px;border-radius:95px;object-fit:cover;border:3px solid var(--gold);margin-bottom:56px;">
    <div class="label" style="font-size:30px;margin-bottom:34px;">${esc(label)}</div>
    <div style="font-size:84px;line-height:1.1;margin-bottom:28px;">${esc(end.title)}</div>
    <div style="font-size:44px;line-height:1.3;color:var(--muted);font-style:italic;margin-bottom:80px;">${esc(end.line)}</div>
    <div class="sans" style="font-size:42px;font-weight:600;color:var(--gold);margin-bottom:16px;">Full episode: link in bio</div>
    <div class="sans" style="font-size:36px;color:var(--paper);margin-bottom:90px;">sagix.io · ${esc(handle)}</div>
    <div class="sans" style="font-size:26px;color:var(--muted);opacity:.85;">Educational content. Not financial advice.</div>
  </div>`;
}

const dur = (c) => Math.min(5.2, Math.max(3.2, 1.7 + (c.head + ' ' + (c.sub || '')).split(/\s+/).length * 0.2));

function buildReel(r) {
  const out = path.join(dir, r.id);
  fs.mkdirSync(out, { recursive: true });
  const n = r.cards.length;
  const clips = [];
  const X = 0.45; // crossfade seconds
  r.cards.forEach((c, i) => {
    const ov = path.join(tmp, `${r.id}-ov${i}.png`);
    render(reelOverlay(c, r.label, i, n), ov, 1080, 1920, true);
    const d = dur(c) + X;
    const clip = path.join(tmp, `${r.id}-c${i}.mp4`);
    // Scale the landscape image to fill the height, then pan across it; alternate direction per card.
    const x = i % 2 === 0 ? `(iw-1080)*0.15+(iw-1080)*0.7*t/${d}` : `(iw-1080)*0.85-(iw-1080)*0.7*t/${d}`;
    execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-loop', '1', '-t', String(d), '-i', path.join(images, c.img), '-loop', '1', '-t', String(d), '-i', ov,
      '-filter_complex', `[0:v]scale=-2:2016,crop=1080:1920:'${x}':48,eq=brightness=-0.04:saturation=0.9,fps=30,format=yuv420p[bg];[1:v]format=rgba,fade=in:st=0.15:d=0.55:alpha=1[t];[bg][t]overlay=0:0,format=yuv420p[v]`,
      '-map', '[v]', '-r', '30', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', clip]);
    clips.push({ file: clip, d });
  });
  // End card: a still with a slow zoom.
  const endPng = path.join(tmp, `${r.id}-end.png`);
  render(reelEnd(r.end, r.label), endPng, 1080, 1920, false);
  const endD = 4.0;
  const endClip = path.join(tmp, `${r.id}-end.mp4`);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-loop', '1', '-t', String(endD), '-i', endPng,
    '-vf', `scale=1188:2112,zoompan=z='1.0+0.04*on/${endD * 30}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=1080x1920:fps=30,format=yuv420p`,
    '-r', '30', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', endClip]);
  clips.push({ file: endClip, d: endD });

  // Crossfade the clips together.
  const inputs = clips.flatMap((c) => ['-i', c.file]);
  let filter = '', last = '[0:v]', offset = 0;
  for (let i = 1; i < clips.length; i++) {
    offset += clips[i - 1].d - X;
    const lbl = `[x${i}]`;
    filter += `${last}[${i}:v]xfade=transition=fade:duration=${X}:offset=${offset.toFixed(3)}${lbl};`;
    last = lbl;
  }
  const total = offset + clips[clips.length - 1].d;
  const silent = path.join(tmp, `${r.id}-video.mp4`);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...inputs, '-filter_complex', filter.replace(/;$/, ''), '-map', last, '-c:v', 'libx264', '-preset', 'medium', '-crf', '21', '-pix_fmt', 'yuv420p', '-r', '30', silent]);

  // Original ambient pad: a slow minor chord with gentle swells and a soft low pulse, so the reel has sound without borrowed music.
  const [a, b, c, d2, e] = r.chord;
  const expr = [
    `0.16*sin(2*PI*${a}*t)*(0.75+0.25*sin(2*PI*0.07*t))`,
    `0.11*sin(2*PI*${b}*t)*(0.6+0.4*sin(2*PI*0.05*t+1))`,
    `0.09*sin(2*PI*${c}*t)*(0.6+0.4*sin(2*PI*0.09*t+2))`,
    `0.07*sin(2*PI*${d2}*t)*(0.5+0.5*sin(2*PI*0.11*t+3))`,
    `0.05*sin(2*PI*${e}*t)*(0.5+0.5*sin(2*PI*0.13*t+4))`,
    `0.10*sin(2*PI*${a / 2}*t)*exp(-6*mod(t,1.6))`,
  ].join('+');
  const audio = path.join(tmp, `${r.id}-audio.m4a`);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'lavfi', '-i', `aevalsrc='${expr}':s=44100:d=${total.toFixed(2)}`,
    '-af', `lowpass=f=1400,aecho=0.8:0.7:420|780:0.25|0.18,afade=t=in:d=1.5,afade=t=out:st=${(total - 2).toFixed(2)}:d=2,volume=1.6,alimiter=limit=0.7`,
    '-c:a', 'aac', '-b:a', '160k', audio]);

  const final = path.join(out, `${r.id}.mp4`);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', silent, '-i', audio, '-map', '0:v', '-map', '1:a', '-c:v', 'libx264', '-preset', 'slow', '-crf', '23', '-maxrate', '3500k', '-bufsize', '7000k', '-pix_fmt', 'yuv420p', '-c:a', 'copy', '-shortest', '-movflags', '+faststart', final]);
  // Cover image for the reel (the hook card), useful for the grid.
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-ss', '1.6', '-i', final, '-frames:v', '1', '-q:v', '3', path.join(out, `${r.id}-cover.jpg`)]);
  fs.writeFileSync(path.join(out, 'caption.txt'), r.caption + '\n');
  console.log('reel', r.id, total.toFixed(1) + 's', (fs.statSync(final).size / 1e6).toFixed(1) + 'MB');
}

// ---------- carousels ----------
function slideHtml(s, label, i, n) {
  const counter = `<div class="sans" style="position:absolute;top:60px;right:70px;font-size:26px;color:var(--muted);letter-spacing:.08em;">${i + 1} / ${n}</div>`;
  if (s.type === 'cover') return `
    <img src="${img(s.img)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
    <div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(13,11,8,.55) 0%, rgba(13,11,8,0) 22%, rgba(13,11,8,0) 40%, rgba(13,11,8,.9) 72%, rgba(13,11,8,.97) 100%);"></div>
    <div class="label" style="position:absolute;top:64px;left:72px;font-size:26px;">${esc(label)}</div>
    ${counter}
    <div style="position:absolute;left:72px;right:72px;bottom:150px;font-size:${s.title.length > 64 ? 70 : 78}px;line-height:1.13;">${esc(s.title)}</div>
    <div class="sans" style="position:absolute;left:72px;bottom:70px;font-size:28px;color:var(--muted);">${esc(handle)}</div>
    <div class="sans" style="position:absolute;right:72px;bottom:70px;font-size:28px;color:var(--gold);font-weight:600;">Swipe →</div>`;
  if (s.type === 'end') return `
    <img src="${img(s.img)}" style="position:absolute;inset:-60px;width:calc(100% + 120px);height:calc(100% + 120px);object-fit:cover;filter:blur(24px) brightness(.3) saturate(.8);">
    <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 100px;">
      <img src="file://${logo}" style="width:160px;height:160px;border-radius:80px;object-fit:cover;border:3px solid var(--gold);margin-bottom:46px;">
      <div class="label" style="font-size:26px;margin-bottom:28px;">${esc(label)}</div>
      <div style="font-size:72px;line-height:1.1;margin-bottom:22px;">${esc(s.title)}</div>
      <div style="font-size:38px;line-height:1.3;color:var(--muted);font-style:italic;margin-bottom:64px;">${esc(s.line)}</div>
      <div class="sans" style="font-size:38px;font-weight:600;color:var(--gold);margin-bottom:14px;">Read it in full: link in bio</div>
      <div class="sans" style="font-size:32px;margin-bottom:70px;">sagix.io · ${esc(handle)}</div>
      <div class="sans" style="font-size:24px;color:var(--muted);">Educational content. Not financial advice.</div>
    </div>`;
  const bigSize = s.big.length > 16 ? 84 : s.big.length > 9 ? 104 : 140;
  return `
    <div style="position:absolute;inset:0;background:var(--ink);"></div>
    <img src="${img(s.img)}" style="position:absolute;top:0;left:0;width:100%;height:540px;object-fit:cover;">
    <div style="position:absolute;top:0;left:0;right:0;height:170px;background:linear-gradient(180deg, rgba(13,11,8,.8), rgba(13,11,8,0));"></div>
    <div style="position:absolute;top:330px;left:0;right:0;height:212px;background:linear-gradient(180deg, rgba(13,11,8,0), var(--ink));"></div>
    <div class="label" style="position:absolute;top:64px;left:72px;font-size:24px;">${esc(label)}</div>
    ${counter.replace('color:var(--muted)', 'color:var(--paper)')}
    <div style="position:absolute;top:540px;bottom:130px;left:72px;right:72px;display:flex;flex-direction:column;justify-content:center;">
      <div style="font-family:'Didot','Baskerville',serif;font-size:${bigSize}px;line-height:1.02;color:var(--gold);margin-bottom:34px;">${esc(s.big)}</div>
      <div style="width:90px;height:3px;background:var(--gold);opacity:.7;margin-bottom:34px;"></div>
      <div style="font-size:${s.text.length > 150 ? 46 : 54}px;line-height:1.28;">${esc(s.text)}</div>
    </div>
    <div class="sans" style="position:absolute;left:72px;bottom:60px;font-size:26px;color:var(--muted);">${esc(handle)}</div>`;
}

function buildCarousel(c) {
  const out = path.join(dir, c.id);
  fs.mkdirSync(out, { recursive: true });
  c.slides.forEach((s, i) => {
    const png = path.join(tmp, `${c.id}-${i + 1}.png`);
    render(slideHtml(s, c.label, i, c.slides.length), png, 1080, 1350, false);
    execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', png, '-q:v', '2', path.join(out, `${c.id}-${String(i + 1).padStart(2, '0')}.jpg`)]);
  });
  fs.writeFileSync(path.join(out, 'caption.txt'), c.caption + '\n');
  console.log('carousel', c.id, c.slides.length, 'slides');
}

for (const r of spec.reels) if (!only.length || only.includes(r.id)) buildReel(r);
for (const c of spec.carousels) if (!only.length || only.includes(c.id)) buildCarousel(c);
fs.rmSync(tmp, { recursive: true, force: true });
