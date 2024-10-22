const {
  main_sidebar_links,
  primary_sidebar_links,
} = require("../constants/index.js");
const { buildChart } = require("./chart.js");
const { createDropdown } = require("./dropdown.js");
const { generateChartData } = require("./utils.js");

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

  const init = () => {
    createDropdown("yyyy");
    createDropdown("mm");
    createDropdown("dd");
  };
  init();
});
