const keywords1 = document.querySelector('#k1');
const keywords2 = document.querySelector('#k2');
const processBtn = document.querySelector('#processBtn');
const resetBtn = document.querySelector('#resetBtn');
const resElement = document.querySelector('#results');

processBtn.addEventListener('click', function () {
    let k1 = keywords1.value;
    let k2 = keywords2.value;

    // make array of keywords
    k1 = k1.split("\n");
    k2 = k2.split("\n");

    // make a pair
    let res = [];
    k1.map(keyword1 => {
        k2.map(keyword2 => {
            res.push(`${keyword1} ${keyword2}`);
            res.push(`${keyword2} ${keyword1}`);
        });
    });

    let el = '<ul class="list-group">';
    res.map(result => {
        el += `<li class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">${result}`;
        el += `<div>`;
        el += `<a href="https://www.youtube.com/results?search_query=${result}" target="_blank" class="me-2">Youtube</a>`;
        el += `<a href="https://www.google.com/search?q=${result}" target="_blank">Google</a>`;
        el += `</div>`;
        el += `</li>`;
    });
    el += '</ul>';
    resElement.innerHTML = el;
    processBtn.blur();
});

resetBtn.addEventListener('click', function () {
    keywords1.value = '';
    keywords2.value = '';
    resElement.innerHTML = '';
    resetBtn.blur();
});
