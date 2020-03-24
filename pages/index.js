// import { CSSReset } from '@chakra-ui/core';
import { Layout, Header, Navbar } from "../components/index";

const Home = () => (
  <Layout title="questions">
    <Header />
    <Navbar />
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}</style>
  </Layout>
);

export default Home;
