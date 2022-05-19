import React from "react";
import contact from "../data/contact.json";

export default function Address() {
  return (
    <>
      <div className="col-lg-3 col-sm-6">
        <h3 className="mb-1"> {contact.contact.office.title}</h3>
        <p>{contact.contact.office.content}</p>
        <ul className="list-unstyled">
          <li className="mb-3">
            <a className="text-color" href="tel:+4924147587794">
              <i className="ti ti-mobile text-accent me-2"></i>
              {contact.contact.office.mobile}
            </a>
          </li>
          <li className="mb-3">
            <a className="text-color" href="mailto:wolle@la-volotte.de">
              <i className="ti ti-email text-accent me-2"></i>
              {contact.contact.office.email}
            </a>
          </li>
          <li className="mb-3">
            <i className="ti ti-location-pin text-accent me-2"></i>
            {contact.contact.office.location}
            <br />
            &emsp;
            {contact.contact.office.location1}
          </li>
        </ul>
      </div>
    </>
  );
}
