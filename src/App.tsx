import React, { useEffect, useState } from "react";
import User from "./types";

function App() {
  const [ backendData , setBackendData] = useState<User[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api");
        const json = await res.json();
        setBackendData(json);
        setLoading(false);
      } catch (error) {
        setError(`${error}`);
        setLoading(false);
      }
    };

    fetchData();
  }, ["/api"])

  return (
    <>
      {( backendData.length === 0) ? (
          <p>loading...</p>
        ) : (
          backendData.map((data, i) => ( <p key={i}>{data.name}</p> ))
        )}
    </>
  )
}

export default App