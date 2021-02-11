import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Layout = styled.div`
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function ArticleLayout({ data }) {
  return (
    <Layout>
      <h3>{RichText.asText(data.title)}</h3>
      <p>{data.date}</p>
      <img src={data.image.url} alt="" height="400px" />
      <p>{RichText.asText(data.paragraphe)}</p>
    </Layout>
  );
}
