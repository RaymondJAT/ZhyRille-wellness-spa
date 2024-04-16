import React from "react";

const Testimonial = () => {
  return (
    <div className="container">
      <div className="contents-wrapper">
        <section className="header">
          <h1>Testimonial</h1>
        </section>

        <section className="testRow">
          <div className="testItem">
            <h3>Name here</h3>
            <h4>Lorem ipsum dolor</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              aperiam distinctio ea unde eligendi exercitationem nam animi ex
              quis aliquam!
            </p>
          </div>
        </section>

        <section className="indicators">
          <div className="dot active" attr="0" onClick="switchText(this)"></div>
          <div className="dot active" attr="1" onClick="switchText(this)"></div>
          <div className="dot active" attr="2" onClick="switchText(this)"></div>
          <div className="dot active" attr="3" onClick="switchText(this)"></div>
          <div className="dot active" attr="4" onClick="switchText(this)"></div>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;
