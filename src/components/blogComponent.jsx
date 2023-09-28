export default function BlogComponent(props) {
    return (
      <section className="lg:px-20 px-5">
        <div className="lg:px-24 px-5 mt-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="rounded-full">
              <img src={props.author} alt="" className="w-16 rounded-full" />
            </div>
            <div className=" ">
              <h4>{props.authorName}</h4>
              <p>{props.date}</p>
            </div>
          </div>
          <h1>{props.title}</h1>
          <p>{props.info}</p>
        </div>
        <div className="rounded-[30px] mt-8 w-full h-fit grid bg-slate-600 place-items-center overflow-hidden">
          <img
            src={props.img}
            alt="blogPic"
            className=" rounded-[30px] w-full h-full "
          />
        </div>
      </section>
    );
}