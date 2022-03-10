let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

//*** FUNCTION - save input button 
inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value);
    console.log(myLeads)
})

// Iterating through my leads and grabbing text from ulEl
for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}


