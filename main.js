let btnSubmit=document.getElementById("donate");
btnSubmit.addEventListener("click",donate);

function donate(){
    
    console.log("Cardholder Name:",document.getElementById("name").value);
    console.log("Card No:",document.getElementById("card-number").value);
    console.log("Email:",document.getElementById("email").value);
    console.log("Expiry Date",document.getElementById("expiry").value);

    let amount=document.querySelector("input[name='amount-donated']:checked").value;
console.log("amount-donated :"+amount);

}

//attach event handler to all room options

let amount = document.querySelectorAll("input[name='amount-donated']");

for (let i = 0; i < amount-donated.length; i++) {
    amount-donated[i].addEventListener("change", checkAmountDonated);
}

//check which value is linked to radio button

function checkAmountDonated() {
    if (this.value == "100") {
        console.log("Donated amount 100 LKR");
    }
    else if (this.value == "250") {
        console.log("Donated amount 250 LKR");
    }
    else if (this.value == "500") {
        console.log("Donated amount500 LKR");
    }
    else if (this.value == "1000") {
        console.log("Donated amount 1000 LKR");
    }
    else if (this.value == "2500") {
        console.log("Donated amount 2500 LKR");
    }
    else if (this.value == "5000") {
        console.log("Donated amount 5000 LKR");
    }
    else {
        console.log("Donated amount 10000 LKR");
    }
}

function notifyFunction() {

    let cardnumber = document.getElementById("card-number").value
    if (cardnumber == "")
    {
        alert("Your donation is unsuccessful.\t Please try again");
    }
    else{
        alert("Your donation is successful, Thank you!")
    }
  }



//ticket booking
//current order

const formFields = {
    ticketType : document.getElementById("ticket-type"),
    ticketQuantity : document.getElementById("ticket-quantity"),
    duration : document.getElementById("ticket-duration"),
    extras : document.getElementById("ticket-extra"),
  }

const currentOrderDisplay = {
    ticketType : document.getElementById("currordtype"),
    ticketQuantity : document.getElementById("currordquantity"),
    duration : document.getElementById("currordduration"),
    extras : document.getElementById("currordextras"),
  }
 
  const currentOrderCost = document.getElementById("current-order-cost")

  const TICKET_TYPES = {
    local : 2500,
    foreign : 3000,
    foreignChild : 2500,
    childU15 : 1000,
    childU06 : 500,
  }

  const EXTRAS = {
    annual_pass : 5000,
    food_pass : 500
  }
 

 const getFormData = () => {
    const ticketType = formFields.ticketType.value
    const ticketQuantity = formFields.ticketQuantity.value
    const duration = formFields.duration.value
    const extras = formFields.extras.value
  
    return { ticketType, ticketQuantity, duration, extras }
  }


//Calculation
const calculateCost = formData => {
    const {type, quantity, extra, duration} = formData
    return ((TICKET_TYPES[ticketType] * ticketQuantity) + EXTRAS[extra] + durationConditions(type, duration))
  }
  

  const durationConditions = (types, durations) => {
    if (types === "local" && durations === "three_hours") {
        return 0
      } 
      else if ((types === "foreign" && durations === "three_hours") || (types === "foreignChild" && durations === "three_hours")) {
        return 1000
      }
      else if (types === "local" && durations === "half_a_day") {
        return 250
      }
      else if ((types === "foreign" && durations === "half_a_day") || (types === "foreignChild" && durations === "half_a_day")) {
        return 500
      }
      else if (types === "local" && durations === "one_day") {
        return 500
      }
      else if ((types === "foreign" && durations === "one_day") || (types === "foreignChild" && durations === "one_day")) {
        return 1000
      }
    }
    

    //Returning values to current order ddisplay area
const setCurrentPrice = () => {
    const price = calculatePrice(getFormData())
    currentOrderCost.innerText = price || "\n"
  }
  
  formFields.ticketType.addEventListener("change", event => {
    const options = event.target.options
    const selectedOption = options[options.selectedIndex]
    const optionText = selectedOption.innerText
  
    currentOrderField.ticketType.innerText = ("Ticket type: " + optionText)
    setCurrentPrice()
  })
  
  formFields.ticketQuantity.addEventListener("keyup", event => {
    currentOrderField.ticketQuantity.innerText = ("Quantity: " + event.target.value) || '\n'
    setCurrentPrice()
  })
  
  formFields.duration.addEventListener("change", event => {
    currentOrderField.duration.innerText = ("Duration: " + event.target.value) || '\n'
    setCurrentPrice()
  })
  
  formFields.extras.addEventListener("change", event => {
    currentOrderField.extras.innerText = ("Extras: " + event.target.value) || '\n'
    setCurrentPrice()
  })
   
//Total order

const form = document.getElementById("ticketsJS")
const overallOrderField = document.getElementById("overall-order")
const overallOrderCost = document.getElementById("overall-order-cost")

const overallOrder = []

const calculateTotalPrice = () => {
  return overallOrder.reduce((acc, curr) => acc + calculatePrice(curr), 0)
}

form.addEventListener("submit", event => {
  event.preventDefault()

  const formData = getFormData()
  overallOrder.push(formData)

  const order = document.createElement('li')
  Object.values(formData).forEach(value => {
    const p = document.createElement('p')
    p.innerText = value
    order.appendChild(p)
  })
  overallOrderField.append(order)
  overallOrderCost.innerText = calculateTotalPrice()

  currentOrderField.ticketType.innerText = ""
  currentOrderField.ticketQuantity.innerText = ""
  currentOrderField.duration.innerText = ""
  currentOrderField.extras.innerText = ""

  formFields.ticketType.value= ""
  formFields.ticketQuantity.value= ""
  formFields.duration.value= ""
  formFields.extras.value= ""
})

const btnPlaceOrder = document.getElementById("placeorder")

btnPlaceOrder.addEventListener("click", () => {
  alert("Thank YOU!\nYour order was placed successfully.")

  currentOrderField.ticketType.innerText = ""
  currentOrderField.ticketQuantity.innerText = ""
  currentOrderField.duration.innerText = ""
  currentOrderField.extras.innerText = ""

  formFields.ticketType.value= ""
  formFields.ticketQuantity.value= ""
  formFields.duration.value= ""
  formFields.extras.value= ""

  overallOrderCost.innerText= ""
  overallOrderField.innerText= ""
  currentOrderCost.innerText= ""
})