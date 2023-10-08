import React, { useEffect, useState } from "react";
import TableView from "./pages/table/TableView";
import ScatterChart from "./pages/bubble/ScatterChart";

function App() {
  const [view, setView] = useState('table');
  const [antelopes, setAntelopes] = useState([]);

  useEffect(()=>{
    async function fetchAntelopes(){
      const response = await fetch('api/species.json');
      const data = await response.json();
      return data;
    }
    let ignore = false;

    fetchAntelopes().then(antelopes => {
      //use ignore flag to avoid race conditions (whenever the component rerenders and triggers API call multiple times)
      //a better way to implement data fetching would be to use a library like rtk query or react-query which enables caching and avoid
      // waterfall API calls in nested components
      if (!ignore){
        setAntelopes(antelopes);
      }
    })

    return () => {ignore = true;}
  }, [])

  function handleViewChange(e: React.FormEvent<HTMLInputElement>){
    setView(e.currentTarget.value);
  }
  return (
    <div>
      <div style={{padding: "20px"}}>
        I would like to be an antelope:{" "}
        <label>
          <input type="radio" name="myAntelope" value="table" defaultChecked onChange={handleViewChange}/>
          Table View
        </label>
        <label>
          <input type="radio" name="myAntelope" value="chart1" onChange={handleViewChange}/>
          Scatter View
        </label>
        <label>
          <input type="radio" name="myAntelope" value="chart2" onChange={handleViewChange}/>
          Chart 2 View
        </label>
      </div>
      {view === 'table' && <TableView antelopes={antelopes}/>}
      {view === 'chart1' && <ScatterChart antelopes={antelopes} />}
    </div>
  );
}

export default App;
