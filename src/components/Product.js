import React, { Component } from "react";
import css from "../css/style.css";
import { Div } from "./styled_components/styleProduct";
import heart from "../images/heart-svgrepo-com.svg";
import heartRed from "../images/red-heart-icon.svg";

class Product extends Component {
   constructor() {
      super();
      this.state = {
         flag: false,
      };
   }
   changeColor = () => {
      this.setState({
         flag: !this.state.flag,
      });
      console.log(this.flag);
   };
   render() {
      const { image, title, price, children } = this.props;
      return (
         <>
            <Div>
               <div className="img">
                  <img src={image} alt={title} />
               </div>
               <h2>{title}</h2>
               <span className="price">{price}</span>
               <div className="description">{children}</div>
               {this.state.flag ? (
                  <img
                     className="svg-heart"
                     src={heart}
                     onClick={this.changeColor}
                  ></img>
               ) : (
                  <img
                     className="svg-heart"
                     src={heartRed}
                     onClick={this.changeColor}
                  ></img>
               )}
            </Div>
         </>
      );
   }
}

export default Product;
