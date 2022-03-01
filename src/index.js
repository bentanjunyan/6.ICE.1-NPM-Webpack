import moment from 'moment';

const dateInput = document.createElement("INPUT");
dateInput.setAttribute("type", "date");

const submitBtn = document.createElement("button")
submitBtn.setAttribute("type", "submit");
submitBtn.innerText = 'Submit'


const getInput = () => {
    const displayDate = document.createElement("h2")
    const inputDate = dateInput.value;
    displayDate.innerText = moment(inputDate).format('MMMM Do, YYYY');;
    document.body.appendChild(displayDate);
    console.log(inputDate)
}

document.body.appendChild(dateInput);
document.body.appendChild(submitBtn);
submitBtn.addEventListener('click', getInput)

// console.log(moment().format());