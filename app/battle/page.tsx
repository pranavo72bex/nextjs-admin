import styles from './battle.module.css';
const CSSBattlePage = () => {
    return (
        <div className={styles.battleground}>
            {/* simple square */}
            <div className={styles.simplesqure1}>
                <div className={styles.simplesqure2}></div>
            </div>
            {/* simple carrom */}
            <div className={styles.carrom}>
                <div className={styles.Row}>
                    <div className={styles.yellowBox}></div>
                    <div className={styles.yellowBox}></div>
                </div>
                <div className={styles.Row}>
                    <div className={styles.yellowBox}></div>
                    <div className={styles.yellowBox}></div>
                </div>
            </div>
            {/* push button */}
            <div className={styles.pushbuttonbackground}>
                <div className={styles.pushbuttonrectangle}>
                    <div className={styles.pushbuttoncircle}>
                        <div className={styles.pushbutton}>
                            <div className={styles.yellocirclepushbutton}>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*upsanddowns*/}
            <div className={styles.upsanddowns}>
                <div className={`${styles.commoncontainer} ${styles.upsidedownrightcontainer}`}></div>
                <div className={styles.commoncontainer}></div>
                <div className={`${styles.commoncontainer} ${styles.upsidedownleftcontainer}`}></div>
            </div>
            {/* Acid Rain */}
            <div className={styles.acidrainbackground}>

                <div className={styles.thirdacidraincontainer}></div>
                <div className={styles.secondacidraincontainer}></div>
                <div className={styles.firstacidraincontainer}></div>
            </div>
            {/* Missing Slice */}
            <div className={styles.missingslicebackground}>
                <div>
                    <div className={`${styles.commonslicecontainer} ${styles.slicecontainerone}`}></div>
                    <div className={`${styles.commonslicecontainer} ${styles.slicecontainertwo}`}></div>
                </div>
                <div>
                    <div className={`${styles.commonslicecontainer} ${styles.slicecontainerthree}`}></div>
                    <div className={`${styles.commonslicecontainer} ${styles.slicecontainerfour}`}></div>
                </div>
            </div>

            {/* leafy traii */}
            <div className={styles.leafytrailbackground}>
                <div className={`${styles.leafytrailcontainerback} ${styles.leafytrailcontainer}`}></div>
                <div className={`${styles.leafytrailcontainercenter} ${styles.leafytrailcontainer}`}></div>
                <div className={`${styles.leafytrailcontainerfront} ${styles.leafytrailcontainer}`}></div>
            </div>


            {/* Forking Crazy */}
            <div className={styles.forkingcrazybackground}>
                <div className={styles.forkpoint}>
                    <div className={styles.forkslotfill}></div>
                    <div className={styles.forkslotempty}></div>
                    <div className={styles.forkslotfill}></div>
                    <div className={styles.forkslotempty}></div>
                    <div className={styles.forkslotfill}></div>
                    <div className={styles.forkslotempty}></div>
                    <div className={styles.forkslotfill}></div>
                </div>
                <div className={styles.forkbase}> </div>
                <div className={styles.forkhandle}></div>
            </div>

            {/* Tesseract */}
            <div className={styles.tesseractbackground}>
                <div className={styles.tesseractreactangle}>
                    <div className={styles.tesseractbigsqure}>
                        <div className={styles.tesseractsmallsqure}>
                            <div className={styles.tesseractcircle}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cloaked Sprits */}
            <div className={styles.cloakedspirtsbackground}>
                <div className={styles.cloakedspirtsfirst}>
                    <div className={styles.cloakedspirtsbrowncircle}>
                        <div className={styles.cloakedspirtsorangecircle}></div>
                    </div>
                </div>
                <div className={styles.cloakedspirtssecond}>
                    <div className={styles.cloakedspirtscentercircle}>
                        <div className={styles.cloakedspirtsorangecentercircle}></div>
                    </div>
                </div>
                <div className={styles.cloakedspirtsfirst}>
                    <div className={styles.cloakedspirtsbrowncircle}>
                        <div className={styles.cloakedspirtsorangecircle}></div>
                    </div>
                </div>
            </div>
            {/* Eye of Sauron */}
            <div className={styles.eyeofsauronbackground}>
                <div className={`${styles.eyeofsauronsidering} ${styles.eyeofsauronsideringleft}`}></div>
                <div className={styles.eyeofsauroncircleouterring}>
                    <div className={styles.eyeofsauronblackcirclering}>
                        <div className={styles.eyeofsauronredcirclering}></div>
                    </div>
                </div>
                <div className={`${styles.eyeofsauronsidering} ${styles.eyeofsauronsideringright}`}>
                </div>
            </div>
            {/* Wiggly Moustache */}
            <div className={styles.wigglemoustachebackground}>
                <div className={`${styles.wigglemoustachecontainerend} ${styles.wigglemoustachecontainerendleft}`}></div>
                <div className={`${styles.wigglemoustachecontainer} ${styles.wigglemoustachecontainerleft}`}></div>
                <div className={`${styles.wigglemoustachecontainer} ${styles.wigglemoustachecontainercenter}`}></div>
                <div className={`${styles.wigglemoustachecontainer} ${styles.wigglemoustachecontainerright}`}></div>
                <div className={`${styles.wigglemoustachecontainerend} ${styles.wigglemoustachecontainerendright}`}></div>
            </div>
            {/* Totally Triangle */}
            <div className={styles.totallytrianglebackground}>
                <div className={styles.totallytrianglecontainer}></div>
            </div>
            {/* Web Maker Logo */}
            <div className={styles.webmakerlogobackground}>
                <div className={`${styles.webmakerlogotriangle} ${styles.backlefttriangle}`}></div>
                <div className={`${styles.webmakerlogotriangle} ${styles.frontlefttriangle}`}></div>
                <div className={`${styles.webmakerlogotriangle} ${styles.backrighttriangle}`}></div>
                <div className={`${styles.webmakerlogotriangle} ${styles.frontrighttriangle}`}></div>
            </div>
        </div>
    );
}
export default CSSBattlePage;

