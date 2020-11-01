import React, { useState } from "react";
import Modal from "./Modal";

const ShowCard = ({ value, id }) => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState();

  const showModal = (ql) => {
    setShow(true);
    setState(ql);
  };

  return (
    <>
      <div className="card">
        {value.map(({ ql, pt, tp, fp }) => (
          <div className="inCard" key={Math.random() + 1}>
            <div style={{ backgroundColor: "#eeff" }}>Qualified {ql}</div>
            <br />
            <div style={{ fontWeight: "bold" }}>{pt}</div>
            <p>Per Qualified Lead</p>
            <br />
            <p style={{ fontSize: "15px" }}>Qualified Leads Per Month</p>
            <div style={{ fontWeight: "bold" }}>{ql}</div>
            <br />
            <p>Platform Fee Per Month</p>
            <div style={{ fontWeight: "bold" }}>{tp}</div>
            <br />
            <div style={{ backgroundColor: "#eeff", fontWeight: "bold" }}>
              {fp}
            </div>
            <br />
            <button onClick={() => showModal(ql)}>Start Your Trial</button>
            <br />
          </div>
        ))}
        {show && <Modal setShow={setShow} state={state} />}
      </div>
    </>
  );
};

export default ShowCard;
