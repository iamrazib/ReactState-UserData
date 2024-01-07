import { useState } from "react";
import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import { useEffect } from "react";


function App() {

  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(null);

  const getUser = () => {
    setLoading(true);
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then(data => {
        setUser(data.users);
        setLoading(false);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  //console.log(users);

  return (
    <>
      <Navbar />
      <section className="container mx-auto mt-5 flex flex-wrap justify-center">
        {loading ? (
          <span className="loading loading-ring loading-lg"></span>
        ) : (
          <>
            {users.map((user, id) => (
              <Card key={user.id} userInfo={user} />
            ))}
          </>
        )}
      </section>
    </>
  );
}

export default App
