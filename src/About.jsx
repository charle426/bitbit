import Drive from "./components/What-drives";
import { drives } from "./assets/blog";
import AboutStory from "./components/Our-story";
import Timeline from "./components/timeline";
import Team from "./components/theTeam";
import Investors from "./components/investor";
// import React from "react";
export default function About() {
  const whatDrives = drives.map((items) => {
    return <Drive
        key={ items.id }
        icon={ items.icon }
        heading={ items.heading }
        desc = {items.desc}
      />
    
  })
    return (
      <>
        <div className="w-full h-[300px] flex items-center justify-center text-center">
          <div className="max-w-[550px]">
            <h1>About BiTBiT</h1>
            <p className="font-medium">
              Within our company, innovation thrives. We`re committed to pushing
              boundaries, revolutionizing the crypto industry, and achieving
              financial excellence together.
            </p>
          </div>
        </div>
        <div className="w-full md:flex-row flex px-5 justify-between flex-col lg:px-16">
          <h2>What drives crypto?</h2>
          <p className="inline max-w-[400px] text-start items-end">
            User-driven innovation fuels our wallet/app, constantly evolving to
            meet the dynamic needs of the crypto community.
          </p>
        </div>
        <div className="grid mx-auto md:grid-cols-2 grid-cols-1 gap-8 place-items-center lg:px-16 w-full px-5 pt-5">
          {whatDrives}
        </div>
        <AboutStory />
        <Timeline />
        <div className="w-full mt-28 mb-10 md:flex-row flex px-5 justify-between flex-col lg:px-16 mx-auto">
          <h2 className="inline ">Our team</h2>
          <p className="inline max-w-[400px] text-start items-end">
            Our diverse, talented team combines passion and expertise to drive
            our company`s success in the crypto world.
          </p>
        </div>
        <Team />
        <Investors />
      </>
    );
}
