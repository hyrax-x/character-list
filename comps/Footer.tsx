import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <section className={`section ${s.section}`}>
        <div className={`sectionContent ${s.sectionContent}`}>
          <h2 className={`${s.h2}`}>Contact me</h2>
          <address>
            <ul className={s.ul}>
              <li className={s.li}>
                <p>
                  Email:{` `}
                  <a
                    href="mailto:tong.quocviet1234@gmail.com"
                    aria-label="my email address"
                    rel="noopener noreferrer"
                  >
                    tong.quocviet1234@gmail.com
                  </a>
                </p>
              </li>
              <li className={s.li}>
                <p>
                  Youtube:{` `}
                  <a
                    href="https://www.youtube.com/@Hydrocivik"
                    target="_blank"
                    aria-label="Link to my youtube channel"
                    rel="noopener noreferrer"
                  >
                    @Hydrocivik
                  </a>
                </p>
              </li>
              <li className={s.li}>
                <p>
                  Instagram:{` `}
                  <a
                    href="https://www.instagram.com/hyrax.zip"
                    target="_blank"
                    aria-label="Link to my instagram"
                    rel="noopener noreferrer"
                  >
                    @hyrax.zip
                  </a>
                </p>
              </li>
              <li className={s.li}>
                <p>
                  Facebook:{` `}
                  <a
                    href="https://www.facebook.com/viet.tongquoc.9843/"
                    target="_blank"
                    aria-label="Link to my facebook account"
                    rel="noopener noreferrer"
                  >
                    viet.tongquoc.9843
                  </a>
                </p>
              </li>
              <li className={s.li}>
                <p>
                  Bluesky:{` `}
                  <a
                    href="https://bsky.app/profile/hyrax-x.bsky.social"
                    target="_blank"
                    aria-label="Link to my Bluesky account"
                    rel="noopener noreferrer"
                  >
                    @hyrax-x.bsky.social
                  </a>
                </p>
              </li>
              <li className={s.li}>
                <p>
                  Github:{` `}
                  <a
                    href="https://github.com/hyrax-x"
                    target="_blank"
                    aria-label="Link to my Github account"
                    rel="noopener noreferrer"
                  >
                    @hyrax-x
                  </a>
                </p>
              </li>
            </ul>
          </address>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
