import React from "react";

function form() {
  return (
    <div>
      <form action="/thanks" method="POST">
        <input
          type="text"
          className="form-control mb-2"
          id="name"
          name="name"
          placeholder="Name"
        />
        <input
          type="email"
          className="form-control mb-2"
          id="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          name="message"
          id="message"
          className="form-control mb-2"
          placeholder="Ihre Nachricht"
        ></textarea>
        <button
          type="submit"
          value="send"
          className="btn btn-block btn-outline-primary rounded"
        >
          Senden
        </button>
      </form>
    </div>
  );
}

export default form;
