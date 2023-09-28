export default function Team(){
    return (
      <div className="team flex lg:flex-row flex-col px-5 justify-between lg:px-16">
        <div className="inline">
          <div className="flex items-center mb-5">
            <div className="w-16 h-16 rounded-full bg-slate-200 mr-5"></div>
            <div className="uppercase">
              <h4>john carter</h4>
              <p className="text-[15px]">ceo & co-founder</p>
            </div>
          </div>
          <div className="mb-6 leading-6">
            <p>
              As the CEO and Co-Founder, I`m committed to revolutionizing
              finance and empowering individuals through cryptocurrency, one
              innovation at a time.
            </p>
          </div>
          <div className="socials flex items-center gap-3">
            <h3>
              <i className="fa-brands fa-facebook-f"></i>
            </h3>
            <h3>
              <i className="fa-brands fa-twitter"></i>
            </h3>
            <h3>
              <i className="fa-brands fa-linkedin-in"></i>
            </h3>
          </div>
        </div>
        <div className="inline">
          <div className="flex items-center mb-5">
            <div className="w-16 h-16 rounded-full bg-slate-200 mr-5"></div>
            <div className="uppercase">
              <h4>sophie moore</h4>
              <p className="text-[15px]">community lead</p>
            </div>
          </div>
          <div className="mb-6 leading-6">
            <p>
              Our role as Community Leads is to foster engagement, provide
              support, and amplify the voices that shape our thriving crypto
              community.
            </p>
          </div>
          <div className="socials flex items-center gap-3">
            <h3>
              <i className="fa-brands fa-facebook-f"></i>
            </h3>
            <h3>
              <i className="fa-brands fa-twitter"></i>
            </h3>
            <h3>
              <i className="fa-brands fa-linkedin-in"></i>
            </h3>
          </div>
        </div>
        <div className="inline">
          <div className="flex items-center mb-5">
            <div className="w-16 h-16 rounded-full bg-slate-200 mr-5"></div>
            <div className="uppercase">
              <h4>Alex turner</h4>
              <p className="text-[15px]">operations</p>
            </div>
          </div>
          <div className="mb-6 leading-6">
            <p>
              We`re the engine behind the scenes, ensuring seamless, secure
              operations that enable our company to thrive in the fast-paced
              crypto world.
            </p>
          </div>
          <div className="socials flex items-center gap-3">
            <h3>
              <i className="fa-brands fa-facebook-f"></i>
            </h3>
            <h3>
              <i className="fa-brands fa-twitter"></i>
            </h3>
            <h3>
              <i className="fa-brands fa-linkedin-in"></i>
            </h3>
          </div>
        </div>
      </div>
    );
}