import React from "react";
import Header from "../organisms/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main class="main">
        <section class="paragraph">
          <div class="content">
            <h2>So, you want to travel to</h2>
            <h1>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </section>

        <section class="btnCTA">
          <div class="exploreBtn">
            <a
              href="https://earth.google.com/web/"
              target="_blank"
              rel="noreferrer"
            >
              explore
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
