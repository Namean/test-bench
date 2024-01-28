// import { array } from "prop-types";
// let key = 0;
// switch (key) {
//   case 0:
//     console.log("You entered: 0");

//     break;

//   default:
//     break;
// }

// function rig(key) {
//   switch (key) {
//     case 0:
//       console.log("switched to db admin");
//       break;

//     default:
//       break;
//   }
// }

// let key = 0;
// let beginSwitch = "switch (key) {";
// let case0 = `case 0:\nconsole.log("switched to db admin");\nbreak;\n`;
// let case1 = `case 1:\nconsole.log("switched to db config");\nbreak;\n`;
// let endSwitch = "default:\nbreak;\n";

// function use(arg) {
//   console.log(`switching to db ${arg}`);
// }

let cases = [
  {
    _case: 0,
    callback: "use",
  },
  {
    _case: 1,
    callback: "show",
  },
];

// function adder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

function _caseBuilder(input_case) {
  // Make use of Object Destructing to clean this up!
  // const {__case, cb, cb_params} = _case;
  let _case, callback;
  _case = input_case._case;
  callback = input_case.callback;

  return `  case ${_case}:\n  ${callback}();\nbreak\n`;
}

function switchAssembler() {
  let beginSwitch = "switch (key) {\n";
  let endSwitch = "default:\nbreak;\n}";
  let switchString = "";

  let _caseBuilderMap = cases.map((x) => _caseBuilder(x));
  _caseBuilderMap.unshift(beginSwitch);

  switchString = _caseBuilderMap.reduce((ac, cv) => ac + cv) + endSwitch;
  return switchString;
}

function wrapperFunctionWrapper(name, _args) {
  let beginFunction = `function ${name}(`; // handle a single argument
  let endFunction = ") {";
  let args = ["arg0", "arg1", "arg2"];
  beginFunction.slice(0, 17);
  let argumentsString = args.reduce((acc, cv) => `${acc}, ${cv}`);
  let result =
    beginFunction +
    argumentsString +
    beginFunction.slice(
      beginFunction.length + argumentsString.length,
      Infinity
    );
}

// We can either eval this
// or write using sed/awk to a file as a module
// then import

const fs = require("fs");

const UTF_8 = "utf8";

function writeToSpecificLine(filePath, lineNumber, newData) {
  const data = fs.readFileSync(filePath, UTF_8).split("\n");
  data[lineNumber - 1] = newData;
  const updatedContent = data.join("\n");
  fs.writeFileSync(filePath, updatedContent, UTF_8);
}

var filePath = "mySwitch.js";
const lineNumber = 20;
const newData = switchAssembler();

writeToSpecificLine(filePath, lineNumber, newData);
