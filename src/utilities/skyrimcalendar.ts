const weekday: string[] = [
  "Sundas ",
  "Morndas ",
  "Tirdas ",
  "Middas ",
  "Turdas ",
  "Fredas ",
  "Loredas ",
];

const monthOfTheYear: string[] = [
  "Morning Star ",
  "Sun's Dawn ",
  "First Seed ",
  "Rain's Hand ",
  "Second Seed ",
  "Mid Year ",
  "Sun's Height ",
  "Last Seed",
  "Hearthfire ",
  "Frost Fall ",
  "Sun's Dusk ",
  "Evening Star ",
];

let d: Date = new Date();
let day: number = d.getDate();
let h: number = d.getHours();
let m: number = d.getMinutes();
let y: number = d.getFullYear();
let month: number = d.getMonth();
let myear: string = monthOfTheYear[month];
let wday: string = weekday[d.getDay()];

export { day, h, m, y, myear, wday };
