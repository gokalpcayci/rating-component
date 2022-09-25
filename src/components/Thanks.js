import React from "react";
import { Fragment } from "react";
import Illustration from "../UI/Illustration";
import Rating from "./Rating";
export default function Thanks(props) {
  return (
    <Fragment>
      <div className=" px-6 py-12 bg-gray-800 rounded-3xl">
        <div className="flex flex-col items-center justify-center space-y-8">
          <Illustration />
          <div className="bg-gray-700  py-2 px-6 rounded-full text-orange">
            <p className="text-sm font-overpass -mb-1 text-center">
              You selected out {props.star} of 5
            </p>
          </div>
          <h1 className="text-white text-3xl  font-overpass ">Thank you</h1>
          <p className="text-mediumGray px-3 font-overpass text-center max-w-sm">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </Fragment>
  );
}
