import { SafeAreaView, StyleSheet, Image } from 'react-native';
import React from 'react';
import color, { colors } from './src/components/colors';
import VerificationPage from './src/screens/VerificationPage';
import LoadingPage from './src/screens/LoadingPage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Community from './src/screens/Community';
import People from './src/screens/People';
import Profile from './src/screens/Profile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './src/screens/Details';
import AddPost from './src/screens/AddPost';
import EditProfile from './src/screens/EditProfile';
import PeopleDetails from './src/screens/PeopleDetails';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const Teb = () => {
  return (
    <Tab.Navigator initialRouteName='VERIFY'
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.cardBg,
        },
      }}>
      <Tab.Screen
        name="VERIFY"
        component={VerificationPage}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="verified" color={colors.ColorA} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="COMMUNITY"
        component={Community}
        options={{
          tabBarIcon: () => (
            <Ionicons name="people" color={colors.ColorA} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="PEOPLE"
        component={People}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="play-circle-outline"
              color={colors.ColorA}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image source={require('./src/assets/images/ProfileIcon.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}



const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Teb' screenOptions={{ headerShown: false, }} >
        <Stack.Screen name='Teb' component={Teb} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='AddPost' component={AddPost} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='PeopleDetails' component={PeopleDetails} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  // App: {
  //   flex: 1,
  //   backgroundColor: colors.bgColor,
  // },
});

export default App;
