import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Layout = styled.div`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-top: 50px;
`;

const CreationDate = styled.p`
  font-style: italic;
  font-weight: light;
`;

const Paragraphe = styled.p`
  width: 80%;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 50px;
`;

export default function ArticleLayout({ data }) {
  function formatDate(date) {
    const publishedDate = new Date(date);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return publishedDate.toLocaleDateString("fr-FR", options);
  }
  return (
    <Layout>
      <Title>{RichText.asText(data.title)}</Title>
      <CreationDate>{`Publié le ${formatDate(data.date)}`}</CreationDate>
      <img src={data.image.url} alt="" height="400px" />
      <Paragraphe>{RichText.asText(data.paragraphe)}</Paragraphe>
    </Layout>
  );
}
