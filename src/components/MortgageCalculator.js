import { Slider, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./MortgageCalculator.css";
import { fCurrency } from "../utils/numberFormat";

const MortgageSlider = styled(Slider)({
  "& .MuiSlider-rail": {
    color: "#ffffff",
    opacity: 1,
    height: 14,
  },
  color: "#FF8049B0",
  height: 14,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 19,
    width: 21,
    backgroundColor: "#fff",
    border: "4px solid #FF8049",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#ef6c00",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

function MortgageCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(140000);
  const [repaymentTime, setRepaymentTime] = useState(25);
  const [interestRate, setInterestRate] = useState(3);
  const [loanAmount, setLoanAmount] = useState(purchasePrice - downPayment);
  const [paymentPerMonth, setPaymentPerMonth] = useState();
  const [controlPurchasePrice, setControlPurchasePrice] = useState(false);

  const handleChangePurchasePrice = (e) => {
    if (e.target.value !== "undefined") {
      setPurchasePrice(e.target.value * 50000);
    }
  };

  const handleChangeDownPayment = (e) => {
    if (e.target.value !== "undefined") {
      setDownPayment(e.target.value * 35000);
    }
  };

  const handleChangeRepaymentTime = (e) => {
    if (e.target.value !== "undefined") {
      setRepaymentTime(e.target.value * 5);
    }
  };

  const handleChangeInterestRate = (e) => {
    if (e.target.value !== "undefined") {
      setInterestRate(e.target.value);
    }
  };

  useEffect(() => {
    const handleChangeLoanAmount = () => {
      setLoanAmount(purchasePrice - downPayment);
    };

    handleChangeLoanAmount();

    // Control slider--------
    if (purchasePrice <= downPayment) {
      setControlPurchasePrice(true);
    } else {
      setControlPurchasePrice(false);
    }
  }, [purchasePrice, downPayment]);

  useEffect(() => {
    const estimatePayment = () => {
      setPaymentPerMonth(
        loanAmount /
          [
            (interestRate * (1 + interestRate)) ^
              ((repaymentTime * 12) /
                (((1 + interestRate) ^ (repaymentTime * 12)) - 1)),
          ]
      );
    };
    estimatePayment();
  }, [purchasePrice, downPayment, interestRate, repaymentTime, loanAmount]);

  return (
    <>
      <div className="mortgage">
        <div className="inside-box">
          <p className="head">Mortgage Calculator</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <div className="slider">
            <div className="estimate-price">
              <div className="slider-item">
                <p className="title">
                  Purchase Price: ${fCurrency(purchasePrice)}
                </p>
                <MortgageSlider
                  min={1}
                  max={20}
                  step={1}
                  defaultValue={9}
                  disabled={controlPurchasePrice}
                  onChange={handleChangePurchasePrice}
                />
              </div>
              <div className="slider-item">
                <p className="title">Down Payment: ${fCurrency(downPayment)}</p>
                <MortgageSlider
                  min={1}
                  max={10}
                  step={1}
                  defaultValue={4}
                  onChange={handleChangeDownPayment}
                />
              </div>
            </div>

            <div className="estimate-price">
              <div className="slider-item">
                <p className="title">Repayment time: {repaymentTime} years</p>
                <MortgageSlider
                  min={1}
                  max={10}
                  step={1}
                  defaultValue={5}
                  onChange={handleChangeRepaymentTime}
                />
              </div>
              <div className="slider-item">
                <p className="title">Interest Rate: {interestRate}%</p>
                <MortgageSlider
                  min={1}
                  max={10}
                  step={1}
                  defaultValue={3}
                  onChange={handleChangeInterestRate}
                />
              </div>
            </div>

            <div className="total-price">
              <p className="title">Loan amount:</p>
              <p className="price">${fCurrency(loanAmount)}</p>
            </div>

            <div className="total-price">
              <p className="title">Estimated repayment per month:</p>
              <p className="price">${fCurrency(paymentPerMonth)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MortgageCalculator;
