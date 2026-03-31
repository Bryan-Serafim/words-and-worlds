import React, { useState, useRef } from 'react';

import styles from './pagina9.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png'

import global_verbo_to_be from '../assets/audios/global_verbo_to_be.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg9Audio1 from '../assets/audios/pg9_audio1.mp3';
import pg9Audio2 from '../assets/audios/pg9_audio2.mp3';
import pg9Audio3 from '../assets/audios/pg9_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg9_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg9_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg9_trad3.mp3';

const Pagina9 = () => {
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
        <div>
            <div className={styles["page9__container"]}>
                <header className={styles["page9__header"]}>
                    <h1 className={styles["page9__audio-text"]}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page9__icon"]}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>

                    <h2 className={styles["page9__audio-text"]} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page9__icon"]}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>

                    <h3 className={styles["page9__audio-text"]}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        
                    </h3>
                </header>

                <main className={styles["page9__main"]}>
                    <div>
                        <div
                            className={styles["page9__table-header"]}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White icon"
                                className={styles["page9__icon--left"]}
                            />
                            AFFIRMATIVE
                        </div>

                        <table className={styles["page9__table"]}>
                            <colgroup>
                                <col className={styles["page9__table-subject"]} />
                                <col className={styles["page9__table-auxiliary"]} />
                                <col className={styles["page9__table-adverb"]} />
                                <col className={styles["page9__table-verb"]} />
                                <col className={styles["page9__table-complement"]} />
                                <col className={styles["page9__table-translation"]} />
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
                                    <td className={styles["page9__table-subject"]} style={{ textAlign: "center" }}>
                                        You
                                    </td>
                                    <td className={styles["page9__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        are
                                    </td>
                                    <td className={styles["page9__table-adverb"]}></td>
                                    <td className={styles["page9__table-verb"]}></td>
                                    <td className={styles["page9__table-complement"]}>
                                        the new director{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page9__icon"]}
                                            onClick={() => playAudio(pg9Audio1)}
                                        />
                                    </td>
                                    <td className={styles["page9__table-translation"]}>
                                        Você é o novo diretor.{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page9__icon"]}
                                            onClick={() => playAudio(traducaoAudio1)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page9__table-subject"]} style={{ textAlign: "center" }}>
                                        You
                                    </td>
                                    <td className={styles["page9__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        are
                                    </td>
                                    <td className={styles["page9__table-adverb"]}></td>
                                    <td className={styles["page9__table-verb"]}></td>
                                    <td className={styles["page9__table-complement"]}>
                                        in class 2-B{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page9__icon"]}
                                            onClick={() => playAudio(pg9Audio2)}
                                        />
                                    </td>
                                    <td className={styles["page9__table-translation"]}>
                                        Você está na sala de aula (turma/classe) 2-B.{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page9__icon"]}
                                            onClick={() => playAudio(traducaoAudio2)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page9__table-subject"]} style={{ textAlign: "center" }}>
                                        You
                                    </td>
                                    <td className={styles["page9__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        are
                                    </td>
                                    <td className={styles["page9__table-adverb"]}></td>
                                    <td className={styles["page9__table-verb"]}></td>
                                    <td className={styles["page9__table-complement"]}>
                                        only 12 years old{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page9__icon"]}
                                            onClick={() => playAudio(pg9Audio3)}
                                        />
                                    </td>
                                    <td className={styles["page9__table-translation"]}>
                                        Você tem apenas 12 anos de idade.{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page9__icon"]}
                                            onClick={() => playAudio(traducaoAudio3)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles["page9__table"]}>
                            <colgroup>
                                <col className={styles["page9__table-subject"]} />
                                <col className={styles["page9__table-auxiliary"]} />
                                <col className={styles["page9__table-adverb"]} />
                                <col className={styles["page9__table-verb"]} />
                                <col className={styles["page9__table-complement"]} />
                                <col className={styles["page9__table-translation"]} />
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
                                                    className={styles["page9__table-input"]}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                                                    style={{
                                                        resize: "none",
                                                        overflowWrap: "break-word",
                                                        wordWrap: "break-word",
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

export default Pagina9;
