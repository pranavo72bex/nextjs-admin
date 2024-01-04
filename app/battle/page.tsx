import styles from './battle.module.css';
const CSSBattlePage = () => {
    return (
        <div className={styles.battleground}>
            <div className={styles.simplesqure1}>
                <div className={styles.simplesqure2}></div>
            </div>

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
        </div>
    );
}
export default CSSBattlePage;

