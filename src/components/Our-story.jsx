import image from "../images/5fadbb8646b287ee684b9190_image-about-story-crypto-template.png";
export default function AboutStory() {
    return (
      <div className="w-full overflow-hidden mt-10 px-5 lg:px-16 relative">
        <div className="flex flex-col items-start">
          <div className="md:w-[550px] about-story">
            <h2 className="my-5">Our mission</h2>
            <p>
              Our company`s mission is to democratize and empower the world of
              finance through innovative blockchain technology. We believe in
              creating a future where financial access is borderless, inclusive,
              and secure for everyone. We`re committed to developing
              cutting-edge solutions that harness the potential of decentralized
              systems, ensuring that individuals have control over their
              financial destinies. Our unwavering dedication to open-source
              principles fosters a collaborative ecosystem, inviting
              contributions from a global community.
            </p>

            <p className="my-7">
              Transparency and trust are the cornerstones of our mission. We
              strive to provide users with a platform that offers real-time
              data, robust security, and user-friendly experiences. By driving
              innovation, promoting decentralization, and fostering financial
              education, we aim to empower individuals to seize new
              opportunities, achieve financial independence, and shape a more
              equitable financial landscape for generations to come.
            </p>
          </div>

          <div className="md:w-[550px] about-story">
            <h2 className="my-5">Our Story</h2>
            <p>
              Founded in the midst of the cryptocurrency revolution, our company
              emerged as a visionary force in the financial landscape. Our
              journey began with a commitment to democratizing finance,
              empowering individuals to take control of their financial futures
              through cryptocurrencies. From our humble beginnings, we've grown
              into a global presence, known for our innovative solutions and
              unwavering dedication to the blockchain community. Open source at
              heart, we've fostered collaboration and transparency, continually
              improving our wallet and app to meet the dynamic needs of our
              users. Decentralization is our guiding principle, as we work
              towards a future where financial power is distributed evenly.
            </p>

            <p className="my-7">
              Our thriving community of users and supporters shares this vision,
              driving us to innovate, adapt, and redefine the financial
              industry. With each passing day, our story unfolds, and our
              commitment to shaping a more inclusive, secure, and accessible
              financial world remains unwavering. We look forward to the
              exciting chapters that lie ahead, continuing to push the
              boundaries of what's possible in the realm of cryptocurrencies and
              finance.
            </p>
          </div>
          <img
            src={image}
            alt="image"
            className="w-[750px] -z-10 -right-36 absolute"
          />
        </div>
      </div>
    );
}