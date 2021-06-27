// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// const example = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];

// Add your functions below:
const validateCred = array => {
  let tempNum = [];

  for (let i = array.length - 1; i >= 0; i--) {
    // console.log(`i: ${i}`);
    if (i % 2 != 0) {
      // console.log(`array[i]: ${array[i]}`)
      tempNum.unshift(array[i]);

    } else {
      let num = array[i] * 2
      // console.log(`num: ${num}`)
      if (num > 9) {
        num -= 9;
      }
      // console.log(`changedNum: ${num}`)
      tempNum.unshift(num);
    }
  }
  // console.log(tempNum);

  const sumNum = tempNum.reduce((acc, curr) => acc + curr);
  // console.log(sumNum);
  if (sumNum % 10 === 0) {
    return true;
  }
  return false;
};
// console.log(`valid1: ${valid1}`);

const findInvalidCards = array => {

  let invalidCards = [];

  for (let i = 0; i < array.length; i++) {

    if (!validateCred(array[i])) {
      invalidCards.push(array[i]);
    }
  }
  return invalidCards;
}

// console.log(findInvalidCards(batch));

const idInvalidCardCompanies = array => {

  let invalidCompanies = [];

  for (let i of findInvalidCards(array)) {
    const amex = 'Amex (American Express';
    const visa = 'Visa';
    const mastercard = 'Mastercard';
    const discover = 'Discover';

    if (i[0] === 3 && !invalidCompanies.includes(amex)) {
      invalidCompanies.push(amex);
    } else if (i[0] === 4 && !invalidCompanies.includes(visa)) {
      invalidCompanies.push(visa);
    } else if (i[0] === 5 && !invalidCompanies.includes(mastercard)) {
      invalidCompanies.push(mastercard);
    } else if (i[0] === 6 && !invalidCompanies.includes(discover)) {
      invalidCompanies.push(discover);
    } else {
      if (!invalidCompanies.includes('Company not found')) {
        invalidCompanies.push('Company not found');
      }
    }
  }

  return invalidCompanies;
}

console.log(idInvalidCardCompanies(batch));