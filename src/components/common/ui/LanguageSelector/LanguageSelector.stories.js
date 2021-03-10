import React from 'react';
import LanguageSelector  from './LanguageSelector';

// This default export determines where you story goes in the story list
export default {
  title: 'Podekex/LanguageSelector',
  component: LanguageSelector,
};

const Template = (args) => <LanguageSelector {...args} />;

export const LanguageSelectorClosed = Template.bind({});

LanguageSelectorClosed.args = {
  /* the args you need here will depend on your component */
};