import Navbar from "./components/Navbar.jsx";
import AboutPriceCart from "./components/aboutPrice-cart.jsx";
import Footer from "./components/footer.jsx";
import PriceCart from "./components/price-cart.jsx";
import React from "react";
export default function BasicPlan(props) {
      // const [cartState, setCartState] = React.useState([])
  return (
    <>
      <PriceCart
        cartItem={props.cartItem}
        setCartItem={props.setCartItem}
        plan="basic"
        desc="Our Basic Plan is designed for newcomers to the crypto world. It offers essential tools, real-time data, and educational resources to kickstart your cryptocurrency journey with confidence."
        feature1="Trading up to $100k per month"
        feature2="Send and recieve over 85 tokens"
        feature3="Real-time trading crypto"
        feature4="IOS and android app"
      />
      <AboutPriceCart
        aboutTop="Our Basic Plan is designed for newcomers to the crypto world."
        aboutBottom=" It offers essential tools, real-time data, and educational resources to kickstart your cryptocurrency journey with confidence."
        aboutList1=" The Basic Plan is perfect for beginners looking to enter the world of cryptocurrency trading with ease."
        aboutList2="It includes fundamental tools such as secure wallet access, real-time market data, and basic charting capabilities.
"
        aboutList3="Subscribers benefit from educational materials, tutorials, and webinars to build a solid foundation in crypto trading."
        aboutList4=" Priced competitively, the Basic Plan ensures that even those new to crypto can begin their journey without breaking the bank."
      />
      <Footer />
    </>
  );
}
