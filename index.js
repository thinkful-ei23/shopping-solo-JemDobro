'use strict';
//user stories:
//store variable containing current shopping list items
const store = [
  { item: 'Papayas', checked: false },
  { item: 'Hummus', checked: true }
];

//Render the shopping list
  //Target the '.js-shopping-list' element and insert <li>s inside
  //For each item in the array 'store', generate a string representing an <li>--we will write
  //function(generateString for this and then pass it in to renderShoppingList()).
function renderShoppingList(store) {
  store.map(generateString());
  console.log('renderShoppingList ran');
}

function generateString(obj){
  console.log(`<li>${obj.item}
  </li>`);
}
//Handling adding new items--take input and add to the list
function handleNewItems(){
  console.log('handleNewItems ran');
}
//Be able to cross items off the list
function itemStrikethrough(){
  console.log('itemStrikethrough ran');
}
//Be able to delete items from the list
function itemDeleted() {
  console.log('itemDeleted ran');
}

function handleShoppingList(){
  renderShoppingList();
  handleNewItems();
  itemStrikethrough();
  itemDeleted();
}

handleShoppingList();

