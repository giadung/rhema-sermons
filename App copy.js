import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SermonsScreen from './src/screens/SermonsScreen'
import VideoScreen from './src/screens/VideoScreen'
import DiscoveryScreen from './src/screens/DiscoveryScreen'
import GivingScreen from './src/screens/GivingScreen'
import LocationScreen from './src/screens/LocationScreen'
import ProfileScreen from './src/screens/ProfileScreen'

const navigator = createStackNavigator(
  {
    Sermons: SermonsScreen,
    Video: VideoScreen,
    Discovery: DiscoveryScreen,
    Giving: GivingScreen,
    Location: LocationScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Sermons',
    defaultNavigationOptions: {
      title: 'Sermons'
    }
  }
)

export default createAppContainer(navigator)
