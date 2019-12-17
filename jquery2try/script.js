//* Task 1
$(`p.first,a.first`).css(`color`, `red`);
$(`form *`).attr(`disabled`, `disabled`);

//* Task 2
$(`a`)
    .prepend(`↗`)
    .attr(`target`, `_blank`)
    .attr(`href`, function(index, value) {
        value = value.split(`http`);
        if (value[0] == `` && value[1][0] != `s`) {
            //Меняем только если протокол http.
            value.splice(0, 1);
            return `https` + value.join(`http`);
        }
        return value.join(`http`);
    });
// Отмена действий при нажатии на кнопку
task2_btn = () => {
    $(`a`)
        .removeAttr(`target`)
        .html(function(index, value) {
            if (value[0] == `↗`) {
                return value.slice(0, 0) + value.slice(1);
            }
            return value;
        });
};

//* Task 3
$(`.btn-toggle`).click(function() {
    $(`table tr:nth-child(2) td:first-child`).toggle(1000);
});
$(`.btn-fadeToggle`).click(function() {
    $(`table tr:nth-child(3) td:first-child`).fadeToggle(1000);
});
$(`.btn-slideToggle`).click(function() {
    $(`table tr:nth-child(4) td:first-child`).slideToggle(1000);
});
$(`.btn-animate`).click(function() {
    console.log(4);

    $(`table tr:nth-child(5) td:first-child`).animate({ fontSize: "2em" });
});
$(`.btn-hide`).click(function() {
    $(`table tr:nth-child(6) td:first-child`).hide(1000);
});
//* Task ajax
            $(`.restore-page`).click(function() {
                $(`.content`).load(`https://inxaoc.github.io/example/ajax-1.html`);
                jQuery.ajax({
                    url: `https://inxaoc.github.io/example/ajax.json`,
                    success: function(data) {
                        console.log(data);
                        let code = `<ul>`;
                        code += (function makeList(data) {
                            let subCode = ``;
                            for (const key in data) {
                                if (data.hasOwnProperty(key)) {
                                    const element = data[key];
                                    subCode += `<li>${key}: `;
                                    // console.log(typeof element === `object`);
                                    if (typeof element === `object`) {
                                        subCode += `<ul>`;
                                        subCode += makeList(element);
                                        subCode += `</ul>`;
                                    } else if (typeof element === `array`) {
                                        subCode;
                                    } else {
                                        subCode += `${element}`;
                                    }
                                    subCode += `</li>`;
                                    // console.log(`${key}: ${element}`);
                                    // console.log(`${code}`);
                                }
                            }
                            return subCode;
                        })(data);
                        code += `</ul>`;
                        console.log(`\n\n\n${code}`);
                        $(`.content`).append(code);
                    }
                });
            });