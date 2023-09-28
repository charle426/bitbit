export default function Drive(props) {
    return (
        <div className="flex md:flex-row flex-col items-start gap-5 px-5 py-16 aboutDrive rounded-3xl max-w-[600px]">
      <div>
        <h3 className="font-extrabold text-3xl">
          <i className={props.icon}></i>
        </h3>
      </div>
      <div className="flex flex-col items-start gap-3">
        <h4 className="uppercase">{props.heading} </h4>
        <p>
         {props.desc}
        </p>
      </div>
    </div>
   )
}