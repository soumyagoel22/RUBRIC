import React, { useState } from "react";
import ShowCard from "./ShowCard";

const Details = () => {
  const [btnSelected, setBtnSelected] = useState(3);
  const data = [];
  let i, j;
  // Average home price point
  let av = 100;
  let av1 = 200;
  // Qualified Leads Per Month
  let ql = 20;
  //Price per live transfer
  let pt = 69;
  // Total platform price
  let tp = 299;
  // Final package price
  let fp = 1679;
  // id
  let id = 1;
  let id1 = 0;

  for (i = 1; i <= 5; i++) {
    let a = {};
    id1 = 0;
    a.id = id;
    if (i === 5) {
      a.av = `$${av}K+`;
    } else {
      a.av = `$${av}K-$${av1}K`;
    }
    let value = [];
    for (j = 1; j <= 4; j++) {
      let obj = {};
      obj.ql = ql;
      obj.pt = `$${pt}`;
      obj.tp = `$${tp}`;
      obj.fp = `$${fp}/mo`;
      obj.id1 = id1;
      value.push(obj);
      ql = ql + 20;
      pt = pt - 2;
      tp = tp + 200;
      fp = fp + 1000;
      id1++;
    }
    a.value = value;
    // console.log(a);
    data.push(a);
    id++;
    av = av + 100;
    av1 = av1 + 100;
    ql = 20;
    pt += 15;
    tp = 299;
    fp -= 2500;
    // console.log(id1);
  }

  const showCard = (id) => {
    setBtnSelected(id);
  };
  let dataa = data.filter((ele) => ele.id === btnSelected)[0];
  let { value, id: dataId } = dataa;
  // console.log(value);
  return (
    <>
      <div className="header">
        {data.map((ele, i) => {
          const selected = dataId === ele.id ? "btnChange" : "btnTop";
          return (
            <button
              className={selected}
              onClick={() => showCard(ele.id)}
              key={i}
            >
              {ele.av}
            </button>
          );
        })}
      </div>
      <div key={dataId}>
        <ShowCard value={value} id={id} />
      </div>
    </>
  );
};

export default Details;
