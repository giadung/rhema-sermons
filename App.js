import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SermonsScreen from './src/screens/SermonsScreen'
import VideoScreen from './src/screens/VideoScreen'
import DiscoveryScreen from './src/screens/DiscoveryScreen'

const navigator = createStackNavigator(
  {
    Sermons: SermonsScreen,
    Video: VideoScreen,
    Discovery: DiscoveryScreen
  },
  {
    initialRouteName: 'Discovery',
    defaultNavigationOptions: {
      title: 'Discovery'
    }
  }
)

export default createAppContainer(navigator)
