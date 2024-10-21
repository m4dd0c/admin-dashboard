import { primary_sidebar_links } from "../constants/index.js";

document.addEventListener("DOMContentLoaded", () => {
 //  const primary_sidebar = document.querySelector("aside.sidebar");
 const primary_sidebar = document.getElementById("ps");

 // Switch page function for primary sidebar
 const switchPage = (url, elem = null) => {
  window.location.href = "/src";
     //todo: 
  elem && elem.classList.add("selected");
 };

 // Primary sidebar construction
 primary_sidebar_links.map((link) => {
  const elem = document.createElement("button");
  elem.classList.add("button");
  const textNode = document.createTextNode(link.name);
  elem.appendChild(textNode);
  primary_sidebar.appendChild(elem);
  elem.onclick = () => {
   switchPage(link.url, elem);
  };
 });
});
