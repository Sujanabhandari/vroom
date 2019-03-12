import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


/*
Doc your classes and functions
*/
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen ,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);




//Simple Navigator and Image In the logo
// class LogoTitle extends React.Component {
//   render() {
//     return (
//       <Image
//         source={require('./sujana.jpg')}
//         style={{ width: 30, height: 30 }}
//       />
//     );
//   }
// }

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     headerTitle: <LogoTitle />,
//   };

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => {
//             /* 1. Navigate to the Details route with params */
//             this.props.navigation.navigate('Details', {
//               itemId: 86,
//               otherParam: 'anything you want here',
//             });
//           }}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   static navigationOptions = ({ navigation, navigationOptions }) => {
//     console.log(navigationOptions);
//     // Notice the logs ^
//     // sometimes we call with the default navigationOptions and other times
//     // we call this with the previous navigationOptions that were returned from
//     // this very function
//     return {
//       title: navigation.getParam('otherParam', 'A Nested Details Screen'),
//       headerStyle: {
//         backgroundColor: navigationOptions.headerTintColor,
//       },
//       headerTintColor: navigationOptions.headerStyle.backgroundColor,
//     };
//   };

//   render() {
//     /* 2. Get the param, provide a fallback value if not available */
//     const { navigation } = this.props;
//     const itemId = navigation.getParam('itemId', 'NO-ID'); 
//     const otherParam = navigation.getParam('otherParam', 'some default value');

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Text>itemId: {JSON.stringify(itemId)}</Text>
//         <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        
//         <Button
//           title="Update the title"
//           onPress={() =>
//             this.props.navigation.setParams({ otherParam: 'Updated!' })}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//     /* The header config from HomeScreen is now here */
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   }
// );

// // const AppContainer = createAppContainer(RootStack);

// // export default class App extends React.Component {
// //   render() {
// //     return <AppContainer />;
// //   }
// // }

// export default createAppContainer(RootStack);



  
//   const AppNavigator = createStackNavigator(
//     {
//         Home: HomeScreen,
//         Details: DetailsScreen,
//     },
//     {
//         initialRoute: "Home",
//         defaultNavigationOptions:
//         {
//             headerStyle:{
//                 backgroundColor: '#f4511e',  
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//             },
//         }
//     }
//     );
  
//   export default createAppContainer(AppNavigator);