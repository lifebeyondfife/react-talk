import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MyComponent from './MyComponent';
import Foo from './Foo';

describe('<MyComponent />', () => {
    it('renders three <Foo /> components', () => {
        const wrapper = shallow(<MyComponent />);
        expect(wrapper.find(Foo)).to.have.length(3);
    });

    it('simulates click events', () => {
        const onButtonClick = sinon.spy();
        const wrapper = shallow(
            <Foo onButtonClick={onButtonClick} />
        );
        wrapper.find('button').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    });
});
