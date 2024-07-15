## MongoDB

### Start monogod as a macOS service

```sh
$ brew services start mongodb-community@7.0
```

### stop mongod

```sh
$ brew services stop mongodb-community@7.0
```

### Run mongod manually as a process

```sh
mongod --config /opt/homebrew/etc/mongod.conf --fork
```

### Start MongoDB shell (mongosh)

```sh
$ mongosh
```

## Mongosh Shell Commands

```sh

show dbs    # lists databases
show tables # lists tables



```

Shell Help:

    use                                        Set current database
    show                                       'show databases'/'show dbs': Print a list of all available databases.
                                               'show collections'/'show tables': Print a list of all collections for current database.
                                               'show profile': Prints system.profile information.
                                               'show users': Print a list of all users for current database.
                                               'show roles': Print a list of all roles for current database.
                                               'show log <type>': log for current connection, if type is not set uses 'global'
                                               'show logs': Print all logs.

    exit                                       Quit the MongoDB shell with exit/exit()/.exit
    quit                                       Quit the MongoDB shell with quit/quit()
    Mongo                                      Create a new connection and return the Mongo object. Usage: new Mongo(URI, options [optional])
    connect                                    Create a new connection and return the Database object. Usage: connect(URI, username [optional], password [optional])
    it                                         result of the last line evaluated; use to further iterate
    version                                    Shell version
    load                                       Loads and runs a JavaScript file into the current shell environment
    enableTelemetry                            Enables collection of anonymous usage data to improve the mongosh CLI
    disableTelemetry                           Disables collection of anonymous usage data to improve the mongosh CLI
    passwordPrompt                             Prompts the user for a password
    sleep                                      Sleep for the specified number of milliseconds
    print                                      Prints the contents of an object to the output
    printjson                                  Alias for print()
    convertShardKeyToHashed                    Returns the hashed value for the input using the same hashing function as a hashed index.
    cls                                        Clears the screen like console.clear()
    isInteractive                              Returns whether the shell will enter or has entered interactive mode

For more information on usage: https://docs.mongodb.com/manual/reference/method

### Selectors

use test
db.unicorns.find({})

{field: value} is used to find any documents where field is equal to value
{field1: value1, field2: value2} is how we do an and statement

The special $lt, $lte, $gt, $gte, $ne

RTo get all male unicorns that weigh morn than 700lbs we could do

db.unicorns.find({gender: 'm', weight: {$gt: 700}})

```js
function greaterThan(value) {
  return { $gt: value };
}

db.unicorns.find({ gender: "m", weight: greaterThan(700) });

function hydrate(input) {
  return JSON.parse(JSON.stringify(input));
}

let malesOverSevenHundredPounds = function (cursor) {
  return hydrate(cursor)["documents"];
};

let unicorns = db.unicorns.find({
  gender: "m",
  weight: { $gt: 700 },
});

function queryResult(input = result) {
  let objectLiteral = hydrate(input._currentIterationResult);
  return objectLiteral;
}

r = function () {
  return db.unicorns.find({});
};

males = function () {
  return db.unicorns.find({ gender: "m" });
};

malesUnderSixHundredPounds = function () {
  return db.unicorns.find({
    gender: "m",
    weight: { $lte: 600 },
  });
};

function x() {
  result = r();
  eval(result);
  console.log(result.currentIterationResult == null);
}

function bindQuery(input) {
  result = input();
  result._currentIterationResult;
}

function queryWrapper(input) {
  bindQuery(input);
  return queryResult(result);
}

function z() {
  return queryResult()["documents"].map((x) => x.name);
}

(x) => x.name;
function z(callback) {
  return queryResult()["documents"].map(callback);
}

function unicornKeys() {
  return Object.keys(queryResult()["documents"][0]);
}
```

### Alias mongoshell commands

```js
eval(show("databases"));

function ls() {
  return show("databases");
}

let ls = (() => {
  return show("databases");
})();

dbs = (() => {
  return show("databases");
})();

tbl = (() => {
  return show("tables");
})();

// HACK!

let data = tbl; // returns object[???]
let data = JSON.parse(JSON.stringify(tbl));
```

```js
class Unicorn {
  // name: string
  // dob: Date
  // loves: list
  // weight: number
  // gender: char
  // vampires: number

  constructor(name) {
    this.name = name;
  }

  // methods

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getDob() {
    return this.dob;
  }
  setDob(dob) {
    this.dob = dob;
  }
  getLoves() {
    return this.loves;
  }
  setLoves(loves) {
    this.loves = loves;
  }
  getWeight() {
    return this.weight;
  }
  setWeight(weight) {
    this.weight = weight;
  }
  getVampires() {
    return this.vampires;
  }
  setVampires() {
    this.vampires = vampires;
  }
}
```

```js
db.unicorns.insertOne({
  name: "Horny",
  dob: new Date(1992, 2, 13, 7, 47),
  loves: ["carrot", "papaya"],
  weight: 600,
  gender: "m",
  vampires: 63,
});
db.unicorns.insertOne({
  name: "Aurora",
  dob: new Date(1991, 0, 24, 13, 0),
  loves: ["carrot", "grape"],
  weight: 450,
  gender: "f",
  vampires: 43,
});
db.unicorns.insertOne({
  name: "Unicrom",
  dob: new Date(1973, 1, 9, 22, 10),
  loves: ["energon", "redbull"],
  weight: 984,
  gender: "m",
  vampires: 182,
});
db.unicorns.insertOne({
  name: "Roooooodles",
  dob: new Date(1979, 7, 18, 18, 44),
  loves: ["apple"],
  weight: 575,
  gender: "m",
  vampires: 99,
});
db.unicorns.insertOne({
  name: "Solnara",
  dob: new Date(1985, 6, 4, 2, 1),
  loves: ["apple", "carrot", "chocolate"],
  weight: 550,
  gender: "f",
  vampires: 80,
});
db.unicorns.insertOne({
  name: "Ayna",
  dob: new Date(1998, 2, 7, 8, 30),
  loves: ["strawberry", "lemon"],
  weight: 733,
  gender: "f",
  vampires: 40,
});
db.unicorns.insertOne({
  name: "Kenny",
  dob: new Date(1997, 6, 1, 10, 42),
  loves: ["grape", "lemon"],
  weight: 690,
  gender: "m",
  vampires: 39,
});
db.unicorns.insertOne({
  name: "Raleigh",
  dob: new Date(2005, 4, 3, 0, 57),
  loves: ["apple", "sugar"],
  weight: 421,
  gender: "m",
  vampires: 2,
});
db.unicorns.insertOne({
  name: "Leia",
  dob: new Date(2001, 9, 8, 14, 53),
  loves: ["apple", "watermelon"],
  weight: 601,
  gender: "f",
  vampires: 33,
});
db.unicorns.insertOne({
  name: "Pilot",
  dob: new Date(1997, 2, 1, 5, 3),
  loves: ["apple", "watermelon"],
  weight: 650,
  gender: "m",
  vampires: 54,
});
db.unicorns.insertOne({
  name: "Nimue",
  dob: new Date(1999, 11, 20, 16, 15),
  loves: ["grape", "carrot"],
  weight: 540,
  gender: "f",
});
db.unicorns.insertOne({
  name: "Dunx",
  dob: new Date(1976, 6, 18, 18, 18),
  loves: ["grape", "watermelon"],
  weight: 704,
  gender: "m",
  vampires: 165,
});
```
