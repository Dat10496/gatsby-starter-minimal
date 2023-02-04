import React from "react";
import "./MortgageTextBlock.css";

function MortgageTextBlock() {
  return (
    <div className="mortgage-block">
      <p className="heading">Try our awesome Calculator</p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <div id="div-button">
        <button id="button">
          <p id="button-name">Register</p>
        </button>
      </div>
    </div>
  );
}

export default MortgageTextBlock;
