import s from "./page.module.css";

export default function Home() {
  return (
    <main className="page" id="homepage">
      <section className={`section`}>
        <div className={`sectionContent ${s.heroContent}`}>
          <h1 className={`${s.h1}`}>Homepage</h1>
          <p className={`${s.p}`}>
            This is a simple character list built with Next.js. Here you can
            find list of character I like. Stay tuned for regular updates and
            feel free to explore the content!
          </p>
        </div>
      </section>
      <section className={`section ${s.tutorial}`}>
        <div className={`sectionContent ${s.tutorialContent}`}>
          <h2 className={`${s.h2}`}>Tutorial</h2>
          <p className={`${s.p}`}>
            This website was built as a part of a coding exercise following a
            youtube tutorial. You can find the tutorial here:
          </p>
          <iframe
            className={`${s.iframe}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=2iaR8fzxYayAhxZX&amp;list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className={`${s.iframe}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/I1V9YWqRIeI?si=DXwLH9G5uxcOA_yE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
