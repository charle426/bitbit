import android from "../images/5fac956c1123e6b007cee815_image-mockup-cta-v2-2-crypto-template.png";
import iphone from "../images/5fac956deef8e7320b663906_image-mockup-cta-v2-1-crypto-template.png";
export default function DownloadApp() {
    return (
      <div className=" download-app flex items-center gap-7 mb-7 mt-16 md:flex-row flex-col lg:px-16 px-5">
        <div className=" flex flex-col md:h-[90vh] lg:h-[100vh] h-fit item-center gap-7 px-2 py-3 md:px-6 rounded-[20px] md:rounded-[60px] md:py-14">
          <div className=" flex flex-col items-start gap-3">
            <h2 className="">Download for Android</h2>
            <p className="md:max-w-[450px] w-full line-clamp-4">
              Experience seamless crypto trading on your Android device with our
              feature-packed app, empowering you for financial success.
            </p>
            <div>
              <a href="#">
                <button className="download flex items-center gap-2 h-16 px-12 py-10 rounded-3xl text-white font-semibold text-sm">
                  <i className="fa-brands fa-google-play text-2xl"></i>
                  PLAY STORE
                </button>
              </a>
            </div>
          </div>
          <div className="w-full">
            <img
              src={android}
              alt="Android"
              width="100%"
              className="hidden md:block"
            />
          </div>
        </div>
        <div className=" flex flex-col md:h-[90vh] lg:h-[100vh] item-center gap-7 px-2 py-3 md:px-6 rounded-[20px] md:rounded-[60px] md:py-12">
          <div className=" flex flex-col w-full items-start gap-3">
            <h2>Download for Iphone</h2>
            <p className="md:max-w-[450px] w-full line-clamp-4">
              Elevate your financial journey with our iOS app, combining
              elegance and functionality for a superior crypto trading
              experience.
            </p>
            <div>
              <a href="#">
                <button className="download flex items-center gap-2 h-16 px-12 py-10 rounded-3xl text-white font-semibold text-sm">
                  <i className="fa-brands fa-apple text-2xl"></i>
                  APP STORE
                </button>
              </a>
            </div>
          </div>
          <div className="w-full">
            <img
              src={iphone}
              alt="iphone"
              width="100%"
              className="hidden md:block"
            />
          </div>
        </div>
      </div>
    );
}