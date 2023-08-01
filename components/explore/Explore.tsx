import { View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from './Explore.styles'
import { SearchBar } from '@rneui/base'
import More from '../../assets/icons/more.svg'
import Photos from './explorePhotos/Photos'

const Explore = () => {
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
			<Photos photoCount={34} />
		</SafeAreaView>
	)
}

export default Explore
