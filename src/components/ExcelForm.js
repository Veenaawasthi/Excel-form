import React, { useState } from "react";
import "./ExcelForm.css";
import * as XLSX from 'xlsx';

const ExcelForm = () => {
  const [formData, setFormData] = useState({
    pax: "",
    company: "",
    name: "",
    city: "",
    address: "",
    mobile: "",
    email: "",
    status: "",
    duration: "",
    queryDate: "",
    tourStartDate: "",
    uid: "",
    agentHandling: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    exportToExcel(formData);
    console.log("Form submitted:", formData);
  };

  const exportToExcel=(formData)=>{
    const worksheet = XLSX.utils.json_to_sheet([formData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'SampleData.xlsx');
    setFormData({
      pax: "",
      company: "",
      name: "",
      city: "",
      address: "",
      mobile: "",
      email: "",
      status: "",
      duration: "",
      queryDate: "",
      tourStartDate: "",
      uid: "",
      agentHandling: "",
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Form Component</h1>
      <div className="form-group">
        <label htmlFor="pax">Pax:</label>
        <input
          type="text"
          id="pax"
          name="pax"
          value={formData.pax}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Select Status</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="duration">Duration:</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="duration">Query Date:</label>
        <input
          type="date"
          id="queryDate"
          name="queryDate"
          value={formData.queryDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="duration">Tour start date:</label>
        <input
          type="date"
          id="tourStartDate"
          name="tourStartDate"
          value={formData.tourStartDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="duration">UID (File Name):</label>
        <input
          type="text"
          id="uid"
          name="uid"
          value={formData.uid}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="duration">Agent Handling (Initials of employee):</label>
        <input
          type="text"
          id="agentHandling"
          name="agentHandling"
          value={formData.agentHandling}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="submit">
          Submit
        </button>
        <button type="reset" className="reset">
          Reset
        </button>
      </div>
    </form>
  );
};
export default ExcelForm;