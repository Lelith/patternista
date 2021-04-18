import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PatternCard from '../components/PatternCard'

const Home = ({patterns}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      {patterns.map((entry) => (
        <PatternCard pattern={entry.fields} key={entry.sys.id}/>
      ))}
      </div>
    </div>
  )
}

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticProps = async () => {
  return client.getEntries({
    content_type: 'pattern'
  })
  .then((response) => {
    return {props: {patterns: response.items}}
  })
  .catch(console.error)
}

export default Home;
