import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
export default function WikiMain() {
  const babyAnimals = [
    "horse",
    "monkey",
    "lion",
    "wolf",
    "sheep",
    "bear",
    "cow",
    "turtle",
    "fox",
    "goat",
    "bunny",
  ];
  const [term, setTerm] = useState(
    `baby ${babyAnimals[Math.round(Math.random() * babyAnimals.length - 1)]}`
  );
  const [imgUrl, setImgUrl] = useState(term);
  const myInput = useRef();
  useEffect(() => {
    if (!term) return;
    if (term === "baby undefined") {
      setTerm("baby goat");
    }
    (async function () {
      await axios
        .get("https://api.unsplash.com/search/photos", {
          headers: {
            Authorization:
              "Client-ID qPSfInk8l6XGrlFg4jkjVs3KlkiDfrYA-JW9YQE8hkU",
          },
          params: {
            query: term,
          },
        })
        .then((res) => {
          setImgUrl(
            res.data.results[Math.round(Math.random() * 10)].urls.regular
          );
        });
    })();
    myInput.current.value = "";
  }, [term, setImgUrl]);

  return (
    <div className="text-center m-auto ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-4xl mt-10 mb-4 font-semibold md:text-5xl lg:text-5xl">
          Quick Search
        </h1>

        <input
          className="text-3xl w-10/12 mb-4 rounded-3xl p-1 md:w-7/12 md:text-3xl md:p-3 lg:w-6/12 2xl:w-5/12 "
          style={{ border: "2px solid black" }}
          placeholder="Enter any term"
          ref={myInput}
          type="text"
        />
        <br />
        <button
          className="text-xl text-white bg-black p-2 rounded-3xl hover:text-grey-400 md:text-3xl md:p-3 "
          onClick={(e) => setTerm(myInput.current.value)}
        >
          Search
        </button>
      </form>
      <h2 className=" text-2xl font-semibold my-3 md:text-4xl md:my-5 ">
        {term}
      </h2>
      <img className="m-auto w-11/12 mb-40 rounded-3xl md:w-10/12 lg:w-8/12 2xl:w-6/12" src={imgUrl} />
    </div>
  );
}
