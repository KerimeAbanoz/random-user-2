import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Users from "./components/usres/Users";

function App() {
  const url = "https://randomuser.me/api/";
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    const { data } = await axios.get(url);
    setData(data.results[0]);
    setLoading(true);
  };
  useEffect(() => {
    getUser();
  }, []);

  if (!loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="all-inside">
        <Users data={data} getUser={getUser} />
      </div>

    </>
  );
}

export default App;
