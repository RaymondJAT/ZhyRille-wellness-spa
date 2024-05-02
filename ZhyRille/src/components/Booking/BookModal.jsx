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
import BookForm from "./BookForm";

const BookModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <TERipple rippleColor="white">
        <button
          type="button"
          className="btn inline-block py-3 px-10 text-sm font-semibold border-2 border-solid border-transparent rounded-md transition-all duration-200 ease-in cursor-pointer bg-amber-50 text-black capitalize hover:translate-x-3 hover:border-2 hover:border-solid hover:border-amber-50 hover:bg-transparent hover:text-amber-50"
          onClick={() => setShowModal(true)}
        >
          book now
        </button>
      </TERipple>

      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog size="lg" centered>
          <TEModalContent>
            <TEModalHeader className="bg-stone-950">
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-200 dark:text-neutral-200">
                Modal title
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="text-neutral-200 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
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
            {/* <TEModalBody className="bg-stone-950"> */}
            <BookForm />
            {/* </TEModalBody> */}
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
};

export default BookModal;
