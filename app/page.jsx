import Link from "next/link";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <main>
      <section id="hero" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>
              Unlock The Secrets of <span>Waste To Biofuel</span> &<br />
              Green Energy Industry & <span>Earn 2,75,990+ Per Month</span>
            </h2>
            <div className={styles.btn}>
              <h3>
                We Have Helped Our Clients Generate ₹24.57 Crores ($3 Million+)
                <br />
                This is ABSOLUTELY possible in the Trillion $ Green Energy &
                Biofuel Sector
              </h3>
            </div>

            <div className={styles.row}>
              <div className={styles.col2}>
                <iframe
                  src="https://player.vimeo.com/video/718671917?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Waste to Wealth Business Workshop"
                ></iframe>
              </div>
              <div className={styles.col1}>
                <div className={styles.features}>
                  <div className={styles.box}>
                    <i class="bi bi-stopwatch"></i>
                    <h4>2 Hours Masterclass</h4>
                  </div>
                  <div className={styles.box}>
                    <i class="bi bi-stopwatch"></i>
                    <h4>2 Hours Masterclass</h4>
                  </div>{" "}
                  <div className={styles.box}>
                    <i class="bi bi-stopwatch"></i>
                    <h4>2 Hours Masterclass</h4>
                  </div>{" "}
                  <div className={styles.box}>
                    <i class="bi bi-stopwatch"></i>
                    <h4>2 Hours Masterclass</h4>
                  </div>
                </div>
                <div className={styles.ctaBtn}>
                  <a href="#">Reserve My Seat</a>
                  <i class="bi bi-arrow-right-short"></i>
                </div>
                <div className={styles.peoples}>
                  <img src="/img/peoples.png" alt="" />{" "}
                  <p>20+ people have already enrolled</p>
                </div>
              </div>
            </div>

            <div className={styles.featured}>
              <h2>Featured In</h2>
              <div className={styles.brands}>
                <img src="/img/peoples.png" alt="" />
                <img src="/img/peoples.png" alt="" />
                <img src="/img/peoples.png" alt="" />
                <img src="/img/peoples.png" alt="" />
                <img src="/img/peoples.png" alt="" />
                <img src="/img/peoples.png" alt="" />
                <img src="/img/peoples.png" alt="" />
                <img src="/img/peoples.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
