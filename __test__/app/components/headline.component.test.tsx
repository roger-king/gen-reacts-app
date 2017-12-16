import React from 'react';
import renderer from 'react-test-renderer';
import { Headline } from './../../../src/app/components';

let tree;

beforeEach(function () {
    tree = renderer.create(
        <Headline title="React-Typescript-Gen"/>
    );
});

describe('<Headline/>', function () {
    test('renders properly', () => {
        let component = tree.toJSON();
        expect(component.children[0]).toBe('React-Typescript-Gen');
    });

    test('renders from snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
});
