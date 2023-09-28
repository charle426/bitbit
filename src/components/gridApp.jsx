import img from "../images/5fac956deef8e7320b663906_image-mockup-cta-v2-1-crypto-template.png";
export default function TypicalWallet() {
    return (
      <section
        id="wallet"
        className=" lg:px-16 lg:py-6 text-center items-center px-5 grid gap-5 mt-6"
      >
        <h2 className="text-white pt-3">MORE THAN A TYPICALLY CRYTO WALLET</h2>
        <h6 className="text-white w-50 text-center mx-auto">
          Download this crypto app for easy, secure, and informed trading of
          digital assets.
        </h6>
        <div className="walletGrid grid lg:grid-cols-3 md:grid-cols-1 items-center gap-2">
          <div className="grid1 text-start ">
            <h4 className="text-white">
              <i className="fa fa-money-bill-transfer text-start"></i>
            </h4>
            <h4 className="text-white">Send and Receive</h4>
            <p className="text-white">
              Experience unmatched ease, making your crypto transactions
              effortlessly smooth and hassle-free with our platform.
            </p>
          </div>
          <div className="hidden-el bigrid lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 md:col-start-1  grid gap-3 items-center overflow-hidden">
            <h4 className="text-white text-start"> IOS AND ANDROID </h4>
            <p className="text-white text-start">
              Elevate your crypto journey with our app, boasting extraordinary
              features that redefine trading and investment excellence.
            </p>
            <div className="grid justify-center items-center">
              <img src={img} width="350px" alt="" className="md:block hidden" />
            </div>
          </div>
          <div className="grid2 text-start">
            <h3 className="text-white">
              <i className="fa fa-chart-line text-start"></i>
            </h3>
            <h4 className="text-white">Trading Charts</h4>
            <p className="text-white">
              Our trading charts provide pinpoint accuracy, ensuring informed
              decisions and maximizing your crypto investments.
            </p>
          </div>
          <div className="grid4 text-start ">
            <h3 className="text-white">
              <i className="fa fa-wallet text-start"></i>
            </h3>
            <h4 className="text-white">100% Secure Wallet</h4>
            <p className="text-white">
              Rest assured with our wallet`s rock-solid security, safeguarding
              your crypto assets with state-of-the-art protection.
            </p>
          </div>
          <div className="grid5 text-start ">
            <h3 className="text-white">
              <i className="fa fa-refresh text-start"></i>
            </h3>
            <h4 className="text-white">Real Time Trading</h4>
            <p className="text-white">
              Stay ahead with real-time trading data, seizing opportunities as
              they happen with our responsive platform.
            </p>
          </div>
        </div>
        <div>
          <button className="download w-44 mt-5">Download App</button>
        </div>
      </section>
    );
}
