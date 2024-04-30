import React from "react";
import Modal from "./Modal";

import massage from "../../assets/oilbased.jpg";
import img from "../../assets/mema.jpg";

const Treatments = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundAttachment: "fixed",
    innerWidth: "100%",
  };

  return (
    <section className="tour block" style={styles}>
      <div className="center-text text-center">
        <h2 className="text-5xl text-amber-50 font-bold">Treatments</h2>
      </div>

      {/* Treatments services box */}
      <div className="tour-content mb-16 grid grid-cols-3 items-center gap-12 mt-16">
        <Modal
          image={massage}
          title="Hair Removal"
          modalTitle="Hair Removal Services"
          modalContent="This is the content of the modal."
        />

        <Modal
          image={massage}
          title="Hair Removal"
          modalTitle="Hair Removal Services"
          modalContent="This is the content of the modal."
        />

        <Modal
          image={massage}
          title="Hair Removal"
          modalTitle="Hair Removal Services"
          modalContent="This is the content of the modal."
        />

        <Modal
          image={massage}
          title="Hair Removal"
          modalTitle="Hair Removal Services"
          modalContent="This is the content of the modal."
        />

        <Modal
          image={massage}
          title="Hair Removal"
          modalTitle="Hair Removal Services"
          modalContent="This is the content of the modal."
        />

        <Modal
          image={massage}
          title="Hair Removal"
          modalTitle="Hair Removal Services"
          modalContent="This is the content of the modal."
        />
      </div>
    </section>
  );
};

export default Treatments;
