import React from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/mealItem';

const CategoryMealsScreen = props => {
	//console.log(props);

	const renderMealItems = itemData => (
		// <View>
		// 	<Text>{itemData.item.title}</Text>
		// </View>

		<MealItem
			title={itemData.item.title}
			duration={itemData.item.duration}
			complexity={itemData.item.complexity}
			affordability={itemData.item.affordability}
			image={itemData.item.imageUrl}
			onSelect={() => {
				props.navigation.navigate({
					routeName: 'MealDetail',
					params: {
						mealId: itemData.item.id
					}
				});
			}} />
	);

	const catId = props.navigation.getParam('categoryId');

	const displayedMeals = MEALS.filter(
		meal => meal.categoryIds.indexOf(catId) >= 0
	);

	//const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

	return (
		// <View style={styles.screen}>
		// 	<Text>The Category Meals Screen!</Text>
		// 	<Text>{selectedCategory.title}</Text>
		// 	<Button title="Go to Details" onPress={() => {
		// 		props.navigation.navigate({ routeName: 'MealDetail' });
		// 	}} />
		// 	<Button title="Back" onPress={() => {
		// 		//props.navigation.goBack();

		// 		// ! Alternative to back
		// 		props.navigation.pop();
		// 	}} />
		// </View>

		<View style={styles.screen}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItems} style={{ width: '100%' }} />
		</View>
	);
}

// configuring the header
CategoryMealsScreen.navigationOptions = navigationData => {
	// console.log(navigationData);

	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
	return {
		headerTitle: selectedCategory.title,
		// headerStyle: {
		// 	backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
		// },
		// headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
	};
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CategoryMealsScreen;