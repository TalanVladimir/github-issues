import { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

export const ListItem: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  // const { organisation } = useSelector(
  //     (state: RootState) => state.organisation,
  // );

  return (
    <View>
      <Text>Text</Text>
    </View>
  );
};
