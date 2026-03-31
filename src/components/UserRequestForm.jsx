import React, { useState } from "react";

const UserRequestForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    location: "",
    guests: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="login-form">
      <h2>User Request Form</h2>
      <form onSubmit={handleSubmit}>
        {["name", "email", "phone", "eventType", "date", "location", "guests", "budget", "message"].map((field) => (
          <input
            key={field}
            type={field === "date" ? "date" : "text"}
            name={field}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default UserRequestForm;


