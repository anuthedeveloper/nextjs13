import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

function Post() {
  const router = useRouter();

  const slugPage = router.query.slug;

  const isBlogIndex = slugPage === "the-goat-files";
  const isArticle = slugPage === "article";

  return (
    <main className={styles.main}>
      {/* <Nav /> */}
      <br />
      {/* Current Page */}
      <h3 className={styles.center}>{slugPage} Page</h3>
      <div>{isBlogIndex && <h4>{isBlogIndex} page</h4>}</div>
      <div>{isArticle && <h5>Blog {isBlogIndex} page</h5>}</div>
      <p>Welcome to {slugPage} Page</p>
    </main>
  );
}

export default Post;
