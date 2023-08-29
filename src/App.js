import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ProfileView from "./components/ProfileView";
import ProfileList from "./components/ProfileList";

function App() {
  const [persons, setPersons] = useState(null);
  const [person, setPerson] = useState(null);
  const [filters, setFilters] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const makeApiRequest = async () => {
    setIsLoading(true);
    const response = await fetch("https://randomuser.me/api/?results=24");
    const data = await response.json();
    setPersons(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    makeApiRequest();
  }, []);

  const handleClick = (person) => {
    setPerson(person);
  }
  const closeProfile = () => {
    setPerson(null);
  }

  return (
    <div className="App">

      <ProfileList
      >
        {isLoading && <p>Loading...</p> }
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
