import React from 'react'; // in using JSX
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeals: {
		screen: CategoryMealsScreen
	},
	MealDetail: MealDetailScreen
},
	{
		initialRouteName: 'Categories',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
			},
			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
		}
	});

/*
! These two methods are same for initializing
Categories: CategoriesScreen, // this is the short cut
CategoryMeals: {
	screen: CategoryMealsScreen
},
*/

const tabsScreenConfig = {
	// Meals: MealsNavigator,
	Meals: {
		screen: MealsNavigator, navigationOptions: {
			tabBarIcon: tabInfo => {
				return (
					<Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
				);
			},
			tabBarColor: Colors.primaryColor
		}
	},
	Favorite: {
		screen: FavoritesScreen, navigationOptions: {
			tabBarLabel: 'Favorites!',
			tabBarIcon: tabInfo => {
				return (
					<Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
				);
			},
			tabBarColor: Colors.accentColor
		}
	}
}

const MealsFavTabNavigator = Platform.OS === "android" ?
	createMaterialBottomTabNavigator(tabsScreenConfig,
		{
			activeColor: 'white',
			shifting: true,
			// shifting: false,
			barStyle: {
				backgroundColor: Colors.primaryColor
			}
		}
	) :
	createBottomTabNavigator(tabsScreenConfig, {
		tabBarOptions: {
			activeTintColor: Colors.accentColor
		}
	});

// export default createAppContainer(MealsNavigator);
export default createAppContainer(MealsFavTabNavigator);