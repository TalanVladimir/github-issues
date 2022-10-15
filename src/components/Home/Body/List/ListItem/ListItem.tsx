import { Text, View } from 'react-native';

export const ListItem: React.FC<{ title: string; text: string }> = (
  children,
) => {
  const { title, text } = children;

  return (
    <View>
      <Text>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
};
