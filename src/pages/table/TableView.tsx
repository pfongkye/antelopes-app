import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinition } from "react-tabulator/lib/ReactTabulator";
import styles from './TableView.module.css'
import { Antelope } from "../../types/antelope";

const columns: ColumnDefinition[] = [
  { title: "Picture", field: "picture", formatter: 'image', cssClass: styles.imgCell },
  { title: "Name", field: "name" },
  { title: "Continent", field: "continent" },
  { title: "Weight", field: "weight" },
  { title: "Height", field: "height" },
  { title: "Horns", field: "horns" },
];

interface TableViewProps{
  antelopes: Antelope[]
}
export default function TableView({antelopes}: TableViewProps) {
  return <ReactTabulator data={antelopes} columns={columns} layout="fitColumns"/>;
}
