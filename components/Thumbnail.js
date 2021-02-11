import Link from "next/link";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const List = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
`;

const DateParagraphe = styled.p`
  display: flex;
  margin: 0;
  width: 40px;
  padding: 5px;
  position: relative;
  top: -120px;
  text-align: center;
  border-radius: 3px;
  background-color: #29b394;
  color: #ffffff;
`;

const Paragraphe = styled.p`
  margin-top: -20px;
`;

export default function Thumbnail({ article }) {
  function formatDate(date) {
    const publishedDate = new Date(date);
    const options = { day: "numeric", month: "short" };
    return publishedDate.toLocaleDateString("fr-FR", options);
  }
  return (
    <List>
      <Link href="/article/[uid]" as={`/article/${article.uid}`}>
        <a>
          <img
            src={article.data.image.url}
            alt={article.data.image.alt}
            height="120px"
          />
          <DateParagraphe>{formatDate(article.data.date)}</DateParagraphe>
          <Paragraphe>
            {RichText.asText(article.data.paragraphe).slice(0, 20) + " ..."}
          </Paragraphe>
        </a>
      </Link>
    </List>
  );
}
