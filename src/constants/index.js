import { formatNumber, generateChartData } from "../scripts/utils.js";

const primary_sidebar_links = [
 { name: "Dashboard", url: "/" },
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

const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const months = [
 "January",
 "February",
 "March",
 "April",
 "May",
 "June",
 "July",
 "August",
 "September",
 "October",
 "November",
 "December",
];

const days = [
 formatNumber(1),
 formatNumber(2),
 formatNumber(3),
 formatNumber(4),
 formatNumber(5),
 formatNumber(6),
 formatNumber(7),
 formatNumber(8),
 formatNumber(9),
 formatNumber(10),
 formatNumber(11),
 formatNumber(12),
 formatNumber(13),
 formatNumber(14),
 formatNumber(15),
 formatNumber(16),
 formatNumber(17),
 formatNumber(18),
 formatNumber(19),
 formatNumber(20),
 formatNumber(21),
 formatNumber(22),
 formatNumber(23),
 formatNumber(24),
 formatNumber(25),
 formatNumber(26),
 formatNumber(27),
 formatNumber(28),
 formatNumber(29),
 formatNumber(30),
];

export { primary_sidebar_links, main_sidebar_links, days, years, months };
