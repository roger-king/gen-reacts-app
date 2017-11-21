import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from './icon.component';

let tree;

beforeEach(function () {
    tree = renderer.create(
        <Icon/>
    );
});

describe('<Icon/>', function () {
    test('renders properly', () => {
        let component = tree.toJSON();
        expect(component.children[0]).toBe('Icon Component');
    });
});
