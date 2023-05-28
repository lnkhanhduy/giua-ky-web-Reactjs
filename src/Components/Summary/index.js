import React from "react";
import LineChart from "../LineChart";

function Summary({ report }) {
return <div>
    <LineChart data={ report }></LineChart>
</div>
}
  
export default Summary;
  