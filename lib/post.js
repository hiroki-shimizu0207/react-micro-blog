import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "pages/posts");
//
// 現在のディレクトリンポ取得

// mdファイルのデータを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // ファイル名

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8"); // ファイルの中身を見る
    const matterResult = matter(fileContents);

    // idとデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostData;
}
