// question number1
 let Alluser = ['mahir','kuldeep','anam','rishab','yash','siddharth'];
function isuserpresent(user) {
    if (Alluser.includes(user)) {
        console.log(`yes ,${user} is a valid person`);
    } else {
        console.log(`No ,${user} is not a valid person`);
    }
}
isuserpresent('mahir');
isuserpresent('someone');


// question number 2
function calculateprice(a,b,c) {
    let total = a + b + c;
    console.log(total);
}

calculateprice(125,20,30);

// question number 3
const students = [
  {
    name: "Mithun",
    marks: 95,
  },
  {
    name: "Prabir",
    marks: 75,
  },
  {
    name: "Alka",
    marks: 92,
  },
  {
    name: "Shivam",
    marks: 70,
  },
  {
    name: "Farman",
    marks: 99,
  },
];

const checkResults = (name) => {
  for (let student of students) {
    if (student.name === name) {
      return student.marks > 90
        ? console.log(
            `Congratulations ${student.name}! You have cleared the exam.`
          )
        : console.log(`Sorry ! You have not cleared the exam.`);
    }
  }
  console.log("Invalid User !!!");
};

checkResults("Mithun");
// OUTPUT: Congratulations Mithun! You have cleared the exam.

checkResults("Prabir");
// OUTPUT: Sorry ! You have not cleared the exam.

checkResults("Mithun S");
// OUTPUT: Invalid User !!!

// question number 4
const products = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Laptop Bag", price: 20000 },
  { name: "Watch", price: 20000 },
  { name: "Mobile Charger", price: 1500 },
];

let maxProduct = { name: "", price: 0 };
let minProduct = { name: "", price: Number.MAX_VALUE };

for (let product of products) {
  if (product.price > maxProduct.price) {
    maxProduct = product;
  }
  if (product.price < minProduct.price) {
    minProduct = product;
  }
}

console.log(
  `The product with maximum ammount is ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`
);
console.log(
  `The product with minimum ammount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`
);
// question number 5
let array = ["anurag","mithum","alka","prabin","shivam","farman"];
console.log(array.join(','));

// question number 6
const productDetails = {
  name: "Apple 2020 MacBook Air Laptop",
  price: 82000,
  color: "Grey",
  hardDisk: "256 GB",
};
console.log(`below are the products details`);
for (let keys of Object.keys(productDetails)) {
  console.log(`${keys} : ${productDetails[keys]}`);
}

// question number 7
function generateotp() {
  const min = 1000;
  const max = 9999;
  const otp =Math.floor(Math.random() * (max - min + 1) ) + min;
  return otp.toString();
}
console.log(`here otp is ${generateotp()}`);

// question number 8
function calculateRemainingDays(eventDate) {
  const currentDate = new Date();
  const eventDateTime = new Date(eventDate);

  const timeDifference = eventDateTime - currentDate;
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysRemaining;
}

const eventDate = '2023-08-31'
console.log(calculateRemainingDays(eventDate));

// question number 9
function uniqueCharactersCheck(inputString) {
  const charSet = new Set();

  for (const char of inputString) {
      if (charSet.has(char)) {
          console.log("The input string contains duplicates.");
          return false;
      }
      charSet.add(char);
  }
  console.log("The input string contains only unique characters.");
  return true;
}

uniqueCharactersCheck("mithun")

// question number 10
function wordCounter(sentence) {
  const wordFrequencyMap = new Map();

  const words = sentence.split(/\s+/); // Split the sentence into words using whitespace as separator

  for (const word of words) {
      const cleanWord = word.toLowerCase().replace(',', ''); // Remove non-alphanumeric characters and convert to lowercase

      if (cleanWord.length > 0) {
          wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
      }
  }

  return wordFrequencyMap;
}

const sentence = "please please submit your assignment on time, your assignments are important ";
const result = wordCounter(sentence);

console.log(result);