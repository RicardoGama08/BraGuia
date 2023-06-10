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

/*function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}*/

//function App(): JSX.Element {
  /*const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}*/

/*const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: MainActivity,
      navigationOptions: ({ navigation }) => ({
        title: 'Your App Title',
        headerRight: (
          <HeaderButtons>
            <Item
              title="Add"
              iconName="add"
              onPress={() => {
                // Handle your action here
              }}
            />
          </HeaderButtons>
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffffff', // Customize your header background color
      },
      headerTintColor: '#000000', // Customize your header text color
    },
  }
);*/


//const MainActivity = ({ navigation }) => {
export default function App(){
  //const [name, setName] = useState('main');
  return (
    <Navigator />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});




