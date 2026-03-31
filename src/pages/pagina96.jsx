import React, { useState } from 'react';

import styles from './pagina96.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina96_imagem1 from '../assets/images/pagina96_imagem1.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg96_audio1e from '../assets/audios/pg96_audio1e.mp3';
import pg96_audio1p from '../assets/audios/pg96_audio1p.mp3';
import pg96_audio11e from '../assets/audios/pg96_audio11e.mp3';
import pg96_audio11p from '../assets/audios/pg96_audio11p.mp3';
import pg96_audio2 from '../assets/audios/pg96_audio2.mp3';
import pg96_audio3 from '../assets/audios/pg96_audio3.mp3';
import pg96_audio4 from '../assets/audios/pg96_audio4.mp3';
import pg96_audio5 from '../assets/audios/pg96_audio5.mp3';
import pg96_audio6 from '../assets/audios/pg96_audio6.mp3';
import pg96_audio7 from '../assets/audios/pg96_audio7.mp3';
import pg96_audio8 from '../assets/audios/pg96_audio8.mp3';
import pg96_audio9 from '../assets/audios/pg96_audio9.mp3';
import pg96_audio10 from '../assets/audios/pg96_audio10.mp3';
import pg96_audio12 from '../assets/audios/pg96_audio12.mp3';
import pg96_audio13 from '../assets/audios/pg96_audio13.mp3';
import pg96_audio14 from '../assets/audios/pg96_audio14.mp3';
import pg96_audio15 from '../assets/audios/pg96_audio15.mp3';
import pg96_audio2p from '../assets/audios/pg96_audio2p.mp3';
import pg96_audio3p from '../assets/audios/pg96_audio3p.mp3';
import pg96_audio4p from '../assets/audios/pg96_audio4p.mp3';
import pg96_audio5p from '../assets/audios/pg96_audio5p.mp3';
import pg96_audio6p from '../assets/audios/pg96_audio6p.mp3';
import pg96_audio7p from '../assets/audios/pg96_audio7p.mp3';
import pg96_audio8p from '../assets/audios/pg96_audio8p.mp3';
import pg96_audio9p from '../assets/audios/pg96_audio9p.mp3';
import pg96_audio10p from '../assets/audios/pg96_audio10p.mp3';
import pg96_audio12p from '../assets/audios/pg96_audio12p.mp3';
import pg96_audio13p from '../assets/audios/pg96_audio13p.mp3';
import pg96_audio14p from '../assets/audios/pg96_audio14p.mp3';
import pg96_audio15p from '../assets/audios/pg96_audio15p.mp3';

const Pagina96 = () => {
  const [inputValues, setInputValues] = useState({
    questions1: Array(10).fill(''),
    questions2: Array(8).fill(''),
    questions3: Array(4).fill('')
  });

  const [results, setResults] = useState({
    questions1: Array(5).fill(null),
    questions2: Array(4).fill(null),
    questions3: Array(4).fill(null)
  });

  const [showAnswers, setShowAnswers] = useState(false);

  const correctAnswers = {
    questions1: [
      ['does', 'go'],
      ['do', 'eat out'],
      ['does', 'read'],
      ['do', 'migrate'],
      ['do', 'visit']
    ],
    questions2: [
      ['does', 'wake up'],
      ['do', 'take'],
      ['does', 'eat breakfast'],
      ['do', 'check']
    ],
    questions3: [
      'When does she finish her homework?',
      'How often do they clean the house?',
      'What time does the shop open?',
      'Who cooks dinner for your family?'
    ]
  };

  const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    pg96_audio1e,
    pg96_audio1p,
    pg96_audio2,
    pg96_audio3,
    pg96_audio4,
    pg96_audio5,
    pg96_audio6,
    pg96_audio7,
    pg96_audio8,
    pg96_audio9,
    pg96_audio10,
    pg96_audio11e,
    pg96_audio11p,
    pg96_audio12,
    pg96_audio13,
    pg96_audio14,
    pg96_audio15,
    pg96_audio2p,
    pg96_audio3p,
    pg96_audio4p,
    pg96_audio5p,
    pg96_audio6p,
    pg96_audio7p,
    pg96_audio8p,
    pg96_audio9p,
    pg96_audio10p,
    pg96_audio12p,
    pg96_audio13p,
    pg96_audio14p,
    pg96_audio15p
  };

  const playAudio = (audioKey) => {
    if (audioMap[audioKey]) {
      const audio = new Audio(audioMap[audioKey]);
      audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
    } else {
      console.warn(`Áudio não encontrado para: ${audioKey}`);
    }
  };

  const handleCheckClick = () => {
    const newResults = {
      questions1: correctAnswers.questions1.map((correctPair, index) => {
        const userPair = [
          inputValues.questions1[index * 2]?.trim().toLowerCase(),
          inputValues.questions1[index * 2 + 1]?.trim().toLowerCase()
        ];
        return JSON.stringify(userPair) === JSON.stringify(correctPair) && userPair.every(val => val !== '')
          ? correct_icon
          : wrong_icon;
      }),
      questions2: correctAnswers.questions2.map((correctPair, index) => {
        const userPair = [
          inputValues.questions2[index * 2]?.trim().toLowerCase(),
          inputValues.questions2[index * 2 + 1]?.trim().toLowerCase()
        ];
        return JSON.stringify(userPair) === JSON.stringify(correctPair) && userPair.every(val => val !== '')
          ? correct_icon
          : wrong_icon;
      }),
      questions3: correctAnswers.questions3.map((correctAnswer, index) => {
        return inputValues.questions3[index].trim().toLowerCase() === correctAnswer.toLowerCase() &&
          inputValues.questions3[index].trim() !== ''
          ? correct_icon
          : wrong_icon;
      })
    };

    setResults(newResults);
  };

  const handleReset = () => {
    setInputValues({
      questions1: Array(10).fill(''),
      questions2: Array(8).fill(''),
      questions3: Array(4).fill('')
    });
    setResults({
      questions1: Array(5).fill(null),
      questions2: Array(4).fill(null),
      questions3: Array(4).fill(null)
    });
    setShowAnswers(false);
  };

  const handleInputChange = (value, index, questionSet) => {
    setInputValues(prevState => ({
      ...prevState,
      [questionSet]: prevState[questionSet].map((item, idx) =>
        idx === index ? value : item
      ),
    }));
  };

  // ------- Answer Key (texto) -------
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const answersKeyQ4 = [
    `${cap(correctAnswers.questions1[0][0])} she ${correctAnswers.questions1[0][1]} to the gym every day?`,
    `${cap(correctAnswers.questions1[1][0])} they ${correctAnswers.questions1[1][1]} often?`,
    `${cap(correctAnswers.questions1[2][0])} he ${correctAnswers.questions1[2][1]} newspapers regularly?`,
    `${cap(correctAnswers.questions1[3][0])} the birds ${correctAnswers.questions1[3][1]} in winter?`,
    `${cap(correctAnswers.questions1[4][0])} you ${correctAnswers.questions1[4][1]} your relatives yearly?`,
  ];

  const answersKeyQ5 = [
    `${cap(correctAnswers.questions2[0][0])} she ${correctAnswers.questions2[0][1]} early in the morning?`,
    `${cap(correctAnswers.questions2[1][0])} they ${correctAnswers.questions2[1][1]} the bus to work?`,
    `${cap(correctAnswers.questions2[2][0])} he ${correctAnswers.questions2[2][1]} before leaving?`,
    `${cap(correctAnswers.questions2[3][0])} you ${correctAnswers.questions2[3][1]} your emails first thing in the morning?`,
  ];

  const answersKeyQ6 = [...correctAnswers.questions3];

  const allAnswers = [
    ...answersKeyQ4.map((t, i) => ({ num: `4.${String.fromCharCode(97 + i)}`, text: t })),
    ...answersKeyQ5.map((t, i) => ({ num: `5.${String.fromCharCode(97 + i)}`, text: t })),
    ...answersKeyQ6.map((t, i) => ({ num: `6.${String.fromCharCode(97 + i)}`, text: t })),
  ];
  // -----------------------------------

  return (
    <div className={styles["page96__container"]}>
      <header className={styles["page96__header"]}>
        <h1 className={styles["page96__h1"]}>
          Learning Language Exercises
          <img
            src={eng_audio_icon}
            alt="English audio"
            className={styles["page96__header-icon"]}
            onClick={() => playAudio("global_learning_le_e")}
          />
          <img
            src={ptbr_audio_icon}
            alt="Portuguese audio"
            className={styles["page96__header-icon"]}
            onClick={() => playAudio("global_learning_le_p")}
          />
        </h1>
      </header>

      <main className={styles["page96__main"]}>
        {/* Questão 4 */}
        <div className={styles["page69__tabela-interrogativa-container"]}>
          <div className={styles["page69__table-header-interrogativa"]}>INTERROGATIVA</div>
          <table className={styles["page69__styled-table-interrogativa"]}>
            <thead className={styles["page69__thead"]}>
              <tr className={styles["page69__celula-table"]}>
                <th>Palavras <br /> Interrogativas</th>
                <th>Verbo <br /> Auxiliar</th>
                <th>Sujeito</th>
                <th><span className={styles["page69__highlight"]}>Not</span> <br />Advérbio</th>
                <th>Verbo(s)</th>
                <th>Objeto <br /> Complemento</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className={styles["page95__questions1"]}>
          <div className={styles["page95__question"]}>
            <span>
              <p>4. Make questions with the verbs in parentheses in the Simple Present Form.
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page96__header-icon"]}
                  onClick={() => playAudio("pg96_audio1e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page96__header-icon"]}
                  onClick={() => playAudio("pg96_audio1p")}
                />
              </p>
              <em><strong>a.</strong> <input type="text" value={inputValues.questions1[0]} onChange={(e) => handleInputChange(e.target.value, 0, 'questions1')} className={styles["page95__input-box-small"]} /> she <input type="text" value={inputValues.questions1[1]} onChange={(e) => handleInputChange(e.target.value, 1, 'questions1')} className={styles["page95__input-box-small"]} /> (go) to the gym every day?</em>
              {results.questions1[0] && <img src={results.questions1[0]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page95__audio-icon"]}
                onClick={() => playAudio("pg96_audio2")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page95__audio-icon-p"]}
                onClick={() => playAudio("pg96_audio2p")}
              />
            </span>
          </div>

          <div className={styles["page95__question"]}>
            <span>
              <em><strong>b.</strong> <input type="text" value={inputValues.questions1[2]} onChange={(e) => handleInputChange(e.target.value, 2, 'questions1')} className={styles["page95__input-box-small"]} /> they <input type="text" value={inputValues.questions1[3]} onChange={(e) => handleInputChange(e.target.value, 3, 'questions1')} className={styles["page95__input-box-small"]} /> (eat out) often?</em>
              {results.questions1[1] && <img src={results.questions1[1]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page95__audio-icon"]}
                onClick={() => playAudio("pg96_audio3")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page95__audio-icon-p"]}
                onClick={() => playAudio("pg96_audio3p")}
              />
            </span>
          </div>

          <div className={styles["page95__question"]}>
            <span>
              <em><strong>c.</strong> <input type="text" value={inputValues.questions1[4]} onChange={(e) => handleInputChange(e.target.value, 4, 'questions1')} className={styles["page95__input-box-small"]} /> he <input type="text" value={inputValues.questions1[5]} onChange={(e) => handleInputChange(e.target.value, 5, 'questions1')} className={styles["page95__input-box-small"]} /> (read) newspapers regularly?</em>
              {results.questions1[2] && <img src={results.questions1[2]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page95__audio-icon"]}
                onClick={() => playAudio("pg96_audio4")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page95__audio-icon-p"]}
                onClick={() => playAudio("pg96_audio4p")}
              />
            </span>
          </div>

          <div className={styles["page95__question"]}>
            <span>
              <em><strong>d.</strong> <input type="text" value={inputValues.questions1[6]} onChange={(e) => handleInputChange(e.target.value, 6, 'questions1')} className={styles["page95__input-box-small"]} /> the birds <input type="text" value={inputValues.questions1[7]} onChange={(e) => handleInputChange(e.target.value, 7, 'questions1')} className={styles["page95__input-box-small"]} /> (migrate) in winter?</em>
              {results.questions1[3] && <img src={results.questions1[3]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page95__audio-icon"]}
                onClick={() => playAudio("pg96_audio5")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page95__audio-icon-p"]}
                onClick={() => playAudio("pg96_audio5p")}
              />
            </span>
          </div>

          <div className={styles["page95__question"]}>
            <span>
              <em><strong>e.</strong> <input type="text" value={inputValues.questions1[8]} onChange={(e) => handleInputChange(e.target.value, 8, 'questions1')} className={styles["page95__input-box-small"]} /> you <input type="text" value={inputValues.questions1[9]} onChange={(e) => handleInputChange(e.target.value, 9, 'questions1')} className={styles["page95__input-box-small"]} /> (visit) your relatives yearly?</em>
              {results.questions1[4] && <img src={results.questions1[4]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page95__audio-icon"]}
                onClick={() => playAudio("pg96_audio6")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page95__audio-icon-p"]}
                onClick={() => playAudio("pg96_audio6p")}
              />
            </span>
          </div>
        </div>

        {/* Questão 5 */}
        <div className={styles["page69__tabela-interrogativa-container"]}>
          <div className={styles["page69__table-header-interrogativa"]}>INTERROGATIVA</div>
          <table className={styles["page69__styled-table-interrogativa"]}>
            <thead className={styles["page69__thead"]}>
              <tr className={styles["page69__celula-table"]}>
                <th>Palavras <br /> Interrogativas</th>
                <th>Verbo <br /> Auxiliar</th>
                <th>Sujeito</th>
                <th><span className={styles["page69__highlight"]}>Not</span> <br />Advérbio</th>
                <th>Verbo(s)</th>
                <th>Objeto <br /> Complemento</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className={styles["page95__questions2"]}>
          <div className={styles["page95__question"]}>
            <span>
              <p>5. Make questions with the verbs in parentheses in the Simple Present Form.
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page96__header-icon"]}
                  onClick={() => playAudio("pg96_audio1e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page96__header-icon"]}
                  onClick={() => playAudio("pg96_audio1p")}
                />
              </p>
              <em><strong>a.</strong> <input type="text" value={inputValues.questions2[0]} onChange={(e) => handleInputChange(e.target.value, 0, 'questions2')} className={styles["page95__input-box-small"]} /> she <input type="text" value={inputValues.questions2[1]} onChange={(e) => handleInputChange(e.target.value, 1, 'questions2')} className={styles["page95__input-box-small"]} /> (wake up) early in the morning?</em>
              {results.questions2[0] && <img src={results.questions2[0]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page95__audio-icon"]}
                onClick={() => playAudio("pg96_audio7")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page95__audio-icon-p"]}
                onClick={() => playAudio("pg96_audio7p")}
              />
            </span>
          </div>

          <div className={styles["page95__question"]}>
            <span>
              <em><strong>b.</strong> <input type="text" value={inputValues.questions2[2]} onChange={(e) => handleInputChange(e.target.value, 2, 'questions2')} className={styles["page95__input-box-small"]} /> they <input type="text" value={inputValues.questions2[3]} onChange={(e) => handleInputChange(e.target.value, 3, 'questions2')} className={styles["page95__input-box-small"]} /> (take) the bus to work?</em>
              {results.questions2[1] && <img src={results.questions2[1]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page95__audio-icon"]}
                onClick={() => playAudio("pg96_audio8")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page95__audio-icon-p"]}
                onClick={() => playAudio("pg96_audio8p")}
              />
            </span>
          </div>

          <div className={styles["page95__question"]}>
            <span>
              <em><strong>c.</strong> <input type="text" value={inputValues.questions2[4]} onChange={(e) => handleInputChange(e.target.value, 4, 'questions2')} className={styles["page95__input-box-small"]} /> he <input type="text" value={inputValues.questions2[5]} onChange={(e) => handleInputChange(e.target.value, 5, 'questions2')} className={styles["page95__input-box-small"]} /> (eat breakfast) before leaving?</em>
              {results.questions2[2] && <img src={results.questions2[2]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page95__audio-icon"]}
                onClick={() => playAudio("pg96_audio9")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page95__audio-icon-p"]}
                onClick={() => playAudio("pg96_audio9p")}
              />
            </span>
          </div>

          <div className={styles["page95__question"]}>
            <span>
              <em><strong>d.</strong> <input type="text" value={inputValues.questions2[6]} onChange={(e) => handleInputChange(e.target.value, 6, 'questions2')} className={styles["page95__input-box-small"]} /> you <input type="text" value={inputValues.questions2[7]} onChange={(e) => handleInputChange(e.target.value, 7, 'questions2')} className={styles["page95__input-box-small"]} /> (check) your emails first thing in the morning?</em>
              {results.questions2[3] && <img src={results.questions2[3]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page95__audio-icon"]}
                onClick={() => playAudio("pg96_audio10")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page95__audio-icon-p"]}
                onClick={() => playAudio("pg96_audio10p")}
              />
            </span>
          </div>
        </div>

        {/* Questão 6 */}
        <div className={styles["page69__tabela-interrogativa-container"]}>
          <div className={styles["page69__table-header-interrogativa"]}>INTERROGATIVA</div>
          <table className={styles["page69__styled-table-interrogativa"]}>
            <thead className={styles["page69__thead"]}>
              <tr className={styles["page69__celula-table"]}>
                <th>Palavras <br /> Interrogativas</th>
                <th>Verbo <br /> Auxiliar</th>
                <th>Sujeito</th>
                <th><span className={styles["page69__highlight"]}>Not</span> <br />Advérbio</th>
                <th>Verbo(s)</th>
                <th>Objeto <br /> Complemento</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className={styles["page96__container-3"]}>
          <div className={styles["page96__questions-3"]}>
            <p>6. Make questions using the words from the box for the answers below:
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page96__header-icon"]}
                onClick={() => playAudio("pg96_audio11e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page96__header-icon"]}
                onClick={() => playAudio("pg96_audio11p")}
              />
            </p>

            <div className={styles["page96__question"]}>
              <div className={styles["page96__question-words-container"]}>
                <div className={styles["page96__question-word"]}>When</div>
                <div className={styles["page96__question-word"]}>How often</div>
                <div className={styles["page96__question-word"]}>Who</div>
                <div className={styles["page96__question-word"]}>What time</div>
              </div>
              <input
                type="text"
                value={inputValues.questions3[0]}
                onChange={(e) => handleInputChange(e.target.value, 0, 'questions3')}
                className={styles["page96__input-box-question3"]}
              />
              {results.questions3[0] && <img src={results.questions3[0]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page96__q3-icon"]}
                onClick={() => playAudio("pg96_audio12")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page96__q3-icon"]}
                onClick={() => playAudio("pg96_audio12p")}
              />
              <em><strong>a.</strong> She finishes her homework before dinner.</em>
            </div>

            <div className={styles["page96__question"]}>
              <input
                type="text"
                value={inputValues.questions3[1]}
                onChange={(e) => handleInputChange(e.target.value, 1, 'questions3')}
                className={styles["page96__input-box-question3"]}
              />
              {results.questions3[1] && <img src={results.questions3[1]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page96__q3-icon"]}
                onClick={() => playAudio("pg96_audio13")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page96__q3-icon"]}
                onClick={() => playAudio("pg96_audio13p")}
              />
              <em><strong>b.</strong> They clean the house every Saturday.</em>
            </div>

            <div className={styles["page96__question"]}>
              <input
                type="text"
                value={inputValues.questions3[2]}
                onChange={(e) => handleInputChange(e.target.value, 2, 'questions3')}
                className={styles["page96__input-box-question3"]}
              />
              {results.questions3[2] && <img src={results.questions3[2]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page96__q3-icon"]}
                onClick={() => playAudio("pg96_audio14")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page96__q3-icon"]}
                onClick={() => playAudio("pg96_audio14p")}
              />
              <em><strong>c.</strong> The shop opens at 9:00 AM.</em>
            </div>

            <div className={styles["page96__question"]}>
              <input
                type="text"
                value={inputValues.questions3[3]}
                onChange={(e) => handleInputChange(e.target.value, 3, 'questions3')}
                className={styles["page96__input-box-question3"]}
              />
              {results.questions3[3] && <img src={results.questions3[3]} alt="Result" className={styles["page96__icon"]} />}
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page96__q3-icon"]}
                onClick={() => playAudio("pg96_audio15")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page96__q3-icon"]}
                onClick={() => playAudio("pg96_audio15p")}
              />
              <em><strong>d.</strong> I cook dinner for my family.</em>
            </div>
          </div>

          <div className={styles["page96__container-imagem"]}>
            <img className={styles["page96__imagem"]} src={pagina96_imagem1} alt="" />
          </div>
        </div>

        {/* AÇÕES: Check → Reset → Answer Key */}
        <div className={styles["page96__actions"]}>
          <button className={styles["page96__check-button"]} onClick={handleCheckClick}>
            <em>Check</em>
          </button>

          <button className={styles["page96__reset--button"]} onClick={handleReset}>
            Reset
          </button>

          <button
            className={styles["page96__answersKey--button"]}
            aria-pressed={showAnswers ? "true" : "false"}
            onClick={() => setShowAnswers((s) => !s)}
          >
            Answer Key
          </button>
        </div>

        {showAnswers && (
          <div className={styles["page96__answersKey-box"]}>
            {allAnswers.map((item, idx) => (
              <div key={idx} className={styles["page96__answersKey-item"]}>
                <span className={styles["page96__answersKey-num"]}>{item.num}</span>
                <span className={styles["page96__answersKey-text"]}>{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Pagina96;
