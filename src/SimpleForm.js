import React from "react";

// a basic form
const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });

  return (
    <div className={className} style={style}>
      {status === "sending" && <div style={{ color: "#33afff" }}>Sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "#ff6161" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "#00a99d" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        ref={node => (input = node)}
        type="email"
        placeholder="Enter your email"
      />
      <button onClick={submit}>Stay updated</button>
    </div>
  );
};

export default SimpleForm;
