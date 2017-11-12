import React from 'react';
import renderer from 'react-test-renderer';
import { Counter } from './counter.component';

let tree;

beforeEach(function () {
    tree = renderer.create(
        <Counter/>
    )
});

describe('<Counter/>', function () {
    test('renders properly', () => {
        let component = tree.toJSON();
        expect(component.children[0]).toBe("Counter Component");
    })
});
