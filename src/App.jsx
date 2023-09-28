// import { useState } from 'react'
import React from "react";
import Nav from "./components/Navbar.jsx";
import HomePage from "./HomePage.jsx";
import About from "./About";
import Pricing from "./Pricing";
import ErrorPage from "./ErrorPage.jsx";
import ProPlan from "./pro-plan.jsx";
import "./playground.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BasicPlan from "./basic-plan.jsx";
import ExpertPlan from "./expert-plan.jsx";
import Blog from "./blog.jsx";
import Tokens from "./tokens.jsx";
import ContactPage from "./Contact.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogHowToTradeCrypto from "./Blog-how-to-trade-crypto.jsx";
import BlogWhatIsTheBest from "./Blog-what-is-the-best.jsx";
import Blog5GreatCryptoApps from "./Blog-5-great-crypto-apps.jsx";
import BlogBestPlatformToTrade from "./Blog-best-platform-to-trade.jsx";
import BlogBest4kMonitor from "./Blog-best-4k-monitor.jsx";
import BlogCrypto10AllYouNeed from "./Blog-crypto-10-all-you-need.jsx";
import Footer from "./components/footer.jsx";
// import { useEffect } from "react";
export default function App() {
  const [cartItem, setCartItem] = React.useState([])
  function removeFromCart(e) {
    setCartItem(cartItem.filter((_, previtem) => previtem !== e))
    console.log(e)
  }
  return (
    <>
      
      <Router>
        <Nav
          cartItem={cartItem}
          setCartItem={setCartItem}
          removeCartItem={removeFromCart}
        />
        <Routes>
          <Route exact path="/" element={<HomePage />} errorElement={<ErrorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="tokens" element={<Tokens />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route
            path="pricing/pro"
            element={<ProPlan cartItem={cartItem} setCartItem={setCartItem} />}
          />
          <Route
            path="pricing/basic"
            element={
              <BasicPlan cartItem={cartItem} setCartItem={setCartItem} />
            }
          />
          <Route
            path="pricing/expert"
            element={
              <ExpertPlan cartItem={cartItem} setCartItem={setCartItem} />
            }
          />
          <Route
            path="/blog/what-is-the-best-and-most-secure-wallet-in-2023"
            element={<BlogWhatIsTheBest />}
          />
          <Route
            path="/blog/how-to-trade-crypto-tokens-from-your-phone"
            element={<BlogHowToTradeCrypto />}
          />
          <Route
            path="/blog/5-great-crypto-apps-you-should-not-be-missing-out"
            element={<Blog5GreatCryptoApps />}
          />
          <Route
            path="/blog/best-platform-to-trade-btc-on-your-phone"
            element={<BlogBestPlatformToTrade />}
          />
          <Route
            path="/blog/best-4k-monitor-for-efficient-crypto-trading"
            element={<BlogBest4kMonitor />}
          />
          <Route
            path="/blog/crypto-101-all-you-need-to-know-about-the-crypto-world"
            element={<BlogCrypto10AllYouNeed />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

 