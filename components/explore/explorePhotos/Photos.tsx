import { TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

import styles from './Photos.style'
import { links } from '../../../myData/data'

const Photos = ({ photoCount }) => {
	const items = Array.from({ length: photoCount }, (_, i) => ({
		id: i,
		src: `https://images.unsplash.com/photo-${links[i % 5]}`,
	}))

	return (
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
	)
}

export default Photos
