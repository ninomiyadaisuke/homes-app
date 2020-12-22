import React, { useState } from "react"
import Profile from "./components/Profile"


function App() {
  const [name, setName] = useState("No name")
  
  const eventBoxText = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <h1>ハロー{name}</h1>
      <input name="name" type="text" value={name} onChange={eventBoxText} />
      <Profile />
    </div>
  );
}

export default App;
