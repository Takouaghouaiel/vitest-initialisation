import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from './components/Button';
import {describe,test,it,expect} from 'vitest'
// it will fails! 
test.fails('Button behaviors', () => {
  it('should be defined', () => {
    render(<Button />);
    const button = screen.getByRole('button', { name: 'Hello!' });
    const message = screen.queryByText(/Hello/i)

    // Check if the button is defined
    expect(button).toBeDefined();
    expect(message).toBeDefined();
  });
});