import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
          neque, commodo non placerat nec, faucibus hendrerit risus. Phasellus
          mattis purus mi, ac venenatis urna fringilla vitae. Duis malesuada
          lacus.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
          neque, commodo non placerat nec, faucibus hendrerit risus. Phasellus
          mattis purus mi, ac venenatis urna fringilla vitae. Duis malesuada
          lacus.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja List</a>
        </Link>
      </div>
    </>
  );
}
