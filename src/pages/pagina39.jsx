import React, { useState } from 'react';

import styles from './pagina39.module.css';

import campainha from '../assets/icons/campainha.png';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina39_imagem1 from '../assets/images/pagina39_imagem1.webp';
import pagina39_imagem2 from '../assets/images/pagina39_imagem2.webp';
import pagina39_imagem3 from '../assets/images/pagina39_imagem3.webp';
import pagina39_imagem4 from '../assets/images/pagina39_imagem4.webp';
import pagina39_imagem5 from '../assets/images/pagina39_imagem5.webp';

import bell from '../assets/audios/bell.mp3';
import pg39_audio1e from '../assets/audios/pg39_audio1e.mp3';
import pg39_audio1p from '../assets/audios/pg39_audio1p.mp3';
import pg39_audio2e from '../assets/audios/pg39_audio2e.mp3';
import pg39_audio2p from '../assets/audios/pg39_audio2p.mp3';
import pg39_audio3e from '../assets/audios/pg39_audio3e.mp3';
import pg39_audio3p from '../assets/audios/pg39_audio3p.mp3';
import pg39_audioA from '../assets/audios/pg39_audioA.mp3';
import pg39_audioB from '../assets/audios/pg39_audioB.mp3';
import pg39_audioC from '../assets/audios/pg39_audioC.mp3';
import pg39_audioD from '../assets/audios/pg39_audioD.mp3';
import pg39_audioE from '../assets/audios/pg39_audioE.mp3';
import pg39_audio1 from '../assets/audios/pg39_audio1.mp3';
import pg39_audio2 from '../assets/audios/pg39_audio2.mp3';
import pg39_audio3 from '../assets/audios/pg39_audio3.mp3';
import pg39_audio4 from '../assets/audios/pg39_audio4.mp3';
import pg39_audio5 from '../assets/audios/pg39_audio5.mp3';

const Pagina39 = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '', '']);
    const [results, setResults] = useState([null, null, null, null, null]);
    const [pulsingAudioEnglishIndex, setPulsingAudioEnglishIndex] = useState(null);
    const [pulsingAudioPortugueseIndex, setPulsingAudioPortugueseIndex] = useState(null);
    const [isSpeedReduced, setIsSpeedReduced] = useState([false, false, false, false, false]);
    const [audioPlaying, setAudioPlaying] = useState(null);
    const [showAnswersKey, setShowAnswersKey] = useState(false);

    const correctSentences = [
        "The dog is sleeping on the floor",
        "We are cooking dinner",
        "He is writing a letter",
        "She is drinking coffee",
        "They are playing basketball"
    ];

    const displayedSentences = [
        "She is drinking coffee",
        "They are playing basketball",
        "The dog is sleeping on the floor",
        "He is writing a letter",
        "We are cooking dinner"
    ];

    const audioFiles = [pg39_audioA, pg39_audioB, pg39_audioC, pg39_audioD, pg39_audioE];
    const portugueseAudioFiles = [pg39_audio1, pg39_audio2, pg39_audio3, pg39_audio4, pg39_audio5];

    const tocarAudio = (audioFile) => {
        if (audioPlaying) {
            audioPlaying.pause();
            audioPlaying.currentTime = 0;
        }
        const newAudio = new Audio(audioFile);
        setAudioPlaying(newAudio);
        newAudio.play();
        newAudio.onended = () => setAudioPlaying(null);
    };

    const handleAudioClick = (index, isPortuguese = false, event) => {
        event.stopPropagation();
        const audioFile = isPortuguese ? portugueseAudioFiles[index] : audioFiles[index];
        const audio = new Audio(audioFile);
        audio.playbackRate = isSpeedReduced[index] ? 0.75 : 1;

        if (isPortuguese) setPulsingAudioPortugueseIndex(index);
        else setPulsingAudioEnglishIndex(index);

        audio.play();
        audio.onended = () => {
            if (isPortuguese) setPulsingAudioPortugueseIndex(null);
            else setPulsingAudioEnglishIndex(null);
        };
    };

    const reduzirVelocidade = (index, event) => {
        event.stopPropagation();
        setIsSpeedReduced((prev) => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => value === correctSentences[index]);
        setResults(newResults);
    };

    const handleSentenceClick = (sentence) => {
        const indexInInputs = inputValues.indexOf(sentence);
        if (indexInInputs !== -1) {
            const newValues = [...inputValues];
            newValues[indexInInputs] = '';
            setInputValues(newValues);
        } else {
            const emptyIndex = inputValues.findIndex((v) => v === '');
            if (emptyIndex !== -1) {
                const newValues = [...inputValues];
                newValues[emptyIndex] = sentence;
                setInputValues(newValues);
            }
        }
    };

    const handleReset = () => {
        // limpa tudo sem sair da página
        setInputValues(['', '', '', '', '']);
        setResults([null, null, null, null, null]);
        setPulsingAudioEnglishIndex(null);
        setPulsingAudioPortugueseIndex(null);
        setIsSpeedReduced([false, false, false, false, false]);
        setShowAnswersKey(false);
        if (audioPlaying) {
            audioPlaying.pause();
            audioPlaying.currentTime = 0;
            setAudioPlaying(null);
        }
    };

    return (
        <div className={styles["page39__container"]}>
            {/* HEADER */}
            <header className={styles["page39__header"]}>
                <h1 className={styles["page39__audio--text"]} style={{ color: '#A61C28' }}>
                    Exercise:
                    <img
                        src={eng_audio_icon}
                        alt="English Audio"
                        className={styles["page39__header--icon"]}
                        onClick={() => tocarAudio(pg39_audio1e)}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese Audio"
                        className={styles["page39__header--icon"]}
                        onClick={() => tocarAudio(pg39_audio1p)}
                    />
                </h1>

                <h2 className={styles["page39__audio--text2"]}>
                    2. Matching Exercises (Match the sentence with the correct image/description)
                    <img
                        src={eng_audio_icon}
                        alt="English Audio"
                        className={styles["page39__header--icon2"]}
                        onClick={() => tocarAudio(pg39_audio2e)}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese Audio"
                        className={styles["page39__header--icon2"]}
                        onClick={() => tocarAudio(pg39_audio2p)}
                    />
                </h2>

                <p className={styles["page39__audio--text"]}>
                    Match the sentence (A-E) with the correct picture or description (1-5):
                    <img
                        src={eng_audio_icon}
                        alt="English Audio"
                        style={{ width: '3.5rem', height: '3.5rem', marginLeft: '0.5rem', cursor: 'pointer' }}
                        onClick={() => tocarAudio(pg39_audio3e)}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese Audio"
                        style={{ width: '3.5rem', height: '3.5rem', marginLeft: '0.5rem', cursor: 'pointer' }}
                        onClick={() => tocarAudio(pg39_audio3p)}
                    />
                </p>

                <p className={styles["page39__paragraph"]}>Clique ou digite</p>
            </header>

            {/* ASIDE (NOTES) */}
            <aside className={styles["page39__new-aside"]}>
                <div className={styles["page39__new-aside-notes1"]}>
                    <img
                        className={styles["page39__aside-img"]}
                        onClick={() => tocarAudio(bell)}
                        src={campainha}
                        alt=""
                    />
                    <p>NOTE: RING THE BELL AND READ CAREFULLY - PLEASE!</p>
                </div>
                <div className={styles["page39__new-aside-notes2"]}>
                    <p style={{ fontSize: "2rem" }}>
                        Para uma melhor visão da página em caso de <span style={{ fontWeight: "bold" }}>telas menores</span>, utilize o <span style={{ fontWeight: "bold" }}>zoom reverso.</span>
                    </p>
                </div>
            </aside>

            {/* MAIN */}
            <main className={styles["page39__main"]}>
                <div className={styles["page39__images--container"]}>
                    {[pagina39_imagem1, pagina39_imagem2, pagina39_imagem3, pagina39_imagem4, pagina39_imagem5].map((image, index) => (
                        <div key={index} className={styles["page39__image--box"]}>
                            <img src={image} alt={`Image ${index + 1}`} />
                            <div className={styles["page39__input--box--container"]}>
                                <input
                                    type="text"
                                    className={styles["page39__input--box"]}
                                    placeholder="Place here"
                                    value={inputValues[index]}
                                    onChange={(e) => {
                                        const newValues = [...inputValues];
                                        newValues[index] = e.target.value;
                                        setInputValues(newValues);
                                    }}
                                />
                                {results[index] !== null && (
                                    <img
                                        src={results[index] ? correct_icon : wrong_icon}
                                        alt={results[index] ? "Correct" : "Incorrect"}
                                        className={styles["page39__checkmark--image"]}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles["page39__sentences--container"]}>
                    <p><strong>Sentences:</strong></p>
                    {displayedSentences.map((sentence, index) => (
                        <div key={index} className={styles["page39__sentence"]} onClick={() => handleSentenceClick(sentence)}>
                            <p><strong>{String.fromCharCode(65 + index)}) {sentence}</strong></p>
                            <div className={styles["page39__icons--container"]}>
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio Icon"
                                    className={`${styles["page39__audio--icon"]} ${pulsingAudioEnglishIndex === index ? styles["page39__pulsing"] : ''}`}
                                    onClick={(e) => handleAudioClick(index, false, e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio Icon"
                                    className={`${styles["page39__portugueseng--audio--icon"]} ${pulsingAudioPortugueseIndex === index ? styles["page39__pulsing"] : ''}`}
                                    onClick={(e) => handleAudioClick(index, true, e)}
                                />
                                <img
                                    src={slow_audio_icon}
                                    alt="Reduce Speed Icon"
                                    className={`${styles["page39__volumeng--audio--icon"]} ${isSpeedReduced[index] ? styles["page39__active"] : ''}`}
                                    onClick={(e) => reduzirVelocidade(index, e)}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles["page39__buttons--container"]}>
                    <button className={styles["page39__check--button"]} onClick={handleCheckClick}>
                        Check
                    </button>
                    <button className={styles["page39__reset--button"]} onClick={handleReset}>
                        Reset
                    </button>
                    <button
                        className={styles["page39__answersKey--button"]}
                        onClick={() => setShowAnswersKey((prev) => !prev)}
                        aria-expanded={showAnswersKey}
                        aria-controls="answers-key-box"
                    >
                        Answer Key
                    </button>
                </div>

                {showAnswersKey && (
                    <div
                        id="answers-key-box"
                        className={styles["page39__answersKey--box"]}
                        role="region"
                        aria-label="Gabarito completo"
                    >
                        {correctSentences.map((answer, i) => (
                            <div key={i} className={styles["page39__answersKey--item"]}>
                                <span className={styles["page39__answersKey--num"]}>{i + 1}.</span>
                                <span className={styles["page39__answersKey--text"]}>{answer}</span>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Pagina39;
