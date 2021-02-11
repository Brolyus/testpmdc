import Link from "next/link";
import { RichText } from "prismic-reactjs";

export default function Thumbnail({ article }) {
  return (
    <li>
      <Link href="/article/[uid]" as={`/article/${article.uid}`}>
        <a>
          <img src={article.data.image.url} alt="" height="120px" />
          <p>{article.data.date}</p>
          <h4>{RichText.asText(article.data.title)}</h4>
          <p>
            {RichText.asText(article.data.paragraphe).slice(0, 20) + " ..."}
          </p>
        </a>
      </Link>
    </li>
  );
}
