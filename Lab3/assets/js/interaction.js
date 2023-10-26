document.querySelector('#Rectangle-calculation-form').oninput = function () {
    let length = Number(this.rectangleLength.value);
    let width = Number(this.rectangleWidth.value);

    if (!(length < 0 && width < 0) && (!isNaN(length) && !isNaN(width))) {
        document.querySelector('#rectanglePerimeter').innerHTML = (Number(length) + Number(width)) * 2;
        document.querySelector('#rectangleSquare').innerHTML = length * width;
        document.querySelector('#rectangleDiagonalLength').innerHTML = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
    } else {
        document.querySelector('#rectanglePerimeter').innerHTML = 0;
        document.querySelector('#rectangleSquare').innerHTML = 0;
        document.querySelector('#rectangleDiagonalLength').innerHTML = 0;
    }
}

document.querySelector('#transliteration-form').oninput = function () {
    let answer = "", a = {};
    let text = this.nonTransliteratedText.value;

    a["Й"] = "I";
    a["Ц"] = "TS";
    a["У"] = "U";
    a["К"] = "K";
    a["Е"] = "E";
    a["Н"] = "N";
    a["Г"] = "G";
    a["Ш"] = "SH";
    a["Щ"] = "SCH";
    a["З"] = "Z";
    a["Х"] = "H";
    a["'"] = "";
    a["й"] = "i";
    a["ц"] = "ts";
    a["у"] = "u";
    a["к"] = "k";
    a["е"] = "e";
    a["н"] = "n";
    a["г"] = "g";
    a["ш"] = "sh";
    a["щ"] = "sch";
    a["з"] = "z";
    a["х"] = "h";
    a["Ф"] = "F";
    a["Є"] = "Ye";
    a["В"] = "V";
    a["А"] = "a";
    a["П"] = "P";
    a["Р"] = "R";
    a["О"] = "O";
    a["Л"] = "L";
    a["Д"] = "D";
    a["Ж"] = "ZH";
    a["ф"] = "f";
    a["в"] = "v";
    a["є"] = "ye";
    a["а"] = "a";
    a["п"] = "p";
    a["р"] = "r";
    a["о"] = "o";
    a["л"] = "l";
    a["д"] = "d";
    a["ж"] = "zh";
    a["Я"] = "Ya";
    a["Ч"] = "CH";
    a["С"] = "S";
    a["М"] = "M";
    a["И"] = "I";
    a["Т"] = "T";
    a["Ь"] = "";
    a["Б"] = "B";
    a["Ю"] = "YU";
    a["я"] = "ya";
    a["ч"] = "ch";
    a["с"] = "s";
    a["м"] = "m";
    a["и"] = "i";
    a["т"] = "t";
    a["ь"] = "";
    a["б"] = "b";
    a["ю"] = "yu";
    a["ї"] = "yi";
    a["Ї"] = "Yi";

    for (i in text) {
        if (text.hasOwnProperty(i)) {
            if (a[text[i]] === undefined) {
                answer += text[i];
            } else {
                answer += a[text[i]];
            }
        }
    }
    this.transliteratedText.innerHTML = answer;
}

document.querySelector('#Birthday-calculation-form').oninput = function () {
    let w = ["Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота", "Неділя"];
    let birthday = this.Birthday.value.split("-");

    let y = Number(birthday[0]);
    let m = Number(birthday[1]);
    let d = Number(birthday[2]);
    if (m <= 2) {
        y--;
        d += 3;
    }
    document.querySelector('#WeekDayOfBirthday').innerHTML = w[((d + y + Math.floor(y / 4) -
        Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m + 10) / 12)) % 7)];
}