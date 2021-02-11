import { client } from "../../prismic-configuration";
import Thumbnail from "../../components/Thumbnail";
import Prismic from "prismic-javascript";
import styled from "styled-components";

const Layout = styled.div`
  width: 90%;
  margin: auto;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: normal;
  margin-left: 130px;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Cat = styled.span`
  text-transform: capitalize;
`;

export default function Category({ data, articles }) {
  //Filter the articles to keep only the articles of the visited category
  const newArticles = articles.results.filter((article) => {
    return article.data.category.uid === data.category;
  });

  return (
    <Layout>
      <Title>
        Catégorie: <Cat>{data.category}</Cat>
      </Title>
      <List>
        {newArticles.map((article) => (
          <Thumbnail article={article} key={article.id} />
        ))}
      </List>
    </Layout>
  );
}

//Getting props from Prismic

export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await client.getByUID("category", uid);
  const articles = await client.query([
    Prismic.Predicates.at("document.type", "article"),
  ]);
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
