import Link from "next/link";
import TopAside from "./TopAside";

const NotFound = () => {
  return (
    <div className="hero" id="top">
      <div className="hero__container">
        <h1>Lost your vision?</h1>
        <Link href="https://discord.gg/jqwYKGmm3h" passHref target="_blank">
          <button title="Join our Discord">Join our Discord</button>
        </Link>
      </div>
      <TopAside />
    </div>
  );
};
export default NotFound;
