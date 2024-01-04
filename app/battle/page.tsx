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
        </div>
    );
}
export default CSSBattlePage;

