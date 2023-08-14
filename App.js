import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDLVAyYcFjIosge-YMDzQbiWCfYV5kA6Vc",
  authDomain: "fir-auth-b5e9a.firebaseapp.com",
  projectId: "fir-auth-b5e9a",
  storageBucket: "fir-auth-b5e9a.appspot.com",
  messagingSenderId: "279613250045",
  appId: "1:279613250045:web:f3d2d1aa9386808eb8a194"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
