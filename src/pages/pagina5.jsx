import React, { useState, useRef } from 'react';

import styles from './pagina5.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png'

import globalGrammar from '../assets/audios/global_grammar.mp3';
import globalSimplePresent from '../assets/audios/global_simple_present.mp3';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg5Audio1 from '../assets/audios/pg5_audio1.mp3';
import pg5Audio2 from '../assets/audios/pg5_audio2.mp3';
import pg5Audio3 from '../assets/audios/pg5_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg5_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg5_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg5_trad3.mp3';

const Pagina5 = () => {
  const [inputValues, setInputValues] = useState(
    Array(6).fill(Array(6).fill(''))
  );
  const currentAudioRef = useRef(null);

  const playAudio = (audioFile) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    const audio = new Audio(audioFile);
    currentAudioRef.current = audio;
    audio.play();
  };

  const handleInputChange = (rowIndex, colIndex, e) => {
    const newValue = e.target.value;
    const updatedValues = inputValues.map((row, i) =>
      row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
    );
    setInputValues(updatedValues);
  };

  return (
    <div className={styles["page5"]}>
      <div className={styles["page5__container"]}>
        <header className={styles["page5__header"]}>
          <h1 className={styles["page5__header-title"]}>
            Grammar
            <img
              src={eng_audio_icon}
              alt="English Audio"
              className={styles["page5__icon"]}
              onClick={() => playAudio(globalGrammar)}
            />
          </h1>
          <h2
            className={styles["page5__header-subtitle"]}
            style={{ color: "black" }}
          >
            Simple Present (Presente Simples)
            <img
              src={eng_audio_icon}
              alt="English Audio"
              className={styles["page5__icon"]}
              onClick={() => playAudio(globalSimplePresent)}
            />
          </h2>
          <h3 className={styles["page5__header-description"]}>
            Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
            
          </h3>
        </header>

        <main className={styles["page5__main"]}>
          <div>
            <div
              className={styles["page5__table-header"]}
              onClick={() => playAudio(afirmativaAudio)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={white_play_icon}
                alt="White Icon"
                className={styles["page5__icon-left"]}
              />
              AFFIRMATIVE
            </div>

            <table className={styles["page5__table"]}>
              <colgroup>
                <col className={styles["page5__table-subject"]} />
                <col className={styles["page5__table-auxiliary"]} />
                <col className={styles["page5__table-adverb"]} />
                <col className={styles["page5__table-verb"]} />
                <col className={styles["page5__table-complement"]} />
                <col className={styles["page5__table-translation"]} />
              </colgroup>
              <thead>
                <tr>
                  <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>
                    Subject
                  </th>
                  <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                    Auxiliary <br /> Verb
                  </th>
                  <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: "pointer" }}>
                    Adverb
                  </th>
                  <th onClick={() => playAudio(verboAudio)} style={{ cursor: "pointer" }}>
                    Verb(s)
                  </th>
                  <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: "pointer" }}>
                    Object <br /> Complement
                  </th>
                  <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: "pointer" }}>
                    Translation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles["page5__table-subject"]} style={{ textAlign: 'center' }}>I</td>
                  <td className={styles["page5__table-auxiliary"]} style={{ textAlign: 'center' }}>am</td>
                  <td className={styles["page5__table-adverb"]}></td>
                  <td className={styles["page5__table-verb"]}></td>
                  <td className={styles["page5__table-complement"]}>
                    Bryan Costa{' '}
                    <img
                      src={eng_audio_icon}
                      alt="Play English sentence"
                      className={styles["page5__icon"]}
                      onClick={() => playAudio(pg5Audio1)}
                    />
                  </td>
                  <td className={styles["page5__table-translation"]}>
                    ( Eu ) sou Bryan Costa{' '}
                    <img
                      src={ptbr_audio_icon}
                      alt="Reproduzir tradução em português"
                      className={styles["page5__icon"]}
                      onClick={() => playAudio(traducaoAudio1)}
                    />
                  </td>
                </tr>

                <tr>
                  <td className={styles["page5__table-subject"]} style={{ textAlign: 'center' }}>I</td>
                  <td className={styles["page5__table-auxiliary"]} style={{ textAlign: 'center' }}>am</td>
                  <td className={styles["page5__table-adverb"]}></td>
                  <td className={styles["page5__table-verb"]}></td>
                  <td className={styles["page5__table-complement"]}>
                    at work{' '}
                    <img
                      src={eng_audio_icon}
                      alt="Play English sentence"
                      className={styles["page5__icon"]}
                      onClick={() => playAudio(pg5Audio2)}
                    />
                  </td>
                  <td className={styles["page5__table-translation"]}>
                    ( Eu ) estou no trabalho{' '}
                    <img
                      src={ptbr_audio_icon}
                      alt="Reproduzir tradução em português"
                      className={styles["page5__icon"]}
                      onClick={() => playAudio(traducaoAudio2)}
                    />
                  </td>
                </tr>

                <tr>
                  <td className={styles["page5__table-subject"]} style={{ textAlign: 'center' }}>I</td>
                  <td className={styles["page5__table-auxiliary"]} style={{ textAlign: 'center' }}>am</td>
                  <td className={styles["page5__table-adverb"]}></td>
                  <td className={styles["page5__table-verb"]}></td>
                  <td className={styles["page5__table-complement"]}>
                    18 years old{' '}
                    <img
                      src={eng_audio_icon}
                      alt="Play English sentence"
                      className={styles["page5__icon"]}
                      onClick={() => playAudio(pg5Audio3)}
                    />
                  </td>
                  <td className={styles["page5__table-translation"]}>
                    ( Eu ) tenho 18 anos de idade{' '}
                    <img
                      src={ptbr_audio_icon}
                      alt="Reproduzir tradução em português"
                      className={styles["page5__icon"]}
                      onClick={() => playAudio(traducaoAudio3)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <aside className={styles["page5__aside"]}>
              <div className={styles["page5__aside-notes1"]}>
                <p>Observação:</p>
              </div>
              <div className={styles["page5__aside-notes2"]}>
                <p>
                  Caso o conteúdo digitado nos campos da tabela não seja exibido corretamente, pressione a tecla seta para cima (↑) ou para baixo (↓) para restaurar a visualização.
                </p>
              </div>
            </aside>

            <table className={styles["page5__table"]}>
              <colgroup>
                <col className={styles["page5__table-subject"]} />
                <col className={styles["page5__table-auxiliary"]} />
                <col className={styles["page5__table-adverb"]} />
                <col className={styles["page5__table-verb"]} />
                <col className={styles["page5__table-complement"]} />
                <col className={styles["page5__table-translation"]} />
              </colgroup>
              <thead>
                <tr>
                  <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>
                    Subject
                  </th>
                  <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                    Auxiliary <br /> Verb
                  </th>
                  <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: "pointer" }}>
                    Adverb
                  </th>
                  <th onClick={() => playAudio(verboAudio)} style={{ cursor: "pointer" }}>
                    Verb(s)
                  </th>
                  <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: "pointer" }}>
                    Object <br /> Complement
                  </th>
                  <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: "pointer" }}>
                    Translation
                  </th>
                </tr>
              </thead>
              <tbody>
                {inputValues.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((value, colIndex) => (
                      <td key={colIndex}>
                        <textarea
                          id={`input-${rowIndex}-${colIndex}`}
                          className={styles["page5__table-input"]}
                          value={value}
                          rows="1"
                          onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                          style={{
                            resize: 'none',
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word'
                          }}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pagina5;
