
import AboutPriceCart from "./components/aboutPrice-cart.jsx";
import PriceCart from "./components/price-cart.jsx";

export default function ProPlan(props) {
    return (
      <>
        <PriceCart
          cartItem={props.cartItem}
          setCartItem={props.setCartItem}
          plan="pro"
          desc="The Pro Plan caters to experienced traders and investors. With advanced features, market analysis, and priority support, it empowers you to make informed decisions and maximize your crypto portfolio."
          feature1="Everything included in basic"
          feature2="Trading up to $1MM per month"
          feature3="Windows and macOS app"
          feature4="Premium support"
        />
        <AboutPriceCart
          aboutTop="Elevate your trading game with our Pro Plan, featuring advanced features and expert analysis for serious investors."
          aboutBottom="The Pro Plan caters to experienced traders and investors. With advanced features, market analysis, and priority support, it empowers you to make informed decisions and maximize your crypto portfolio."
          aboutList1="The Pro Plan offers an array of advanced trading tools, including technical indicators, custom alerts, and in-depth market analysis."
          aboutList2=" Subscribers enjoy priority customer support, ensuring quick resolution of queries and assistance with trading strategies."
          aboutList3=" It provides risk assessment tools and portfolio diversification recommendations for more informed decision-making."
          aboutList4=" Pro Plan subscribers gain access to exclusive market insights, helping them stay ahead of crypto trends and opportunities."
        />
      </>
    );
}