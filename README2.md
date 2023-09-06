query = "primary key vs foreign key"
title = "Major Difference between Primary Key and Foreign Key"
url = ["https://herovired.com/learning-hub/blogs/difference-between-primary-key-and-foreign-key/#:~:text=A%20primary%20key%20is%20a%20unique%20identifier%20for%20each%20record,primary%20key%20of%20another%20table.&text=Ensures%20uniqueness%20and%20data%20integrity%20within%20a%20single%20table."]

terms = [
"primary key",
"foreign key",
]

```js
employees = [
  {
    employee_id: "001",
    first_name: "john",
    last_name: "smith",
    department: "sales",
  },
  {
    employee_id: "002",
    first_name: "emily",
    last_name: "johnson",
    department: "hr",
  },
  {
    employee_id: "003",
    first_name: "Michael",
    last_name: "Williams",
    department: "marketing",
  },
  {
    employee_id: "004",
    first_name: "Sarah",
    last_name: "Davis",
    department: "operations",
  },
];
```

```js
const students = [
  {
    student_id: '001',
    first_name: 'john',
    last_name: 'smith' ,
    age: 18,
    grade: 'A',
  },
  {
    student_id: '002',
    first_name: 'emily',
    last_name: 'johnson',
    age: 19,
    grade: 'B',
  },
  {
    student_id: '003',
    first_name: 'Michael',
    last_name: 'Williams',
    age: 20,
    grade: 'A',
  },
]


const courses = [
  {
    course_id: '101',
    course_name: 'mathematics',
    instructor: ,
  },
  {
    course_id: '102',
    course_name: 'english',
    instructor: ,
  },
  {
    course_id: '103',
    course_name: 'science',
    instructor: ,
  },
]

const instructors = [
  {
    instructor_id: '100',
    first_name: ,
    last_name: 'anderson',
    title: 'prof',
    courses_taught: ['101']
  },
  {
    instructor_id: '200',
    first_name: ,
    last_name: 'thompson',
    title: 'prof',
    courses_taught: ['101']
  },
  {
    instructor_id: '300',
    first_name: ,
    last_name: 'parker',
    title: 'prof',
    courses_taught: ['101']
  },
]

```

query = "one to many relationship"
terms = [
"ontologies",
"ER models",
"super entities",
"subtype entities"
"generalization-specialization relationships"
]
url: "https://en.wikipedia.org/wiki/One-to-many_(data_model)"
linked_url: "https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model"

const students = [
{
student_id: "001",
first_name: "John",
last_name: "Smith",
age: 18,
grade: "A",
course_id: "101",
courses: [101, 102],
},
{
student_id: "002",
first_name: "Emily",
last_name: "Johnson",
age: 19,
grade: "B",
course_id: "102",
courses: [101, 1],
},
{
student_id: "003",
first_name: "Michael",
last_name: "Williams",
age: 20,
grade: "A",
course_id: "103",
},
];

const courses = [
{
course_id: "103",
course_name: "Mathematics",
instructor: "Prof. Anderson",
},
{
course_id: "102",
course_name: "English",
instructor: "Prof. Thompson",
},
{
course_id: "103",
course_name: "Science",
instructor: "Prof. Parker",
},
];
