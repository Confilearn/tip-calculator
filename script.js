const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeopleDiv");
const perPersonTotalDiv = document.getElementById("perPersonTotalDiv");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

calculateBill = () => {
  const bill = Number(billInput.value);
  const tip = Number(tipInput.value);
  const tipPercent = tip / 100;

  const tipAmount = bill * tipPercent;
  const total = tipAmount + bill;

  if (isNaN(bill)) {
    bill = "";
  }
  if (isNaN(tip)) {
    tip = "";
  }

  const perPersonTotal = total / numberOfPeople;
  perPersonTotalDiv.innerText = ` $${perPersonTotal.toFixed(2)}`;
};

increasePeople = () => {
  numberOfPeople++;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};

decreasePeople = () => {
  if (numberOfPeople <= 1) return;
  numberOfPeople--;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};
