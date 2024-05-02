import React, { useState } from "react";

import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
} from "tw-elements-react";

const AboutModal = () => {
  const [showModalLg, setShowModalLg] = useState(false);
  return (
    <div>
      <TERipple rippleColor="white">
        <button
          type="button"
          className="btn inline-block py-2.5 px-8 text-xs font-semibold border-2 border-solid border-transparent rounded-md transition-all duration-200 ease-in cursor-pointer bg-amber-50 text-black capitalize hover:translate-x-3 hover:border-2 hover:border-solid hover:border-amber-50 hover:bg-transparent hover:text-amber-50"
          onClick={() => setShowModalLg(true)}
        >
          Large modal
        </button>
      </TERipple>

      {/* <!--Large modal-->*/}
      <TEModal show={showModalLg} setShow={setShowModalLg}>
        <TEModalDialog size="lg">
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                Large modal
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModalLg(false)}
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
            <TEModalBody>...</TEModalBody>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
};

export default AboutModal;
