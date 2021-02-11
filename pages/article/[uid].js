import { client } from "../../prismic-configuration";
import Prismic from "prismic-javascript";
import ArticleLayout from "../../components/ArticleLayout";

export default function Article({ data }) {
  return <ArticleLayout data={data} />;
}

export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await client.getByUID("article", uid);
  return {
    props: { data },
  };
}

//Getting props from Prismic
export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "article")
  );

  const paths = results.map((article) => ({
    params: {
      uid: article.uid,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
