import * as React from 'react';
import { create } from 'react-test-renderer';
import {{pascalCase name}}Page from './../{{pascalCase name}}Page';

test('{{pascalCase name}}Page Snapshot', () => {
    const {{camelCase name}}Page = create(<{{pascalCase name}}Page />).toJSON();

    expect({{camelCase name}}Page).toMatchSnapshot();
});
