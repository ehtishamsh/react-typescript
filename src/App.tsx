import "./App.css";
import { useState } from "react";
import Example from "./assets/com/Example";

function App() {
  // const add = (num1: number, num2: number): number => {
  //   return num1 + num2;
  // };
  // console.log(add(1, 2));

  // const formate = (str1: string, str2: string | number) => {
  //   return `${str1} ${str2}`;
  // };
  // const nothing = (): void => {
  //   console.log("hello");
  // };
  // nothing();

  // function addAll(
  //   str1: string,
  //   str2: string,
  //   str3: string,
  //   num1: number,
  //   num2: number
  // ): Array<string | number> {
  //   return [str1, str2, str3, num1, num2];
  // }
  // console.log(addAll("hello", "world", "hello", 1, 2));
  const [names, setName] = useState("");

  // type Condernate = {
  //   names: string;
  //   greet: string;
  // };
  // const condrinate = (obj: Condernate) => {
  //   return `${obj.names}, ${obj.greet}`;
  // };
  // console.log(condrinate({ names: "hello", greet: "world" }));

  return (
    <>
      <h1>{names}</h1>
      <Example setname={setName} names={names} />
    </>
  );
}

export default App;
