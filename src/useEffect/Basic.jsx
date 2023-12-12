import React, { useEffect, useState } from "react";

const Basic = () => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    if (test === 0) {
      document.title = "WhatsApp";
    } else {
      document.title = `(${test}) new messages* `;
    }
  }, [test]);

  return (
    <>
      <div className="container text-danger text-center text-uppercase mt-5">
        <h1>{test}</h1>
        <button onClick={() => setTest(test + 1)} className="btn btn-dark">
          Click
        </button>
      </div>
    </>
  );
};

export default Basic;
