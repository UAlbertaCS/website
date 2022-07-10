import Link from "next/link";
import Title from "../components/common/Title";
import Footer from "../components/footer/Footer";
import NotFound from "../components/main/NotFound";
import Navbar from "../components/Navbar";

const Custom404 = () => {
  return (
    <>
      <Title title="Page Missing 🔭" />
      <Navbar />
      <main>
        <NotFound />
      </main>
      <Footer />
    </>
  );
};
export default Custom404;
