import React, { useState } from "react";
import "./Form.css";

export default function Investment() {
  const [investment, setInvestment] = useState("");
  const calcInvestment = (e) => {
    const [curAge, retireAge, principal, monthlyDeposit, interestRate] =
      e.target;

    setInvestment(
      Math.round(
        principal.value *
          Math.pow(
            1 + interestRate.value / 12,
            12 * (retireAge.value - curAge.value)
          ) +
          monthlyDeposit.value *
            ((Math.pow(
              1 + interestRate.value / 12,
              12 * (retireAge.value - curAge.value)
            ) -
              1) /
              (interestRate.value / 12))
      )
    );
    if (!investment) return;
    const nf = Intl.NumberFormat();
    console.log(nf.format(investment));
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calcInvestment(e);
        }}
      >
        <h2>Enter Your Information</h2>
        <label>Enter your current age.</label>
        <br />
        <input className="input" type="number" name="curAge" value="20" />
        <br />
        <label>Enter the age you plan to retire.</label>
        <br />
        <input className="input" type="number" name="retireAge" value="50" />
        <p>
          If you were born in 1960 or later, 67 years old is the age at which
          you can retire with full benefits.
        </p>
        <br />
        <label>About how much money do you currently have in investment?</label>
        <br />
        <input className="input" type="number" name="principal" value="4000" />
        <p>
          This should be the total of all your investment accounts including
          401(k)s, IRAs, mutual funds, etc.
        </p>
        <br />
        <label>How much will you contribute monthly?</label>
        <br />
        <input
          className="input"
          type="number"
          name="monthlyDeposit"
          value="1500"
        />
        <p>
          This is the amount you invest each month. We recommend investing 15%
          of your paycheck.
        </p>
        <br />
        <label>What do you think your annual return will be?</label>
        <br />
        <input
          className="input"
          type="number"
          name="interestRate"
          value=".15"
        />
        <p>
          This is the return your investment will generate over time.
          Historically, the 30-year return of the S&P 500 has been roughly
          10-12%.1
        </p>
        <button>Calculate</button>
      </form>
    </div>
  );
}
