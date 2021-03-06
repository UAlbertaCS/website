import Title from "../components/common/Title";
import CONSTANTS from "../components/constants/constants";
import Footer from "../components/footer/Footer";
import Chat from "../components/main/Chat";
import Hero from "../components/main/Hero";
import Sign from "../components/main/Sign";
import Story from "../components/main/Story";
import Supporters from "../components/main/Supporters";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Title title={CONSTANTS.DEFAULT_TITLE} />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Supporters />
        <Sign />
        <Chat />
      </main>
      <Footer />
    </>
  );
};

export default Home;
