import React, { useState } from 'react';

import styles from './pagina40.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina40_imagem1 from '../assets/images/pagina40_imagem1.webp';
import pagina40_imagem2 from '../assets/images/pagina40_imagem2.webp';
import pagina40_imagem3 from '../assets/images/pagina40_imagem3.webp';
import pagina40_imagem4 from '../assets/images/pagina40_imagem4.webp';
import pagina40_imagem5 from '../assets/images/pagina40_imagem5.webp';

import pg39_audio1e from '../assets/audios/pg39_audio1e.mp3';
import pg39_audio1p from '../assets/audios/pg39_audio1p.mp3';
import pg39_audio2e from '../assets/audios/pg39_audio2e.mp3';
import pg39_audio2p from '../assets/audios/pg39_audio2p.mp3';
import pg39_audio3e from '../assets/audios/pg39_audio3e.mp3';
import pg39_audio3p from '../assets/audios/pg39_audio3p.mp3';
import Pagina40_audioA from '../assets/audios/pagina40_audioA.mp3';
import Pagina40_audioB from '../assets/audios/pagina40_audioB.mp3';
import Pagina40_audioC from '../assets/audios/pagina40_audioC.mp3';
import Pagina40_audioD from '../assets/audios/pagina40_audioD.mp3';
import Pagina40_audioE from '../assets/audios/pagina40_audioE.mp3';
import Pagina40_audio1 from '../assets/audios/pagina40_audio1.mp3';
import Pagina40_audio2 from '../assets/audios/pagina40_audio2.mp3';
import Pagina40_audio3 from '../assets/audios/pagina40_audio3.mp3';
import Pagina40_audio4 from '../assets/audios/pagina40_audio4.mp3';
import Pagina40_audio5 from '../assets/audios/pagina40_audio5.mp3';

const Pagina40 = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '', '']);
    const [results, setResults] = useState([null, null, null, null, null]);
    const [pulsingAudioEnglishIndex, setPulsingAudioEnglishIndex] = useState(null);
    const [pulsingAudioPortugueseIndex, setPulsingAudioPortugueseIndex] = useState(null);
    const [isSpeedReduced, setIsSpeedReduced] = useState([false, false, false, false, false]);
    const [audioPlaying, setAudioPlaying] = useState(null);
    const [showAnswersKey, setShowAnswersKey] = useState(false);

    const correctSentences = [
        "I am studying for my exam",
        "They are swimming in the pool",
        "We are watching a movie",
        "He is cleaning the house",
        "She is playing the piano"
    ];

    const displayedSentences = [
        "I am studying for my exam",
        "He is cleaning the house",
        "We are watching a movie",
        "They are swimming in the pool",
        "She is playing the piano"
    ];

    const audioFiles = [
        Pagina40_audioA,
        Pagina40_audioB,
        Pagina40_audioC,
        Pagina40_audioD,
        Pagina40_audioE
    ];

    const portugueseAudioFiles = [
        Pagina40_audio1,
        Pagina40_audio2,
        Pagina40_audio3,
        Pagina40_audio4,
        Pagina40_audio5
    ];

    const tocarAudio = (audioFile) => {
        if (audioPlaying) {
            audioPlaying.pause();
            audioPlaying.currentTime = 0;
        }
        const newAudio = new Audio(audioFile);
        setAudioPlaying(newAudio);
        newAudio.play();
        newAudio.onended = () => {
            setAudioPlaying(null);
        };
    };

    const handleAudioClick = (index, isPortuguese = false, event) => {
        event.stopPropagation();
        const audioFile = isPortuguese ? portugueseAudioFiles[index] : audioFiles[index];
        const audio = new Audio(audioFile);
        audio.playbackRate = isSpeedReduced[index] ? 0.75 : 1;
        if (isPortuguese) {
            setPulsingAudioPortugueseIndex(index);
        } else {
            setPulsingAudioEnglishIndex(index);
        }
        audio.play();
        audio.onended = () => {
            if (isPortuguese) {
                setPulsingAudioPortugueseIndex(null);
            } else {
                setPulsingAudioEnglishIndex(null);
            }
        };
    };

    const reduzirVelocidade = (index, event) => {
        event.stopPropagation();
        setIsSpeedReduced((prev) => {
            const newSpeeds = [...prev];
            newSpeeds[index] = !newSpeeds[index];
            return newSpeeds;
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
            const emptyIndex = inputValues.findIndex((value) => value === '');
            if (emptyIndex !== -1) {
                const newValues = [...inputValues];
                newValues[emptyIndex] = sentence;
                setInputValues(newValues);
            }
        }
    };

    const handleReset = () => {
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
        <div className={styles["page40__container"]}>
            <header className={styles["page40__header"]}>
                <h1 className={styles["page40__audio--text"]} style={{ color: '#A61C28' }}>
                    Exercise:
                    <img
                        src={eng_audio_icon}
                        alt="English Audio"
                        className={styles["page40__header--icon"]}
                        onClick={() => tocarAudio(pg39_audio1e)}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese Audio"
                        className={styles["page40__header--icon"]}
                        onClick={() => tocarAudio(pg39_audio1p)}
                    />
                </h1>
                <h2 className={styles["page40__audio--text2"]}>
                    2. Matching Exercises (Match the sentence with the correct image/description)
                    <img
                        src={eng_audio_icon}
                        alt="English Audio"
                        style={{ width: '3.5rem', height: '3.5rem', marginLeft: '0.5rem', cursor: 'pointer', position: 'relative', top: '1rem'}}
                        onClick={() => tocarAudio(pg39_audio2e)}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese Audio"
                        style={{ width: '3.5rem', height: '3.5rem', marginLeft: '0.5rem', cursor: 'pointer', position: 'relative', top: '1rem'}}
                        onClick={() => tocarAudio(pg39_audio2p)}
                    />
                </h2>
                <p className={styles["page40__audio--text"]}>
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
                <p className={styles["page40__paragraph"]}>Clique ou digite</p>
            </header>

            <main className={styles["page40__main"]}>
                <div className={styles["page40__images--container"]}>
                    {[pagina40_imagem1, pagina40_imagem2, pagina40_imagem3, pagina40_imagem4, pagina40_imagem5].map((image, index) => (
                        <div key={index} className={styles["page40__image--box"]}>
                            <img src={image} alt={`Image ${index + 1}`} />
                            <div className={styles["page40__input--box--container"]}>
                                <input
                                    type="text"
                                    className={styles["page40__input--box"]}
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
                                        className={styles["page40__checkmark--image"]}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles["page40__sentences--container"]}>
                    <p><strong>Sentences:</strong></p>
                    {displayedSentences.map((sentence, index) => (
                        <div key={index} className={styles["page40__sentence"]} onClick={() => handleSentenceClick(sentence)}>
                            <p><strong>{String.fromCharCode(65 + index)}) {sentence}</strong></p>
                            <div className={styles["page40__icons--container"]}>
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio Icon"
                                    className={`${styles["page40__audio--icon"]} ${pulsingAudioEnglishIndex === index ? styles["page40__pulsing"] : ''}`}
                                    onClick={(e) => handleAudioClick(index, false, e)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio Icon"
                                    className={`${styles["page40__portuguese--audio--icon"]} ${pulsingAudioPortugueseIndex === index ? styles["page40__pulsing"] : ''}`}
                                    onClick={(e) => handleAudioClick(index, true, e)}
                                />
                                <img
                                    src={slow_audio_icon}
                                    alt="Reduce Speed Icon"
                                    className={`${styles["page40__volume--audio--icon"]} ${isSpeedReduced[index] ? styles["page40__active"] : ''}`}
                                    onClick={(e) => reduzirVelocidade(index, e)}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles["page40__buttons--container"]}>
                    <button className={styles["page40__check--button"]} onClick={handleCheckClick}>
                        Check
                    </button>
                    <button className={styles["page40__reset--button"]} onClick={handleReset}>
                        Reset
                    </button>
                    <button
                        className={styles["page40__answersKey--button"]}
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
                        className={styles["page40__answersKey--box"]}
                        role="region"
                        aria-label="Gabarito completo"
                    >
                        {correctSentences.map((answer, i) => (
                            <div key={i} className={styles["page40__answersKey--item"]}>
                                <span className={styles["page40__answersKey--num"]}>{i + 1}.</span>
                                <span className={styles["page40__answersKey--text"]}>{answer}</span>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Pagina40;
