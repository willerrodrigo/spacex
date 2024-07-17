import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, ListRenderItem, Pressable, Text, View } from 'react-native';

import { RootStackParamList } from '../navigation';

import { Launch } from '~/__generated__/graphql';
import { LAUNCHES_QUERY } from '~/queries';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'LaunchList'>;

export default function LaunchList() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error! {error.message}</Text>;
  }

  const renderItem: ListRenderItem<Launch | null> = ({ item }) => {
    if (!item) return null;

    return (
      <Pressable
        className="p-4"
        onPress={() => navigation.navigate('LaunchDetails', { id: item.id! })}>
        <Text className="text-2xl font-bold">{item.mission_name}</Text>
        <Text className="italic">{item.rocket?.rocket_name}</Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      contentContainerClassName="pb-8"
      data={data?.launches}
      keyExtractor={(item) => item?.id!}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View className="h-0.5 bg-gray-200" />}
    />
  );
}
