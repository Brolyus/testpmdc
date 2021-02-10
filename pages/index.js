import Head from "next/head";
import Prismic from "prismic-javascript";
import Link from "next/link";
import { client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";

export default function Home({ categories, articles }) {
  console.log(categories);
  console.log(articles);

  const [postalCode, setPostalCode] = useState("");
  const [isReasearchDone, setIsReasearchDone] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  function getPostalCodeInfo(e) {
    e.preventDefault();
    fetch(`https://apicarto.ign.fr/api/codes-postaux/communes/${postalCode}`)
      .then((response) => response.json())
      .then((data) => setSelectedCity(data[0].nomCommune))
      .then(setIsReasearchDone(true));
  }

  return (
    <div>
      {categories.results.map((category) => (
        <div key={category.id}>
          <Link href="/category/[uid]" as={`/category/${category.uid}`}>
            <h3>{category.uid}</h3>
          </Link>
          <ul>
            {articles.results.map((article) => (
              <li key={article.id}>
                <Link href="/article/[uid]" as={`/article/${article.uid}`}>
                  <a>
                    <img src={article.data.image.url} alt="" height="120px" />
                    <p>{article.data.date}</p>
                    <h4>{RichText.asText(article.data.title)}</h4>
                    <p>
                      {RichText.asText(article.data.paragraphe).slice(0, 20) +
                        " ..."}
                    </p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {!isReasearchDone ? (
        <form>
          <p>Recevez les règles d'urbanisme pour votre ville !</p>
          <label name="postalCode">
            Votre code postal:
            <input
              type="text"
              value={postalCode}
              onChange={(event) => setPostalCode(event.target.value)}
            />
          </label>
          <input
            type="submit"
            value="Valider"
            onClick={(e) => getPostalCodeInfo(e)}
          />
        </form>
      ) : (
        <section>
          <h3>{`${selectedCity} (${postalCode})`}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam
            risus, ultricies nec scelerisque ut, dictum ut nisl. Suspendisse
            gravida commodo viverra. Sed laoreet lorem et erat rutrum, vitae
            sollicitudin orci sollicitudin. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Praesent
            dapibus metus id dolor varius egestas. Mauris finibus molestie orci,
            id imperdiet nisi gravida eu. Donec dignissim maximus neque, ac
            auctor est porttitor commodo. Suspendisse eget efficitur justo, id
            varius sem. Quisque auctor urna justo, quis aliquam felis iaculis
            eu. Quisque finibus, tortor eget fringilla luctus, erat leo
            facilisis lacus, vel mattis purus magna a mauris. Quisque a sapien
            nunc. Morbi tristique metus nibh, ac venenatis urna egestas vel.
            Vivamus rutrum dui dignissim, laoreet nunc mollis, faucibus odio.
            Pellentesque at sem auctor neque elementum placerat. Morbi cursus
            dictum leo eu tempus. Vestibulum nulla odio, hendrerit quis urna et,
            efficitur dignissim orci. Ut vel dapibus diam. In gravida lacus
            pulvinar elit hendrerit pulvinar. Nunc ut lacus nisi. Quisque id
            tellus nunc. Duis ut velit vitae sem placerat laoreet. Nulla
            facilisi. Integer id ultricies mi, vel dictum nisl.
          </p>
        </section>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const categories = await client.query(
    Prismic.Predicates.at("document.type", "category")
  );
  const articles = await client.query(
    Prismic.Predicates.at("document.type", "article")
  );
  return {
    props: {
      categories,
      articles,
    },
  };
}
