import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
export default function WikiMain() {
  const babyAnimals=['horse','monkey','cat',"lion",'wolf', "sheep", "bear","cow","turtle",'fox','goat','bunny']
  const [term, setTerm] = useState(`baby ${babyAnimals[Math.round(Math.random()*babyAnimals.length-1)]}`);
  const [imgUrl, setImgUrl] = useState(term);
  const myInput = useRef();
  useEffect(() => {
    if (!term) return;
    if (term==='baby undefined'){
      setTerm('baby goat')
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
          setImgUrl(res.data.results[Math.round(Math.random()*10)].urls.regular);
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
        <h1 className="text-5xl mt-10 mb-4 font-semibold">Quick Search</h1>

        <input
          className="text-3xl w-11/12 mb-4 rounded-3xl p-3"
          style={{ border: "2px solid black" }}
          placeholder="Enter any term"
          ref={myInput}
          type="text"
        />
        <br />
        <button
          className="text-xl text-white bg-black p-2 rounded-3xl hover:text-grey-400"
          onClick={(e) => setTerm(myInput.current.value)}
        >
          Search
        </button>
      </form>
      <h2 className=" text-3xl font-semibold my-3">{term}</h2>
      <img className="m-auto w-11/12 mb-5 rounded-3xl" src={imgUrl} />
    </div>
  );
}
