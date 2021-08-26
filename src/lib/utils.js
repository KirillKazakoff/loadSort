export function getRandomInt(min, max) {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
}

export function sortAscending(prop, arr) {
    const array = arr;

    if (array.length < 1) {
        return 0;
    }
    if (typeof array[0][prop] === 'number') {
        array.sort((a, b) => a[prop] - b[prop]);
    }
    if (typeof array[0][prop] === 'string') {
        array.sort((a, b) => {
            if (a[prop] < b[prop]) return -1;
            if (a[prop] > b[prop]) return 1;
            return 0;
        })
    }
    return array;
}

export function sortDescending(prop, arr) {
    const array = arr;

    if (array.length < 1) {
        return 0;
    }
    if (typeof array[0][prop] === 'number') {
        array.sort((a, b) => b[prop] - a[prop]);
    }
    if (typeof array[0][prop] === 'string') {
        array.sort((a, b) => {
            if (b[prop] < a[prop]) return -1;
            if (b[prop] > a[prop]) return 1;
            return 0;
        })
    }
    return array;
}

export function swapDom(a, b) {
    var aParent = a.parentNode;
    var bParent = b.parentNode;

    var aHolder = document.createElement("div");
    var bHolder = document.createElement("div");

    aParent.replaceChild(aHolder, a);
    bParent.replaceChild(bHolder, b);

    aParent.replaceChild(b, aHolder);
    bParent.replaceChild(a, bHolder);
}