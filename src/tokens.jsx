import btc from "./images/btc.svg"
import eth from "./images/eth.svg"
import tron from "./images/tron.svg"
import litecoin from "./images/litecoin.svg"
export default function Tokens() {
    return (
      <>
        <div className="text-center w-full mb-20 ">
          <h1 className="mb-7">Tokens</h1>
          <p className="max-w-[600px] mx-auto">
            Learn more about some of the most popular cryptocurrencies of our
            timesee why they might be a good investment for you on BitBit
          </p>
        </div>
        <div className="mb-20">
          <div className="hidden lg:grid tokens-table grid-cols-1 justify-items-stretch px-5 lg:px-16 py-5">
            <h4 className="text-white text-lg font-semibold mb-4 uppercase">
              name
            </h4>
            <h4 className="text-white text-lg font-semibold mb-4 uppercase">
              description
            </h4>
            <h4 className="text-white text-lg font-semibold mb-4 uppercase">
              market cap
            </h4>
            <h4 className="text-white text-lg font-semibold mb-4 uppercase">
              volume
            </h4>
            <h4 className="text-white text-lg font-semibold mb-4 uppercase">
              website
            </h4>
          </div>
          <div className="tokens-table grid grid-cols-1 justify-items-stretch px-5 lg:px-16 py-9">
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                NAME
              </h4>
              <a href="#" className="flex items-center gap-1">
                <div className="bg-white rounded-full h-12 w-12 grid place-items-center">
                  <img src={btc} alt="btc-logo" className="w-[30px]" />
                </div>
                <h3 className="text-[20px]">Bitcoin</h3>
                <span className="bg-[#282454] rounded-3xl px-2 py-[2px]">
                  BTC
                </span>
              </a>
            </div>
            <div className=" lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                description
              </h4>
              <p className="lg:line-clamp-2 lg:pr-7">
                Bitcoin is the first and most well-known cryptocurrency, created
                by an anonymous entity named Satoshi Nakamoto in 2009. It
                operates on a decentralized, peer-to-peer network and is often
                referred to as digital gold due to its store of value
                properties.
              </p>
            </div>
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                market cap
              </h4>
              <h4>$252,844,036,453 USD</h4>
            </div>
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                volume
              </h4>
              <h4>30,504,879,401 USD</h4>
            </div>
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                website
              </h4>
              <a href="http://bitcoin.org" className="underline">
                visit website
              </a>
            </div>
          </div>
          <div className="tokens-table grid grid-cols-1 justify-items-stretch px-5 lg:px-16 py-9">
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                NAME
              </h4>
              <a href="#" className="flex items-center gap-1">
                <div className="bg-white rounded-full h-12 w-12 grid place-items-center">
                  <img src={eth} alt="btc-logo" className="w-[30px]" />
                </div>
                <h3 className="text-[20px]">Ethereum</h3>
                <span className="bg-[#282454] rounded-3xl px-2 py-[2px]">
                  ETH
                </span>
              </a>
            </div>
            <div className=" lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                description
              </h4>
              <p className="lg:line-clamp-2 lg:pr-7">
                Ethereum is a blockchain platform that allows developers to
                build decentralized applications (DApps) and smart contracts. It
                introduced the concept of programmable money and is the
                second-largest cryptocurrency by market capitalization.
              </p>
            </div>
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                market cap
              </h4>
              <h4>$252,844,036,453 USD</h4>
            </div>
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                volume
              </h4>
              <h4>30,504,879,401 USD</h4>
            </div>
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                website
              </h4>
              <a href="http://ethereum.org" className="underline">
                visit website
              </a>
            </div>
          </div>
          <div className="tokens-table grid grid-cols-1 justify-items-stretch px-5 lg:px-16 py-9">
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                NAME
              </h4>
              <a href="#" className="flex items-center gap-1">
                <div className="bg-white rounded-full h-12 w-12 grid place-items-center">
                  <img src={litecoin} alt="btc-logo" className="w-[30px]" />
                </div>
                <h3 className="text-[20px]">Litecoin</h3>
                <span className="bg-[#282454] rounded-3xl px-2 py-[2px]">
                  litecoin
                </span>
              </a>
            </div>
            <div className=" lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                description
              </h4>
              <p className="lg:line-clamp-2 lg:pr-7">
                Litecoin is a peer-to-peer cryptocurrency created as a lighter
                version of Bitcoin. It shares many similarities with Bitcoin but
                offers faster transaction confirmation times.
              </p>
            </div>
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                market cap
              </h4>
              <h4>$252,844,036,453 USD</h4>
            </div>
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                volume
              </h4>
              <h4>30,504,879,401 USD</h4>
            </div>
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                website
              </h4>
              <a href="http://litecoin.org" className="underline">
                visit website
              </a>
            </div>
          </div>
          <div className="tokens-table grid grid-cols-1 justify-items-stretch px-5 lg:px-16 py-9">
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                NAME
              </h4>
              <a href="#" className="flex items-center gap-1">
                <div className="bg-white rounded-full h-12 w-12 grid place-items-center">
                  <img src={tron} alt="btc-logo" className="w-[30px]" />
                </div>
                <h3 className="text-[20px]">Tron</h3>
                <span className="bg-[#282454] rounded-3xl px-2 py-[2px]">
                  tron
                </span>
              </a>
            </div>
            <div className=" lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                description
              </h4>
              <p className="lg:line-clamp-2 lg:pr-7">
                Tron is a blockchain platform designed for decentralized content
                sharing and entertainment applications. It aims to create a
                decentralized internet.
              </p>
            </div>
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                market cap
              </h4>
              <h4>$252,844,036,453 USD</h4>
            </div>
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                volume
              </h4>
              <h4>30,504,879,401 USD</h4>
            </div>
            <div className="lg:border-t-[0px] border-t-[1px] py-7 lg:py-0 border-solid border-[#9490a2ae]">
              <h4 className="lg:hidden block text-white text-lg font-semibold mb-4 uppercase">
                website
              </h4>
              <a href="http://tron.org" className="underline">
                visit website
              </a>
            </div>
          </div>
        </div>
      </>
    );
}