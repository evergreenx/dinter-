import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { apply } from './theme/styles';
import Onboarding from './screens/Onboarding/index';

export default function App() {
  return (
    <View style={apply('bg-appred flex-1 items-center justify-center')}>
    <Onboarding />
      <StatusBar style="dark" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
