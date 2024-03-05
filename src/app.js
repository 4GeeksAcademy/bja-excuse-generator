/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//console.log("Hello MDC 25!");
//};
//

// Define arrays for generating excuses

const pronouns = ["I", "You", "He", "She", "We", "They"];
const subjects = ["dog", "cat", "bird", "elephant", "monkey"];
const actions = ["ate", "destroyed", "hid", "stole", "lost"];
const possessions = [
  "my homework",
  "my keys",
  "the remote",
  "the cookies",
  "the book"
];
const locations = [
  "at home",
  "at school",
  "in the park",
  "at the store",
  "in my room"
];

function generateExcuse() {
  const randomIndex = arr => Math.floor(Math.random() * arr.length);
  const excuse = `${pronouns[randomIndex(pronouns)]} ${
    actions[randomIndex(actions)]
  } ${possessions[randomIndex(possessions)]} because ${
    subjects[randomIndex(subjects)]
  } ${locations[randomIndex(locations)]}.`;
  document.getElementById("excuse").textContent = excuse;
}

document
  .getElementById("generate-excuse")
  .addEventListener("click", generateExcuse);
