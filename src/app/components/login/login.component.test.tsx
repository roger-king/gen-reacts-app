import React from 'react';
import renderer from 'react-test-renderer';
import { Login } from './login.component';

let tree;

beforeEach(function () {
    tree = renderer.create(
        <Login/>
    )
});

describe('<Login/>', function () {
    test('renders properly', () => {
        let component = tree.toJSON();
        expect(component.children[0]).toBe("Login Component");
    })
});
