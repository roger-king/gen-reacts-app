import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from './../../../src/app/components';

let tree;

beforeEach(function () {
    tree = renderer.create(
        <Footer/>
    );
});

describe('<Footer/>', function () {
    test('renders properly', () => {
        let component = tree.toJSON();
        expect(component.children[0].type).toEqual('a');
        expect(component.children[0].props.href).toEqual('https://github.com/roger-king/react-typescript-gen');
        expect(component.children[0].props.target).toEqual('blank');
        expect(component.children[0].children[0].type).toEqual('img');
        expect(component.children[0].children[0].props.src).toEqual('static/images/github.png');
        expect(component.children[0].children[0].props.width).toEqual(50);
        expect(component.children[0].children[0].props.height).toEqual(50);
    });

    test('renders from snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
});
