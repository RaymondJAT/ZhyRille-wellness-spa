import React from "react";
import zhy from "../../assets/Zhyrille Signage.png";

const Contact = () => {
  const style = {
    backgroundPosition: "50% 100%",
  };
  return (
    <section id="contacts" className="body leading-6 bg-black">
      <div
        className="contact-bg h-[20vh] bg-black bg-no-repeat bg-fixed text-center text-white flex flex-col justify-center items-center"
        style={style}
      >
        <h3 className="a text-lg text-yellow-500 font-normal">
          Get in touch with us
        </h3>
        <h2 className="a text-5xl uppercase py-1 px-0 tracking-[4px] text-yellow-500">
          contact us
        </h2>
      </div>

      <div className="contact-body max-w-[1320px] my-0 mx-auto py-4 px-0">
        <div className="contact-info my-4 mx-0 text-center py-4 px-0">
          <div className="a my-3 mx-0 p-4">
            {/* font-awesome-icons */}
            <span></span>
            <span className="block text-yellow-500">Phone No.</span>
            <span className="text block text-yellow-500 font-light opacity-90 pt-2">
              123-123-12345
            </span>
          </div>

          <div className="a my-3 mx-0 p-4">
            <span></span>
            <span className="block text-yellow-500">Email</span>
            <span className="text block text-yellow-500 font-light opacity-90 pt-2">
              sampleEmail@company.com
            </span>
          </div>

          <div className="a my-3 mx-0 p-4">
            <span></span>
            <span className="block text-yellow-500">Address</span>
            <span className="text block text-yellow-500 font-light opacity-90 pt-2">
              9064 Lyda Summit Apt. 158, East Tyshawnbury
            </span>
          </div>

          <div className="a my-3 mx-0 p-4">
            <span></span>
            <span className="block text-yellow-500">Opening Hours</span>
            <span className="text block text-yellow-500 font-light opacity-90 pt-2">
              Monday - Saturday (9:00 AM to 7:00 PM)
            </span>
          </div>
        </div>

        <div className="contact-form py-8 px-0 border-t-2 border-yellow-500">
          <form action="" className="pb-4">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name=""
                id=""
                className="form-control w-full border-2 border-yellow-500 rounded-md p-3 my-3 mx-0 text-sm outline-0"
                placeholder="First Name"
              />
              <input
                type="text"
                name=""
                id=""
                className="form-control w-full border-2 border-yellow-500 rounded-md p-3 my-3 mx-0 text-sm outline-0"
                placeholder="Last Name"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="email"
                name=""
                id=""
                className="form-control w-full border-2 border-yellow-500 rounded-md p-3 my-3 mx-0 text-sm outline-0"
                placeholder="Email"
              />
              <input
                type="text"
                name=""
                id=""
                className="form-control w-full border-2 border-yellow-500 rounded-md p-3 my-3 mx-0 text-sm outline-0"
                placeholder="Phone"
              />
            </div>

            <textarea
              name=""
              id=""
              cols=""
              rows="5"
              className="form-control w-full border-2 border-yellow-500 rounded-md p-3 my-3 mx-0 text-sm outline-0"
              placeholder="Message"
            ></textarea>
            <input
              type="submit"
              className="send-btn text-sm uppercase text-black bg-yellow-500 border-none rounded-md py-3 px-6 cursor-pointer transition-all duration-300 ease-in hover:opacity-90 hover:font-bold hover:text-white"
              value="send message"
            />
          </form>

          <div className="my-0 mx-auto text-center justify-center">
            <img
              src={zhy}
              alt="zhyrille logo"
              className="a w-3/4 my-0 mx-auto text-center justify-center"
            />
          </div>
        </div>
      </div>

      <div className="map p-5 bg-yellow-500 shadow-neutral-950">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d662.143061630113!2d121.06078397321383!3d14.338243843836217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d713f7b6e5ad%3A0xeafcedaf1c936365!2s5L%20Solutions%20Main%20Office!5e0!3m2!1sen!2sph!4v1710119281740!5m2!1sen!2sph"
          className="a border-none w-full h-96"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-footer">
        <div className="social-links">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
        <h3>RaymondJAT | 2024</h3>
      </div>
    </section>
  );
};

export default Contact;
