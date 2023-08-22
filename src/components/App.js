import React from "react";
import "./../styles/App.css";
import Form from "./Form";

const App = () => {
  const handleSubmit = (values) => {
    console.log("Form values submitted:", values);
    // Here, you can perform any additional actions like sending the data to a server
  };

  const fields = [
    { name: "name", type: "text", label: "Name" },
    { name: "email", type: "email", label: "Email" },
    { name: "password", type: "password", label: "Password" },
  ];

  return (
    <div>
      <h1>Form Example</h1>
      <Form fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
