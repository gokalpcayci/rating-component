import logo from "./logo.svg";
import "./App.css";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";
import { useState } from "react";
function App(props) {
  const [content, setContent] = useState(true);
  const [star, setStar] = useState();
  return (
    <div className="bg-veryDarkBlue flex justify-center items-center min-h-screen">
      {content && <Rating onContent={setContent} onButton={setStar} />}
      {!content && <Thanks star={star} />}
    </div>
  );
}

export default App;
