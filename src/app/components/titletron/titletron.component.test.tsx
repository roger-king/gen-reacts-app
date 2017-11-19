import React from 'react';
import renderer from 'react-test-renderer';
import { Titletron } from './titletron.component';

let tree;

beforeEach(function () {
    tree = renderer.create(
        <Titletron/>
    )
});

describe('<Titletron/>', function () {
    test('renders properly', () => {
        let component = tree.toJSON();
        expect(component.children[0]).toBe("Titletron Component");
    })
});
