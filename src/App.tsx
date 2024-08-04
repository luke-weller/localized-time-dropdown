import LanguageSelectionComponent from "./components/LocalizedTimeDropdown";
import "./App.css";

function App() {
  // List of language codes for the dropdown
  const items = ["en-US", "en-GB", "pt-BR"];

  return (
    <div className="App">
      {/* LanguageSelectionComponent with the list of language codes */}
      <LanguageSelectionComponent items={items} />
    </div>
  );
}

export default App;
