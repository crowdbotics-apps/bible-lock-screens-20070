import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList98118Navigator from '../features/ArticleList98118/navigator';
import ArticleList98117Navigator from '../features/ArticleList98117/navigator';
import ArticleList98116Navigator from '../features/ArticleList98116/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList98118: { screen: ArticleList98118Navigator },
ArticleList98117: { screen: ArticleList98117Navigator },
ArticleList98116: { screen: ArticleList98116Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
