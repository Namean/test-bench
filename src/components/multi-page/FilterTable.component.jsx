import {useState} from "react";
// FilterTable
const FilterableTable = () => {
  const [termSelected, setTermSelected] = useState(false);
  return (
    <>
      <table id="myTable">
        <tbody>
          <tr className="header">
            <th style={{ width: "60%" }}>Name</th>
            <th style={{ width: "40%" }}>Country</th>
          </tr>

          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Berglunds snabbkop</td>
            <td>Sweden</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Koniglich Essen</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Italy</td>
          </tr>
          <tr>
            <td>North/South</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Paris specialites</td>
            <td>France</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const FilterableTableInput = () => {
  return (
    <>
      <input
        type="text"
        id="myInput"
        onKeyUp={() => myFunction()}
        placeholder="Search for names.."
        title="Type in a name"
      />
    </>
  );
};

function FilterTable() {
  return (
    <>
      <FilterableTableInput />
      <FilterableTable />
    </>
  );
}

const myFunction = () => {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

export {
    FilterTable,
    FilterableTable,
    FilterableTableInput
}