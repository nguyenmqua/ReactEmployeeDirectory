import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search" onSubmit={props.handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="sort">Sort by  </label>
        <select value = {props.value} onChange={props.handleChange}>
          <option value="none">No Sorting Needed</option>
          <option value="first">First Name</option>
          <option value="last">Last Name</option>
          <option value="title">Title</option>
          <option value="id">ID</option>
        </select>
        <br></br>
        <label htmlFor="filter">Filter by Job Title  </label>
        <select value = {props.value} onChange={props.handleChange}>
          <option value="engineer">Engineer</option>
          <option value="customer">Customer Service Agent</option>
          <option value="intern">Intern</option>
          <option value="manager">Manager</option>
        </select>
        <button type="submit"  className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;