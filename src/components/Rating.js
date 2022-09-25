import React from "react";
import { Fragment } from "react";
import Icon from "../UI/Icon";
import { useState } from "react";
export default function Rating(props) {
  const [chooseBtn, setChooseBtn] = useState();
  const aRR = [
    { id: 1, p: 1, btn: false },
    { id: 2, p: 2, btn: false },
    { id: 3, p: 3, btn: false },
    { id: 4, p: 4, btn: false },
    { id: 5, p: 5, btn: false },
  ];

  return (
    <Fragment>
      <div className="p-7 bg-gray-800 rounded-3xl">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="p-3 self-start bg-gray-700 rounded-full">
            <Icon />
          </div>
          <h1 className="text-white font-overpass self-start font-semibold text-3xl">
            How did we do?
          </h1>
          <p className="text-md text-mediumGray font-overpass max-w-sm">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex font-semibold space-x-7 pb-2 justify-center w-full   items-center">
            {aRR.map((btn, i) => {
              return (
                <button
                  value={i + 1}
                  onClick={(e) => {
                    setChooseBtn(btn.id);
                    props.onButton(e.target.value);
                  }}
                  style={{
                    color: `${btn.id === chooseBtn ? "white" : ""}`,
                    backgroundColor: `${
                      btn.id === chooseBtn ? "hsl(216, 12%, 54%)" : ""
                    }`,
                  }}
                  key={btn.id}
                  className="w-12 group hover:text-white hover:bg-orange text-mediumGray transform duration-300 h-12 flex items-center cursor-pointer justify-center bg-gray-700  rounded-full "
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => props.onContent(false)}
            className="w-full   py-3 bg-orange hover:bg-white hover:text-orange transform duration-300 rounded-full text-white text-2xl font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </Fragment>
  );
}
