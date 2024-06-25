import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyles from "../../styles/utils.module.css";

const name = "Hiroki";
export const siteTitle = "Next.js blog";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <header className="header">
        <img className={utilsStyles.borderCircle} src="/images/profile.png" />
        <h1 className={utilsStyles.heading2X1}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
