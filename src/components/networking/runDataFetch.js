export function runFetch() {
  dataFetch().then((data) => console.log(data["response"]));
}
