import React from 'react';
import renderer from 'react-test-renderer';
import { Titletron } from './../../../src/app/components';

let tree;

beforeEach(function () {
    tree = renderer.create(
        <Titletron/>
    );
});

describe('<Icon/>', function () {
    test('renders properly', () => {
        let component = tree.toJSON();
        expect(component.type).toBe('section');
        expect(component.children[0].children[0].props.src).toEqual('static/images/react-1.svg');
        expect(component.children[0].children[1].children[0]).toEqual(' Typescript Gen');
        expect(component.children[1].children.length).toBe(6);
        expect(component.children[1].children[0].props.src).toEqual('static/images/webpack.svg');
        expect(component.children[1].children[1].props.src).toEqual('static/images/redux.svg');
        expect(component.children[1].children[2].props.src).toEqual('static/images/react-router.svg');
        expect(component.children[1].children[3].props.src).toEqual('static/images/postcss.svg');
        expect(component.children[1].children[4].props.src).toEqual('static/images/jest.svg');
        expect(component.children[1].children[5].props.src).toEqual('static/images/cssnext.svg');
    });

    test('renders from snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
});
