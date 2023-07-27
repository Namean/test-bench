data = [
  {
    city: "London",
    content: "London is the capital city of England",
    defaultOpen: true,
  },
  {
    city: "Paris",
    content: "Paris is the capital of France",
  },
  {
    city: "Tokyo",
    content: "Tokyo is the capital of Japan",
  },
];

data.map((idx) => (idx.defaultOpen = false));
data.map((idx, index) => (idx.active = false));

let london = (data.filter(
  (idx) => idx.city === "London"
)[0].defaultOpen = true);

class Controller {
  activeCity;
  memory = { initalized: false, current: "", previous: "" };
  constructor(cities) {
    this.cities = cities;
    this.activeCity = data.filter((idx) => idx.defaultOpen);
  }

  // methods...
  findCity(cityName) {
    let city = cityName.toLowerCase().trim();
    let foundCity;
    try {
      foundCity = this.cities.filter((idx) => city === idx.city.toLowerCase());
    } catch (error) {
      console.error(error);
    }
    return foundCity;
  }

  selectCity(cityName) {
    let result = this.cities.filter(
      (idx) => idx.city.toLowerCase() === cityName.toLowerCase()
    )[0];

    result.active = true;

    if (this.memory.initalized === false) {
      this.memory.current = result.city;
      this.memory.initalized = true;
    } else if (this.memory.initalized === true) {
      this.memory.previous = this.memory.current;
      let prevCity = this.cities.filter(
        (idx) => idx.city.toLowerCase() === this.memory.previous.toLowerCase()
      )[0];
      prevCity.active = false;
      this.memory.current = result.city;
    }
    return result;
  }
}

ctrl = new Controller(data);
// let city = ctrl.selectCity('tokyo');
// console.log(city.active);
// console.log(ctrl);
// console.log(
//   `current: ${ctrl.memory.current}, previous: ${ctrl.memory.previous}`
// );
//ctrl.selectCity("london");
// console.log(
//   `current: ${ctrl.memory.current}, previous: ${ctrl.memory.previous}`
// );
// ctrl.selectCity("tokyo");
// console.log(
//   `current: ${ctrl.memory.current}, previous: ${ctrl.memory.previous}`
// );
//ctrl.selectCity("paris");
// console.log(
//   `current: ${ctrl.memory.current}, previous: ${ctrl.memory.previous}`,
// );

//ctrl.selectCity("tokyo");
// console.log(
//   `current: ${ctrl.memory.current}, previous: ${ctrl.memory.previous}`
// );

console.log(ctrl.cities);
