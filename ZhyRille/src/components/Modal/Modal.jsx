import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

import img from "../../assets/mema.jpg";
import massage from "../../assets/oilbased.jpg";

const Modal = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundAttachment: "fixed",
    innerWidth: "100%",
  };

  const [
    showVerticalyCenteredScrollModal,
    setShowVerticalyCenteredScrollModal,
  ] = useState(false);

  return (
    <section className="tour block" style={styles}>
      <div className="center-text text-center">
        <h2 className="text-5xl text-amber-50 font-bold">Treatments</h2>
      </div>

      <div className="tour-content mb-16 grid grid-cols-3 items-center gap-12 mt-16">
        <div className="box relative">
          <TERipple rippleColor="white">
            <img
              src={massage}
              alt=""
              className="w-full h-full object-cover rounded-lg block"
            />

            <h4 className="absolute left-6 bottom-16 text-lg font-bold text-white">
              Hair Removal
            </h4>

            <button
              type="button"
              className="btn absolute left-6 bottom-4 py-2 px-6 text-xs font-semibold border-2 border-solid border-transparent rounded-md transition-all duration-200 ease-in cursor-pointer bg-amber-50 text-black capitalize hover:translate-x-3 hover:border-2 hover:border-solid hover:border-amber-50 hover:bg-transparent hover:text-amber-50"
              onClick={() => setShowVerticalyCenteredScrollModal(true)}
            >
              View More
            </button>

            {/* <!--Verically centered scrollable modal--> */}
            <TEModal
              show={showVerticalyCenteredScrollModal}
              setShow={setShowVerticalyCenteredScrollModal}
              scrollable
            >
              <TEModalDialog centered>
                <TEModalContent>
                  <TEModalHeader>
                    {/* <!--Modal title--> */}
                    <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                      Modal title
                    </h5>
                    {/* <!--Close button--> */}
                    <button
                      type="button"
                      className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                      onClick={() => setShowVerticalyCenteredScrollModal(false)}
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </TEModalHeader>
                  {/* <!--Modal body--> */}
                  <TEModalBody>
                    <p>
                      This is some placeholder content to show a vertically
                      centered modal. We've added some extra copy here to show
                      how vertically centering the modal works when combined
                      with scrollable modals. We also use some repeated line
                      breaks to quickly extend the height of the content,
                      thereby triggering the scrolling. When content becomes
                      longer than the predefined max-height of modal, content
                      will be cropped and scrollable within the modal.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Just like that.</p>
                  </TEModalBody>
                  <TEModalFooter>
                    <TERipple rippleColor="light">
                      <button
                        type="button"
                        className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                        onClick={() =>
                          setShowVerticalyCenteredScrollModal(false)
                        }
                      >
                        Close
                      </button>
                    </TERipple>
                    <TERipple rippleColor="light">
                      <button
                        type="button"
                        className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      >
                        Save changes
                      </button>
                    </TERipple>
                  </TEModalFooter>
                </TEModalContent>
              </TEModalDialog>
            </TEModal>
          </TERipple>
        </div>
      </div>
    </section>
  );
};

export default Modal;
