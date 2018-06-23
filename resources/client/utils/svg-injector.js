import SVGInjector from 'svg-injector';

export default function svgInjector(iconClassName) {
    const mySVGsToInject = document.querySelectorAll(iconClassName);
    SVGInjector(mySVGsToInject);
}
