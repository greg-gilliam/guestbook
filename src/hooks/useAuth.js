import { useContext } from 'react';
import { authContext } from '../context/ProvideAuth';

export default function useAuth() {
  const context = useContext(authContext);
  console.log('!!!!', authContext);

  if (context === undefined) {
    throw new Error('useAuth must be use within a provideAuth context');
  }
  return context;
}
