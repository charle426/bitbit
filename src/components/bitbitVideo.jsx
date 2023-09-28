import mockup from "../images/4_5913603666564091347.mp4"
export default function BitbitVideo() {
    window.onload = function () {
        const playBtn = document.getElementById("playBtn");
        const video = document.querySelector(".bitVideo");
        playBtn.addEventListener("click", () => {
            if (playBtn.classList.contains("fa-play"))
            {
                video.play()
                video.style.zIndex = "40"
                playBtn.classList.remove("fa-play")
                playBtn.classList.add("fa-pause")
            }
            else if (playBtn.classList.contains("fa-pause"))
            {
                video.pause();
                video.style.zIndex = "4";
                playBtn.classList.remove("fa-pause");
                playBtn.classList.add("fa-play");
            }
           
        })
    }
    return (
      <div className="bitbitVideo grid lg:grid-cols-2 lg:px-16 md:grid-cols-1 items-center gap-16 mx-5">
        <div className="flex flex-col items-start gap-6 pr-7 pb-10">
          <h2>Get started today</h2>
          <p>
            Don`t wait another moment – start your journey to financial success
            today with our cutting-edge app.
          </p>
          <div className="flex flex-col items-start gap-4">
            <p className="flex items-center gap-2">
              <span className="iconSpan">
                <i className="fa fa-download"></i>
              </span>
              <span>1. Download app</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="iconSpan">
                <i className="fa fa-user"></i>
              </span>
              <span>2. Create a free account</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="iconSpan">
                <i className="fa fa-money-bills"></i>
              </span>
              <span>3. Start trading</span>
            </p>
          </div>
        </div>
        <div className="a-little-video relative flex justify-center items-center">
          <div className="w-fit">
            <video width="100%" height="200px" className="bitVideo" muted>
              <source src={mockup} type="video/mp4" />
            </video>

            <h1
              id="playBtn"
              className="fa fa-play play rounded-full translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%] md:w-[120px] md:h-[120px] h-[80px] w-[80px] absolute"
            ></h1>
          </div>
        </div>
      </div>
    );
}