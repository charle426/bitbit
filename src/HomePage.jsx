import Hero from "./components/hero.jsx";
import TypicalWallet from "./components/gridApp.jsx";
import TradingGadgets from "./components/crypto.jsx";
import Future from "./components/future.jsx";
import Robust from "./components/robust.jsx";
import Tryout from "./components/tryTheFuture.jsx";
import Comments from "./components/commentSection.jsx";
import BitbitVideo from "./components/bitbitVideo.jsx";
import HomeBlog from "./components/homeBlog.jsx";
import DownloadApp from "./components/download.jsx";
// import About from "./About.jsx"
import { blogData } from "./assets/blog.jsx";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function HomePage() {

  const articles = blogData.map((items) => {
    return (
      <HomeBlog
        key={items.id}
        image={items.blogImage}
        desc={items.desc}
        title={items.title}
        info={items.info}
        authorPic={items.authorPic}
        authorName={items.authorName}
        date={ items.date }
        link={items.link}
      />
    );
  });

  return (
    <>
      <Hero />
      <TradingGadgets />
      <TypicalWallet />
      <Future />
      <Robust />
      <Tryout />
      <Comments />
      <BitbitVideo />
      <div>
        <div className="flex items-start mb-7 mt-16 lg:flex-row flex-col max-w-full lg:px-16 px-5">
          <h2 className="mr-auto w-full ">Browse our latest news</h2>
          <p>
            Explore our insightful blogs and articles for expert tips and trends
            in the world of finance.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:px-16 md:grid-cols-2 grid-cols-1 px-5 ">
          {articles}
        </div>
        <div className="flex items-center justify-center w-full h-16 mt-5">
          <a href="#">
            <button
              type=""
              className="pricing px-7 py-5 rounded-3xl text-white font-semibold text-sm"
            >
              VIEW ALL ARTICLES
            </button>
          </a>
        </div>
      </div>
      <div>
        <div className="flex items-center mb-7 mt-16 md:flex-row flex-col lg:px-16 px-5">
          <h2 className="mr-auto w-full ">Download our app</h2>
          <p>
            Enhance your financial future – unlock the potential by downloading
            our app today for unparalleled opportunities.
          </p>
        </div>
        <DownloadApp />
      </div>
    </>
  );
}
