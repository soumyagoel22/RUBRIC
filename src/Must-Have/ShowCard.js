import React, { useState } from "react";
import Modal from "./Modal";

const ShowCard = ({ value, id }) => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState();
  const [btnSelected, setBtnSelected] = useState();

  const showModal = (ql, id1) => {
    setShow(true);
    setState(ql);
    setBtnSelected(id1);
    // console.log(id1)
    // console.log(btnSelected);
  };

  const showModal1 = () => {
    setShow(true);
  };

  return (
    <>
      <div className="card">
        {value.map(({ ql, pt, tp, fp, id1 }, id) => {
          // console.log(btnSelected,id1);
          const selected = btnSelected === id1 ? "btnChangebtm" : "btnbtm";
          return (
            <div className="inCard" key={Math.random() + 1}>
              {btnSelected === id1 ? (
                <div
                  style={{
                    backgroundColor: "#ee5a36",
                    color: "#ffffff"
                  }}
                >
                  Most Popular
                </div>
              ) : (
                ""
              )}
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
              <button className={selected} onClick={() => showModal(ql, id1)}>
                Start Your Trial
              </button>
              <br />
            </div>
          );
        })}
        {show && <Modal setShow={setShow} state={state} />}
        <div className="inCard">
          <div style={{ color: "#ffffff", backgroundColor: "#5a6f90" }}>
            Enterprise
          </div>
          <br />
          <p style={{ marginTop: "75px", marginBottom: "75px" }}>
            Want more than 80 qualified leads per month?
          </p>
          <br />
          <button style={{ borderColor: "#ee5a36" }} onClick={showModal1}>
            Get in touch
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowCard;
