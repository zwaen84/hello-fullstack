import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("Lade...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Backend nicht erreichbar!"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Hello Fullstack!</h1>
      <p>Nachricht vom Backend:</p>
      <p style={{ fontSize: "24px", color: "green" }}>{message}</p>
    </div>
  );
}
export default App;