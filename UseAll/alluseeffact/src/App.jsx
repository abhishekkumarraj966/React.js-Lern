import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setpassword] = useState("");
  // useRef hook
    const passwordRaf=useRef(null)

  const passwordGeneroter = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz";
    if (number) str += "1234567890";
    if (char) str += "!@#$%^&*(){}[]/*-+";
  
    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setpassword(pass);
  }, [length, number, char, setpassword]);
  
  const copypasswordToClibbord=useCallback(()=>{

      passwordRaf.current?.select()
      // passwordRaf
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGeneroter();
  }, [length, number, char, passwordGeneroter]);
  
  return (
    <div>
      <div className="w-full max-w-md shadow-md  mx-auto rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            type="text"
            ref={passwordRaf}
          />
          <button 
          onClick={copypasswordToClibbord}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            {" "}
            copy
          </button>
        </div>

        <div className=" flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setnumber((prev) => !prev);
              }}
            />
            <label>Number:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="CharacterInput"
              onChange={() => {
                setchar((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
