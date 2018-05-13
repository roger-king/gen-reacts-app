import * as React from 'react';
import { create } from 'react-test-renderer';
import {{pascalCase name}}Page from './../{{camelCase name}}';

test('{{pascalCase name}} Snapshot', () => {
    const {{camelCase name}} = create(<{{pascalCase name}}Page />).toJSON();

    expect({{camelCase name}}).toMatchSnapshot();
});
