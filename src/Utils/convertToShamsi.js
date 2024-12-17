import moment from "moment-jalaali";

export const convertToShamsi = (gregorianDate) => {
  if (!gregorianDate) return "";
  return moment(gregorianDate).format("jYYYY/jMM/jDD");
};
