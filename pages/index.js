import Prismic from "prismic-javascript";
import Link from "next/link";
import { client } from "../prismic-configuration";
import { useState } from "react";
import styled from "styled-components";
import Thumbnail from "../components/Thumbnail";
import PostCodeForm from "../components/PostCodeForm";
import CityInfo from "../components/CityInfo";


const Layout = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
`

const CategoryLayout = styled.div`
  width: 75%;
`

const Title = styled.h3`
font-size: 24px;
line-height: 32px;
font-weight: normal;
text-transform: capitalize;
padding-left: 40px;
`

const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
`


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
    <Layout>
      {categories.results.map((category) => (
        <CategoryLayout key={category.id}>
          <Link href="/category/[uid]" as={`/category/${category.uid}`}>
            <Title>{category.uid}</Title>
          </Link>
          <UnorderedList>
            {/* The code below filter articles to retrive only 3 articles from each given category */}
            {articles.results.filter( article => article.data.category.uid === category.data.category)
              .slice(0,3)
              .map((article) => (
              <Thumbnail article={article} key={article.id} />
            ))}
          </UnorderedList>
        </CategoryLayout>
      ))}

      
      {/* We check if isResearchDone is false, this mean we have to let the form "visible" */
      !isReasearchDone ? (
        <PostCodeForm
          getCityName={(e) => getCityName(e)}
          postalCode={postalCode}
          setPostalCode={(event) => setPostalCode(event)}
        />
      ) : (
        <CityInfo selectedCity={selectedCity} postalCode={postalCode} />
      )}
    </Layout>
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
