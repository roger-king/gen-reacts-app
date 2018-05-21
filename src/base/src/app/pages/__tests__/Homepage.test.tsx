import * as React from 'react';
import { create } from 'react-test-renderer';
import HomePage from './../HomePage';

test('Snapshot of Home Page', () => {
    const page = create(<HomePage />).toJSON();
    expect(page).toMatchSnapshot();
});
