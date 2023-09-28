import React from "react";
export default function Comments() {
  const label = document.getElementsByClassName("label");
  let [Umove, setUmove] = React.useState(1);
  const radio = document.getElementById("radio" + Umove);
  if (radio != null) {
    radio.checked = true;
  }

  // }
  function setState() {
    setUmove((prev) => (prev > label.length ? 1 : prev + 1));
  }

  function dots(n) {
    setUmove(n)
  }
  // selectBtn(2);

  window.addEventListener("load", () => {
    setInterval(() => {
      setState();
    }, 10000);
  });

  return (
    <section className="md:px-16 md-py-10 px-5 py-7 comments overflow-hidden ">
      <div className="flex md:items-center items-start md:flex-row flex-col justify-between">
        <h2>What our users say</h2>
        <a href="#">
          <button type="" className="download font-bold md:mt-0 mt-3">
            DOWNLOAD APP
          </button>
        </a>
      </div>
      <div className="commentDiv overflow-visible relative">
        <input
          type="radio"
          name="radio"
          value="1"
          className="radio1 hidden"
          id="radio1"
        />
        <input
          type="radio"
          name="radio"
          value="2"
          className="radio2 hidden"
          id="radio2"
        />
        <input
          type="radio"
          name="radio"
          value="3"
          className="radio3 hidden"
          id="radio3"
        />
        <input
          type="radio"
          name="radio"
          value="4"
          className="radio4 hidden"
          id="radio4"
        />
        <input
          type="radio"
          name="radio"
          value="5"
          className="hidden radio5"
          id="radio5"
        />
        <input
          type="radio"
          name="radio"
          value="6"
          className="hidden radio6"
          id="radio6"
        />
        <div className="cardDiv" id="cardDiv">
          <div className="card md:px-[40px] px-[20px] md:h-[280px] h-[330px] card1">
            <div className="flex flex-col items-start gap-6">
              <p className="font-medium">
                This app has truly transformed my crypto journey. Its unmatched
                security and real-time data have kept me one step ahead in the
                trading game, leading to substantial success.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-slate-500">
                  <img src="" alt="" />
                </div>
                <h3>Charles Uzoma</h3>
              </div>
            </div>
          </div>
          <div className="card md:px-[40px] px-[20px] md:h-[280px] h-[330px] card2">
            <div className="flex flex-col items-start gap-6">
              <p className="font-medium">
                I`ve experimented with numerous wallets, but none compare to
                this one. Its advanced features and impeccable accuracy have
                significantly boosted my trading performance, resulting in
                substantial profits.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-slate-500">
                  <img src="" alt="" />
                </div>
                <h3>Chris John</h3>
              </div>
            </div>
          </div>
          <div className="card md:px-[40px] px-[20px] md:h-[280px] h-[330px] card3">
            <div className="flex flex-col items-start gap-6">
              <p className="font-medium">
                Impressive doesn`t begin to cover it! This app`s robust platform
                has made crypto trading effortless and profitable. I can`t
                recommend it enough for serious investors.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-slate-500">
                  <img src="" alt="" />
                </div>
                <h3>Sarah Godswill</h3>
              </div>
            </div>
          </div>
          <div className="card md:px-[40px] px-[20px] md:h-[280px] h-[330px] card4">
            <div className="flex flex-col items-start gap-6">
              <p className="font-medium">
                User-friendly and secure, this wallet is like having a financial
                powerhouse in your pocket. It`s simplified my crypto management
                and given me peace of mind about my assets.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-slate-500">
                  <img src="" alt="" />
                </div>
                <h3>Dickson Collins</h3>
              </div>
            </div>
          </div>
          <div className="card md:px-[40px] px-[20px] md:h-[280px] h-[330px] card5">
            <div className="flex flex-col items-start gap-6">
              <p className="font-medium">
                This app is a true game-changer in the crypto world. It`s been
                instrumental in helping me achieve my financial goals at an
                astonishing pace. I`m incredibly grateful for it.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-slate-500">
                  <img src="" alt="" />
                </div>
                <h3>Victor Godsent</h3>
              </div>
            </div>
          </div>
          <div className="card md:px-[40px] px-[20px] md:h-[280px] h-[330px] card6">
            <div className="flex flex-col items-start gap-6">
              <p className="font-medium">
                Since I started using this app, I`ve seen a remarkable increase
                in my crypto portfolio. Its powerful tools and accuracy make it
                an invaluable asset for any investor.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-slate-500">
                  <img src="" alt="" />
                </div>
                <h3>Mark Ben</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="dots">
          <label
            htmlFor="radio1"
            className="label cursor-pointer"
            onClick={() => dots(1)}
          ></label>
          <label
            htmlFor="radio2"
            className="label cursor-pointer"
            onClick={() => dots(2)}
          ></label>
          <label
            htmlFor="radio3"
            className="label cursor-pointer"
            onClick={() => dots(3)}
          ></label>
          <label
            htmlFor="radio4"
            className="label cursor-pointer"
            onClick={() => dots(4)}
          ></label>
          <label
            htmlFor="radio5"
            className="label cursor-pointer"
            onClick={() => dots(5)}
          ></label>
          <label
            htmlFor="radio6"
            className="labe cursor-pointerl"
            onClick={() => dots(6)}
          ></label>
        </div>
        {/* <div className="blur comment-blur lg:h-80 lg:w-1/3 md:h-0 md:w-0 absolute -right-28 -top-5"></div> */}
      </div>
    </section>
  );
}
