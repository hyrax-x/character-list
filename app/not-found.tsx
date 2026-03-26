import Link from "next/link";
import s from "./not-found.module.css";

const Custom404 = () => {
  return (
    <main className="page" id="notFound">
      <section className={`section`}>
        <div className={`sectionContent ${s.content}`}>
          <h1>Ops...</h1>
          <p>That page cannot be found</p>
          <Link href="/">
            <div className="button">Back to Homepage</div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Custom404;
