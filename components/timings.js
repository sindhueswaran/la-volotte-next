import React from "react";
import contact from "../data/contact.json";

export default function Timings() {
  return (
    <>
      <div className="col-lg-4  col-sm-6">
        <h3 className="mb-4">{contact.contact.opennigHour.title}</h3>
        <ul className="list-unstyled">
          {contact.contact.opennigHour.dayTimeList.map((item, index) => (
            <li className="mb-3" key={index}>
              {item.dayTime}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
