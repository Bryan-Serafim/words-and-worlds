import React, { useState } from 'react';

import styles from './pagina97.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import Pagina97_imagem1 from '../assets/images/pagina97_imagem1.webp';
import Pagina97_imagem2 from '../assets/images/pagina97_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg97_audio1e from '../assets/audios/pg97_audio1e.mp3';
import pg97_audio1p from '../assets/audios/pg97_audio1p.mp3';
import pg97_audio2 from '../assets/audios/pg97_audio2.mp3';
import pg97_audio3 from '../assets/audios/pg97_audio3.mp3';
import pg97_audio4 from '../assets/audios/pg97_audio4.mp3';
import pg97_audio5 from '../assets/audios/pg97_audio5.mp3';
import pg97_audio6 from '../assets/audios/pg97_audio6.mp3';
import pg97_audio7 from '../assets/audios/pg97_audio7.mp3';
import pg97_audio8 from '../assets/audios/pg97_audio8.mp3';
import pg97_audio9 from '../assets/audios/pg97_audio9.mp3';
import pg97_audio10 from '../assets/audios/pg97_audio10.mp3';
import pg97_audio11 from '../assets/audios/pg97_audio11.mp3';
import pg97_audio12 from '../assets/audios/pg97_audio12.mp3';
import pg97_audio13 from '../assets/audios/pg97_audio13.mp3';
import pg97_audio2p from '../assets/audios/pg97_audio2p.mp3';
import pg97_audio3p from '../assets/audios/pg97_audio3p.mp3';
import pg97_audio4p from '../assets/audios/pg97_audio4p.mp3';
import pg97_audio5p from '../assets/audios/pg97_audio5p.mp3';
import pg97_audio6p from '../assets/audios/pg97_audio6p.mp3';
import pg97_audio7p from '../assets/audios/pg97_audio7p.mp3';
import pg97_audio8p from '../assets/audios/pg97_audio8p.mp3';
import pg97_audio9p from '../assets/audios/pg97_audio9p.mp3';
import pg97_audio10p from '../assets/audios/pg97_audio10p.mp3';
import pg97_audio11p from '../assets/audios/pg97_audio11p.mp3';
import pg97_audio12p from '../assets/audios/pg97_audio12p.mp3';
import pg97_audio13p from '../assets/audios/pg97_audio13p.mp3';

const audioMap = {
  global_learning_le_e,
  global_learning_le_p,
  pg97_audio1e,
  pg97_audio1p,
  pg97_audio2,
  pg97_audio3,
  pg97_audio4,
  pg97_audio5,
  pg97_audio6,
  pg97_audio7,
  pg97_audio8,
  pg97_audio9,
  pg97_audio10,
  pg97_audio11,
  pg97_audio12,
  pg97_audio13,
  pg97_audio2p,
  pg97_audio3p,
  pg97_audio4p,
  pg97_audio5p,
  pg97_audio6p,
  pg97_audio7p,
  pg97_audio8p,
  pg97_audio9p,
  pg97_audio10p,
  pg97_audio11p,
  pg97_audio12p,
  pg97_audio13p,
};


const Pagina97 = () => {
  // 5 (Q1) + 3 (Q2) = 8 entradas simples | 4 (Q3) = 4 pares [aux, verbo] → total 12
  const initialInputs = () =>
    Array.from({ length: 12 }, (_, i) => (i >= 8 ? ["", ""] : ""));

  const [inputValues, setInputValues] = useState(initialInputs());
  const [results, setResults] = useState(Array(12).fill(null));
  const [showAnswers, setShowAnswers] = useState(false);

  // use seus imports reais aqui
  const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    pg97_audio1e,
    pg97_audio1p,
    pg97_audio2, pg97_audio2p,
    pg97_audio3, pg97_audio3p,
    pg97_audio4, pg97_audio4p,
    pg97_audio5, pg97_audio5p,
    pg97_audio6, pg97_audio6p,
    pg97_audio7, pg97_audio7p,
    pg97_audio8, pg97_audio8p,
    pg97_audio9, pg97_audio9p,
    pg97_audio10, pg97_audio10p,
    pg97_audio11, pg97_audio11p,
    pg97_audio12, pg97_audio12p,
    pg97_audio13, pg97_audio13p,
  };

  const correctAnswers = [
    // Q1 (5)
    "works", "sleeps", "reads", "watch", "arrives",
    // Q2 (3)
    "boils", "has", "need",
    // Q3 (4) → pares [auxiliar, verbo]
    ["Does", "work"],
    ["Do", "play"],
    ["Does", "drink"],
    ["Do", "enjoy"],
  ];

  const playAudio = (key) => {
    const src = audioMap[key];
    if (!src) return console.warn(`Áudio não encontrado: ${key}`);
    new Audio(src).play().catch(() => { });
  };

  const handleInputChange = (value, index, subIndex = null) => {
    setInputValues((prev) => {
      const next = [...prev];
      if (subIndex == null) {
        next[index] = value;
      } else {
        const pair = Array.isArray(next[index]) ? [...next[index]] : ["", ""];
        pair[subIndex] = value;
        next[index] = pair;
      }
      return next;
    });
  };

  const handleCheckClick = () => {
    const newResults = inputValues.map((val, i) => {
      const answer = correctAnswers[i];
      if (Array.isArray(answer)) {
        // comparar dois campos (aux + verbo), case-insensitive
        if (!Array.isArray(val)) return false;
        const user = val.map((v) => (v || "").trim().toLowerCase());
        const corr = answer.map((v) => v.toLowerCase());
        return user.length === 2 && user[0] === corr[0] && user[1] === corr[1];
      } else {
        return (val || "").trim().toLowerCase() === answer.toLowerCase();
      }
    });
    setResults(newResults);
  };

  const handleReset = () => {
    setInputValues(initialInputs());
    setResults(Array(12).fill(null));
    setShowAnswers(false);
  };

  const answersKeyItems = [
    "He works at a restaurant as a waiter.",
    "The cat sleeps on the sofa all afternoon.",
    "She reads a novel every evening before bed.",
    "We watch our favorite TV show every Friday night.",
    "The train arrives at the station at 9:00 AM sharp.",
    "Water boils at 100 degrees Celsius.",
    "English has many irregular verbs.",
    "Plants need sunlight to grow.",
    "Does she work at the hospital?",
    "Do they play soccer on weekends?",
    "Does he drink coffee in the morning?",
    "Do you enjoy hiking in the mountains?",
  ];

  return (
    <div className={styles["page97__container"]}>
      <header className={styles["page97__header"]}>
        <h1 className={styles["page97__h1"]}>
          Learning Language Exercises
          <img
            src={eng_audio_icon}
            alt="English audio"
            className={styles["page97__header-icon"]}
            onClick={() => playAudio("global_learning_le_e")}
          />
          <img
            src={ptbr_audio_icon}
            alt="Portuguese audio"
            className={styles["page97__header-icon"]}
            onClick={() => playAudio("global_learning_le_p")}
          />
        </h1>
      </header>

      <main className={styles["page97__main"]}>
        {/* Tabela Afirmativa */}
        <div className={styles["page97__tabela-afirmativa-container"]}>
          <div className={styles["page97__table-header-afirmativa"]}>AFIRMATIVA</div>
          <table className={styles["page97__styled-table-afirmativa"]}>
            <thead className={styles["page97__thead"]}>
              <tr className={styles["page97__table-row"]}>
                <th>Introdução</th>
                <th>Sujeito</th>
                <th>Verbo <br /> Auxiliar</th>
                <th>Advérbio</th>
                <th>Verbo(s)</th>
                <th>Objeto <br /> Complemento</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Bloco 1 (5) */}
        <div className={styles["page97__primeiras-questoes"]}>
          <div className={styles["page97__container-questoes"]}>
            <div className={styles["page97__questions-1"]}>
              <p className={styles["page97__a-titulo-question"]}>
                Complete the sentences with the correct form of the verbs in parentheses in the Simple Present Form:
                <img
                  src={eng_audio_icon}
                  alt="English audio"
                  className={styles["page97__header-icon"]}
                  onClick={() => playAudio("pg97_audio1e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Portuguese audio"
                  className={styles["page97__header-icon"]}
                  onClick={() => playAudio("pg97_audio1p")}
                />
              </p>
              <p className={styles["page97__numero-question"]}>1.</p>

              {[
                "He ____  (work) at a restaurant as a waiter.",
                "The cat ____ (sleep) on the sofa all afternoon.",
                "She ____ (read) a novel every evening before bed.",
                "We ____ (watch) our favorite TV show every Friday night.",
                "The train ____ (arrive) at the station at 9:00 AM sharp",
              ].map((q, idx) => {
                const [pre, pos] = q.split("____");
                const enKey = ["pg97_audio2", "pg97_audio3", "pg97_audio4", "pg97_audio5", "pg97_audio6"][idx];
                const ptKey = ["pg97_audio2p", "pg97_audio3p", "pg97_audio4p", "pg97_audio5p", "pg97_audio6p"][idx];

                return (
                  <div key={idx} className={styles["page97__question"]}>
                    <span><em><strong>{String.fromCharCode(97 + idx)}.</strong> {pre}</em></span>
                    <div className={styles["page97__input-container"]}>
                      <input
                        type="text"
                        value={inputValues[idx]}
                        onChange={(e) => handleInputChange(e.target.value, idx)}
                        className={styles["page97__input-box"]}
                      />
                    </div>
                    <span><em>{pos}</em></span>
                    <div className={styles["page97__icons-container"]}>
                      {results[idx] !== null && (
                        <img
                          src={results[idx] ? correct_icon : wrong_icon}
                          alt={results[idx] ? "Correct" : "Incorrect"}
                          className={styles["page97__checkmark-image"]}
                        />
                      )}
                      <img
                        src={eng_audio_icon}
                        alt="Audio English"
                        className={styles["page97__additional-icon"]}
                        onClick={() => playAudio(enKey)}
                      />
                      <img
                        src={ptbr_audio_icon}
                        alt="Portuguese Audio"
                        className={styles["page97__additional-icon"]}
                        onClick={() => playAudio(ptKey)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles["page97__container-imagem"]}>
              <img className={styles["page97__imagem"]} src={Pagina97_imagem1} alt="" />
            </div>
          </div>

          {/* Bloco 2 (3) */}
          <div className={styles["page97__container-questoes"]}>
            <div className={styles["page97__questions-1"]}>
              <p className={styles["page97__numero-question"]}>2.</p>

              {[
                "Water ____ (boil) at 100 degrees Celsius.",
                "English ____ (have) many irregular verbs.",
                "Plants ____ (need) sunlight to grow.",
              ].map((q, idx) => {
                const baseIndex = 5; // começa na posição 5 do estado
                const [pre, pos] = q.split("____");
                const enKey = ["pg97_audio7", "pg97_audio8", "pg97_audio9"][idx];
                const ptKey = ["pg97_audio7p", "pg97_audio8p", "pg97_audio9p"][idx];

                return (
                  <div key={idx} className={styles["page97__question"]}>
                    <span><em><strong>{String.fromCharCode(97 + idx)}.</strong> {pre}</em></span>
                    <div className={styles["page97__input-container"]}>
                      <input
                        type="text"
                        value={inputValues[baseIndex + idx]}
                        onChange={(e) => handleInputChange(e.target.value, baseIndex + idx)}
                        className={styles["page97__input-box"]}
                      />
                    </div>
                    <span><em>{pos}</em></span>
                    <div className={styles["page97__icons-container"]}>
                      {results[baseIndex + idx] !== null && (
                        <img
                          src={results[baseIndex + idx] ? correct_icon : wrong_icon}
                          alt={results[baseIndex + idx] ? "Correct" : "Incorrect"}
                          className={styles["page97__checkmark-image"]}
                        />
                      )}
                      <img
                        src={eng_audio_icon}
                        alt="Audio English"
                        className={styles["page97__additional-icon"]}
                        onClick={() => playAudio(enKey)}
                      />
                      <img
                        src={ptbr_audio_icon}
                        alt="Portuguese Audio"
                        className={styles["page97__additional-icon"]}
                        onClick={() => playAudio(ptKey)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles["page97__container-imagem"]}>
              <img className={styles["page97__imagem"]} src={Pagina97_imagem2} alt="" />
            </div>
          </div>
        </div>

        {/* Tabela Interrogativa */}
        <div className={styles["page97__table-interrogative-container"]}>
          <div className={styles["page97__table-header-interrogative"]}>INTERROGATIVA</div>
          <table className={styles["page97__styled-table-interrogative"]}>
            <thead className={styles["page97__thead"]}>
              <tr className={styles["page97__table-row"]}>
                <th>Palavras <br /> Interrogativas</th>
                <th>Verbo <br /> Auxiliar</th>
                <th>Sujeito</th>
                <th><span className={styles["highlight"]}>Not</span> <br />Advérbio</th>
                <th>Verbo(s)</th>
                <th>Objeto <br /> Complemento</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Bloco 3 (4 perguntas com 2 blanks) */}
        <div className={styles["page97__container-questoes"]}>
          <div className={styles["page97__questions-2"]}>
            <p className={styles["page97__numero-question"]}>3.</p>
            {[
              "____ she ____ (work) at the hospital?",
              "____ they ____ (play) soccer on weekends?",
              "____ he ____ (drink) coffee in the morning?",
              "____ you ____ (enjoy) hiking in the mountains?",
            ].map((q, idx) => {
              const letter = String.fromCharCode(97 + idx);
              const enKey = ["pg97_audio10", "pg97_audio11", "pg97_audio12", "pg97_audio13"][idx];
              const ptKey = ["pg97_audio10p", "pg97_audio11p", "pg97_audio12p", "pg97_audio13p"][idx];
              const segments = q.split("____"); // ["", " she ", " (work) at the hospital?"]

              return (
                <div key={idx} className={styles["page97__question"]}>
                  <span><em><strong>{letter}.</strong></em></span>

                  {/* Primeiro blank */}
                  <span className={styles["page97__spam-input"]}>
                    <input
                      type="text"
                      value={Array.isArray(inputValues[8 + idx]) ? inputValues[8 + idx][0] : ""}
                      onChange={(e) => handleInputChange(e.target.value, 8 + idx, 0)}
                      className={styles["page97__input-box"]}
                    />
                  </span>

                  {/* Texto entre os blanks */}
                  <span>{segments[1]}</span>

                  {/* Segundo blank */}
                  <span className={styles["page97__spam-input"]}>
                    <input
                      type="text"
                      value={Array.isArray(inputValues[8 + idx]) ? inputValues[8 + idx][1] : ""}
                      onChange={(e) => handleInputChange(e.target.value, 8 + idx, 1)}
                      className={styles["page97__input-box"]}
                    />
                  </span>

                  {/* Resto da frase */}
                  <span>{segments[2]}</span>

                  <div className={styles["page97__icons-container"]}>
                    {results[8 + idx] !== null && (
                      <img
                        src={results[8 + idx] ? correct_icon : wrong_icon}
                        alt={results[8 + idx] ? "Correct" : "Incorrect"}
                        className={styles["page97__checkmark-image"]}
                      />
                    )}
                    <img
                      src={eng_audio_icon}
                      alt="Audio Icon"
                      className={styles["page97__additional-icon"]}
                      onClick={() => playAudio(enKey)}
                    />
                    <img
                      src={ptbr_audio_icon}
                      alt="Portuguese Audio"
                      className={styles["page97__additional-icon"]}
                      onClick={() => playAudio(ptKey)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ações: Check → Reset → Answer Key */}
        <div className={styles["page97__actions"]}>
          <button className={styles["page97__check-button"]} onClick={handleCheckClick}>
            <em>Check</em>
          </button>

          <button className={styles["page97__reset--button"]} onClick={handleReset}>
            Reset
          </button>

          <button
            className={styles["page97__answersKey--button"]}
            aria-pressed={showAnswers ? "true" : "false"}
            onClick={() => setShowAnswers((s) => !s)}
          >
            Answer Key
          </button>
        </div>

        {showAnswers && (
          <div className={styles["page97__answersKey-box"]}>
            {answersKeyItems.map((txt, i) => (
              <div key={i} className={styles["page97__answersKey-item"]}>
                <div className={styles["page97__answersKey-num"]}>
                  {String.fromCharCode(97 + i)}.
                </div>
                <div className={styles["page97__answersKey-text"]}>{txt}</div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Pagina97;

