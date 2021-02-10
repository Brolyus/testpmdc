import { client } from "../../prismic-configuration";
import {RichText} from "prismic-reactjs"
import Prismic from "prismic-javascript";

export default function Article({ data }) {
    console.log(data)
  return (
    <>
        <h3>test</h3>
        <h4>{data.date}</h4>
        <p>{RichText.asText(data.paragraphe)}</p>
        <img src={data.image.url} alt="" height="120px"/>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await client.getByUID("article", uid);
  return {
    props: { data },
  };
}

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