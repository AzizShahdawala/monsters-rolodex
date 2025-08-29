import { useState, useEffect } from "react";

import "./App.css";
import SearchBox from "./components/search-box/search-box-component";
import CardList from "./components/card-list/card-list-component";

const App = () => {

  // useState hooks for the states required
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  console.log('rendered');  

  // onSearchChange() to set the searchField value
  const onSearchChange = (event) => {
    const searchedString = event.target.value.toLocaleLowerCase();
    setSearchField(searchedString);
  };

  // useEffect hooks 

  // Calling json users api to fetch the users initially once without any state variable in array 
  // So that it calls only once
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // filtering monsters hook useEffect called whenever state variable changes - monsters & searchField
  // Initially once and whenever the searchField is changed
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField) || monster.email.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  // UI rendering
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        cssClassName="monsters-search-box"
        placeHolder="search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
};


export default App;
