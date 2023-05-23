import Data from './data.json';
const carsData = Data.cars;

export let ShoppingListData = [];


if (window.localStorage.getItem("ShoppingList") != null) {
  getDataToLocalStorage();
}


// <============== Functions to update data ===============> 

export function addDataToShoppingList(data) {
  ShoppingListData.push(data);
  setDataToLocalStorage(ShoppingListData);
}

export function updateNumberOfCarsToShoppingList(newNumberOfCars, itemId) {
  let TempItemData = -1;
  ShoppingListData.forEach(element => {
    if (element.id === itemId) {
      TempItemData = element;
    }
  });

  if (TempItemData !== -1) {
    console.log(TempItemData);
    TempItemData.numberOfCars = newNumberOfCars;
  } else {
    carsData.forEach(element => {
      if (element.id === itemId) {
        TempItemData = element;
      }
    })
    if (TempItemData !== -1) {
      TempItemData.numberOfCars = newNumberOfCars;
      addDataToShoppingList(TempItemData);
    }
  }
  setDataToLocalStorage(ShoppingListData);
}

export function removeItemById(itemId) {
  let index = -1;
  ShoppingListData.forEach((element, i) => {
    if (element.id === itemId) {
      index = i;
    }
    i++;
  });
  ShoppingListData.splice(index, 1);
  setDataToLocalStorage(ShoppingListData);
}

// export function removeAllItems() { FIXME:
//   console.log("i Remove All");
//   ShoppingListData = [];
// }

// <============== Local Storage ===============> 

export function setDataToLocalStorage(data) {
  window.localStorage.setItem("ShoppingList", JSON.stringify(ShoppingListData));
}

export function getDataToLocalStorage() {
  let x = window.localStorage.getItem("ShoppingList");
  ShoppingListData = JSON.parse(x);
}


function UnitTest() { // TODO:
  console.log(ShoppingListData);
  addDataToShoppingList(
    {
      "id": "car-data-03",
      "name": "FIRST CLASS",
      "class": "Mercedes maybach s600",
      "description": "The Mercedes-Benz S-Class is the epitome of luxury and style, with its sleek lines and advanced technology. It's a four-door sedan that's perfect for those who demand the very best in automotive design and performance.",
      "seats": 3,
      "luggage": 1,
      "image": "/images/mercedes-benz-s-class.png",
      "numberOfCars": 7
    }
  );
  console.log(ShoppingListData); // has 3 data
  updateNumberOfCarsToShoppingList(10, "car-data-03");
  console.log(ShoppingListData); // has 3 data and update to 10  console.log("Data After removing")
  removeItemById("car-data-03");
}

// UnitTest() // TODO: