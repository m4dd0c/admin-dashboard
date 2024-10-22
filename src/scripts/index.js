import {
 days,
 main_sidebar_links,
 months,
 primary_sidebar_links,
 years,
} from "../constants/index.js";
import { buildChart } from "./chart.js";
import { generateChartData } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
 //  const primary_sidebar = document.querySelector("aside.sidebar");
 const primary_sidebar = document.getElementById("ps");
 const main_sidebar = document.getElementById("ms");

 // Switch page function for primary sidebar
 const switchPage = ({ url, elem }) => {
  window.location.href = url;
  // removing selected className from old button
  primary_sidebar.childNodes.forEach((node) => {
   if (node.classList && node.classList.contains("selected"))
    node.classList.remove("selected");
  });
  // adding className to new button
  elem.classList.add("selected");
 };

 // adding selected className to the btn having url prop matching to the pathname
 const highlightBtn = ({ url, elem }) => {
  const path = window.location.pathname;
  if (path === url) elem.classList.add("selected");
 };

 // Primary sidebar construction
 primary_sidebar_links.map((link) => {
  const elem = document.createElement("button");
  elem.classList.add("button");
  const textNode = document.createTextNode(link.name);
  elem.appendChild(textNode);
  primary_sidebar.appendChild(elem);
  // highlight button based on the path
  highlightBtn({ url: link.url, elem });
  elem.onclick = () => switchPage({ url: link.url, elem });
 });

 // changeActiveSpecification
 const changeActiveSpecification = ({ spec, elem }) => {
  main_sidebar.childNodes.forEach((node) => {
   if (node.classList && node.classList.contains("selected"))
    node.classList.remove("selected");
  });
  elem.classList.add("selected");
  // fetch the data and update chart
  buildChart({ data: spec.data });
 };

 // main-sidebar
 main_sidebar_links.map((spec) => {
  const elem = document.createElement("button");
  elem.classList.add("button");
  elem.style.textAlign = "center";
  const textNode = document.createTextNode(spec.title);
  elem.appendChild(textNode);
  main_sidebar.appendChild(elem);
  // making activeUser initially selected
  if (spec.id === 1) elem.classList.add("selected");
  elem.onclick = () => changeActiveSpecification({ spec, elem });
 });
 // printing chart
 buildChart({ data: main_sidebar_links[0].data });

 // spinner
 const spinner = document.getElementById("spinner");
 spinner.onclick = () => {
  //  if(elem.classList.contains('fa-spin'))
  spinner.classList.add("fa-spin");
  setTimeout(() => {
   spinner.classList.remove("fa-spin");
   buildChart({ data: generateChartData() });
  }, 1900);
 };

 const yearsDropdown = document.querySelector("#years-dropdown");
 const monthsDropdown = document.querySelector("#months-dropdown");
 const daysDropdown = document.querySelector("#days-dropdown");
 let selectedYear = "Year";
 let selectedMonth = "Month";
 let selectedDay = "Day";

 const changeDate = ({ target, val }) => {
  if (target === "yyyy") {
   selectedYear = val;
   year.children[0].textContent = selectedYear;
   shutDropdown("yyyy");
  }
  if (target === "mm") {
   selectedMonth = val;
   month.children[0].textContent = selectedMonth;
   shutDropdown("mm");
  }
  if (target === "dd") {
   selectedDay = val;
   day.children[0].textContent = selectedDay;
   shutDropdown("dd");
  }
  buildChart({ data: generateChartData() });
 };

 const createDropdown = (target) => {
  let dropdown = null;
  let list = [];

  if (target === "yyyy") {
   dropdown = yearsDropdown;
   list = years;
  } else if (target === "mm") {
   dropdown = monthsDropdown;
   list = months;
  } else {
   dropdown = daysDropdown;
   list = days;
  }
  if (dropdown) {
   list.map((item) => {
    const elem = document.createElement("button");
    elem.classList.add("block", "w-full", "p-2", "dropdownHover");
    elem.style.textAlign = "start";
    const textNode = document.createTextNode(item);
    elem.appendChild(textNode);
    dropdown.appendChild(elem);
    // add functionality to set value
    elem.onclick = () => {
     changeDate({ target, val: item });
    };
   });
  }
 };

 createDropdown("yyyy");
 createDropdown("mm");
 createDropdown("dd");

 const year = document.querySelector("#yyyy");
 const month = document.querySelector("#mm");
 const day = document.querySelector("#dd");

 const shutDropdown = (target) => {
  if (target === "yyyy") yearsDropdown.classList.add("hidden");
  else if (target === "mm") monthsDropdown.classList.add("hidden");
  else if (target === "dd") daysDropdown.classList.add("hidden");
 };
 const openDropdown = (target) => {
  if (target === "yyyy") yearsDropdown.classList.remove("hidden");
  else if (target === "mm") monthsDropdown.classList.remove("hidden");
  else if (target === "dd") daysDropdown.classList.remove("hidden");
 };

 const toggleDropdown = (target) => {
  if (target === "yyyy") {
   if (yearsDropdown.classList.contains("hidden")) openDropdown(target);
   else shutDropdown(target);
  } else if (target === "mm") {
   if (monthsDropdown.classList.contains("hidden")) openDropdown(target);
   else shutDropdown(target);
  } else {
   if (daysDropdown.classList.contains("hidden")) openDropdown(target);
   else shutDropdown(target);
  }
 };
 year.onclick = () => toggleDropdown("yyyy");
 month.onclick = () => toggleDropdown("mm");
 day.onclick = () => toggleDropdown("dd");
});
