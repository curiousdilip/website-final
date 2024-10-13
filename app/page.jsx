import Link from "next/link";
import styles from "./page.module.scss";
export default function Home() {
  return (
   <main>
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>
          Unlock The Secrets of <span>Waste To Biofuel</span> &<br/>
Green Energy Industry & <span>Earn 2,75,990+ Per Month</span>
          </h2>
        <div className={styles.btn}>
        <h3>
          We Have Helped Our Clients Generate ₹24.57 Crores ($3 Million+)<br/>
          This is ABSOLUTELY possible in the Trillion $ Green Energy & Biofuel Sector
          </h3>
        </div>

  
        </div>
      </div>
    </section>
   </main>
  );
}