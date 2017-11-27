import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter()
});

export const shallowWithStore = (component, store) => {
    const context = {
        store
    };

    return shallow(component, {context});
};
