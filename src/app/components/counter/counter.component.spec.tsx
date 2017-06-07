import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import {CounterComponent as Counter} from './counter.component';

describe("Counter Component", function(){
    let renderer: React.ShallowRenderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(<Counter/>);
    });

    it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
    });
})