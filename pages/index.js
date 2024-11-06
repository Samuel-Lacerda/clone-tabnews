import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Manozita</h1>
      <p className={styles.text}>
        Tu és pra mim um chuchu que colhi na vida ❤️
      </p>
      <div className={styles.container2}>
        <a
          href="https://www.youtube.com/watch?v=VTNen48uCKA"
          target="_blank"
          className={styles.link}
        >
          Clica aqui
        </a>
      </div>
    </div>
  );
}

export default Home;
