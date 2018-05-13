import * as React from 'react';
import { create } from 'react-test-renderer';
import { {{pascalCase name}} } from './../{{camelCase name}}';

test('{{pascalCase name}} Snapshot', () => {
    const {{camelCase name}} = create(<{{pascalCase name}}/>).toJSON();

    expect({{camelCase name}}).toMatchSnapshot();
});
