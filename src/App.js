import React, { Component } from "react";
import AccordionComp from "./components/AccordionComp";

class App extends React.Component {
   render() {
      return (
         <>
            <div className="flex">
               <AccordionComp></AccordionComp>
            </div>
         </>
      );
   }
}
export default App;
