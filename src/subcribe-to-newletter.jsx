import React from "react"

export default function SubscribeToNewsletter() {
    const [clientsAddress, setEmailState] = React.useState({
      newsletter: "",
    });

    function handleChange() {
      const { name, value } = event.target;
      setEmailState((prev) => ({
        ...prev,
        [name]: value,
      }));
        
    }
    function handleSubmit(event) {
            event.preventDefault()
            if (clientsAddress.newsletter)
            {
               alert(`Thanks for Subscribing ${clientsAddress.newsletter}`) 
            }
        }
  return (
    <section className="px-5 py-12 lg:px-16 my-10 bg-[#6639e4] flex flex-col gap-3 lg:flex-row justify-between items-center">
      <div className="flex items-start gap-3 w-full px-3 lg:w-[450px]">
        <h2 className="rounded-[50px] bg-white h-[60px] w-[60px] p-5 flex items-center justify-center">
          <i className="fa fa-envelope text-[#6639e4]"></i>
        </h2>
        <div>
          <h4 className="uppercase">
            subscribe to our bitbit news weekly letter
          </h4>
          <p>
            recieve the latest and up to news and everything tech straight to
            your mail weekly
          </p>
        </div>
      </div>
      <div className="w-fit ">
              <form
                  onSubmit={ handleSubmit }
                  className="px-[10px] py-2 bg-white w-[100%] lg:w-[500px] overflow-hidden rounded-[50px] flex justify-between">
          <input
            type="email"
            name="newsletter"
            onChange={handleChange}
            placeholder="Enter Email Address"
            value={clientsAddress.newsletter}
            className="bg-white text-[#282454] font-semibold p-3 lg:p-5 border-0 w-full outline-none"
          />
          <button className="download uppercase">
            <h4>subcribe</h4>
          </button>
        </form>
      </div>
    
    </section>
  );
}
