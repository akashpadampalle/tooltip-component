import ToolTip from "./components/ToolTip/ToolTip";
import "./app.css";


function App() {
  return (
    <main className="main-container">
      <ToolTip position="top" comment="tooltip demo">
        <button className="primary-button">Hello</button>
      </ToolTip>
    </main>
  );
}

export default App;
