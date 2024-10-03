import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { AppContext1 } from "../Store/AppContext1";
function CardMaker() {
  const context = useContext(AppContext1);
  return (
    <div className="flex flex-wrap justify-center">
      {context.data.map((item) => (
        <Card
          key={item.id}
          photographer={item.photographer}
          url={item.src.medium}
          alt={item.alt}
        ></Card>
      ))}
    </div>
  );
}

export default CardMaker;
