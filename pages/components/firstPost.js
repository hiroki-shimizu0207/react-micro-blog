import Head from "next/head";
import Link from "next/link";

export default function firstPost() {
  return (
    <>
      <Head>
        <title>最初の投稿</title>
      </Head>
      <div>
        <h1>最初の投稿</h1>
        <Link href="/">ホームに戻る</Link>
      </div>
    </>
  );
}
