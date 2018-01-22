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

    const dataNT = getData(passagesNT);
    const dataOT = getData(passagesOT);

    return (
      <div>
        <div className="left page outlined">
          <h2>{nameNT} - 1. polrok</h2>
          <div className="months">
            <Month monthNumber={1} monthData={dataNT[1]} year={year} />
            <Month monthNumber={2} monthData={dataNT[2]} year={year} />
            <Month monthNumber={3} monthData={dataNT[3]} year={year} />
            <Month monthNumber={4} monthData={dataNT[4]} year={year} />
            <Month monthNumber={5} monthData={dataNT[5]} year={year} />
            <Month monthNumber={6} monthData={dataNT[6]} year={year} />
          </div>
        </div>
        <div className="right page outlined page-break">
          <h2>{nameOT} - 1. polrok</h2>
          <div className="months">
            <Month monthNumber={1} monthData={dataOT[1]} year={year} />
            <Month monthNumber={2} monthData={dataOT[2]} year={year} />
            <Month monthNumber={3} monthData={dataOT[3]} year={year} />
            <Month monthNumber={4} monthData={dataOT[4]} year={year} />
            <Month monthNumber={5} monthData={dataOT[5]} year={year} />
            <Month monthNumber={6} monthData={dataOT[6]} year={year} />
          </div>
        </div>
        <div className="clr" />
        <div className="left page">
          <h2>{nameOT} - 2. polrok</h2>
          <div className="months">
            <Month monthNumber={7} monthData={dataOT[7]} year={year} />
            <Month monthNumber={8} monthData={dataOT[8]} year={year} />
            <Month monthNumber={9} monthData={dataOT[9]} year={year} />
            <Month monthNumber={10} monthData={dataOT[10]} year={year} />
            <Month monthNumber={11} monthData={dataOT[11]} year={year} />
            <Month monthNumber={12} monthData={dataOT[12]} year={year} />
          </div>
        </div>
        <div className="page right">
          <h2>{nameNT} - 2. polrok</h2>
          <div className="months">
            <Month monthNumber={7} monthData={dataNT[7]} year={year} />
            <Month monthNumber={8} monthData={dataNT[8]} year={year} />
            <Month monthNumber={9} monthData={dataNT[9]} year={year} />
            <Month monthNumber={10} monthData={dataNT[10]} year={year} />
            <Month monthNumber={11} monthData={dataNT[11]} year={year} />
            <Month monthNumber={12} monthData={dataNT[12]} year={year} />
          </div>
        </div>
      </div>
    );
  }
}
