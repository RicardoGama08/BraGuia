/**
 *
 * @format
 */

 import type {PropsWithChildren} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Image,Button,
} from 'react-native';
import Home from './screens/home';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import FirstPage from './screens/firstpage';
import Navigator from './routes/homeStack';

import { Provider } from "react-redux";
import store from './redux/store';

//const MainActivity = ({ navigation }) => {
  export default function App(){
    //const [name, setName] = useState('main');
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });






