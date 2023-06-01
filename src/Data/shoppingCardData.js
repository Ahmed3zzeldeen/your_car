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
  console.log(`i will remove this item with id = ${itemId}`);
  let index = -1;
  ShoppingListData.forEach((element, i) => {
    if (element.id === itemId) {
      index = i;
    }
    i++;
  });
  if (index !== -1) {
    ShoppingListData.splice(index, 1);
    setDataToLocalStorage(ShoppingListData);
  }
}

export function removeAllItems() {
  ShoppingListData = [];
  setDataToLocalStorage(ShoppingListData);
}

// <============== Local Storage ===============> 

export function setDataToLocalStorage(data) {
  window.localStorage.setItem("ShoppingList", JSON.stringify(ShoppingListData));
}

export function getDataToLocalStorage() {
  let x = window.localStorage.getItem("ShoppingList");
  ShoppingListData = JSON.parse(x);
}

