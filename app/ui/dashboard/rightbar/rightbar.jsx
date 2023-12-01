import { MdPlayCircleFilled, MdReadMore } from "react-icons/md"
import styles from "./rightbar.module.css"
import Image from "next/image"

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bgImage} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the main dashboard</h3>
                    <span className={styles.subtitle}>Take 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tortor sapien.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Learn
                    </button>
                </div>


            </div>
            <div className={styles.item}>

                <div className={styles.texts}>
                    <span className={styles.notification}>🚀 Comming Soon</span>
                    <h3 className={styles.title}>New server action are available, partial pre-rendering is coming soon</h3>
                    <span className={styles.subtitle}>Boost your productivity</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tortor sapien.
                    </p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>


            </div>
        </div>
    )
}
export default Rightbar