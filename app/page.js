import React from "react";

const page = () => {
  return (
    <div
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 100,
        textAlign: "center",
      }}
    >
      <h1>Congratulations!</h1>
      <p style={{ paddingTop: 30 }}>
        Your email has already been confirmed. You can now login to the
        application.
      </p>
    </div>
  );
};

export default page;
