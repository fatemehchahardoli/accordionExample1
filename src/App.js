import React, { Component } from "react";
import Product from "./components/Product";
import { Span } from "./components/styled_components/styleApp";
import image1 from "./images/aside-blog-01-70x70.jpg";
import image2 from "./images/aside-blog-02-70x70.jpg";
import image3 from "./images/aside-blog-03-70x70.jpg";
import AccordionComp from "./components/AccordionComp";
import css from "./css/accordionStyle.css";

class App extends React.Component {
   render() {
      return (
         <>
            <div className="flex">
               <AccordionComp></AccordionComp>
               <Span>
                  <Product image={image1} title="product_1" price="230$">
                     {" "}
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Saepe amet fugit in sit adipisci odio eos eum soluta
                     debitis dolor!
                  </Product>
                  <Product image={image2} title="product_2" price="410$">
                     {" "}
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Saepe amet fugit in sit adipisci
                  </Product>
                  <Product image={image3} title="product_3" price="32$">
                     {" "}
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Saepe amet fugit in sit adipisci!
                  </Product>
                  <Product image={image1} title="product_4" price="75$">
                     {" "}
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Saepe amet fugit in sit adipisci odio eos eum soluta
                     debitis dolor!
                  </Product>
               </Span>
            </div>
         </>
      );
   }
}
export default App;
