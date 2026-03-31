import React, { useState } from 'react';

import styles from './pagina1.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina1_imagem1 from '../assets/images/pagina1_imagem1.webp';
import pagina1_imagem2 from '../assets/images/pagina1_imagem2.webp';
import pg1_audio1e from '../assets/audios/pg1_audio1e.mp3';
import pg1_audio1p from '../assets/audios/pg1_audio1p.mp3';

const Pagina1 = () => {
    const [currentAudio, setCurrentAudio] = useState(null);

    const playAudio = (audioSrc) => {

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const newAudio = new Audio(audioSrc);
        newAudio.play();
        setCurrentAudio(newAudio);
    };

    return (
        <div>
            <img className={styles["page1__image--first"]} src={pagina1_imagem1} alt="" />
            <img className={styles["page1__image--second"]} src={pagina1_imagem2} alt="" />

            <div className={styles["page1__unit"]} onClick={() => playAudio(pg1_audio1)}>
                <p>UNIT 1A</p>
               
            </div>

            <div className={styles["page1__title"]}>
                <h1>People <br />and <br /> Places</h1>
                <p>First Edition <img
                    src={eng_audio_icon}
                    alt="English Audio"
                    className={styles["page1__icon"]}
                    onClick={() => playAudio(pg1_audio1e)}
                />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese Audio"
                        className={styles["page1__icon"]}
                        onClick={() => playAudio(pg1_audio1p)}
                    /></p>
            </div>
        </div>
    );
};

export default Pagina1;
