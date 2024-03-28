import React, { useState } from "react";

function Card(props) {
  const [status, setStatus] = useState(true);
  const [total, setTotal] = useState(0);  

  function handleBuyer() {
    setStatus(!status);
  }

  function increment() {
    setTotal(total + 1);
  }
  function decrement() {
    setTotal(total - 1);
  }

  return (
    <div className="bg-white shadow-lg rounded-md pb-5 hover:bg-slate-100">
      <img
        className="w-full rounded-t-md h-52"
        src={props.image}
        alt="gambar"
      />
      <div className="flex justify-between">
        <p className="font-semibold text-lg p-3">{props.name}</p>
        <p className="font-bold text-lg mt-3 mr-3">{props.price}</p>
      </div>
      <p className="text-sm p-3 text-slate-500">{props.desc}</p>

      <div className="flex justify-center mt-10">
        {total > 0 ? (
          <>
            <p onClick={decrement}>-</p>
            <p>{total > 9 ? "Out of stock" : total}</p>
            <p onClick={increment}>{total > 9 ? "" : "+"}</p>
          </>
        ) : (
          <button
            onClick={increment}
            className=" bg-blue-500 w-24 rounded-md py-1 text-white"
          >
            Order Now
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
