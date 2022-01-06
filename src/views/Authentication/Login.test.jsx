import { render } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import { ProvideAuth } from '../../context/ProvideAuth';
import React from 'react';

it('should render the login page', () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <ProvideAuth>
          <Login />
        </ProvideAuth>
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
