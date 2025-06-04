import { render, act } from '@testing-library/react';
import { AuthProvider, useAuth } from '../contexts/AuthContext';

function TestComponent() {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <span data-testid="user">{user ? user.email : 'No user'}</span>
      <button onClick={() => login('test@example.com', 'password')}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

test('AuthContext provides login and logout', async () => {
  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );
  // This is a stub; in real tests, mock Firebase methods and assert accordingly
});
