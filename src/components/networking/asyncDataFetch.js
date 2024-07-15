export async function dataFetch() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3001/mongo", true);
  xhr.send(null);

  return await xhr;
}

function rig() {
  let R = dataFetch();

  setTimeout(() => {
    console.log(R.response);
  }, 500);
}
