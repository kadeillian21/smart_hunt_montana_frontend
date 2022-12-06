import axios from "axios";
import { useState } from "react";

export function HandleIndexActions() {
  const [antelopes, setAntelopes] = useState([]);

  const handleIndexAntelopes = () => {
    console.log("handleIndexAntelopes");
    axios.get("http://localhost:3000/antelopes.json").then((response) => {
      console.log(response.data);
      setAntelopes(response.data);
    });
  };
}

