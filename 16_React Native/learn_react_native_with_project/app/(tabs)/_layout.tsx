import { Tabs } from "expo-router";
import { Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
// RootLayout where put share components across different screen 'root'
export default function TabsLayout() {


  // tabBarActiveTintColor: change icon color when the tabs in active
  // @expo/vector-icons: library come with expo which contain icon
  return (
  <>
    
    <Tabs screenOptions={{ tabBarActiveTintColor: 'coral' }}>
      <Tabs.Screen 
        name='index' 
        options={{ 
          title: 'Home', 
          tabBarIcon: ({ color, focused }) => {
              // if current tab in focus mode then show first icon of therwrise show second icon
              return focused ? (
                <FontAwesome name="home" size={24} color={color} /> 
              ) : ( 
              <AntDesign name="home" size={24} color="black" />
              )

            },
          }}/>
      <Tabs.Screen name='login' options={{ title: 'Login' }}/>
    </Tabs>
  </>
  );
}
