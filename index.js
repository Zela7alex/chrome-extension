let myLeads = [];
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')


//*** FUNCTION - save input button 
inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value);
    // input value is reset
    inputEl.value = " "
    //When save button clicked, renderLeads() executes
    renderLeads();
})


//*** FUNCTION - render leads on page 
function renderLeads() {
    // list items variable to add in each lead
    let listItems = ""
    // Iterating through my leads and grabbing text from ulEl
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
        </li>
        `

    }
    ulEl.innerHTML = listItems
}
