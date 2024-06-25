import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "./components/Layout";
import Link from "next/link";
import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

// SSGの場合
// ビルド時に一度だけ読み込む
// getStaticProps 外部から一度だけファイルを持ってくる
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// // SSRの場合
// export async function getServerSideProps(context) {

//   return {
//     props: {
//       // コンポーネントに渡すためのprops

//     },
//   };
// }

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <section className={utilStyle.headingMd}>
          <p>テストテストテストテストテストテストテスト</p>
        </section>
        <section>
          <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => {
              return (
                <article key={id}>
                  <Link href={`/posts/${id}`}>
                    <img src={`${thumbnail}`} className={styles.thumbnailImage} alt="" />
                  </Link>
                  <Link href={`/posts/${id}`}>
                    <p>{title}</p>
                  </Link>
                  <small>{date}</small>
                </article>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}
