import React, { Component } from "react";
import css from "../css/style.css";
import { Div } from "./styled_components/styleProduct";
import heart from "../images/heart-svgrepo-com.svg";

class Product extends Component {
   constructor() {
      super();
      this.state = {
         flag: false,
      };
   }

   render() {
      const { image, title, price, children } = this.props;
      return (
         <>
            <Div>
               <img src={image} alt={title} />
               <h2>{title}</h2>
               <span className="price">{price}</span>
               <p className="description">{children}</p>
               <img className="svg-heart" src={heart}></img>
            </Div>
         </>
      );
   }
}

export default Product;
