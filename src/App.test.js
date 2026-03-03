// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HashVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HashVault/i);
    expect(titleElement).toBeInTheDocument();
});
