import './arrow.css';
import arrowTempl from './arrow.template';
import engine from '../../lib/engine/engine';

export default class Arrow {
    constructor() {
        const div = document.createElement('div');
        div.innerHTML = engine(arrowTempl);
        this.node = div.firstElementChild;
    }

    rotate() {
        const rotation = 'rotate(180deg)';
        const { transform } = this.node.style;

        if (transform === rotation) {
            this.node.style.transform = '';
            return;    
        };
        this.node.style.transform = rotation;
    }
}
