import React from 'react';
import renderer from 'react-test-renderer';
import { Grid } from './grid.container';

let tree;

beforeEach(function () {
    tree = renderer.create(
        <Grid/>
    );
});

describe('<Grid/>', function () {
    test('renders properly', () => {
        let component = tree.toJSON();
        expect(component.children[0]).toBe('Grid Container');
    });
});
