import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function Results() {
  return (
    <div>
      <h2>Your Results</h2>
      <h3> ESTIMATED RETIREMENT SAVINGS</h3>
      <p>In 19 years, your investment could be worth:</p>
      <div>
        <span>
          <AttachMoneyIcon />
        </span>
        1,000,000
      </div>
      <div>Want to make a plan to meet your investment goals?</div>
      <button>Work with a Pro</button>
      <div>Are you saving enough to retire the way you want?</div>
      <button>Find</button>
      <div>Is money stress stopping you from investing more?</div>
      <button>Take Control</button>
      <div>
        <div>
          <div>INITIAL BALANCE</div>
          <AttachMoneyIcon />
          <div>4,000</div>
          <div>0% of Total</div>
        </div>
        <div>
          <div>CONTRIBUTIONS</div>
          <AttachMoneyIcon />
          <div>342,000</div>
          <div>33% of Total</div>
        </div>
        <div>
          <div>GROWTH</div>
          <AttachMoneyIcon />
          <div>694,557</div>
          <div>67% of Total</div>
        </div>
      </div>
      <div>
        <h2>What if I...</h2>
        <div>
          <div>SAVED AN EXTRA $100 PER MONTH.</div>
          <p>Adds $100 a month in contributions, but creates</p>
          <div>
            <AttachMoneyIcon />
            44,801
          </div>
          <p>in additional growth</p>
        </div>
        <div>
          <div>GAVE UP DAILY COFFEE PURCHASES.</div>
          <p>Adds $128 a month in contributions, but creates</p>
          <div>
            <AttachMoneyIcon />
            57,345
          </div>
          <p>in additional growth</p>
        </div>
        <div>
          <div>GAVE UP WEEKLY RESTAURANT VISITS.</div>
          <p>Adds $200 a month in contributions, but creates</p>
          <div>
            <AttachMoneyIcon />
            89,603
          </div>
          <p>in additional growth</p>
        </div>
      </div>
    </div>
  );
}
