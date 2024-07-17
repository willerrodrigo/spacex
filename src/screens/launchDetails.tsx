import { RouteProp, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { RootStackParamList } from '../navigation';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'LaunchDetails'>;

export default function LaunchDetails() {
  const router = useRoute<DetailsScreenRouteProp>();

  return (
    <View className="flex-1">
      <Text>{router.params.id}</Text>
    </View>
  );
}
