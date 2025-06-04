import { render, screen } from '@testing-library/react';
import App from '../App';
import { Web3Provider } from '../contexts/Web3Context';
import { AuthProvider } from '../contexts/AuthContext';

test('renders TaskFlow logo', () => {
  render(
    <Web3Provider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Web3Provider>
  );
  const logo = screen.getByText(/TaskFlow/i);
  expect(logo).toBeInTheDocument();
});
