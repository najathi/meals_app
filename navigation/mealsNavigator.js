import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeals: {
		screen: CategoryMealsScreen
	},
	MealDetail: MealDetailScreen
});

/*
! These two methods are same for initializing
Categories: CategoriesScreen, // this is the short cut
CategoryMeals: {
	screen: CategoryMealsScreen
},
*/

export default createAppContainer(MealsNavigator);