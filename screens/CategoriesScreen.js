import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {

	//console.log(props);
	/* 
	"dismiss": [Function dismiss],
	"goBack": [Function goBack],
	"navigate": [Function navigate],
	"pop": [Function pop],
	"popToTop": [Function popToTop],
	"push": [Function push],
	"replace": [Function replace],
	"reset": [Function reset],
	"setParams": [Function setParams],
	*/

	const renderGridItem = itemData => {
		// return (
		// 	<TouchableOpacity
		// 		onPress={() => {
		// 			props.navigation.navigate({
		// 				routeName: 'CategoryMeals',
		// 				params: {
		// 					categoryId: itemData.item.id
		// 				}
		// 			});

		// 			// passing the params
		// 			//props.navigation.navigate('CategoryMeals', {CategoryId: YOUR-DATA});
		// 		}}
		// 		style={styles.gridItem}>
		// 		<View>
		// 			<Text>{itemData.item.title}</Text>
		// 		</View >
		// 	</TouchableOpacity>
		// );

		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals',
						params: {
							categoryId: itemData.item.id
						}
					});
				}} />
		);
	};

	return (
		// <View style={styles.screen}>
		// 	<Text>The Categories Screen!</Text>
		// 	<Button title="Go to Meals!" onPress={() => {
		// 		//props.navigation.navigate({ routeName: 'CategoryMeals' });
		// 		// ! Alternative way
		// 		//props.navigation.navigate('CategoryMeals');

		// 		// you also can use push instead of navigate through that doesn't take a javascript object but instead takes just the route name here. when link same page in same screen, we can able to link using 'push'. but it can't make it using 'navigate'.
		// 		props.navigation.push('CategoryMeals');

		// 		// props.navigation.replace('CategoryMeals'); // it doesn't take goBack().

		// 	}} />
		// </View>

		<FlatList keyExtractor={(item, index) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
	);
}

// configuring the header
CategoriesScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Meal Categories',
		// headerStyle: {
		// 	backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
		// },
		// headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item title="Menu" iconName='ios-menu' onPress={() => {
					navData.navigation.toggleDrawer()
				}} />
			</HeaderButtons>
		)
	}
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	// gridItem: {
	// 	flex: 1,
	// 	height: 150,
	// 	width: '80%',
	// 	alignContent: 'center',
	// 	padding: 10,
	// 	margin: 10,
	// 	backgroundColor: 'red'
	// }
});

export default CategoriesScreen;