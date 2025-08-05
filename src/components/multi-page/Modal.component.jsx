import { FilterTable, FilterableTable, FilterableTableInput } from "./FilterTable.component";

const Modal = () => {
  {
    /* */
  }
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
          <FilterTable />
        </div>
      </div>
    </>
  );
};

const ModalButton = () => {
  {
    /* <!-- Trigger/Open The Modal --> */
  }

  function clickHandler() {
    // alert("Hello World!");
    return ModalController();
  }
  return (
    <button id="myBtn" onClick={() => clickHandler()}>
      Open Modal
    </button>
  );
};

const ModalController = () => {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
};


export {
  Modal,
  ModalController,
  ModalButton
};