import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LaunchDetails, LaunchList } from '~/screens';

export type RootStackParamList = {
  LaunchList: undefined;
  LaunchDetails: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchList" screenOptions={{ headerBackTitle: 'Back' }}>
        <Stack.Screen name="LaunchList" component={LaunchList} options={{ title: 'Launch List' }} />
        <Stack.Screen
          name="LaunchDetails"
          component={LaunchDetails}
          options={{ title: 'Launch Details', presentation: 'modal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
