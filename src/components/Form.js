import React, { useState } from "react";

function Form({ fields, onSubmit }) {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formValues[field.name] || ""}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
