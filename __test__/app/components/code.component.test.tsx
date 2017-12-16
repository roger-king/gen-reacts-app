import React from 'react';
import renderer from 'react-test-renderer';
import { Code } from './../../../src/app/components';

let tree;

beforeEach(function () {
    tree = renderer.create(
        <Code description="present working directory" codeline="pwd"/>
    );
});

describe('<Code/>', function () {
    test('renders properly', () => {
        let component = tree.toJSON();
        expect(component.children.length).toEqual(2);
        expect(component.props.className).toEqual('codeline-container');
    });

    test('Code nodes', () => {
        let component = tree.toJSON();
        expect(component.children[0].children[1]).toEqual('present working directory');
        expect(component.children[1].children[0]).toEqual('$ ');
        expect(component.children[1].children[1]).toEqual('pwd');
    });

    test('renders from snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
});
