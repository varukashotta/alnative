import 'react-native';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

const { JSDOM } = require("jsdom");
const { document } = new JSDOM(``, {
    url: "https://example.com", // or whatever
}).window;
global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(property => {
    if (typeof global[property] === "undefined") {
        global[property] = document.defaultView[property];
    }
});
function suppressDomErrors() {
    const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser|PascalCase)/;
    // eslint-disable-next-line no-console
    const realConsoleError = console.error;
    // eslint-disable-next-line no-console
    console.error = message => {
        if (message.match(suppressedErrors)) {
            return;
        }
        // realConsoleError(message);
    };
}

suppressDomErrors()

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() });