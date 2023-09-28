import { Link } from "react-router-dom";
export default function Footer() {
    return (
      <footer className="mt-16 lg:px-20 lg:py-16 py-7 px-5">
        <div className="footerContainer flex flex-col gap-10">
          <div className="icon&socials flex justify-between md:flex-row flex-col">
            <div>
              <h2>
                <i>BiTBiT</i>
              </h2>
            </div>
            <div className="socials flex items-center gap-3">
              <h3>
                <i className="fa-brands fa-facebook-f"></i>
              </h3>
              <h3>
                <i className="fa-brands fa-twitter"></i>
              </h3>
              <h3>
                <i className="fa-brands fa-instagram"></i>
              </h3>
              <h3>
                <i className="fa-brands fa-linkedin-in"></i>
              </h3>
              <h3>
                <i className="fa-brands fa-youtube"></i>
              </h3>
              <h3>
                <i className="fa-brands fa-telegram"></i>
              </h3>
              <h3>
                <i className="fa-brands fa-whatsapp"></i>
              </h3>
            </div>
          </div>
          <div className=" flex lg:flex-row flex-col items-start mb-4 justify-between">
            <div className="flex md:flex-row flex-col md:items-start w-fit mb-4 lg:gap-8 gap-5">
              <div className="flex flex-col items-start w-fit gap-5">
                <h3>Menu</h3>
                <div className="h-px w-full bg-white"></div>
                <div className="flex items-start justify-between gap-6">
                  <ul className="list-none flex flex-col items-start gap-1">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <a href="#">Pricing Single</a>
                    </li>
                    <li>
                      <Link to="/contacts">Contacts</Link>
                    </li>
                  </ul>
                  <ul className="list-none flex flex-col items-start gap-1">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <a href="#">Blog Post</a>
                    </li>
                    <li>
                      <Link to="#">Token</Link>
                    </li>
                    <li>
                      <a href="#">Token Single</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-start gap-5 w-fit">
                <h3>Utility Pages</h3>
                <div className="h-px w-full bg-white"></div>
                <div className="flex items-start justify-between gap-6">
                  <ul className="list-none flex flex-col items-start gap-1">
                    <li>
                      <a href="#">Start Here</a>
                    </li>
                    <li>
                      <a href="#">Style Guide</a>
                    </li>
                    <li>
                      <a href="#">404 Not found</a>
                    </li>
                    <li>
                      <a href="#">Password Protected</a>
                    </li>
                    <li>
                      <a href="#">Licenses</a>
                    </li>
                    <li>
                      <a href="#">Changelog</a>
                    </li>
                    <li>
                      <a href="#">More web templates</a>
                      <div className="h-0.5 w-full mt-2 bg-white"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footerForm flex flex-col items-start mt-4 gap-5">
              <h2 className="font-semibold text-3xl lg:font-bold lg:text-4xl ">
                DOWNLOAD OUR APPLICATION
              </h2>
              <p>
                Enhance your financial future – unlock the potential by
                downloading our app today for unparalleled opportunities."
              </p>
              <div className="flex items-center gap-4">
                <a href="#">
                  <button className="download flex items-center gap-2 h-16 px-12 py-10 rounded-3xl text-white font-semibold text-sm">
                    <i className="fa-brands fa-apple text-2xl"></i>
                    APP STORE
                  </button>
                </a>
                <a href="#">
                  <button className="download flex items-center gap-2 h-16 px-12 py-10 rounded-3xl text-white font-semibold text-sm">
                    <i className="fa-brands fa-google-play text-2xl"></i>
                    PLAY STORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}