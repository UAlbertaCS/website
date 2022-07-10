import Link from "next/link";
import Title from "../components/common/Title";
import CONSTANTS from "../components/constants/constants";
import Splash from "../components/main/splash";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Title title={CONSTANTS.DEFAULT_TITLE} />
      <Navbar />
      <main>
        <Splash />
      </main>
    </>
  );
};

export default Home;
