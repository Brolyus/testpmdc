import { RichText } from "prismic-reactjs";

export default function ArticleLayout({ data }) {
  return (
    <div>
      <h3>{RichText.asText(data.title)}</h3>
      <p>{data.date}</p>
      <img src={data.image.url} alt="" height="400px" />
      <p>{RichText.asText(data.paragraphe)}</p>
    </div>
  );
}
