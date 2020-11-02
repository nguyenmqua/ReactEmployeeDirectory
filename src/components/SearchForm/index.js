import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="sort">Sort by</label>
        <select id = "sort" name = "sort">
          <option value="first">First Name</option>
          <option value="last">Last Name</option>
          <option value="title">Title</option>
          <option value="id">ID</option>
        </select>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
