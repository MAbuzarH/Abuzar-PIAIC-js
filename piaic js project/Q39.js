function city_country() {
  let city = prompt("Enter name of city");
  let country = prompt("Enter name of country");
  function title(arr) {
    let upp = arr[0].toUpperCase();
    let baki = arr.slice(1, city.length);
    return upp + baki;
  }
  let cityname = title(city);
  let countn = title(country);
  return cityname + "," + countn;
}
city_country();
