import React from "react";
import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (e) => {
    const value = e.target.value;
    if (value === "C") {
      setDisplay("");
    } else if (value === "=") {
      try {
        const result = eval(display);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-sans shadow-lg rounded-lg p-5 m-32 mr-96 ml-96 ">
      <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg mb-5 mr-20 ml-20">
        {display}
      </div>
      <div>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded hover:bg-gray-400 m-2 ml-28 hover:dark:bg-gray-500 bg-blue-500 text-white"
          value="C"
          onClick={handleClick}
        >
          C
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2  hover:bg-gray-400 hover:dark:bg-gray-500"
          value="7"
          onClick={handleClick}
        >
          7
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2  hover:bg-gray-400 hover:dark:bg-gray-500"
          value="8"
          onClick={handleClick}
        >
          8
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2 hover:bg-gray-400 hover:dark:bg-gray-500 bg-blue-500 text-white"
          value="/"
          onClick={handleClick}
        >
          /
        </button>
      </div><br />
      <div>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2 ml-28 hover:bg-gray-400 hover:dark:bg-gray-500"
          value="4"
          onClick={handleClick}
        >
          4
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2  hover:bg-gray-400 hover:dark:bg-gray-500"
          value="5"
          onClick={handleClick}
        >
          5
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2 hover:bg-gray-400 hover:dark:bg-gray-500"
          value="6"
          onClick={handleClick}
        >
          6
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2 hover:bg-gray-400 hover:dark:bg-gray-500 bg-blue-500 text-white"
          value="*"
          onClick={handleClick}
        >
          *
        </button>
      </div><br />
      <div>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2 ml-28 hover:bg-gray-400 hover:dark:bg-gray-500"
          value="1"
          onClick={handleClick}
        >
          1
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2 hover:bg-gray-400 hover:dark:bg-gray-500"
          value="2"
          onClick={handleClick}
        >
          2
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2 hover:bg-gray-400 hover:dark:bg-gray-500"
          value="3"
          onClick={handleClick}
        >
          3
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2  hover:bg-gray-400 hover:dark:bg-gray-500 bg-blue-500 text-white"
          value="-"
          onClick={handleClick}
        >
          -
        </button>
      </div><br />
      <div>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2 ml-28 hover:bg-gray-400 hover:dark:bg-gray-500"
          value="0"
          onClick={handleClick}
        >
          0
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2 hover:bg-gray-400 hover:dark:bg-gray-500"
          value="."
          onClick={handleClick}
        >
          .
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2 hover:bg-gray-400 bg-green-500 text-white"
          value="="
          onClick={handleClick}
        >
          =
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded m-2 hover:bg-gray-400 hover:dark:bg-gray-500 bg-blue-500 text-white"
          value="+"
          onClick={handleClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Calculator;
