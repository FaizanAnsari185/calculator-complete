import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const getValue = (e) => {
    setData(data.concat(e.target.value));
  };

  const calculation = () => {
    setData(eval(data).toString());
  };

  const Clear = () => {
    setData("");
  };

  const getBack = () => {
    setData(data.slice(0, -1));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
      <div className="flex flex-col gap-4 bg-white shadow-2xl rounded-3xl p-6 max-w-xs">
        <h1 className="text-indigo-700 text-3xl font-extrabold text-center mb-2">Calculator</h1>
        <input
          value={data}
          readOnly
          className="bg-gray-100 text-right font-mono text-2xl text-gray-800 border border-gray-300 rounded-lg p-3 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="0"
        />
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={Clear}
            className="button bg-red-500 hover:bg-red-600 rounded-lg active:scale-95"
          >
            C
          </button>
          <button
            onClick={getValue}
            value="%"
            className="button bg-indigo-300 hover:bg-indigo-400 rounded-lg active:scale-95"
          >
            %
          </button>
          <button
            onClick={getValue}
            value="*"
            className="button bg-indigo-300 hover:bg-indigo-400 rounded-lg active:scale-95"
          >
            *
          </button>
          <button
            onClick={getValue}
            value="/"
            className="button bg-indigo-300 hover:bg-indigo-400 rounded-lg active:scale-95"
          >
            /
          </button>

          {[7, 8, 9, "+"].map((val) => (
            <button
              key={val}
              onClick={getValue}
              value={val}
              className="button bg-indigo-100 hover:bg-indigo-200 rounded-lg active:scale-95"
            >
              {val}
            </button>
          ))}

          {[4, 5, 6, "-"].map((val) => (
            <button
              key={val}
              onClick={getValue}
              value={val}
              className="button bg-indigo-100 hover:bg-indigo-200 rounded-lg active:scale-95"
            >
              {val}
            </button>
          ))}

          {[1, 2, 3, "0"].map((val) => (
            <button
              key={val}
              onClick={getValue}
              value={val}
              className="button bg-indigo-100 hover:bg-indigo-200 rounded-lg active:scale-95"
            >
              {val}
            </button>
          ))}

          <button
            onClick={getValue}
            value="."
            className="button bg-indigo-100 hover:bg-indigo-200 rounded-lg active:scale-95"
          >
            .
          </button>
          <button
            onClick={getBack}
            className="button bg-yellow-500 hover:bg-yellow-600 rounded-lg active:scale-95"
          >
            Back
          </button>
          <button
            onClick={calculation}
            className="button bg-green-500 hover:bg-green-600 col-span-2 rounded-lg active:scale-95"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
