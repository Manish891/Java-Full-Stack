let DAYS = "SUNMONTUEWEDTHUFRISAT";
let day = "TUESDAY";
day = day.substring(0,3).toUpperCase();
console.log(DAYS.indexOf(day)/3 + 1);

let MONTHS = "JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC";
let month = "JULY";
month = month.substring(0,3).toUpperCase();
console.log(MONTHS.indexOf(month)/3 + 1);
