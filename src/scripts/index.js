import {
 main_sidebar_links,
 primary_sidebar_links,
} from "../constants/index.js";

document.addEventListener("DOMContentLoaded", () => {
 //  const primary_sidebar = document.querySelector("aside.sidebar");
 const primary_sidebar = document.getElementById("ps");
 const main_sidebar = document.getElementById("ms");

 // Switch page function for primary sidebar
 const switchPage = (url, elem = null) => {
  window.location.href = url;
  //todo:
  elem && elem.classList.add("selected");
 };

 const highLightBtn = ({ link, button }) => {
  let path = window.location.href;
  path = path.split("src").pop();
  if (path === link.url) button.classList.add("selected");
  else {
   if ([...button.classList].includes("selected"))
    button.classList.remove("selected");
  }
 };

 // Primary sidebar construction
 primary_sidebar_links.map((link) => {
  const elem = document.createElement("button");
  elem.classList.add("button");
  const textNode = document.createTextNode(link.name);
  elem.appendChild(textNode);
  primary_sidebar.appendChild(elem);
  // highlight the selected button
  highLightBtn({ link, button: elem });
  elem.onclick = () => {
   switchPage(link.url, elem);
  };
 });

 // main-sidebar
 main_sidebar_links.map((link) => {
  const elem = document.createElement("button");
  elem.classList.add("button");
  const textNode = document.createTextNode(link);
  elem.appendChild(textNode);
  main_sidebar.appendChild(elem);
  // highlight the selected button
  //   highLightBtn({ link, button: elem });
  //   elem.onclick = () => {
  //    switchPage(link, elem);
  //   };
 });
});
