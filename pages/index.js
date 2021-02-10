import Head from 'next/head'
import Prismic from "prismic-javascript"
import { client } from "../prismic-configuration"


import styles from '../styles/Home.module.css'

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.container}>
     <h1>Test technique</h1>
     <ul>
       {props.articles.results.map(article => (
         <li key={article.id}>{article.uid}</li>
       )
       )}
     </ul>
    </div>
  )
}

export async function getStaticProps() {
  //const category = await client.query(Prismic.Predicates.at("document.type", "category"))
  const articles = await client.query(Prismic.Predicates.at("document.type", "article")
  );
  return {
    props: {
      //category,
      articles,
    },
  }
}