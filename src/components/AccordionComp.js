import React, { Component } from "react";
import css from "../css/accordionStyle.css";
import Product from "./Product";
class AccordionComp extends Component {
   constructor() {
      super();
   }

   funAccordion = () => {
      console.log(Product.state);
   };
   render() {
      return (
         <>
            <button className="accordion" onClick={this.funAccordion}>
               Digital Products
            </button>
            <Product></Product>
         </>
      );
   }
}

export default AccordionComp;
