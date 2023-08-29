import { useEffect, useState } from "react";
import FiltersContainer from "./components/FiltersContainer";
import ProfileCard from "./components/ProfileCard";
import ProfileView from "./components/ProfileView";
import ProfileList from "./components/ProfileList";

function App() {
  const [persons, setPersons] = useState(null);
  const [person, setPerson] = useState(null);
  const [filtersString, setFiltersString] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getPersons = async () => {
    setIsLoading(true);
    setPersons(null);
    const url = `https://randomuser.me/api/?results=25&${filtersString}`;
    const response = await fetch(url);
    const data = await response.json();
    setPersons(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getPersons();
  }, []);

  useEffect( () => {
    getPersons();
  }, [filtersString])

  const handleClick = (person) => {
    setPerson(person);
  }
  const closeProfile = () => {
    setPerson(null);
  }

  const applyFilters = (filters) => {
    setFiltersString("");
    if ("gender" in filters){
      setFiltersString( (filterString) => filterString+"gender="+filters['gender'] + "&" )
    }
    if (filters['nat']){
      setFiltersString( (filterString) => filterString+"nat="+filters['nat'] )
    }
  }

  return (
    <div className="App">

      <FiltersContainer applyFilters={applyFilters}/>

      <ProfileList isLoading={isLoading}
      >
        {persons && 
          persons.map((person) => {
            return <ProfileCard key={person.login.uuid} person={person} onClick={handleClick} />;
          })}
      </ProfileList>
      {person && <ProfileView person={person} closeProfile={closeProfile}/>}
    </div>
  );
}

export default App;
