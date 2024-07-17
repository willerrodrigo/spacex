import './global.css';

import 'react-native-gesture-handler';

import { ApolloProvider } from '@apollo/client';

import { client } from '~/services';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <></>
    </ApolloProvider>
  );
}
