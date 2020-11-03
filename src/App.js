import React, { useState, useEffect } from "react";
import * as API from "./utils/API";
import "./App.css";
import Container from "./components/Container"
import Footer from "./components/Footer"
import SearchForm from "./components/SearchForm"
import SearchResults from "./components/SearchResults"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [Result, setResult] = useState([{}]);
  const [Search, setSearch] = useState("");

  useEffect(() => {
    setSearch("")
    API.getDeveloper.then((res) => {
      setResult(res);
    });
  }, []);


  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    const compareStrings = (a, b) => {
      return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    API.getDeveloper.then((res) => {
      switch(Search) {
        case "none":  
          setResult(res)
          break;
        case "first":
          const first = res.sort(function(a,b){
            return compareStrings(a.firstName, b.firstName)
          })
          setResult(first)
          break;
        case "last":
          const last = res.sort(function(a,b){
            return compareStrings(a.lastName, b.lastName)
          })
          setResult(last)
          break;
        case "title":
          const title = res.sort(function(a,b){
            return compareStrings(a.title, b.title)
          })
          setResult(title)
          break;
        case "engineer":
          const engineer = res.filter(d => d.title === "Engineer")
          console.log(engineer)
          setResult(engineer)
          break;
        case "manager":
          const manager = Result.filter(d => d.title === "Manager")
          setResult(manager)
          break;
        case "intern":
          const intern = Result.filter(d => d.title === "Intern")
          setResult(intern)
          break;
        case "customer":
          const customer = Result.filter(d => d.title === "Customer Service Agent")
          setResult(customer)
          break;
        default:
      }
    handleChange(event)
    }
  )
  };

  return (
    <Container style={{ minHeight: "80%" }}>
      <h1 className="text-center">Employee Directory</h1>
      <SearchForm
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
        value={Search}
      />
      <SearchResults results={Result} />
      <Footer />
    </Container>
  );
}

export default App;
