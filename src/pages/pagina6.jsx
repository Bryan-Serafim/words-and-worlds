import React, { useState, useRef } from 'react';

import styles from './pagina6.module.css';

import campainha from '../assets/icons/campainha.png';
import pg6IconNotes from '../assets/icons/notes_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png';

import bell from '../assets/audios/bell.mp3';
import globalVerboToBe from '../assets/audios/global_verbo_to_be.mp3';
import globalGrammar from '../assets/audios/global_grammar.mp3';
import globalSimplePresent from '../assets/audios/global_simple_present.mp3';
import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import adverbioNot from '../assets/audios/adverbio_not.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import traducaoAudio1 from '../assets/audios/pg6_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg6_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg6_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg6_trad4.mp3';
import pg6Audio1 from '../assets/audios/pg6_audio1.mp3';
import pg6Audio2 from '../assets/audios/pg6_audio2.mp3';
import pg6Audio3 from '../assets/audios/pg6_audio3.mp3';
import pg6Audio4 from '../assets/audios/pg6_audio4.mp3';

const Pagina6 = () => {
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
        <div className={styles["page6"]}>
            <div className={styles["page6__container"]}>
                <header className={styles["page6__header"]}>
                    <h1 className={styles["page6__header-title"]}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page6__icon"]}
                            onClick={() => playAudio(globalGrammar)}
                        />
                    </h1>
                    <h2
                        className={styles["page6__header-subtitle"]}
                        style={{ color: "black" }}
                    >
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page6__icon"]}
                            onClick={() => playAudio(globalSimplePresent)}
                        />
                    </h2>
                    <h3 className={styles["page6__header-description"]}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                    </h3>
                </header>


                <main className={styles["page6__main"]}>
                    <div>
                        <div
                            className={styles["page6__table-header"]}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White Icon"
                                className={styles["page6__icon-left"]}
                            />
                            NEGATIVE
                        </div>

                        <table className={styles["page6__table"]}>
                            <colgroup>
                                <col className={styles["page6__table-subject"]} />
                                <col className={styles["page6__table-auxiliary"]} />
                                <col className={styles["page6__table-adverb"]} />
                                <col className={styles["page6__table-verb"]} />
                                <col className={styles["page6__table-complement"]} />
                                <col className={styles["page6__table-translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>
                                        Subject
                                    </th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioNot)} style={{ cursor: "pointer" }}>
                                        <span style={{ color: "red" }}>'Not'</span> <br /> Adverb
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
                                    <td className={styles["page6__table-subject"]} style={{ textAlign: "center" }}>
                                        I
                                    </td>
                                    <td className={styles["page6__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        am
                                    </td>
                                    <td className={styles["page6__table-adverb"]} style={{ textAlign: "center", color: "red" }}>
                                        not
                                    </td>
                                    <td className={styles["page6__table-verb"]}></td>
                                    <td className={styles["page6__table-complement"]}>
                                        Pedro{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page6__icon"]}
                                            onClick={() => playAudio(pg6Audio1)}
                                        />
                                    </td>
                                    <td className={styles["page6__table-translation"]}>
                                        Eu <span style={{ color: "red" }}>não</span> sou Pedro{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page6__icon"]}
                                            onClick={() => playAudio(traducaoAudio1)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page6__table-subject"]} style={{ textAlign: "center" }}>
                                        I
                                    </td>
                                    <td className={styles["page6__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        am
                                    </td>
                                    <td className={styles["page6__table-adverb"]} style={{ textAlign: "center", color: "red" }}>
                                        not
                                    </td>
                                    <td className={styles["page6__table-verb"]}></td>
                                    <td className={styles["page6__table-complement"]}>
                                        at work{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page6__icon"]}
                                            onClick={() => playAudio(pg6Audio2)}
                                        />
                                    </td>
                                    <td className={styles["page6__table-translation"]}>
                                        Eu <span style={{ color: "red" }}>não</span> estou no trabalho{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page6__icon"]}
                                            onClick={() => playAudio(traducaoAudio2)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page6__table-subject"]} style={{ textAlign: "center" }}>
                                        I
                                    </td>
                                    <td className={styles["page6__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        am
                                    </td>
                                    <td className={styles["page6__table-adverb"]} style={{ textAlign: "center", color: "red" }}>
                                        not
                                    </td>
                                    <td className={styles["page6__table-verb"]}></td>
                                    <td className={styles["page6__table-complement"]}>
                                        sixteen years old{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page6__icon"]}
                                            onClick={() => playAudio(pg6Audio3)}
                                        />
                                    </td>
                                    <td className={styles["page6__table-translation"]}>
                                        Eu <span style={{ color: "red" }}>não</span> tenho (dezesseis) anos de idade{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page6__icon"]}
                                            onClick={() => playAudio(traducaoAudio3)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page6__table-subject"]} style={{ textAlign: "center" }}>
                                        I
                                    </td>
                                    <td className={styles["page6__table-auxiliary"]} style={{ textAlign: "center", color: "red" }}>
                                        ain't
                                    </td>
                                    <td className={styles["page6__table-adverb"]}></td>
                                    <td className={styles["page6__table-verb"]}></td>
                                    <td className={styles["page6__table-complement"]}>
                                        ready yet{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page6__icon"]}
                                            onClick={() => playAudio(pg6Audio4)}
                                        />
                                    </td>
                                    <td className={styles["page6__table-translation"]}>
                                        Eu <span style={{ color: "red" }}>não</span> estou pronto ainda{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page6__icon"]}
                                            onClick={() => playAudio(traducaoAudio4)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <aside className={styles["page6__aside"]}>
                            <div className={styles["page6__new-aside-notes1"]}>
                                <img
                                    className={styles["page6__aside-img"]}
                                    onClick={() => playAudio(bell)}
                                    src={campainha}
                                    alt=""
                                />
                                <p>NOTE:</p>
                            </div>
                            <div className={styles["page6__new-aside-notes2"]}>
                                <p style={{ fontSize: "2rem" }}>
                                    Em inglês, <span style={{ color: "red" }}>not</span> vem depois do verbo <span style={{ color: "red" }}>"be"</span>, mas em portugês, <span style={{ color: "red" }}>"não"</span> vem antes do verbo, e não antes do pronome pessoal.
                                    <span style={{ fontWeight: "bold" }}> (Conforme a tabela acima)</span>
                                </p>
                            </div>
                        </aside>

                        <table className={styles["page6__table"]}>
                            <colgroup>
                                <col className={styles["page6__table-subject"]} />
                                <col className={styles["page6__table-auxiliary"]} />
                                <col className={styles["page6__table-adverb"]} />
                                <col className={styles["page6__table-verb"]} />
                                <col className={styles["page6__table-complement"]} />
                                <col className={styles["page6__table-translation"]} />
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
                                        <span style={{ color: "red" }}>'Not'</span><br /> Adverb
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
                                                    className={styles["page6__table-input"]}
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

                <aside className={styles["page6__aside"]}>
                    <div className={styles["page6__aside-notes1"]}>
                        <img
                            className={styles["page6__aside-img"]}
                            onClick={() => playAudio(bell)}
                            src={campainha}
                            alt=""
                        />
                        <p>NOTE: Forma simples / Coloquial</p>
                    </div>
                    <div className={styles["page6__aside-notes2"]}>
                        <p>
                            I am + not = <span style={{ fontWeight: "bold" }}> I'm not &nbsp;&nbsp;&nbsp;</span>
                            is + not = <span style={{ fontWeight: "bold" }}>isn't&nbsp;&nbsp;&nbsp;</span>
                            are + not = <span style={{ fontWeight: "bold" }}>aren't</span>
                            <br />
                            <span style={{ fontWeight: "bold", color: "#A61C28" }}>
                                I - He - She - It - We - You - They podem usar
                            </span>
                            <span style={{ fontWeight: "bold" }}> "ain't" na forma contraída.</span>
                        </p>
                    </div>
                </aside>

                <aside className={styles["page6__aside"]}>
                    <div className={styles["page6__aside-notes1"]}>
                        <img
                            className={styles["page6__aside-img"]}
                            onClick={() => playAudio(bell)}
                            src={campainha}
                            alt=""
                        />
                        <p>NOTE: Uso do 'Not'</p>
                    </div>
                    <div className={styles["page6__aside-notes2"]}>
                        <p>
                            <span style={{ fontWeight: "bold" }}>
                                <span style={{ color: "red" }}>Not</span>, juntamente com o verbo auxiliar, coloca os verbos na forma negativa, cuja tradução seria: <span style={{ color: "red" }}>Não</span>
                            </span>
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina6;