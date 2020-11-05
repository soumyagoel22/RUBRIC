import React, { useState } from "react";
import Modal from "./Modal";

const ShowCard = ({ value, id }) => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState();

  const showModal = (ql) => {
    setShow(true);
    setState(ql);
  };

  const showModal1 = () =>{
    setShow(true);
  }

  return (
    <>
      <div className="card">
        {value.map(({ ql, pt, tp, fp }) => (
          <div className="inCard" key={Math.random() + 1}>
            <div style={{ color: "#ffffff", backgroundColor: "#5a6f90" }}>
              Qualified {ql}
            </div>
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
            <div
              style={{
                color: "#ffffff",
                backgroundColor: "#5a6f90",
                fontWeight: "bold"
              }}
            >
              {fp}
            </div>
            <br />
            <button onClick={() => showModal(ql)}>Start Your Trial</button>
            <br />
          </div>
        ))}
        {show && <Modal setShow={setShow} state={state} />}
        <div className="inCard">
        <div style={{ color: "#ffffff", backgroundColor: "#5a6f90" }}>
          Enterprise
        </div>
        <br />
        <p style={{marginTop:"75px", marginBottom:"75px"}}>Want more than 80 qualified leads per month?</p>
        <br/>
        <button onClick={showModal1}>Get in touch</button>
      </div>
      </div>
    </>
  );
};

export default ShowCard;
