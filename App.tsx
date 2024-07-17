import './global.css';

import 'react-native-gesture-handler';

import { ApolloProvider } from '@apollo/client';
import { client } from 'services';

import RootStack from './navigation';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RootStack />
    </ApolloProvider>
  );
}
