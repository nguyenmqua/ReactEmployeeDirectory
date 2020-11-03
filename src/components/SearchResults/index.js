import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
      {props.results.map(result => (
        <tr key={result.id}>
          <th scope="row">{result.id}</th>
          <td>{result.firstName}</td>
          <td>{result.lastName}</td>
          <td>{result.title}</td> 
        </tr>
      ))}
      </tbody>
    </table>  
  );
}

export default SearchResults;