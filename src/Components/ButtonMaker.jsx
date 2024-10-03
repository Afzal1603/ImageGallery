import React from "react";
import CustomButton from "./CustomButton";

function ButtonMaker() {
  const buttonNames = [
    "trees",
    "t-shirt",
    "beach",
    "vintage",
    "potrait",
    "clock",
    "female",
    "cars",
    "ships",
    "rivers",
  ];
  return (
    <div className="flex justify-around mt-5 mb-5 mr-5">
      {buttonNames.map((buttonName) => (
        <CustomButton
          key={Math.floor(Math.random() * 1000 + 1)}
          searchItem={buttonName}
        />
      ))}
    </div>
  );
}

export default ButtonMaker;
