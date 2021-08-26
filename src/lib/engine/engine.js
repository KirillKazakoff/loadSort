export default function engine(node) {
    if ((node === false) || (node === undefined) || (node === null)) {
        return '';
    }

    if ((node === true) || (typeof node === 'string') || (typeof node === 'number')) {
        return node;
    }

    if (Array.isArray(node)) {
        let fragment = '';

        node.forEach((b) => {
            const htmlElement = engine(b);
            fragment += htmlElement;
        })

        return fragment;
    }

    let { block, cls, content, attrs } = node;
    let htmlAttrs = '';

    const element = document.createElement(block);
    [].concat(cls).filter(Boolean).forEach((cls) => element.classList.add(cls));

    if (attrs) {
        Object.entries(attrs).forEach(([key, value]) => {
            htmlAttrs += `${key}="${value}"`;
        });
    }
    const htmlContent = engine(content);
    const htmlElement = generateHtml(block, cls, htmlContent, htmlAttrs);

    return htmlElement;
}

function generateHtml(block, cls, content, attrs) {
    return `<${block} ${attrs} class="${cls}">${content}</${block}>`;
}