import './global.css';

import 'react-native-gesture-handler';

import { ApolloProvider } from '@apollo/client';

import RootStack from './src/navigation';

import { client } from '~/services';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RootStack />
    </ApolloProvider>
  );
}
