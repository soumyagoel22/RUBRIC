import React, { useState } from "react";
import ShowInput from "./ShowInput";
import ShowOption from "./ShowOption";

const Modal = ({ state, setShow }) => {
  const [abc, setAbc] = useState({
    name: "",
    email: "",
    mobileNo: "",
    numLead: "",
    totalLead: "",
    crm: "",
    agent: ""
  });

  const onSubmit = () => {
    alert(
      `${abc.name} ${abc.email} ${abc.mobileNo} ${abc.numLead} ${abc.totalLead} ${abc.crm} ${abc.agent}`
    );
    setShow(false);
  };

  const onHandle = (e) => {
    e.preventDefault();
  };

  const setObject = (type, value) => {
    let temp = Object.assign({}, abc);
    temp[type] = value;
    setAbc(temp);
  };

  return (
    <>
      <div className="modal">
        <h6>Get Started With SquadVoice</h6>
        {(state===20 ||state===40 ||state===60 ||state===80) ?
        <div>Plan Selected: Qualified {state}</div>
        :""}
        <form className="showForm" onSubmit={(e) => onHandle(e)}>
          <ShowInput
            name="Name:"
            type="text"
            value={abc.name}
            onChange={(e) => setObject("name", e.target.value)}
          />
          <div className="showLabel">
            <ShowInput
              name="Email Address:"
              type="text"
              value={abc.email}
              onChange={(e) => setObject("email", e.target.value)}
            />
            <ShowInput
              name="Mobile No. :"
              type="number"
              value={abc.mobileNo}
              onChange={(e) => setObject("mobileNo", e.target.value)}
            />
          </div>
          <div className="showLabel">
            <ShowInput
              name="Number of leads you generate in a month:"
              type="number"
              value={abc.numLead}
              onChange={(e) => setObject("numLead", e.target.value)}
            />
            <ShowInput
              name="Total leads in your CRM:"
              type="number"
              value={abc.totalLead}
              onChange={(e) => setObject("totalLead", e.target.value)}
            />
          </div>
          <div className="showLabel">
            <ShowInput
              name="Which CRM do you use?:"
              type="number"
              value={abc.crm}
              onChange={(e) => setObject("crm", e.target.value)}
            />
            <ShowInput
              name="No. of agents:"
              type="number"
              value={abc.agent}
              onChange={(e) => setObject("agent", e.target.value)}
            />
          </div>
          <div>
            <div>What are your biggest lead sources?</div>
            <ShowOption type="radio" name="val1" val="Zillow" />
            <ShowOption type="radio" name="val1" val="Realtor" />
            <ShowOption type="radio" name="val1" val="Ylopo" />
            <ShowOption type="radio" name="val1" val="Others" />
          </div>
          <div>
            <div>How did you hear about us?</div>
            <ShowOption type="radio" name="val2" val="Google" />
            <ShowOption type="radio" name="val2" val="Facebook" />
            <ShowOption type="radio" name="val2" val="Email" />
            <ShowOption type="radio" name="val2" val="Friends" />
          </div>
        </form>
        <br />
        <button
          onClick={onSubmit}
          disabled={
            !(
              abc.name &&
              abc.email &&
              abc.mobileNo &&
              abc.numLead &&
              abc.totalLead &&
              abc.crm &&
              abc.agent
            )
          }
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Modal;
