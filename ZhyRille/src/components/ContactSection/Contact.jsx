import React from "react";
import zhy from "../../assets/Zhyrille Signage.png";

const Contact = () => {
  const style = {
    backgroundPosition: "50% 100%",
  };
  return (
    <section className="body leading-6 bg-black">
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

      <div className="contact-body">
        <div className="contact-info">
          <div>
            {/* font-awesome-icons */}
            <span></span>
            <span>Phone No.</span>
            <span>123-123-12345</span>
          </div>

          <div>
            <span></span>
            <span>Email</span>
            <span>sampleEmail@company.com</span>
          </div>

          <div>
            <span></span>
            <span>Address</span>
            <span>9064 Lyda Summit Apt. 158, East Tyshawnbury</span>
          </div>

          <div>
            <span></span>
            <span>Opening Hours</span>
            <span>Monday - Saturday (9:00 AM to 7:00 PM)</span>
          </div>
        </div>

        <div className="contact-form">
          <form action="">
            <div>
              <input type="text" name="" id="" placeholder="First Name" />
              <input type="text" name="" id="" placeholder="Last Name" />
            </div>

            <div>
              <input type="email" name="" id="" placeholder="Email" />
              <input type="text" name="" id="" placeholder="Phone" />
            </div>

            <textarea
              name=""
              id=""
              cols=""
              rows="5"
              placeholder="Message"
            ></textarea>
            <input type="submit" value="send message" />
          </form>

          <div>
            <img src={zhy} alt="zhyrille logo" />
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
