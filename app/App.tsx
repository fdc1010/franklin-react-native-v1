import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Details, Home } from "@app/screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryWrapper } from "./wrappers/QueryWrapper";
import { Movie } from "./lib";

export type HomeStackParamList = {
  Home: undefined;
  Details?: { movie: Movie };
};

const HomeStack = createStackNavigator<HomeStackParamList>();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryWrapper>
        <NavigationContainer>
          <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Details" component={Details} />
          </HomeStack.Navigator>                  
        </NavigationContainer>
      </QueryWrapper>
    </GestureHandlerRootView>
  );
}

export default App;
