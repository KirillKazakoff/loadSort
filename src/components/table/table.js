import './table.css';
import tableTempl from "./table.template";
import engine from '../../lib/engine/engine';
import Arrow from '../arrow/arrow';

import { swapDom } from '../../lib/utils';

export default class Table {
    constructor(container) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        this.container = container;
        this.props = ['id', 'title', 'imdb', 'year'];
        this.activeTh = null;
        this.arrow = new Arrow();
    }

    render(data) {
        const html = engine(tableTempl(data));
        this.container.innerHTML = html;
        this.trArr = [...this.container.children];
    }

    sortTable(prop, callback) {
        const mapped = this.trArr.map((tr) => {
            const { id, title, imdb, year, position } = tr.dataset;
            return {
                id: +id,
                title: title,
                imdb: +imdb,
                year: +year,
                position: +position,
            }
        })


        const sortedArr = callback(prop, mapped);
        for (let i = 0; i < sortedArr.length; i++) {
            sortedArr[i].position = i;
        }

        this.replace(sortedArr);
        this.arrow.rotate();
        this.setActiveColumnFilter(prop);

        return sortedArr;
    }

    replace(sortedArr) {
        sortedArr.forEach((elem) => {
            const trFirst = this.trArr.find((tr) => +tr.dataset.id === elem.id);
            const { position: trPosF } = trFirst.dataset;

            if (+trPosF !== elem.position) {
                const trSecond = this.trArr.find((tr) => +tr.dataset.position === elem.position);
                const { position: trPosS } = trSecond.dataset;

                swapDom(trFirst, trSecond);
                trFirst.dataset.position = trPosS;
                trSecond.dataset.position = trPosF;
            }
        })
    }

    setActiveColumnFilter(prop) {
        if (this.activeTh) {
            this.activeTh.innerHTML = this.activeTh.textContent;
        }
        const arrTh = [...document.querySelectorAll('th')];
        const propTh = arrTh.find((th) => th.textContent === prop);

        this.activeTh = propTh;
        this.activeTh.appendChild(this.arrow.node);
    }

}


