import Prismic from "prismic-javascript";
import Link from "next/link";
import { client } from "../prismic-configuration";
import { useState } from "react";
import styled from "styled-components";
import Thumbnail from "../components/Thumbnail";
import PostCodeForm from "../components/PostCodeForm";
import CityInfo from "../components/CityInfo";

// const UnorderedList = styled.ul`
//   list-style: none;
//   background-color: red
// `

export default function Home({ categories, articles }) {
  //States, to handle postal code, city and the component to render.
  const [postalCode, setPostalCode] = useState("");
  const [isReasearchDone, setIsReasearchDone] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  //fetch function for retrieve city name with postal code
  function getCityName(e) {
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
              <Thumbnail article={article} key={article.id} />
            ))}
          </ul>
        </div>
      ))}
      {!isReasearchDone ? (
        <PostCodeForm
          getCityName={(e) => getCityName(e)}
          postalCode={postalCode}
          setPostalCode={(event) => setPostalCode(event)}
        />
      ) : (
        <CityInfo selectedCity={selectedCity} postalCode={postalCode} />
      )}
    </div>
  );
}

//Getting props from Prismic
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
