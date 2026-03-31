import React, { useState, useEffect } from 'react';

import styles from './pagina70.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina70_imagem1 from '../assets/images/pagina70_imagem1.webp';
import pagina70_imagem2 from '../assets/images/pagina70_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg70_audio1e from "../assets/audios/pg70_audio1e.mp3";
import pg70_audio1p from "../assets/audios/pg70_audio1p.mp3";
import pg70_audio2e from "../assets/audios/pg70_audio2e.mp3";
import pg70_audio2p from "../assets/audios/pg70_audio2p.mp3";
import pg70_audio3e from "../assets/audios/pg70_audio3e.mp3";
import pg70_audio3p from "../assets/audios/pg70_audio3p.mp3";
import pg70_audio4e from "../assets/audios/pg70_audio4e.mp3";
import pg70_audio4p from "../assets/audios/pg70_audio4p.mp3";
import pg70_audio5e from "../assets/audios/pg70_audio5e.mp3";
import pg70_audio5p from "../assets/audios/pg70_audio5p.mp3";
import pg70_audio6e from "../assets/audios/pg70_audio6e.mp3";
import pg70_audio6p from "../assets/audios/pg70_audio6p.mp3";
import pg70_audio7e from "../assets/audios/pg70_audio7e.mp3";
import pg70_audio7p from "../assets/audios/pg70_audio7p.mp3";
import pg70_audio8e from "../assets/audios/pg70_audio8e.mp3";
import pg70_audio8p from "../assets/audios/pg70_audio8p.mp3";
import pg70_audio9e from "../assets/audios/pg70_audio9e.mp3";
import pg70_audio9p from "../assets/audios/pg70_audio9p.mp3";
import pg70_audio10e from "../assets/audios/pg70_audio10e.mp3";
import pg70_audio10p from "../assets/audios/pg70_audio10p.mp3";

const pagina70 = () => {
  const [respostas, setRespostas] = useState({});
  const [frasesEmbaralhadas, setFrasesEmbaralhadas] = useState({});
  const [palavrasClicadas, setPalavrasClicadas] = useState({});
  const [resultados, setResultados] = useState([]);
  const [showAnswersKey, setShowAnswersKey] = useState(false);

  const audioMap = {
    global_learning_le_e, global_learning_le_p,
    pg70_audio1e, pg70_audio1p,
    pg70_audio2e, pg70_audio2p,
    pg70_audio3e, pg70_audio3p,
    pg70_audio4e, pg70_audio4p,
    pg70_audio5e, pg70_audio5p,
    pg70_audio6e, pg70_audio6p,
    pg70_audio7e, pg70_audio7p,
    pg70_audio8e, pg70_audio8p,
    pg70_audio9e, pg70_audio9p,
    pg70_audio10e, pg70_audio10p,
  };

  const respostasCorretas = [
    ['She', 'is', 'a teacher'],
    ['They', 'are', 'playing', 'soccer'],
    ['The sun', 'rises', 'in the morning'],
    ['I', 'enjoy', 'reading', 'books'],
    ['The dog', 'is', 'very', 'friendly'],
    ['He', 'is', 'an engineer'],
    ['I', 'walk', 'to school'],
    ['She', 'is', 'always', 'late'],
    ['The clock', 'is', 'on the wall'],
    ['We', 'enjoy', 'watching', 'movies']
  ];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const novasFrasesEmbaralhadas = {};
    respostasCorretas.forEach((frase, fraseIndex) => {
      novasFrasesEmbaralhadas[fraseIndex] = shuffleArray(frase);
    });
    setFrasesEmbaralhadas(novasFrasesEmbaralhadas);
  }, []);

  const handleWordClick = (fraseIndex, word) => {
    setRespostas((prev) => {
      const palavrasAtuais = prev[fraseIndex] || [];
      const novaPalavra =
        palavrasAtuais.length === 0
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word.charAt(0).toLowerCase() + word.slice(1);

      if (palavrasAtuais.includes(word)) return prev;

      return {
        ...prev,
        [fraseIndex]: [...palavrasAtuais, novaPalavra],
      };
    });

    setPalavrasClicadas((prev) => ({
      ...prev,
      [`${fraseIndex}-${word.toLowerCase()}`]: true,
    }));
  };

  const handleChipClick = (fraseIndex, word) => {
    setRespostas((prev) => {
      const palavrasAtuais = prev[fraseIndex] || [];
      return {
        ...prev,
        [fraseIndex]: palavrasAtuais.filter((palavra) => palavra !== word),
      };
    });

    setPalavrasClicadas((prev) => {
      const updated = { ...prev };
      delete updated[`${fraseIndex}-${word.toLowerCase()}`];
      return updated;
    });
  };

  const verificarRespostas = () => {
    const novosResultados = respostasCorretas.map((resposta, index) => {
      const respostaUsuario = respostas[index] || [];
      const respostaUsuarioNormalizada = respostaUsuario.map((word) => word.trim().toLowerCase());
      const respostaCorretaNormalizada = resposta.map((word) => word.trim().toLowerCase());
      return JSON.stringify(respostaCorretaNormalizada) === JSON.stringify(respostaUsuarioNormalizada);
    });
    setResultados(novosResultados);
  };

  const handleReset = () => {
    setRespostas({});
    setPalavrasClicadas({});
    setResultados([]);
    const novasFrasesEmbaralhadas = {};
    respostasCorretas.forEach((frase, fraseIndex) => {
      novasFrasesEmbaralhadas[fraseIndex] = shuffleArray(frase);
    });
    setFrasesEmbaralhadas(novasFrasesEmbaralhadas);
    setShowAnswersKey(false);
  };

  const playAudio = (audioKey) => {
    const audioSrc = audioMap[audioKey];
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    } else {
      console.warn(`Áudio não encontrado para a chave: ${audioKey}`);
    }
  };

  return (
    <div className={styles["page70__container"]}>
      <header className={styles["page70__header"]}>
        <h1 className={styles["page70__header--h1"]}>
          Learning Language Exercises
          <img
            src={eng_audio_icon}
            alt="English audio"
            className={styles["page70__audio-icon"]}
            onClick={() => playAudio("global_learning_le_e")}
          />
          <img
            src={ptbr_audio_icon}
            alt="Portuguese audio"
            className={styles["page70__audio-icon"]}
            onClick={() => playAudio("global_learning_le_p")}
          />
        </h1>
        <p><span className={styles["page70__red-text"]}>Click</span> the words to form the correct sentence.</p>
        <p><span className={styles["page70__red-text"]}>Clique</span> nas palavras para formar a frase correta.</p>
      </header>

      <div className={styles["page70__tabela-afirmativa-container"]}>
        <div className={styles["page70__table-header-afirmativa"]}>AFIRMATIVA</div>
        <table className={styles["page70__styled-table-afirmativa"]}>
          <thead className={styles["page70__thead"]}>
            <tr className={styles["page70__celula-table"]}>
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

      <div className={styles["page70__main-aside-container"]}>
        <main className={styles["page70__main-container"]}>
          <div className={styles["page70__frases"]}>
            {respostasCorretas.map((_, fraseIndex) => {
              const enKey = `pg70_audio${fraseIndex + 1}e`;
              const ptKey = `pg70_audio${fraseIndex + 1}p`;

              return (
                <div key={fraseIndex} className={styles["page70__frase-container"]}>
                  <div className={styles["page70__frase"]}>
                    {frasesEmbaralhadas[fraseIndex] &&
                      frasesEmbaralhadas[fraseIndex].map((word, wordIndex) => (
                        <div
                          key={wordIndex}
                          className={`${styles["page70__word"]} ${palavrasClicadas[`${fraseIndex}-${word.toLowerCase()}`] ? styles["page70__disabled"] : ''}`}
                          onClick={() => handleWordClick(fraseIndex, word)}
                        >
                          {word}
                        </div>
                      ))}
                  </div>

                  <div className={styles["page70__input-frase"]}>
                    {respostas[fraseIndex] &&
                      respostas[fraseIndex].map((palavra, index) => (
                        <div
                          key={index}
                          className={styles["page70__chip"]}
                          onClick={() => handleChipClick(fraseIndex, palavra)}
                        >
                          {index === 0
                            ? palavra.charAt(0).toUpperCase() + palavra.slice(1)
                            : palavra}
                        </div>
                      ))}

                    {resultados.length > 0 &&
                      (resultados[fraseIndex] ? (
                        <img src={correct_icon} alt="Correto" className={styles["page70__check-icon"]} />
                      ) : (
                        <img src={wrong_icon} alt="Errado" className={styles["page70__check-icon"]} />
                      ))}

                    <img
                      src={eng_audio_icon}
                      alt={`Play sentence ${fraseIndex + 1} in English`}
                      className={styles["page70__eng-audio-icon"]}
                      onClick={() => playAudio(enKey)}
                    />
                    <img
                      src={ptbr_audio_icon}
                      alt={`Play sentence ${fraseIndex + 1} in Portuguese`}
                      className={styles["page70__ptbr-audio-icon"]}
                      onClick={() => playAudio(ptKey)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles["page70__buttons-container"]}>
            <button className={styles["page70__check-button"]} onClick={verificarRespostas}>
              Check
            </button>
            <button className={styles["page70__reset-button"]} onClick={handleReset}>
              Reset
            </button>
            <button
              className={styles["page70__answersKey-button"]}
              onClick={() => setShowAnswersKey(v => !v)}
              aria-expanded={showAnswersKey}
              aria-controls="answers-key-box"
            >
              Answer Key
            </button>
          </div>

          {showAnswersKey && (
            <div
              id="answers-key-box"
              className={styles["page70__answersKey-box"]}
              role="region"
              aria-label="Gabarito completo"
            >
              {respostasCorretas.map((arr, i) => {
                const texto = `${arr.join(' ')}.`;
                return (
                  <div key={i} className={styles["page70__answersKey-item"]}>
                    <span className={styles["page70__answersKey-num"]}>{i + 1}.</span>
                    <span className={styles["page70__answersKey-text"]}>{texto}</span>
                  </div>
                );
              })}
            </div>
          )}
        </main>

        <aside className={styles["page70__aside-container"]}>
          <div className={styles["page70__imagens-container"]}>
            <img src={pagina70_imagem1} alt="Imagem 1" className={styles["page70__imagem--1"]} />
            <img src={pagina70_imagem2} alt="Imagem 2" className={styles["page70__imagem--2"]} />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default pagina70;



