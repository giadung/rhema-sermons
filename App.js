import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SermonsScreen from './src/screens/SermonsScreen'

const navigator = createStackNavigator(
  {
    Sermons: SermonsScreen
  },
  {
    initialRouteName: 'Sermons',
    defaultNavigationOptions: {
      title: 'Sermons'
    }
  }
)

export default createAppContainer(navigator)
