import { days, months, years } from "../constants/index.js";
import { buildChart } from "./chart.js";
import { generateChartData } from "./utils.js";

// buttons
const year = document.querySelector("#yyyy");
const month = document.querySelector("#mm");
const day = document.querySelector("#dd");

// dropdown divs
const yearsDropdown = document.querySelector("#years-dropdown");
const monthsDropdown = document.querySelector("#months-dropdown");
const daysDropdown = document.querySelector("#days-dropdown");

// buildChart and shutdropdown when another date selected
const changeDate = ({ target, val }) => {
 if (target === "yyyy") {
  year.children[0].textContent = val;
  shutDropdown("yyyy");
 }
 if (target === "mm") {
  month.children[0].textContent = val;
  shutDropdown("mm");
 }
 if (target === "dd") {
  day.children[0].textContent = val;
  shutDropdown("dd");
 }
 buildChart({ data: generateChartData() });
};

// creating dropdown menu
export const createDropdown = (target) => {
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
