function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const [key, value] of Object.entries(reactElement.props)) {
        domElement.setAttribute(key, value);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to Visit google'
};

const mainReact = document.querySelector('#root');
customRender(reactElement, mainReact);
