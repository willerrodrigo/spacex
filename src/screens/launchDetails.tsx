import { useQuery } from '@apollo/client';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Alert, Linking, Pressable, Text, View } from 'react-native';

import { RootStackParamList } from '../navigation';

import { LAUNCH_DETAILS_QUERY } from '~/queries';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'LaunchDetails'>;

export default function LaunchDetails() {
  const router = useRoute<DetailsScreenRouteProp>();
  const { loading, error, data } = useQuery(LAUNCH_DETAILS_QUERY, {
    variables: { id: router.params.id },
  });

  const openUrl = async (url?: string | null) => {
    if (!url) return;

    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert('Error', "Can't open url");
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error! {error.message}</Text>;
  }

  if (!data?.launch) {
    return <Text>No data</Text>;
  }

  const { mission_name, launch_date_utc, rocket, details, launch_site, links } = data.launch;

  return (
    <View className="flex-1 p-4">
      <View className="flex-row flex-wrap items-center justify-between gap-x-2">
        <Text className="text-2xl font-bold">{mission_name}</Text>
        <Text>{new Intl.DateTimeFormat().format(new Date(launch_date_utc))}</Text>
      </View>
      <Text className="italic">
        {rocket?.rocket_type?.toUpperCase()} - {rocket?.rocket_name}
      </Text>
      {!!launch_site?.site_name && (
        <Text className="font-bold italic">{launch_site.site_name}</Text>
      )}
      <Text className="my-4 text-lg">{details}</Text>
      <View className="flex-row gap-x-4">
        {!!links?.article_link && (
          <Pressable onPress={() => openUrl(links.article_link)}>
            <Text className="text-lg font-bold text-blue-500">Article</Text>
          </Pressable>
        )}
        {!!links?.video_link && (
          <Pressable onPress={() => openUrl(links.video_link)}>
            <Text className="text-lg font-bold text-blue-500">Video</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
