export function getData() {
  let p = dataFetch();
  new Promise((resolve) => {
    resolve(p);
  });
  // p.then((data) => console.log(data.response));
  // console.log(p.response);
}
