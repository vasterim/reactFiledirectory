import { useState } from "react";

function App() {
  const [arr, setArr] = useState(["folder"]);
  const [value, setValue] = useState('');

  const handlePressKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (value.trim() !== '') {
      setArr([...arr, value]);
      setValue('');
    }
  };

  const handleDelete = (index) => {
    if (index !== 0) {
      const newArr = arr.slice(0, index);
      setArr(newArr);
    }
  };

  return (
    <>
      <div className="flex m-5 items-center text-2xl">
        <ul className="flex">
          {arr.map((item, index) => (
            <li className="text-blue-500 hover:cursor-pointer hover:text-blue-400" key={index}>
              <button onClick={() => handleDelete(index)}>{item}</button>
              {index !== arr.length - 0 && <span className="text-zinc-700">/</span>}
            </li>
          ))}
        </ul>
        <input onChange={(e) => setValue(e.target.value)} onKeyPress={handlePressKey} type="text" className="border  text-zinc-600 outline-none hover:border-zinc-300 focus:border-zinc-300" value={value} />
      </div>
    </>
  );
}

export default App;
