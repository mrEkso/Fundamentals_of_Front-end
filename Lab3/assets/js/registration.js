// inputMask for phone and date
IMask(document.querySelector('#tel'), {
    mask: '+{38}(000)000-00-00'
});
IMask(document.querySelector('#birthday'), {
    mask: Date,
    min: new Date(1930, 0, 1),
    max: new Date(2021, 0, 1)
});

// variables and constants for validation
const form = document.querySelector('#registration-form');
const table = document.querySelector('#autorization-users');
const tbody = table.querySelector('tbody');
let formInputs = form.querySelectorAll('.form-input');
let success = false;

// searching already existing emails
let alreadyExistingEmails = [];
searchAlreadyExistingEmails();

function searchAlreadyExistingEmails() {
    tbody.querySelectorAll('tr').forEach(function (tr) {
        tr.querySelectorAll('td').forEach(function (td) {
            if (td.classList.contains('form-td-email')) {
                if (!alreadyExistingEmails.includes(td.innerText)) {
                    alreadyExistingEmails.push(td.innerText);
                }
            }
        });
    });
}

document.addEventListener('input', function (e) {
    formInputs.forEach(function (input) {
        // other validations
        if (input.value) { // validation for empty data
            isValid(input);
            if (input.hasAttribute('minlength')) { // validation for min length
                if (input.value.length < input.getAttribute('minlength')) isInvalid(input, 'min-fill-error');
            }
            if (input.hasAttribute('maxlength')) {  // validation for max length
                if (input.value.length > input.getAttribute('maxlength')) isInvalid(input, 'max-fill-error');
            }
            if (input.classList.contains('non-numeric')) {
                if (input.value.replace(/[^a-zA-Zа-яА-Я]/g, ' ').match(' ')) isInvalid(input, 'num-fill-error');
            }
            // special validations
            if (input.id === 'email') { // validation for email
                let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                if (!emailRegex.test(input.value)) isInvalid(input, 'correct-fill-error');
                if (alreadyExistingEmails.includes(input.value)) isInvalid(input, 'already-fill-error');
            } else if (input.id === 'tel') { // validation for phone
                if (input.value.replace(/[_-]/g, '').length !== 15) isInvalid(input, 'full-fill-error');
            } else if (input.id === 'birthday') { // validation for birthday
                if (input.value.length !== 10) isInvalid(input, 'full-fill-error');
            }
        } else isInvalid(input, 'fill-error');
    });
});

// if everything is good(succes = true) -> adding data to table and reset form
document.addEventListener('submit', function (e) {
    if (success) {
        addingNewDataToTable(table); // adding
        formCleaning(form); // reset
    }
});

// additionally function for validation
function isInvalid(input, error) {
    // const for errors
    const FILLERROR = 'Please fill in the field!';
    const MINFILLERROR = 'The number of characters is less than the min allowed!';
    const MAXFILLERROR = 'The number of characters is greater than the max allowed!';
    const CORRECTFILLERROR = 'Please enter a valid email!';
    const FULLFILLERROR = 'Please fill in the field completely!';
    const NUMFILLERROR = 'Please use only letters';
    const ALLREADYFILLERROR = 'Such an email already exists, please come up with another one';
    let errorText = input.parentNode.querySelector('.form-error'); //error <p>

    input.classList.add('is-invalid');

    // adding text to error <p>
    switch (error) {
        case 'fill-error':
            errorText.innerHTML = FILLERROR;
            break;
        case 'min-fill-error':
            errorText.innerHTML = MINFILLERROR;
            break;
        case 'max-fill-error':
            errorText.innerHTML = MAXFILLERROR;
            break;
        case 'correct-fill-error':
            errorText.innerHTML = CORRECTFILLERROR;
            break;
        case 'full-fill-error':
            errorText.innerHTML = FULLFILLERROR;
            break;
        case 'num-fill-error':
            errorText.innerHTML = NUMFILLERROR;
            break;
        case 'already-fill-error':
            errorText.innerHTML = ALLREADYFILLERROR;
            break;
    }
    success = false;
}

// if input value is valid
function isValid(input) {
    let errorInput = input.parentNode.querySelector('.form-error');
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    errorInput.innerHTML = '';
    success = true;
}

// form cleaning
function formCleaning() {
    form.reset();
    formInputs.forEach(function (e) {
        e.classList.remove('is-valid');
    })
}

// adding new data to table
function addingNewDataToTable() {
    let tr = document.createElement("tr"), td;
    let elements = document.querySelectorAll('.table-data');
    for (let i = -1; i < elements.length; i++) {
        td = document.createElement("td");
        if (i === -1) {
            td.innerHTML = '<input type="checkbox" class="table-checkbox form-check-input">';
        } else {
            let element = elements[i].value;
            if (elements[i].name === 'email') td.classList.add('form-td-email');
            if (elements[i].name === 'gender') element = document.querySelector('input[name="gender"]:checked').value; // get chosen gender
            if (elements[i].id === 'birthday') element = element.split('-').reverse().join('.'); // reversing data-format yy-mm-dd to dd.mm.yy
            td.innerHTML = element;
        }
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    addStyleForTableRow(tr);
    searchAlreadyExistingEmails();
    success = false;
}

// add style for row with checked checkbox
function addStyleForTableRow(row) {
    let checkBox = row.firstElementChild.firstElementChild;
    checkBox.addEventListener('click', function (e) {
        row.classList.toggle('table-active');
    });
}

// add style to already existing rows
tbody.querySelectorAll('tr').forEach(function (e) {
    addStyleForTableRow(e);
})

// deleting from table
table.querySelector('#form-delete-checks').addEventListener('click', function () {
    table.querySelectorAll('.table-checkbox').forEach(function (e) {
        let tr = e.parentNode.parentNode;
        if (e.checked === true) tbody.removeChild(tr);
    })
});

// duplicating in table
table.querySelector('#form-copy-checks').addEventListener('click', function () {
    table.querySelectorAll('.table-checkbox').forEach(function (checkbox) {
        let tr = checkbox.parentNode.parentNode;
        tr.classList.remove('table-active');
        if (e.checked === true) {
            e.checked = false;
            let addedRow = table.appendChild(tr.cloneNode(true));
            // add style to new added row
            addStyleForTableRow(addedRow);
        }
    })
});