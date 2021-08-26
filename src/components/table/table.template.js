const tableRowTd = ([key, value]) => {
    let content = value;

    switch (key) {
        case 'year': content = `(${value})`; break;
        case 'imdb': content = `imdb:${value.toFixed(2)}`; break;
        default: break;
    }
    return {
        block: 'td',
        cls: '',
        content,
    }
}

const tableRowTempl = (film, index) => ({
    block: 'tr',
    cls: '',
    content: Object.entries(film).map(tableRowTd),
    attrs: {
        'data-id': film.id,
        'data-title': film.title,
        'data-imdb': film.imdb,
        'data-year': film.year,
        'data-position': index,
    }
})

const tableTempl = (films) => ({
    block: 'table',
    cls: '',
    content: films.map(tableRowTempl),
})

export default tableTempl;