
import React from 'react';
import Header  from './Header';
import { BrowserRouter as Router} from 'react-router-dom';

// This default export determines where you story goes in the story list
export default {
  title: 'Podekex/Header',
  component: Header,
};

const Template = (args) => <Router><Header {...args} /></Router>;

export const HeaderDefault = Template.bind({});

HeaderDefault.args = {
  /* the args you need here will depend on your component */
};
