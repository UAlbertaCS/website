import Link from "next/link";

const Navbar = () => {
  return (
    <header id="header" className="header">
      <div>
        <Link href="#">
          <img
            alt="logo"
            className="pointer"
            src={"logo.svg"}
            title="UAlberta CS"
          />
        </Link>
      </div>
      <div className="header__container">
        <ul>
          <li title="Home">
            <Link href="#">Home</Link>
          </li>
          <li title="Petition">
            <Link href="#petition">Petition</Link>
          </li>
          <li title="Chat with us">
            <Link href="#chat">Chat with us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
