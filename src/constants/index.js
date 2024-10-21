import { formatNumber, generateChartData } from "../scripts/utils.js";

const primary_sidebar_links = [
 { name: "Dashboard", url: "/src/" },
 { name: "Product Category", url: "/product-category" },
 { name: "Contribution Community", url: "/contribution-community" },
 { name: "Discuss", url: "/discuss" },
 { name: "Challenges", url: "/challenges" },
 { name: "Jobs", url: "/jobs" },
 { name: "Internships", url: "/internships" },
 { name: "Resume", url: "/resume" },
 { name: "Recruiters", url: "/recruiters" },
 { name: "Projects", url: "/projects" },
 { name: "User Profiles", url: "/user-profiles" },
 { name: "Pro Subscriptions", url: "/pro-subscriptions" },
 { name: "Notifications", url: "/notifications" },
 { name: "Online Internships", url: "/online-internships" },
 { name: "Certifications", url: "/certifications" },
 { name: "Wallet", url: "/wallet" },
 { name: "Support Requests", url: "/support-requests" },
 { name: "Log History", url: "/log-history" },
 { name: "Vouchers", url: "/vouchers" },
 { name: "Panel Settings", url: "/panel-settings" },
];

const main_sidebar_links = [
 {
  id: 1,
  title: "Active Users",
  data: generateChartData(),
 },
 {
  id: 2,
  title: "New Sign-Up",
  data: generateChartData(),
 },
 {
  id: 3,
  title: "Courses",
  data: generateChartData(),
 },
 {
  id: 4,
  title: "Discuss",
  data: generateChartData(),
 },
 {
  id: 5,
  title: "Challenge",
  data: generateChartData(),
 },
 {
  id: 6,
  title: "Jobs",
  data: generateChartData(),
 },
 {
  id: 7,
  title: "Internships",
  data: generateChartData(),
 },
 {
  id: 8,
  title: "Projects",
  data: generateChartData(),
 },
 {
  id: 9,
  title: "My Profile",
  data: generateChartData(),
 },
];

export { primary_sidebar_links, main_sidebar_links };
