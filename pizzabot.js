const vegetarian = 'Vegetarian'
const hawaiian = 'Hawaiian'
const pepperoni = 'Pepperoni'
const pizzaPrice = 80

const buttonClicked = () => {
  const orderName = prompt('Yummy, pizza time! 😋 Enter the name of the pizza you want')

  const checkOrderName = (orderName) => {
    if (orderName == hawaiian || orderName == vegetarian || orderName == pepperoni) {
      return true;
    } else {
      return false;
    }
  }

  const order = checkOrderName(orderName)

  const totalCost = (orderQuantity) => {
    orderTotal = (orderQuantity * pizzaPrice);
    return orderTotal;
  }


  const cookingTime = (orderQuantity) => {
    if (orderQuantity < 3) {
      return (10);
    } else if (orderQuantity < 6) {
      return (15);
    } else {
      return (20);
    }
  }

  const checkOrder = (order) => {
    if (order === true) {
      orderQuantity = prompt(`How many of ${orderName} do you want?`);
      /*Invoking the function*/
      orderTotal = totalCost(orderQuantity);
      /*Invoking the function*/
      minutes = cookingTime(orderQuantity);
      alert(`Great, we'll get started on your ${orderName} pizza right away. It will cost ${orderTotal} kronor and will take ${minutes} minutes!`);
    } else {
      alert(`Please select a pizza from the menu`);
    }
  }

  /*Invoking the function*/
  checkOrder(order)

}

