## MongoDB

start monogod as a macOS service

<blockquote style="border: none; border: solid 1px black; background-color: light-grey;">
  $ brew services start mongodb-community@7.0
</blockquote>

stop mongod

brew services stop mongodb-community@7.0

run manually as a process

mongod --config /opt/homebrew/etc/mongod.conf --fork

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
