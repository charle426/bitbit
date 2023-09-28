import { faqData } from "./assets/blog"

import ConTactForm from "./components/contactForm";
export default function ContactPage() {
    // const [activeFaq, setActiveFaQ] = React.useState(2)
     
    const mappedFaq = faqData.map((data) => {
         return (
           <div
             key={data.id}
             className="faqInactive"
             id="faqDiv"
             onClick={handleFaq}
           >
             <div
               className="flex items-center justify-between"
               id="faqQuestion"
             >
               <h3 className="text-[30px]">{data.question}</h3>
               <p data-id={data.id}>
                 <i className="fa fa-plus text-[30px] font-thin"></i>
               </p>
             </div>
             <div className="overflow-hidden answer">
               <p>{data.answer}</p>
             </div>
           </div>
         );
    })

    function handleFaq(e) {
       const currentFaq = e.currentTarget
        // setActiveFaQ(currentFaq)
        
        document.querySelectorAll("#faqDiv").forEach((el) => {
            if (currentFaq !== el)
            {
                el.classList.remove("faqActive")
            } else
            {
                currentFaq.classList.toggle("faqActive");
            }
            
        })

        
    }
    return (
      <>
        <section className="py-5 px-5 lg:px-16">
          <h1 className="mb-5">Get in touch</h1>
          <ConTactForm />
        </section>
        <section className="py-5 px-5 lg:px-16">
          <div className="faq-container flex flex-col text-center mb-20">
            <h2>FAQs</h2>
            <p>
              All frequent asked question about <i>BiTBit</i>
            </p>
          </div>
          <div className="max-w-[850px] mx-auto map-faq">{mappedFaq}</div>
        </section>
  
      </>
    );
}