import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SermonsScreen from './src/screens/SermonsScreen'
import VideoScreen from './src/screens/VideoScreen'

const navigator = createStackNavigator(
  {
    Sermons: SermonsScreen,
    Video: VideoScreen
  },
  {
    initialRouteName: 'Sermons',
    defaultNavigationOptions: {
      title: 'Sermons'
    }
  }
)

export default createAppContainer(navigator)
