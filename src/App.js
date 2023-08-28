import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [persons, setPersons] = useState(null);
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


  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px, 1fr))",
          padding:'10px',
          gap:"10px",
          minHeight:"500px",
        }}
      >
        {isLoading && <p>Loading...</p> }
        {persons &&
          persons.map((person) => {
            return <ProfileCard key={person.login.uuid} person={person} />;
          })}
      </div>
      <button onClick={makeApiRequest}>New User</button>
    </div>
  );
}

export default App;
