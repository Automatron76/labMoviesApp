import React from "react";
import { BaseTVProps } from "../../types/interfaces";
import TVCard from "../tvCard"; // You'll need to create this

interface TVListProps {
  tvSeries: BaseTVProps[];
  action?: (t: BaseTVProps) => React.ReactNode;
}

const TVList: React.FC<TVListProps> = ({ tvSeries, action }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tvSeries.map((tv) => (
        <div key={tv.id} style={{ margin: "10px" }}>
          <TVCard {...tv} />
          {action && action(tv)}
        </div>
      ))}
    </div>
  );
};

export default TVList;