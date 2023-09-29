import HomeBlog from "./components/homeBlog";
import { blogButtons, blogPageData, featuredBlog } from "./assets/blog"
import SubscribeToNewsletter from "./subcribe-to-newletter";
import React from "react"
import { Link } from "react-router-dom";
export default function Blog() {
  // let dBlog = document.getElementById("dBlog");
  const [blogState, setBlogState] = React.useState(blogPageData) 
  
   const mappedBlogData = blogState.map((items) => {
      return (
        <HomeBlog
          key={ items.id }
          image={ items.blogImage }
          desc={ items.desc }
          title={ items.title }
          info={ items.info }
          authorPic={ items.authorPic }
          authorName={ items.authorName }
          date={ items.date }
          link= {items.link}
        />
          );
    }); 
  
  const [active, setActive] = React.useState("ALL")

  const blogBtn = blogButtons.map((btn) => {
    return (
      <button key={ btn.id }
        onClick={ blogCategories }
        className={ active === btn.btnDesc ? "active" : "inactive" }
        data-id={ btn.btnDesc }>{ btn.btnDesc }</button>
        )
      })
      // className="blogCategories px-3 py-2 uppercase cursor-point rounded-full"
   


  function blogCategories(e) {
    const currentBtn = e.currentTarget.dataset.id;
        const filterBlog = blogPageData.filter((items) => {
          if (currentBtn === items.desc) {
            return items
          }
        });

        if (currentBtn === "ALL") {
          setBlogState(blogPageData);
        } else {
          setBlogState(filterBlog);
    }
    setActive(currentBtn)
  }

  



    return (
      <section className="relative">
        <section className="mb-7 lg:px-16 px-5">
          <div className="flex items-center mb-7 mt-16 lg:flex-row flex-col">
            <h2 className="mr-auto w-full ">Blog</h2>
            <p>
              Explore our blog page for insightful articles, market updates, and
              expert opinions on cryptocurrency trends.
            </p>
          </div>
          <Link to={featuredBlog.link}>
            <div className="rounded-[30px] featuredBlog bg-[#282454] flex flex-col lg:flex-row-reverse items-center overflow-hidden">
              <div className="w-full">
                <img src={featuredBlog.blogImage} alt="img" width="100%" className="duration-300" />
              </div>
              <div className="px-10 lg:py-0 pb-7 w-full">
                <h4 className="bg-[#6639e4] rounded-[30px] w-fit px-3 py-2 mb-2 lg:translate-y-2 -translate-y-4">
                  {featuredBlog.desc}
                </h4>
                <h3 className="text-[28px] lg:mt-6 lg:mb-3 my-2">
                  {featuredBlog.title}
                </h3>
                <p className="line-clamp-5">{featuredBlog.info}</p>
              </div>
            </div>
          </Link>
        </section>
        <SubscribeToNewsletter />
        <div className="px-0 lg:px-16 py-5">
          <div className="flex w-full flex-wrap justify-between items-center px-5">
            <h2>Latest News</h2>
            <div className="flex items-center gap-3 flex-wrap">{blogBtn}</div>
          </div>
          <div
            id="dBlog"
            className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2"
          >
            {mappedBlogData}
          </div>
        </div>
      </section>
    );
}