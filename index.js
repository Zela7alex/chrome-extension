let myLeads = [];

const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

// 2nd) Getting leads back from local storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')



//*** 1st) FUNCTION - save input button pushes input values to array
inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value);
    // input value is reset
    inputEl.value = " "

    // 1st) saving leads to local storage
    localStorage.setItem('myLeads', JSON.stringify(myLeads))

    //When save button clicked, render() executes
    render(myLeads);

});

//*** 2nd) FUNCTION - render leads/ any array you want. (We are passing in myLeads array through first argument "leads")
function render(leads) { //leads takes in myLeads argument
    // list items variable to add in each lead
    let listItems = ""
    // Iterating through my leads and grabbing text from ulEl
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
        </li>
        `

    }
    ulEl.innerHTML = listItems
}

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads);

}


//*** 3rd) FUNCTION - clear localStorage, myLeads & DOM 
deleteBtn.addEventListener('dblclick', function () {
    localStorage.clear() // clears local storage

    myLeads = [] // resets the myLeads array to 0

    render(myLeads); // We can now clear the DOM by simply calling render() since in this function myLeads Array is set to 0 again.

});

//*** 4th) FUNCTION - save tabs
tabBtn.addEventListener('click', function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        //This is the code for chrome ^^^ in order to be able to save tabs (an API essentially.).... The following code is simply to save tabs to local storage "my Leads" and render on the page >>> p.s (must add permissions "tabs" on manifest.json)

        let url = tabs[0].url
        myLeads.push(url);

        localStorage.setItem('myLeads', JSON.stringify(myLeads));

        render(myLeads);

    })

});

