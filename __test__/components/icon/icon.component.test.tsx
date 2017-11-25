import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from './../../../src/app/components';

let tree;

beforeEach(function () {
    tree = renderer.create(
        <Icon img="erlich.svg" height={40} width={40}/>
    );
});

describe('<Icon/>', function () {
    test('renders properly', () => {
        let component = tree.toJSON();
        console.log(component);
        expect(component.type).toBe('img');
        expect(component.props.height).toBe(40);
        expect(component.props.width).toBe(40);
        expect(component.props.src).toBe('static/images/erlich.svg');
    });
});
