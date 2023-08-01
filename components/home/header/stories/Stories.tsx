import {
	View,
	Text,
	Image,
	FlatList,
	Pressable,
	ImageSourcePropType,
} from 'react-native'
import styles from './Stories.styles'
import { useRouter } from 'expo-router'

import { storyData } from '../../../../myData/data'

interface ItemProps {
	url: ImageSourcePropType
	title: string
}

const Item = ({ url, title }: ItemProps) => (
	<View style={styles.storyContainer}>
		<View style={styles.storyBorder}>
			<Image
				source={url}
				style={styles.photo}
			/>
		</View>
		<Text style={styles.storyTitle}>{title}</Text>
	</View>
)

const Stories = () => {
	const router = useRouter()

	return (
		<FlatList
			data={storyData}
			renderItem={({ item }) => (
				<Pressable
					onPress={() =>
						router.push({
							pathname: 'modal',
							params: {
								name: item.title,
								icon: item.url,
							},
						})
					}
				>
					<Item
						url={item.url}
						title={item.title}
					/>
				</Pressable>
			)}
			keyExtractor={item => item.id}
			horizontal
			showsHorizontalScrollIndicator={false}
			style={styles.container}
		/>
	)
}

export default Stories
