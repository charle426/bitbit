import React from "react"
export default function ConTactForm() {
    const [contactFormState, setContactform] = React.useState({
        clientName: "", clientEmail: "", clientCompany: "", clientSubject: "", clientMessage: "", 
    })

    // console.log(contactFormState)
     
    function handleChange(e) {
        const { name, value } = e.target
        setContactform((prev) => ({
            ...prev,
            [name]:value
        }))

    }
    function handleMailSubmit(e) {
        e.preventDefault()
        if (contactFormState.clientEmail && contactFormState.clientName && contactFormState.clientMessage)
        {
          alert(`${contactFormState.clientName} your has been successful sent`)
          setContactform(prev => ({
              clientEmail : "",
              clientName : "",
              clientCompany : "",
              clientSubject : "",
              clientMessage : ""
          }))
         
        } else
        {
          return
        }

     
    }
    return (
      <div className="flex md:flex-row flex-col gap-9">
        <form className="flex flex-col gap-9 w-full lg:w-[1800px]" onSubmit={handleMailSubmit}>
          <div className="flex w-full lg:flex-row flex-col gap-5">
            <div className="w-full">
              <h4 className="uppercase mb-2 text-[23px]">name</h4>
              <input
                type="text"
                name="clientName"
                value={contactFormState.clientName}
                placeholder="Full name"
                className="rounded-[30px] w-full text-[20px] font-medium bg-[#282454] outline-none px-[15px] py-[12px]"
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <h4 className="uppercase mb-2 text-[23px]">Email</h4>
              <input
                type="email"
                name="clientEmail"
                value={contactFormState.clientEmail}
                placeholder="email@example.com"
                className="rounded-[30px] w-full text-[20px] font-medium bg-[#282454] outline-none px-[15px] py-[12px]"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex w-full lg:flex-row flex-col gap-5">
            <div className="w-full">
              <h4 className="uppercase mb-2 text-[23px]">Company</h4>
              <input
                type="text"
                name="clientCompany"
                value={contactFormState.clientCompany}
                placeholder="Company Name"
                className="rounded-[30px] w-full text-[20px] font-medium bg-[#282454] outline-none px-[15px] py-[12px]"
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <h4 className="uppercase mb-2 text-[23px]">Subject</h4>
              <input
                type="text"
                name="clientSubject"
                value={contactFormState.clientSubject}
                placeholder="How can we help you"
                className="rounded-[30px] w-full text-[20px] font-medium bg-[#282454] outline-none px-[15px] py-[12px]"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <h4 className="uppercase mb-2 text-[23px]">Message</h4>
            <textarea
              name="clientMessage"
              value={contactFormState.clientMessage}
              onChange={handleChange}
              placeholder="I would like to get in touch with team of crypto"
              className="rounded-[15px] text-[20px] font-medium bg-[#282454] w-full h-[200px] max-h-[250px] outline-none px-[15px] py-[12px]"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="download">
              Submit
            </button>
          </div>
        </form>
        <div>
          <h3 className="text-[23px] mb-3">Want to reach us directly?</h3>
          <p>
            Send us a mail right and we would love to assist in any way can,
            fill the form and send us an email and you would receive a reply
            within 24hrs
          </p>
          <div className="mt-[25px]">
            <div className="flex gap-4 flex-row mb-3 items-center">
              <div className="rounded-full w-[38px] h-[38px] bg-[#6639E4] grid place-items-center text-2xl">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div>
                <a href="charlesakachi4@gmail.com" className="underline">
                  contactbitbit@email.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 flex-row mb-3 items-center">
              <div className="rounded-full w-[38px] h-[38px] bg-[#6639E4] grid place-items-center text-2xl">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div>
                <a href="charlesakachi4@gmail.com" className="underline">
                  suportbit@email.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 flex-row mb-3 items-center">
              <div className="rounded-full w-[38px] h-[38px] bg-[#6639E4] grid place-items-center text-2xl">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div>
                <a href="charlesakachi4@gmail.com" className="underline">
                  pressBit@email.com
                </a>
              </div>
            </div>
          </div>
          <div className="mt-[60px]">
            <h3 className="text-[23px]">Follow us on social media</h3>
            <div className=" mt-2 flex items-center gap-5 flex-wrap">
              <h3 className="rounded-full w-[34px] h-[34px] grid place-items-center bg-[#57547E]">
                <i className="fa-brands fa-facebook-f"></i>
              </h3>
              <h3 className="rounded-full w-[34px] h-[34px] grid place-items-center bg-[#57547E]">
                <i className="fa-brands fa-twitter"></i>
              </h3>
              <h3 className="rounded-full w-[34px] h-[34px] grid place-items-center bg-[#57547E]">
                <i className="fa-brands fa-instagram"></i>
              </h3>
              <h3 className="rounded-full w-[34px] h-[34px] grid place-items-center bg-[#57547E]">
                <i className="fa-brands fa-linkedin-in"></i>
              </h3>
              <h3 className="rounded-full w-[34px] h-[34px] grid place-items-center bg-[#57547E]">
                <i className="fa-brands fa-youtube"></i>
              </h3>
              <h3 className="rounded-full w-[34px] h-[34px] grid place-items-center bg-[#57547E]">
                <i className="fa-brands fa-telegram"></i>
              </h3>
              <h3 className="rounded-full w-[34px] h-[34px] grid place-items-center bg-[#57547E]">
                <i className="fa-brands fa-whatsapp"></i>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
}