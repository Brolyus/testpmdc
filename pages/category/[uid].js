import { client } from "../../prismic-configuration";
import Link  from 'next/link';
import {RichText} from "prismic-reactjs"
import Prismic from "prismic-javascript";

export default function Category({ data, articles }) {

  //Filter the articles to keep only the articles of the visited category
  const newArticles = articles.results.filter(article => {
       return article.data.category.uid === data.category
      })


  return (
    <div>
        <h3>Catégorie: <span></span>{data.category}</h3>
        <ul>
          {newArticles.map(article => (
            <li key={article.id}>
              <Link href="/article/[uid]" as={`/article/${article.uid}`}>
                <a>
                  <img src={article.data.image.url} alt="" height="120px" />
                  <p>{article.data.date}</p>
                  <h4>
                    {RichText.asText(article.data.title)}
                  </h4>
                  <p>{RichText.asText(article.data.paragraphe).slice(0,20) + ' ...'}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await client.getByUID("category", uid);
  const articles = await client.query([Prismic.Predicates.at('document.type', 'article')])
  return {
    props: { data, articles },
  };
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "category")
  );

  const paths = results.map((category) => ({
    params: {
      uid: category.slugs[0],
    },
  }));
  return {
    paths,
    fallback: false,
  };
}