// scripts/generate-pages-735-784.js
// Projeto em ESM (type: module)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Necessário no ESM para simular __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONFIGURAÇÃO
const START = 735;
const END = 784;

// Pasta src/pages
const OUTPUT_DIR = path.join(__dirname, "..", "src", "pages");

if (!fs.existsSync(OUTPUT_DIR)) {
  console.error("❌ Pasta não encontrada:", OUTPUT_DIR);
  process.exit(1);
}

function jsxTemplate(pageNum) {
  return `import React from "react";
import styles from "./pagina${pageNum}.module.css";

const pagina${pageNum} = () => {
    return (
        <div>
            <div className={styles.pg91Container}>
                <header className={styles.pg91Header}>
                    <h1 className={styles.pg91HeaderH1}>Grammar</h1>
                    <div>
                        <h2 className={styles.pg91HeaderH2}>Telling the time</h2>
                        <p>Dizendo as horas</p>
                    </div>
                </header>
                <main className={styles.pg91Main}>
                    <div></div>
                </main>
            </div>
        </div>
    );
};

export default pagina${pageNum};
`;
}

function cssTemplate(pageNum) {
  return `/* pagina${pageNum}.module.css */

.pg91Container {
  width: 100%;
  min-height: 100vh;
  padding: 24px;
  box-sizing: border-box;
}

.pg91Header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  margin-bottom: 20px;
}

.pg91HeaderH1 {
  margin: 0;
  font-size: 32px;
  font-weight: 800;
}

.pg91HeaderH2 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
}

.pg91Main {
  width: 100%;
  min-height: 300px;
}
`;
}

let created = 0;
let skipped = 0;

for (let n = START; n <= END; n++) {
  const jsxPath = path.join(OUTPUT_DIR, `pagina${n}.jsx`);
  const cssPath = path.join(OUTPUT_DIR, `pagina${n}.module.css`);

  if (!fs.existsSync(jsxPath)) {
    fs.writeFileSync(jsxPath, jsxTemplate(n), "utf8");
    console.log("✅ Criado:", `pagina${n}.jsx`);
    created++;
  } else {
    console.log("⏭️  Já existe:", `pagina${n}.jsx`);
    skipped++;
  }

  if (!fs.existsSync(cssPath)) {
    fs.writeFileSync(cssPath, cssTemplate(n), "utf8");
    console.log("✅ Criado:", `pagina${n}.module.css`);
    created++;
  } else {
    console.log("⏭️  Já existe:", `pagina${n}.module.css`);
    skipped++;
  }
}

console.log("\n🎉 Finalizado!");
console.log("Arquivos criados:", created);
console.log("Arquivos ignorados:", skipped);
