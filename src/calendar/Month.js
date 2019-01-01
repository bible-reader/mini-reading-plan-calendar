import React from "react";
import "./Month.css";

const monthsSK = [
  "január",
  "február",
  "marec",
  "apríl",
  "máj",
  "jún",
  "júl",
  "august",
  "september",
  "október",
  "november",
  "december"
];
const monthsCZ = [
  "leden",
  "únor",
  "březen",
  "duben",
  "květen",
  "červen",
  "červenec",
  "srpen",
  "září",
  "říjen",
  "listopad",
  "prosinec"
];
const weekdays = ["N", "P", "U", "S", "Š", "P", "S"];

const Month = ({ year, monthNumber, monthData }) => (
  <div className="month">
    <strong>
      {monthsSK[monthNumber - 1]} / {monthsCZ[monthNumber - 1]}
    </strong>
    <div className="month-number">{monthNumber}</div>
    <table className="month">
      <tbody>
        {Object.keys(monthData).map(dateNumber => {
          const dateString = `${year}-${monthNumber}-${dateNumber}`;
          const date = new Date(dateString);
          return (
            <tr
              key={dateString}
              className={date.getUTCDay() === 0 ? "sunday" : ""}
            >
              <td className="date">
                <div>{dateNumber}</div>
              </td>
              <td className="dayName">
                <div>{weekdays[date.getUTCDay()]}</div>
              </td>
              <td className="book">
                <div>{monthData[dateNumber].book}</div>
              </td>
              <td className="coords">
                <div>{monthData[dateNumber].coords}</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default Month;
