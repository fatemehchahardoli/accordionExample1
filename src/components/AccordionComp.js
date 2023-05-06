import React, { Component } from "react";

import Product from "./Product";
import { Span } from "./styled_components/styleAccordion";
import image1 from "../images/gallery-grid-8-370x278.jpg";
import css from "../css/accordionStyle.css";
class AccordionComp extends Component {
   constructor() {
      super();
      this.state = {
         flag: false,
      };
   }

   funAccordion = () => {
      this.setState({
         flag: !this.state.flag,
      });
   };
   render() {
      return (
         <>
            {this.state.flag ? (
               <button className="accordion active" onClick={this.funAccordion}>
                  Digital Products
               </button>
            ) : (
               <button className="accordion " onClick={this.funAccordion}>
                  Digital Products
               </button>
            )}

            <Span flag={this.state.flag}>
               <Product image={image1} title="product_1" price="230$">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  amet fugit in sit adipisci odio eos eum soluta debitis dolor!
               </Product>
               <Product image={image1} title="product_2" price="410$">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  amet fugit in sit adipisci
               </Product>
               <Product image={image1} title="product_3" price="32$">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  amet fugit in sit adipisci!
               </Product>
               <Product image={image1} title="product_4" price="75$">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  amet fugit in sit adipisci odio eos eum soluta debitis dolor!
               </Product>
            </Span>
         </>
      );
   }
}

export default AccordionComp;
