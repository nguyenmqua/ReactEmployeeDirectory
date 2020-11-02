import React, { useState, useEffect } from "react";
import * as API from "./utils/API";
import "./App.css";
import Container from "./components/Container"
import Footer from "./components/Footer"
import SearchForm from "./components/SearchForm"
import SearchResults from "./components/SearchResults"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [developerState, setDeveloperState] = useState([{}]);

  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    API.getDeveloper.then((res) => {
      console.log(res)
      setDeveloperState(res);
      console.log(developerState);
    });
  }, [developerState]);

  return (
    <Container style={{ minHeight: "80%" }}>
      <h1 className="text-center">Employee Directory</h1>
      <SearchForm
        // handleFormSubmit={this.handleFormSubmit}
        // handleInputChange={this.handleInputChange}
        // // breeds={this.state.breeds}
      />
      <SearchResults results={developerState} />
      <Footer />
    </Container>
  );
}

export default App;
