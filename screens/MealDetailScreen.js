import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {

	const mealId = props.navigation.getParam('mealId');

	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	return (
		<View style={styles.screen}>
			<Text>The Meal Detail Screen!</Text>
			<Text>{selectedMeal.title}</Text>
			<Button title="Go Back to Categories" onPress={() => {
				props.navigation.popToTop();
			}} />
		</View>

	);
}

// configuring the header
MealDetailScreen.navigationOptions = navigationData => {
	const mealId = navigationData.navigation.getParam('mealId');
	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	let title = selectedMeal.title;
	if (title.length >= 23) {
		title = title.substring(0, 22) + '..';
	}

	return {
		headerTitle: title,
		// headerStyle: {
		// 	backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
		// },
		// headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
		// headerRight: <Text>FAV!</Text>
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName="ios-star"
					onPress={() => {
						console.log('Mark as favorite!');
					}} />
				{/* <Item
					title="Favorite"
					iconName="ios-star-outline"
					onPress={() => {
						console.log('Mark as favorite!');
					}} /> */}
			</HeaderButtons>
		)
	};
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default MealDetailScreen;