import Link from "next/link";
import Title from "../components/common/Title";
import CONSTANTS from "../components/constants/constants";
import Hero from "../components/main/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Title title={CONSTANTS.DEFAULT_TITLE} />
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;