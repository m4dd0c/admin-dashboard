export const formatNumber = (num) => {
 return num.toString().padStart(2, "0"); // Pads single-digit hours with a leading zero
};

export const minimizeNumber = (value) => {
 if (value >= 1000000) {
  return parseInt(value / 1000000) + "M"; // For millions
 } else if (value >= 1000) {
  return parseInt(value / 1000) + "K"; // For thousands
 } else {
  return value.toString(); // For values less than 1000
 }
};
