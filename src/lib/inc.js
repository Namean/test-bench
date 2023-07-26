const inc = () => {
  let btn = document.getElementById("inc");

  setInterval(() => {
    btn.click();
  }, 1000);
};

export default inc;
