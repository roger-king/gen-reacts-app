import * as React from 'react';
import { create } from 'react-test-renderer';
import { with{{pascalCase name}} } from './../with{{camelCase name}}';

test('{{pascalCase name}} Snapshot', () =>{
    const hocComponent = with{{pascalCase name}}(<div> hello </div>);
    const {{camelCase name}} = create(<hocComponent />).toJSON();
    expect({{camelCase name}}).toMatchSnapshot();
});
