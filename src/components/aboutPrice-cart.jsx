export default function AboutPriceCart(props) {
    return (
      <section className="py-8 px-5 lg:px-16 md:px-7 max-w-[750px]">
        <h1 className="mb-5">About the Plan</h1>
        <p>{props.aboutTop}</p>
        <ul className="list-disc my-5 p-5 marker:text-white list-inside">
          <li className="my-2">{props.aboutList1}</li>
          <li className="my-2">{props.aboutList2}</li>
          <li className="my-2">{props.aboutList3}</li>
          <li className="my-2">{props.aboutList4}</li>
        </ul>
        <p>{props.aboutBottom}</p>
      </section>
    );
}