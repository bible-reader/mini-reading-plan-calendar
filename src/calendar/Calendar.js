import React, { Component } from "react";
import Month from "./Month";
import { getData } from "../utils/utils";
import "./Calendar.css";

import passagesNT from "../data/NT.json";
import passagesOT from "../data/OT.json";

export default class Calendar extends Component {
  render() {
    const year = 2018;
    const nameNT = `${year} - New Testament`;
    const nameOT = `${year} - Old Testament`;

    const dataNZ = getData(passagesNT);
    const dataSZ = getData(passagesOT);

    return (
      <div>
        <div className="left page outlined">
          <h2>{nameNT} - 1. polrok</h2>
          <div className="months">
            <Month monthNumber={1} monthData={dataNZ[1]} year={year} />
            <Month monthNumber={2} monthData={dataNZ[2]} year={year} />
            <Month monthNumber={3} monthData={dataNZ[3]} year={year} />
            <Month monthNumber={4} monthData={dataNZ[4]} year={year} />
            <Month monthNumber={5} monthData={dataNZ[5]} year={year} />
            <Month monthNumber={6} monthData={dataNZ[6]} year={year} />
          </div>
        </div>
        <div className="right page outlined page-break">
          <h2>{nameOT} - 1. polrok</h2>
          <div className="months">
            <Month monthNumber={1} monthData={dataSZ[1]} year={year} />
            <Month monthNumber={2} monthData={dataSZ[2]} year={year} />
            <Month monthNumber={3} monthData={dataSZ[3]} year={year} />
            <Month monthNumber={4} monthData={dataSZ[4]} year={year} />
            <Month monthNumber={5} monthData={dataSZ[5]} year={year} />
            <Month monthNumber={6} monthData={dataSZ[6]} year={year} />
          </div>
        </div>
        <div className="clr" />
        <div className="left page">
          <h2>{nameOT} - 2. polrok</h2>
          <div className="months">
            <Month monthNumber={7} monthData={dataSZ[7]} year={year} />
            <Month monthNumber={8} monthData={dataSZ[8]} year={year} />
            <Month monthNumber={9} monthData={dataSZ[9]} year={year} />
            <Month monthNumber={10} monthData={dataSZ[10]} year={year} />
            <Month monthNumber={11} monthData={dataSZ[11]} year={year} />
            <Month monthNumber={12} monthData={dataSZ[12]} year={year} />
          </div>
        </div>
        <div className="page right">
          <h2>{nameNT} - 2. polrok</h2>
          <div className="months">
            <Month monthNumber={7} monthData={dataNZ[7]} year={year} />
            <Month monthNumber={8} monthData={dataNZ[8]} year={year} />
            <Month monthNumber={9} monthData={dataNZ[9]} year={year} />
            <Month monthNumber={10} monthData={dataNZ[10]} year={year} />
            <Month monthNumber={11} monthData={dataNZ[11]} year={year} />
            <Month monthNumber={12} monthData={dataNZ[12]} year={year} />
          </div>
        </div>
      </div>
    );
  }
}
