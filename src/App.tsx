import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"

export const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>MoviesApp</Text>
      </View>
    </NavigationContainer>
  )
}
