///////////////// 1 /////////////////
function validate(data) {
    /* ПІБ */
    if (data.fnm != null && data.fnm.value.length < 3) {
        alert('Заповніть поле "Ваше ПІБ"');
        return false;
    }

    if (!(/^[А-ЯІЇЄҐ][а-яіїєҐ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/.test(data.fnm.value))) {
        alert('Введіть поле "Ваше ПІБ" формата ТТТТТТ Т.Т., де Т - буква');
        return false;
    }

    /* Телефон */
    if (data.phone != null && data.phone.value.length === 0) {
        alert('Поле "Телефон" пусте');
        return false;
    }

    if (!(/^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(data.phone.value))) {
        alert('Введіть поле "Телефон" формата (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ, де Ч - цифра');
        return false;
    }

    /* ID-card */
    if (data.card != null && data.card.value.length === 0) {
        alert('Поле "ID-card" пусте');
        return false;
    }

    if (!(/^[А-ЯІЇЄҐТ]+\s№\d{6}$/.test(data.card.value))) {
        alert('Введіть поле "ID-card" формата ТТ №ЧЧЧЧЧЧ, де Т - буква, Ч - цифра');
        return false;
    }

    /* Faculty */
    if (data.faculty != null && data.faculty.value.length === 0) {
        alert('Поле "Факультет" пусте');
        return false;
    }

    if (!(/^[А-ЯІЇЄҐ]{4}$/.test(data.faculty.value))) {
        alert('Введіть поле "Факультет" формата ТТТТ, де Т - буква');
        return false;
    }

    /* Дата народження */
    if (data.birthdate != null && data.birthdate.value.length === 0) {
        alert('Поле "Дата народження" пусте');
        return false;
    }

    if (!(/^\d{2}\.\d{2}\.\d{4}$/.test(data.birthdate.value))) {
        alert('Введіть поле "Дата народження" формата ЧЧ.ЧЧ.ЧЧЧЧ, де Ч - цифра');
        return false;
    }

    const formData = {};

    formData['ПІБ'] = data.fnm.value;
    formData['Телефон'] = data.phone.value;
    formData['ID-card'] = data.card.value;
    formData['Факультет'] = data.faculty.value;
    formData['Дата народження'] = data.birthdate.value;

    const output = document.getElementById("output");
    output.innerHTML = "<h2>Введені дані</h2>";

    for (const field in formData) {
        output.innerHTML += `<p><strong>${field}:</strong> ${formData[field]}</p>`;
    }
}

///////////////// 2 /////////////////
const tableBody = document.getElementById("tableBody");
for (let i = 0; i < 6; i++) {
    const row = tableBody.insertRow(i);
    for (let j = 0; j < 6; j++) {
        const index = i * 6 + j + 1;
        const cell = row.insertCell(j);
        cell.textContent = index;

        if (index === 18) {
            changeColorOnHover(cell);
            changeColorOnClick(cell);
        }

        cell.addEventListener("dblclick", function () {
            changeColumnColors(tableBody, j);
        });
    }
}

function changeColorOnHover(td) {
    td.addEventListener("mouseover", function () {
        td.style.backgroundColor = getRandomColor();
    });
}

function changeColorOnClick(td) {
    td.addEventListener("click", function () {
        td.style.backgroundColor = document.getElementById('color_picker').value;
    });
}

function changeColumnColors(table, columnIndex) {
    const rows = table.rows;
    for (let i = 0; i < 6; i++) {
        console.log(i);
        for (let j = 0; j < 6; j++) {
            if (i % 2 === columnIndex % 2) {
                const cell = rows[j].cells[i];
                cell.style.backgroundColor = getRandomColor();
            }
        }
    }
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
