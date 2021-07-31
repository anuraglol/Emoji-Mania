import "./styles.css";
import { useState } from "react";
export default function App() {
  var [emoji, setEmoji] = useState("");
  async function fetchEmoji() {
    const url = "https://emoji-api.com/emojis?search=";
    const api = "&access_key=740e54afa31f4da2388c6e5f3f074815a61a4b17";
    const BASEUrl = `${url}${emoji}${api}`;
    const res = await fetch(BASEUrl);
    const data = await res.json();
    let i;
    document.querySelector(".res").innerHTML = "";
    try {
      for (i = 0; i <= data.length; i++) {
        var x = data[i].character;
        var y = data[i].slug;
        if ((x !== "") & (y !== "")) {
          document.querySelector(".res").innerHTML += `<p>${x}<br />${y}</p>`;
        }
      }
    } catch (err) {}
  }
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setEmoji(e.target.value)}
        className="m-2 p-1 bg-white rounded shadow"
      />
      <button
        onClick={fetchEmoji}
        className="bg-green-600 rounded shadow p-2 hover:bg-green-400"
      >
        Search
      </button>
      <div className="res"></div>
    </div>
  );
}
