import * as React from 'react';
import { create } from 'react-test-renderer';
import { {{pascalCase name}} } from './../{{pascalCase name}}/{{pascalCase name}}';

test('{{pascalCase name}} Snapshot', () => {
    const {{camelCase name}} = create(<{{pascalCase name}} name="test" />).toJSON();
    expect({{camelCase name}}).toMatchSnapshot();
});
