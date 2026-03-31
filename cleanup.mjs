import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesToKeep = [5,6,7,8,9,10,39,40,41,44,46,69,70,96,97];

const keptPages = pagesToKeep.map(p => `pagina${p}.jsx`);
const keptCSS = pagesToKeep.map(p => `pagina${p}.module.css`);

const keptImages = [
  ...Array.from({length: 5}, (_, i) => `pagina39_imagem${i+1}.webp`),
  ...Array.from({length: 5}, (_, i) => `pagina40_imagem${i+1}.webp`),
  ...Array.from({length: 2}, (_, i) => `pagina41_imagem${i+1}.webp`),
  ...Array.from({length: 14}, (_, i) => `pagina44_imagem${i+1}.webp`),
  'pagina46_imagem1.webp',
  ...Array.from({length: 2}, (_, i) => `pagina69_imagem${i+1}.webp`),
  ...Array.from({length: 2}, (_, i) => `pagina70_imagem${i+1}.webp`),
  'pagina96_imagem1.webp',
  ...Array.from({length: 2}, (_, i) => `pagina97_imagem${i+1}.webp`),
];

const keptIcons = [
  'eng_audio_icon.webp',
  'ptbr_audio_icon.webp',
  'slow_audio_icon.webp',
  'campainha.png',
  'notes_icon.webp',
  'correct_icon.webp',
  'wrong_icon.webp',
  'white_play_icon.png',
];

const keptAudios = [
  'global_grammar.mp3', 'global_simple_present.mp3', 'global_verbo_to_be.mp3',
  'global_learning_le_e.mp3', 'global_learning_le_p.mp3',
  'global_posse_ae.mp3', 'global_posse_ap.mp3', 'bell.mp3',
  'afirmativa.mp3', 'negativa.mp3', 'interrogativa_a.mp3', 'interrogativa_n.mp3',
  'sujeito.mp3', 'verbo_auxiliar.mp3', 'adverbio.mp3', 'adverbio_not.mp3',
  'verbo.mp3', 'objeto_complemento.mp3', 'traducao.mp3',
  'my_audio.mp3', 'his_audio.mp3', 'her_audio.mp3', 'its_audio.mp3',
  'our_audio.mp3', 'your_audio.mp3', 'their_audio.mp3',
  ...Array.from({length: 3}, (_, i) => `pg5_audio${i+1}.mp3`),
  ...Array.from({length: 3}, (_, i) => `pg5_trad${i+1}.mp3`),
  ...Array.from({length: 4}, (_, i) => `pg6_audio${i+1}.mp3`),
  ...Array.from({length: 4}, (_, i) => `pg6_trad${i+1}.mp3`),
  ...Array.from({length: 3}, (_, i) => `pg7_audio${i+1}.mp3`),
  ...Array.from({length: 3}, (_, i) => `pg7_trad${i+1}.mp3`),
  ...Array.from({length: 3}, (_, i) => `pg8_audio${i+1}.mp3`),
  ...Array.from({length: 3}, (_, i) => `pg8_trad${i+1}.mp3`),
  ...Array.from({length: 3}, (_, i) => `pg9_audio${i+1}.mp3`),
  ...Array.from({length: 3}, (_, i) => `pg9_trad${i+1}.mp3`),
  ...Array.from({length: 3}, (_, i) => `pg10_audio${i+1}.mp3`),
  ...Array.from({length: 3}, (_, i) => `pg10_trad${i+1}.mp3`),
  ...Array.from({length: 3}, (_, i) => `pg39_audio${i+1}e.mp3`),
  ...Array.from({length: 3}, (_, i) => `pg39_audio${i+1}p.mp3`),
  'pg39_audioA.mp3', 'pg39_audioB.mp3', 'pg39_audioC.mp3', 'pg39_audioD.mp3', 'pg39_audioE.mp3',
  ...Array.from({length: 5}, (_, i) => `pg39_audio${i+1}.mp3`),
  'pagina40_audioA.mp3', 'pagina40_audioB.mp3', 'pagina40_audioC.mp3', 'pagina40_audioD.mp3', 'pagina40_audioE.mp3',
  ...Array.from({length: 5}, (_, i) => `pagina40_audio${i+1}.mp3`),
  ...Array.from({length: 11}, (_, i) => `pg41_audio${i+1}e.mp3`),
  ...Array.from({length: 11}, (_, i) => `pg41_audio${i+1}p.mp3`),
  ...Array.from({length: 28}, (_, i) => `pg44_audio${i+1}e.mp3`),
  ...Array.from({length: 28}, (_, i) => `pg44_audio${i+1}p.mp3`),
  'pg46_audio1_1e.mp3', 'pg46_audio1_2e.mp3', 'pg46_audio2_1e.mp3', 'pg46_audio2_2e.mp3',
  'pg46_audio1p.mp3', 'pg46_audio2p.mp3',
  ...Array.from({length: 10}, (_, i) => `pg69_audio${i+1}e.mp3`),
  ...Array.from({length: 10}, (_, i) => `pg69_audio${i+1}p.mp3`),
  ...Array.from({length: 10}, (_, i) => `pg70_audio${i+1}e.mp3`),
  ...Array.from({length: 10}, (_, i) => `pg70_audio${i+1}p.mp3`),
  'pg96_audio1e.mp3', 'pg96_audio1p.mp3', 'pg96_audio11e.mp3', 'pg96_audio11p.mp3',
  ...Array.from({length: 9}, (_, i) => `pg96_audio${i+2}.mp3`),
  ...Array.from({length: 4}, (_, i) => `pg96_audio${i+12}.mp3`),
  ...Array.from({length: 9}, (_, i) => `pg96_audio${i+2}p.mp3`),
  ...Array.from({length: 4}, (_, i) => `pg96_audio${i+12}p.mp3`),
  'pg97_audio1e.mp3', 'pg97_audio1p.mp3',
  ...Array.from({length: 12}, (_, i) => `pg97_audio${i+2}.mp3`),
  ...Array.from({length: 12}, (_, i) => `pg97_audio${i+2}p.mp3`)
];


function cleanup(dir, keepList) {
  if (!fs.existsSync(dir)) return {kept:0, removed:0};
  const files = fs.readdirSync(dir);
  let kept = 0;
  let removed = 0;
  for (const f of files) {
    if (fs.statSync(path.join(dir, f)).isDirectory()) continue;
    if (keepList.includes(f)) {
      kept++;
    } else {
      fs.unlinkSync(path.join(dir, f));
      removed++;
    }
  }
  return {kept, removed};
}

const pagesResult = cleanup(path.join(__dirname, 'src/pages'), [...keptPages, ...keptCSS]);
const imagesResult = cleanup(path.join(__dirname, 'src/assets/images'), keptImages);
const iconsResult = cleanup(path.join(__dirname, 'src/assets/icons'), keptIcons);
const audiosResult = cleanup(path.join(__dirname, 'src/assets/audios'), keptAudios);

console.log(JSON.stringify({
  pages: pagesResult,
  images: imagesResult,
  icons: iconsResult,
  audios: audiosResult
}, null, 2));
