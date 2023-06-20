import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { userDetails } from './utils';

test('renders profile', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home > Users/i);
  expect(linkElement).toBeInTheDocument();
});

test('user details list', async () => {
  render(<App />);

  const list = await screen.findAllByTestId('userDetail');

  expect(list).toHaveLength(userDetails.length);
});

test('tab change', () => {
  render(<App />);

  const value = screen.getByTestId('tabValue');
  const secondtab = screen.getByTestId('securityTab');

  fireEvent.click(secondtab);
  const linkElement = screen.getByText(/development of/i);
  expect(linkElement).toBeInTheDocument();
  expect(value).toHaveTextContent('2');
});

test('tab change ui', () => {
  render(<App />);
  const secondtab = screen.getByTestId('securityTab');

  fireEvent.click(secondtab);

  const linkElement = screen.getByText(/development of/i);
  expect(linkElement).toBeInTheDocument();
});
