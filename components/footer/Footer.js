import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__container">
        <div>
          <p>🏫 UAlberta CS</p>
          <hr />
          <ul>
            <li title="Home">
              <Link href="/">Home</Link>
            </li>
            <li title="Petition">
              <Link href="/#petition">Petition</Link>
            </li>
            <li title="Chat with us">
              <Link href="/#chat">Chat with us</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link href="/">
            <img
              className="pointer"
              src={"/logo.svg"}
              alt="UAlberta CS Logo"
              title="UAlberta CS"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
