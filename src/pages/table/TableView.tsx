import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinition } from "react-tabulator/lib/ReactTabulator";
import styles from './TableView.module.css'
import { useEffect, useState } from "react";

const columns: ColumnDefinition[] = [
  { title: "Picture", field: "picture", formatter: 'image', cssClass: styles.imgCell },
  { title: "Name", field: "name" },
  { title: "Continent", field: "continent" },
  { title: "Weight", field: "weight" },
  { title: "Height", field: "height" },
  { title: "Horns", field: "horns" },
];

export default function TableView() {
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
  return <ReactTabulator data={antelopes} columns={columns} layout="fitColumns"/>;
}
