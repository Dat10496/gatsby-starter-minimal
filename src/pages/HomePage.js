import React from "react";
import IconBlock from "../components/IconBlock";

import MortgageCalculator from "../components/MortgageCalculator";
import MortgageTextBlock from "../components/MortgageTextBlock";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="icon-block">
        <IconBlock />
      </div>

      <div className="mortgage-calculator">
        <MortgageCalculator />
        <MortgageTextBlock />
      </div>
    </div>
  );
}

export default HomePage;
