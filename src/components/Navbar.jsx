// import { Outlet } from "react-router-dom";
import React from "react"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
export default function Nav(props) {
  const [navState, setNavState] = React.useState(false)
  const {pathname} = useLocation()
  const cartList = props.cartItem.length
  const mappedCartData = props.cartItem.map((items, index) => {
    return (
      <div key={ index } className="mt-4 flex justify-between duration-300">
        <div>
          <h3 className="mb-1 text-[25px] uppercase">{ items.subPlan } plan</h3>
          <p>
            { items.duration.selectDuration
              ? items.duration.selectDuration
              : " 1 Month" }
          </p>
          <p>Price ${ items.cash }</p>
        </div>
        <div data-id={ index } onClick={() => props.removeCartItem(index) }>
          <i className="fa fa-trash-can text-[30px]"></i>
        </div>
      </div>
    );
  })

  useEffect(() => {
     setNavState(false)
     window.scrollTo(0, 0);
   },[pathname])

    window > addEventListener("scroll", (e) => {
      "use strict"
      const nav = document.querySelector(".navbar")
      const wH = window.scrollY

      if (!e)
      {
        return
      } else
      {
        
        if (wH > 400)
        {
          nav.classList.add("navbarscroll")
        } else
        {
          nav.classList.remove("navbarscroll");
        }
      }

    })
    return (
      <nav className="navbar flex justify-between md:py-5 md:px-16 py-2 px-3 max-w-[100%] w-[100%] overflow-hidden items-center">
        <input type="checkbox" checked={navState} onClick={() => setNavState(prev => !prev)} id="navCheck" />
        <div className="mobileNavContainer flex items-center lg:gap-10 md:gap-3 mr-2">
          <div className="logo-div">
            <Link to="/">
              <h2>
                <em className="logo">BiTBiT</em>
              </h2>
            </Link>
          </div>
          <div className="lg:h-16 sm:h-8 verticalLine"></div>
          <div className="overflow-hidden w-full">
            <div
              id="mobileNav"
              className="mobileNav flex gap-4 items-center uppercase relative"
            >
              <h3>
                <Link to="/">home</Link>
              </h3>
              <h3>
                <Link to="/about">about</Link>
              </h3>
              <h3>
                <Link to="/pricing">pricing</Link>
              </h3>
              <h3>
                <Link to="/tokens">tokens</Link>
              </h3>
              <h3>
                <Link to="/blog">blog</Link>
              </h3>
              <h3>
                <Link to="/contacts">contacts</Link>
              </h3>
            </div>
          </div>
        </div>
        <div className=" cartCon uppercase flex lg:gap-4 md:gap-2 items-center overflow-hidden ">
          <input type="checkbox" id="cartBox" />
          <label htmlFor="cartBox">
            <h3>cart({ cartList })</h3>
          </label>

          <h3 className="hidden lg:inline ">
            <button className="download">
              { " " }
              <Link to="/download">DOWNLOAD APP </Link>
            </button>
          </h3>
          <div className="cart-container overflow-y-scroll px-5 py-6 rounded-md fixed bg-[#282454] h-[80vh] duration-500 w-[380px] -z-50 opacity-0 translate-x-[250px]">
            <label htmlFor="cartBox">
              <i className="fa fa-x text-[40px]"></i>
            </label>
            { mappedCartData }

            { cartList ? (
              <div className="mt-5">
                {/* <h3>Total: { props.cartItem.cash}</h3> */ }
                <button className="download">Purchase</button>
              </div>
            ) : (
              <div>Your is Empty</div>
            ) }
          </div>
        </div>
        <div className="navBurger ml-2 ">
          <label htmlFor="navCheck">
            <div className=" bg-white"></div>
            <div className=" bg-white"></div>
            <div className=" bg-white"></div>
          </label>
        </div>
      </nav>
    );
    //  <Outlet />;
  }
    



  