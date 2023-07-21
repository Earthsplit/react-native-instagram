import {
	View,
	Text,
	SafeAreaView,
	Dimensions,
	Image,
	TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import styles from './Explore.styles'
import { FlatList } from 'react-native-gesture-handler'
import { SearchBar } from '@rneui/base'
import More from '../../assets/icons/more.svg'

const screenHeight = Dimensions.get('window').height

const links = [
	'1689753951860-6af6019d2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
	'1689326561417-78ad743ff4e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2841&q=80',
	'1689784730988-6cafd0821f8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80',
	'1689427147115-ee9ea359b658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
	'1685209170962-eae093d26379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
]

const Explore = () => {
	const items = Array.from({ length: 60 }, (_, i) => ({
		id: i,
		src: `https://images.unsplash.com/photo-${links[i % 5]}`,
	}))

	const [search, setSearch] = useState<string>('')

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.searchBarContainer}>
				<SearchBar
					round
					searchIcon={{ size: 24 }}
					placeholder='Type Here...'
					onChangeText={query => setSearch(query)}
					value={search}
					inputContainerStyle={{ backgroundColor: '#eee' }}
					containerStyle={{
						backgroundColor: '#fff',
						borderTopWidth: 0,
						borderBottomWidth: 0,
						flex: 1,
					}}
				/>
				<More
					width={25}
					fill={'#000'}
					style={styles.icon}
				/>
			</View>
			<FlatList
				data={items}
				renderItem={({ item }) => (
					<TouchableOpacity>
						<Image
							source={{ uri: item.src }}
							style={styles.image}
						/>
					</TouchableOpacity>
				)}
				numColumns={3}
				keyExtractor={item => String(item.id)}
			/>
		</SafeAreaView>
	)
}

export default Explore
