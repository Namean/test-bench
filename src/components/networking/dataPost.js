export function dataPOST() {
  function toArray(htmlCollection) {
    let buffer = [];

    for (let i = 0; i < htmlCollection.length; i++) {
      buffer.push(htmlCollection[i]);
    }

    return buffer;
  }
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://192.168.1.152:3001/mongoQuery", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  let sendData; // collect data from React form
  // sendData = () => {
  //   let obj = {};
  //   let inputs = toArray(document.getElementsByClassName("unicorn"));
  //   inputs.map((x) => (obj[`${x.name}`] = x.value));
  // };
  // xhr.send(
  //   JSON.stringify({
  //     gender: "m",
  //     weight: { $lt: 600 },
  //   })
  // );

  let query = { gender: "m", weight: { $gt: 600 } };
  let json = JSON.stringify(query);
  xhr.send(json);

  return xhr;
}
