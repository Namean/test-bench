function rig() {
  let R = dataFetch();
  // let R = dataPOST();
  // console.log(R);

  setTimeout(() => {
    console.log(`rig() > R = dataPost() -> R.response`, R.response);
    setData(JSON.parse(R.response));
  }, 1500);
}

return (
  <>
    <Mongo data={data} />

    <button onClick={() => rig()}>FETCH</button>
  </>
);
