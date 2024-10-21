/** @type {import('tailwindcss').Config} */
export default {
 content: ["./src/**/*.{html,js}"],
 theme: {
  extend: {
   fontSize: {
    head: "var(--head-text)",
    "sub-head": "var(--sub-head-text)",
    reg: "var(--reg-text)",
   },
  },
 },
 plugins: [],
};
