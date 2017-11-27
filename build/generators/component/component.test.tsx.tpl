import React from 'react';
import renderer from 'react-test-renderer';
import { {{pascalCase name}} } from './../../../src/app/components';

let tree;

beforeEach(function () {
    tree = renderer.create(
        <{{pascalCase name}}/>
    );
});

describe('<{{pascalCase name}}/>', function () {
    test('renders properly', () => {
        let component = tree.toJSON();
        expect(component.children[0]).toBe('{{pascalCase name}} Component');
    });
});