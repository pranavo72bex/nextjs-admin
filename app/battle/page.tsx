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
        </div>
    );
}
export default CSSBattlePage;

