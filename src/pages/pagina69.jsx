import React, { useState, useEffect, useRef } from 'react';

import styles from './pagina69.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina69_imagem1 from '../assets/images/pagina69_imagem1.webp';
import pagina69_imagem2 from '../assets/images/pagina69_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg69_audio1e from "../assets/audios/pg69_audio1e.mp3";
import pg69_audio1p from "../assets/audios/pg69_audio1p.mp3";
import pg69_audio2e from "../assets/audios/pg69_audio2e.mp3";
import pg69_audio2p from "../assets/audios/pg69_audio2p.mp3";
import pg69_audio3e from "../assets/audios/pg69_audio3e.mp3";
import pg69_audio3p from "../assets/audios/pg69_audio3p.mp3";
import pg69_audio4e from "../assets/audios/pg69_audio4e.mp3";
import pg69_audio4p from "../assets/audios/pg69_audio4p.mp3";
import pg69_audio5e from "../assets/audios/pg69_audio5e.mp3";
import pg69_audio5p from "../assets/audios/pg69_audio5p.mp3";
import pg69_audio6e from "../assets/audios/pg69_audio6e.mp3";
import pg69_audio6p from "../assets/audios/pg69_audio6p.mp3";
import pg69_audio7e from "../assets/audios/pg69_audio7e.mp3";
import pg69_audio7p from "../assets/audios/pg69_audio7p.mp3";
import pg69_audio8e from "../assets/audios/pg69_audio8e.mp3";
import pg69_audio8p from "../assets/audios/pg69_audio8p.mp3";
import pg69_audio9e from "../assets/audios/pg69_audio9e.mp3";
import pg69_audio9p from "../assets/audios/pg69_audio9p.mp3";
import pg69_audio10e from "../assets/audios/pg69_audio10e.mp3";
import pg69_audio10p from "../assets/audios/pg69_audio10p.mp3";


const Pagina69 = () => {
    const [respostas, setRespostas] = useState({});
    const [frasesEmbaralhadas, setFrasesEmbaralhadas] = useState({});
    const [palavrasClicadas, setPalavrasClicadas] = useState({});
    const [resultados, setResultados] = useState([]);
    const [showAnswersKey, setShowAnswersKey] = useState(false);

    const currentAudioRef = useRef(null);

    const respostasCorretas = [
        ['Is', 'he', 'at home'],
        ['Am', 'I', 'late', 'for class'],
        ['Are', 'we', 'in the same class'],
        ['Is', 'the movie', 'interesting'],
        ['Are', 'you', 'from Spain'],
        ['Is', 'she', 'your sister'],
        ['Are', 'they', 'in the park'],
        ['Is', 'the computer', 'on the desk'],
        ['Are', 'we', 'late', 'for the meeting'],
        ['Are', 'they', 'happy', 'with the results'],
    ];

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg69_audio1e, pg69_audio1p,
        pg69_audio2e, pg69_audio2p,
        pg69_audio3e, pg69_audio3p,
        pg69_audio4e, pg69_audio4p,
        pg69_audio5e, pg69_audio5p,
        pg69_audio6e, pg69_audio6p,
        pg69_audio7e, pg69_audio7p,
        pg69_audio8e, pg69_audio8p,
        pg69_audio9e, pg69_audio9p,
        pg69_audio10e, pg69_audio10p,
    };

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

    const playAudio = (audioKey, speed = 1.0) => {
        const src = audioMap[audioKey];
        if (!src) {
            console.warn(`Áudio não encontrado: ${audioKey}`);
            return;
        }
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        const audio = new Audio(src);
        audio.playbackRate = speed;
        currentAudioRef.current = audio;
        audio.play();
    };

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
                [fraseIndex]: palavrasAtuais.filter((p) => p !== word),
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
            const respostaUsuarioNormalizada = respostaUsuario.map((w) => w.trim().toLowerCase());
            const respostaCorretaNormalizada = resposta.map((w) => w.trim().toLowerCase());
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

    return (
        <div className={styles['page69__container']}>
            <header className={styles['page69__header']}>
                <h1 className={styles['page69__header-title']}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles['page69__audio-icon']}
                        onClick={() => playAudio('global_learning_le_e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles['page69__audio-icon']}
                        onClick={() => playAudio('global_learning_le_p')}
                    />
                </h1>
                <p>
                    <span className={styles['page69__text--red']}>Word Order:</span> Unscramble the words to form questions.
                </p>
                <p>
                    <span className={styles['page69__text--red']}>Ordem das Palavras:</span> Reorganize as palavras para formar
                    perguntas.
                </p>
                <p>
                    <span className={styles['page69__text--red']}>Click</span> on the words to form the correct sentence.
                </p>
                <p>
                    <span className={styles['page69__text--red']}>Clique</span> nas palavras para formar a frase correta.
                </p>
            </header>

            <div className={styles['page69__table-interrogative-container']}>
                <div className={styles['page69__table-header-interrogative']}>INTERROGATIVA</div>
                <table className={styles['page69__styled-table-interrogative']}>
                    <thead className={styles['page69__thead']}>
                        <tr className={styles['page69__table-row']}>
                            <th>Palavras <br /> Interrogativas</th>
                            <th>Verbo <br /> Auxiliar</th>
                            <th>Sujeito</th>
                            <th><span className={styles['highlight']}>Not</span> <br />Advérbio</th>
                            <th>Verbo(s)</th>
                            <th>Objeto <br /> Complemento</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className={styles['page69__main-aside-container']}>
                <main className={styles['page69__main-container']}>
                    <div className={styles['page69__phrases']}>
                        {respostasCorretas.map((_, fraseIndex) => {
                            const enKey = `pg69_audio${fraseIndex + 1}e`;
                            const ptKey = `pg69_audio${fraseIndex + 1}p`;

                            return (
                                <div key={fraseIndex} className={styles['page69__phrase-container']}>
                                    {/* Palavras embaralhadas para clicar */}
                                    <div className={styles['page69__phrase']}>
                                        {frasesEmbaralhadas[fraseIndex] &&
                                            frasesEmbaralhadas[fraseIndex].map((word, wordIndex) => (
                                                <div
                                                    key={wordIndex}
                                                    className={`${styles['page69__word']} ${palavrasClicadas[`${fraseIndex}-${word.toLowerCase()}`]
                                                            ? styles['page69__word--disabled']
                                                            : ''
                                                        }`}
                                                    onClick={() => handleWordClick(fraseIndex, word)}
                                                >
                                                    {word}
                                                </div>
                                            ))}
                                    </div>

                                    {/* Frase montada + ÁUDIO (sempre visível) + certo/errado (após Check) */}
                                    <div className={styles['page69__input-phrase']}>
                                        {/* Chips clicados */}
                                        {respostas[fraseIndex] &&
                                            respostas[fraseIndex].map((palavra, index) => (
                                                <div
                                                    key={index}
                                                    className={styles['page69__chip']}
                                                    onClick={() => handleChipClick(fraseIndex, palavra)}
                                                >
                                                    {index === 0 ? palavra.charAt(0).toUpperCase() + palavra.slice(1) : palavra}
                                                </div>
                                            ))}

                                        {/* Ícones de áudio posicionados pela sua folha de estilos */}
                                        <img
                                            src={eng_audio_icon}
                                            alt={`Play question ${fraseIndex + 1} in English`}
                                            className={styles['icon--english']}
                                            onClick={() => playAudio(enKey)}
                                            title="Play (EN)"
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt={`Play question ${fraseIndex + 1} in Portuguese`}
                                            className={styles['icon--portuguese']}
                                            onClick={() => playAudio(ptKey)}
                                            title="Play (PT-BR)"
                                        />

                                        {/* Ícones certo/errado (aparecem após Check) */}
                                        {resultados.length > 0 &&
                                            (resultados[fraseIndex] ? (
                                                <img
                                                    src={correct_icon}
                                                    alt="Correto"
                                                    className={styles['page69__icon--correct']}
                                                />
                                            ) : (
                                                <img
                                                    src={wrong_icon}
                                                    alt="Errado"
                                                    className={styles['page69__icon--wrong']}
                                                />
                                            ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles['page69__buttons-container']}>
                        <button className={styles['page69__check-button']} onClick={verificarRespostas}>
                            Check
                        </button>
                        <button className={styles['page69__reset-button']} onClick={handleReset}>
                            Reset
                        </button>
                        <button
                            className={styles['page69__answersKey-button']}
                            onClick={() => setShowAnswersKey((v) => !v)}
                            aria-expanded={showAnswersKey}
                            aria-controls="answers-key-box"
                        >
                            Answer Key
                        </button>
                    </div>

                    {showAnswersKey && (
                        <div
                            id="answers-key-box"
                            className={styles['page69__answersKey-box']}
                            role="region"
                            aria-label="Gabarito completo"
                        >
                            {respostasCorretas.map((arr, i) => {
                                const texto = `${arr.join(' ')}?`;
                                return (
                                    <div key={i} className={styles['page69__answersKey-item']}>
                                        <span className={styles['page69__answersKey-num']}>{i + 1}.</span>
                                        <span className={styles['page69__answersKey-text']}>{texto}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </main>

                <aside className={styles['page69__aside-container']}>
                    <div className={styles['page69__images-container']}>
                        <img src={pagina69_imagem1} alt="Imagem 1" className={styles['page69__image']} />
                        <img src={pagina69_imagem2} alt="Imagem 2" className={styles['page69__image']} />
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina69;

