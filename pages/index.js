import Layout from "../components/Layout/Layout";
import HomeContainer from "../containers/HomeContainer/HomeContainer"

export default function Home({...categorias}) {


  return (
    <>
    <Layout title="Rick And Morty Test API">
      <HomeContainer data={categorias}/>
    </Layout>
    </>
      );
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://rickandmortyapi.com/api/')
  const data = await res.json()
 
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props:data
  }
}