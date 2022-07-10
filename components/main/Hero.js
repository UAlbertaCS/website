import Link from "next/link";
import TopAside from "./TopAside";

const Hero = () => {
  return (
    <div className="hero" id="top">
      <div className="hero__container">
        <h1>UAlberta CS</h1>
        <p>
          Our Story 📖
          <br />
          Our Demands ✊<br />
          Our Vision 🌟
        </p>
        <Link href="#story" passHref>
          <button title="Our Story">Our Story</button>
        </Link>
      </div>
      <TopAside />
    </div>
  );
};
export default Hero;
