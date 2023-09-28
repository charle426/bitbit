import React from "react"

export default function PriceCart(props) {
   console.log(props.cartItem);
    const [selectState, setSelectState] = React.useState({
        selectDuration: "",
    })
    function handleChange() {
        const {name, value,} = event.target
        setSelectState((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    let price 
    if (props.plan === "basic")
    {
        price = 9
    } else if (props.plan === "pro")
    {
         price = 18;
    } else
    {
        price = 99
    }

    let timePrice
    if (selectState.selectDuration === "one-month") {
      timePrice = price * 1;
    } else if (selectState.selectDuration === "two-months") {
      timePrice = price * 2;
    } else if (selectState.selectDuration === "three-months") {
      timePrice = price * 3;
    } else if (selectState.selectDuration === "four-months") {
      timePrice = price * 4;
    } else if (selectState.selectDuration === "five-months") {
      timePrice = price * 5;
    } else if (selectState.selectDuration === "six-months") {
      timePrice = price * 6;
    } else if (selectState.selectDuration === "one-year") {
      timePrice = price * 12;
    }else{
      timePrice = price
    }

  // const dont = false
  function addToCart() {
    props.setCartItem((prev) => {
      return [
        ...prev,
        {
        subPlan: props.plan,
        duration: selectState,
        cash: timePrice,
        }
      ]
    })
    // cartData.push({
    //   subPlan: props.plan,
    //   duration: selectState,
    //   cash: timePrice,
    //   })
   
    //  console.log(cartData)
    }
      return (
        <section className="py-8 px-5 lg:px-16 md:px-7">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center aboutPrice place-items-center sm:justify-center">
            <div className="flex flex-col gap-7 mb-5 w-full">
              <h1 className="uppercase">{props.plan} plan</h1>
              <p>{props.desc}</p>
              <div className="flex flex-col gap-4">
                <h4>FEATURES</h4>
                <ul className="list-disc marker:text-purple-600 list-inside">
                  <li className="my-2">{props.feature1}</li>
                  <li className="my-2">{props.feature2}</li>
                  <li className="my-2">{props.feature3}</li>
                  <li className="my-2">{props.feature4}</li>
                </ul>
              </div>
              <div className="w-full h-[1.2px] bg-[#fff] opacity-30"></div>
            </div>
            <div className="bg-[#282454] px-10 py-12 rounded-[40px] max-w-[450px]">
              <h4 className="uppercase mb-3">subscribe to bitbit app</h4>
              <p>
                select your plan duration and add it to your cart to upgrade
                your account
              </p>
              <select
                name="selectDuration"
                onChange={handleChange}
                className="outline-none bg-[#282454] border-0 mb-4 mt-10 min-w-full py-3 cursor-pointer opacity-100"
              >
                <option value="">Select duration plan</option>
                <option value="one-month">1 Month</option>
                <option value="two-months">2 Months</option>
                <option value="three-months">3 Months</option>
                <option value="four-months">4 Months</option>
                <option value="five-months">5 Months</option>
                <option value="six-months">6 Months</option>
                <option value="one-year">1 Year</option>
              </select>
              <div className="w-full h-[1.5px] bg-[#6639E4]"></div>
              <div className="mb-7 mt-3">
                <h2>
                  ${selectState.selectDuration ? timePrice : price}.00 USD
                </h2>
              </div>
              <div>
                <div>
                  <button className="download w-full uppercase" onClick={addToCart}>
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}