import Link from "next/link";
import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <nav className={s.navbar}>
        <Link href="/" className={s.logo}>
          &lt;&gt; Hyrax-x
        </Link>

        <ul className={s.ul}>
          <li className={s.li}>
            <Link href="/about-me">
              <div className="button">About Me</div>
            </Link>
          </li>
          <li className={s.li}>
            <Link href="/character-list">
              <div className="button">Character list</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
