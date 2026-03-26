import s from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <main className="page" id="about-me-page">
      <section className={`section`}>
        <div className={`sectionContent ${s.sectionContent}`}>
          <h1>About me</h1>
        </div>
      </section>
      <section className={`section`}>
        <div className={`sectionContent ${s.sectionContent}`}>
          <h2>Hi,</h2>
          <section className={`${s.body}`}>
            <p>My name is Viet, I known as Hyrax-x on digital platform.</p>
            <p>I enjoy bringing anything I can imagine to life.</p>
            <p>
              I am always eager to learn new things, especially in the fields
              that genuinely interest me.
            </p>
            <p>
              I am currently working on my OAMVs diploma project for my final
              semester at PJATK university.
            </p>
          </section>
        </div>
      </section>
      <section className={`section ${s.primary}`}>
        <div className={`sectionContent ${s.sectionContent}`}>
          <h2>My skill include:</h2>
          <ul className={`${s.body}`}>
            <li>Front-end-development: HTML, CSS, JavaScript</li>
            <li>
              Graphic design: Photoshop, Illustrator, InDesign, Affinity, Figma
            </li>
            <li>
              Art and Animation: After Effects, Clip Studio Paint, TouchDesigner
            </li>
            <li>Video Editing: Premiere Pro, DaVinci Resolve</li>
            <li>Music Production: FL Studio, Synthesizer V</li>
          </ul>
        </div>
      </section>
      <section className={`section`}>
        <div className={`sectionContent ${s.sectionContent}`}>
          <h2>Other Fact about me</h2>
          <section className={`${s.body}`}>
            <p>
              Native language Vietnamese, speak fluent English, currently
              studying Polish
            </p>
            <p>Play Piano, E-guitar, Drum</p>
          </section>

          <section className={`${s.body}`}>
            <h3>Favorite</h3>
            <ul className={`${s.body}`}>
              <li>Music: Porter Robinson - Goodbye to a World</li>
              <li>Movie: Interstellar</li>
              <li>Anime: Plastic Memories</li>
              <li>Game: Cyberpunk 2077</li>
              <li>Drink: Boba</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
