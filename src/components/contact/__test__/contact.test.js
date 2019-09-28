import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contact from './../contact';

test('Contact page should display About', () => {
  const {queryByText} = render(<Contact />);
  expect(queryByText('I am Janus Kiong')).not.toBeNull();
});
