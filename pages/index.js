import Head from "next/head";
import styles from "../styles/Home.module.css";
import Scarecrow from "../assets/Scarecrow.png";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>404 | Page not found</title>
                <meta
                    name="description"
                    content="404! Page not found. The page you are trying to find does not exist. Please check the url."
                />

                <meta property="og:title" content="404 | Page not found" />
                <meta
                    property="og:description"
                    content="404! Page not found. The page you are trying to find does not exist. Please check the url."
                />
                <meta property="og:url" content="https://404.harrsh.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="PERMALINK" />
                <meta property="og:site_name" content="404 | Page not found" />

                <link rel="canonical" href="https://404.harrsh.com/" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.header}>404 not found</div>

                <div className={styles.body}>
                    <div className={styles.imageContainer}>
                        <div className={styles.image}>
                            <Image src={Scarecrow} alt="Scarecrow" />
                        </div>
                    </div>

                    <div className={styles.bodyText}>
                        <div className={styles.contentHeading}>
                            I have bad news for you
                        </div>

                        <div className={styles.contentPara}>
                            The page you are looking for might be removed or is
                            temporarily unavailable
                        </div>

                        <div className={styles.contentButton}>
                            Back to homepage
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    Created by{" "}
                    <a
                        href="https://github.com/harrsh2124"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @harrsh2124
                    </a>{" "}
                    - devChallenges.io
                </div>
            </main>
        </div>
    );
}
