import React from "react";
import { Card } from "../Card/Card";
import "./FeaturedProducts.scss";
import { featured2 } from "../../data";

export const FeaturedProducts = ({ type }) => {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="bottom">
        {featured2.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
