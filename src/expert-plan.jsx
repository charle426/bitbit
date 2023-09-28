import AboutPriceCart from "./components/aboutPrice-cart.jsx";
import PriceCart from "./components/price-cart.jsx";

export default function ExpertPlan(props) {
  return (
    <>
      <PriceCart
        cartItem={props.cartItem}
        setCartItem={props.setCartItem}
        plan="expert"
        desc="Our Expert Plan is tailored for seasoned professionals. It provides comprehensive tools, personalized strategies, one-on-one consultations, and priority access to exclusive resources, ensuring unparalleled success in the crypto market."
        feature1="Everything included in PRO"
        feature2="Trading over $10MM per month"
        feature3="Window and macOS app"
        feature4="Dedicated support"
      />
      <AboutPriceCart
        aboutTop="For seasoned pros, our Expert Plan provides comprehensive tools, personalized strategies, and premium support for maximum success."
        aboutBottom="Our Expert Plan is tailored for seasoned professionals. It provides comprehensive tools, personalized strategies, one-on-one consultations, and priority access to exclusive resources, ensuring unparalleled success in the crypto market."
        aboutList1="The Expert Plan provides personalized trading strategies crafted by experts to align with individual goals and risk tolerance."
        aboutList2=" Subscribers receive dedicated one-on-one consultations with crypto specialists for in-depth guidance and analysis."
        aboutList3=" It offers priority access to exclusive research reports, ICO opportunities, and early-stage investment insights."
        aboutList4="Subscribers benefit from 24/7 support, ensuring that all their trading needs are met promptly and professionally."
      />
    </>
  );
}