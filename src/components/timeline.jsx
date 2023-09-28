export default function Timeline() {
    return (
      <div className="px-10 mt-32">
        <div className="flex lg:flex-row flex-col items-start timeline">
          <div className="md:w-[500px] about-story lg:mr-32 md:mr-0 mb-10">
            <h2 className="mb-10">Timeline</h2>
            <p className="text-[18px]">
              Our company`s journey began in the early days of cryptocurrency,
              driven by a vision to empower individuals in the financial world.
              Over the years, we`ve evolved into a global presence, championing
              decentralization, transparency, and community collaboration, while
              continually innovating to meet the ever-changing crypto landscape.
            </p>
          </div>
          <div className="lg:w-[875px]">
            <ul className=" py-6">
              <li className="flex flex-col items-start gap-7 w-full">
                <div className="flex items-start justify-between">
                  <div className="w-[150px]">
                    <h3 className="w-7 h-7 bg-white rounded-full translate-y-[6px]"></h3>
                  </div>
                  <div>
                    <div className="flex items-center justify-start">
                      <h3 className=" font-bold text-[25px] mb-5">2014</h3>
                    </div>
                    <div>
                      <h3 className="uppercase mb-3 text-[19px]">
                        infrastructure Development
                      </h3>
                      <p className="text-[19px]">
                        In 2014, we laid the foundation for our company's
                        infrastructure, setting the stage for our future growth
                        and technological advancements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-white opacity-10 my-12"></div>
              </li>
              <li className="flex flex-col items-start gap-7 w-full">
                <div className="flex items-start justify-between">
                  <div className="w-[150px]">
                    <h3 className="w-7 h-7 bg-white rounded-full translate-y-[6px]"></h3>
                  </div>
                  <div>
                    <div className="flex items-center justify-start">
                      <h3 className=" font-bold text-[25px] mb-5">2016</h3>
                    </div>
                    <div>
                      <h3 className="uppercase mb-3 text-[19px]">
                        initial announcement
                      </h3>
                      <p className="text-[19px]">
                        In 2014, we made our initial announcement, pioneering
                        the path to democratize finance through innovative
                        blockchain technology and cryptocurrency solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-white opacity-10 my-12">
                  {" "}
                </div>
              </li>
              <li className="flex flex-col items-start gap-7 w-full">
                <div className="flex items-start justify-between">
                  <div className="w-[150px]">
                    <h3 className="w-7 h-7 bg-white rounded-full translate-y-[6px]"></h3>
                  </div>
                  <div>
                    <div className="flex items-center justify-start">
                      <h3 className=" font-bold text-[25px] mb-5">2018</h3>
                    </div>
                    <div>
                      <h3 className="uppercase mb-3 text-[19px]">
                        beta release
                      </h3>
                      <p className="text-[19px]">
                        Our beta release in 2018 marked the beginning of our
                        journey, inviting early users to shape our vision of a
                        revolutionary financial future.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-white opacity-10 my-12">
                  {" "}
                </div>
              </li>
              <li className="flex flex-col items-start gap-7 w-full">
                <div className="flex items-start justify-between">
                  <div className="w-[150px]">
                    <h3 className="w-7 h-7 bg-white rounded-full translate-y-[6px]"></h3>
                  </div>
                  <div>
                    <div className="flex items-center justify-start">
                      <h3 className=" font-bold text-[25px] mb-5">2022</h3>
                    </div>
                    <div>
                      <h3 className="uppercase mb-3 text-[19px]">
                        official launch
                      </h3>
                      <p className="text-[19px]">
                        In 2022, we celebrated our official launch, marking a
                        pivotal moment in our mission to redefine finance
                        through cutting-edge technology and innovation.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="w-full h-[1px] bg-white opacity-10 my-6"> </div> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}