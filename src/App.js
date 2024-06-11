import SelectableGrid from "./Components/SelectableGrid";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1> Selectable Grid </h1>
      <SelectableGrid rows={10} columns={10} />
    </div>
  );
}
