import { Header, Button } from 'react-navigation-stack';
import { View, Text } from 'react-native';

function MyHeader(props) {
  return (
    <Header>
      <View>
        <Button onPress={() => props.navigation.goBack()} title="Back" />
      </View>
      <Text>My Custom Header</Text>
    </Header>
  );
}