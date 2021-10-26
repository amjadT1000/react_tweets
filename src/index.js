import React, { useDebugValue } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HelloMessage from "./App";
import reportWebVitals from "./reportWebVitals";

const tweets = {
  Max: {
    name: "Max",
    image: "https://miro.medium.com/max/1225/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    tweets: "Be yourself; everyone else is already taken.",
  },
  Alix: {
    name: "Alix",
    image: "https://miro.medium.com/max/1225/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    tweets: "So many books, so little time.",
  },
  Tom: {
    name: "Tom",
    image: "https://miro.medium.com/max/1225/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    tweets: "You only live once, but if you do it right, once is enough.",
  },
};
console.log(tweets);
const tabs = [
  <HelloMessage
    image={tweets.Max.image}
    title={tweets.Max.name}
    dec={tweets.Max.tweets}
  />,
  <HelloMessage
    image={tweets.Alix.image}
    title={tweets.Alix.name}
    dec={tweets.Alix.tweets}
  />,
  <HelloMessage
    image={tweets.Tom.image}
    title={tweets.Tom.name}
    dec={tweets.Tom.tweets}
  />,
];

ReactDOM.render(tabs, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
