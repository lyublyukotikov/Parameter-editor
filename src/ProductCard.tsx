import React from "react";
import { Param, ParamValue } from "./types";

const ProductCard: React.FC<{ params: Param[]; changedValues: ParamValue[] }> = ({ params, changedValues }) => {
  return (
    <div className="product__card">
      <img width={"200px"} height={"200px"} src="../src/assets/6213064015.jpg" alt="" />
      <div className="product__card__body">
        {params.map((param) => (
          <div className="product__card__characteristic" key={param.id}>
            <div className="product__card__name">{param.name}</div>
            <div className="product__card__value">
              {changedValues.find((paramValue) => paramValue.paramId === param.id)?.value || ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;