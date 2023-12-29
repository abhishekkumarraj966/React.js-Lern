import "./App.css";
import "./compunent/Card";
import { Card } from "./compunent/Card";
export default function App() {
  let myobj={
    username:"Abhishek",
    age:21
  }
  // let newArr=[1,2,3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl  text-center mb-4">
        Hello world!
      </h1>
    <Card username="Abhi" btnText="click me"/>
    <Card />
    </>
  );
}
