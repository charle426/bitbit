import { Link } from "react-router-dom";
export default function HomeBlog(props) {
  return (
    <Link to={props.link}>
      <div className="rounded-3xl md:mx-4 overflow-hidden blogCard my-5 blogHover">
        <div className="relative">
          <img src={props.image} alt="" />
          <p className="absolute blogDesc p-2 font-semibold text-xs left-3 -bottom-4 rounded-2xl">
            {props.desc}
          </p>
        </div>
        <div className="blog-info flex flex-col items-start gap-8">
          <div className=" flex flex-col gap-4">
            <h3>{props.title}</h3>
            <p className="line-clamp-3">{props.info}</p>
          </div>
          <div className="hr">{/* ----horzontal line---- */}</div>
          <div className="flex items-center gap-3">
            <div className="rounded-full">
              <img src={props.authorPic} alt="" className="w-16 rounded-full" />
            </div>
            <div className=" ">
              <h4>{props.authorName}</h4>
              <p>{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}