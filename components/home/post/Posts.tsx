import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { useState } from 'react'
import styles from './Post.styles'
import {
	More,
	Heart,
	HeartFilled,
	Send,
	Share,
	Save,
} from '../../../assets/icons'
import Header from '../header/Header'

import { postData } from '../../../myData/data'

const Posts = () => {
	const [data, setData] = useState(postData)

	const handleLike = itemIndex => {
		setData(prevData => {
			const newData = [...prevData]
			newData[itemIndex].isLiked = !newData[itemIndex].isLiked
			return newData
		})
	}

	return (
		<FlatList
			data={postData}
			renderItem={({ item, index }) => (
				<View style={styles.container}>
					<View style={styles.flexContainer}>
						<Image
							source={item.logo}
							style={styles.postIcon}
						/>
						<View>
							<Text style={styles.textBold}>{item.name}</Text>
							{item.location && (
								<Text style={styles.postTitleSmall}>{item.location}</Text>
							)}
						</View>
						<View style={{ marginLeft: 'auto' }}>
							<TouchableOpacity>
								<More
									width={24}
									fill='#000'
								/>
							</TouchableOpacity>
						</View>
					</View>
					<Image
						source={{ uri: item.image }}
						resizeMode={item.imageHorizontal ? 'cover' : 'contain'}
						style={
							item.imageHorizontal
								? styles.postImageHorizontal
								: styles.postImageVertical
						}
					/>
					<View style={styles.postCaptionContainer}>
						<View style={{ marginBottom: 6 }}>
							<View style={styles.iconContainer}>
								<TouchableOpacity onPress={() => handleLike(index)}>
									{item.isLiked ? (
										<HeartFilled
											width={24}
											fill='#ff0000'
										/>
									) : (
										<Heart
											width={24}
											fill='#000'
										/>
									)}
								</TouchableOpacity>
								<TouchableOpacity>
									<Send
										width={24}
										fill='#000'
									/>
								</TouchableOpacity>
								<TouchableOpacity>
									<Share
										width={24}
										fill='#000'
									/>
								</TouchableOpacity>
								<View style={{ marginLeft: 'auto' }}>
									<TouchableOpacity>
										<Save
											width={24}
											fill='#000'
										/>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.containerSmall}>
								{item.isLiked ? (
									<Text>
										Liked by <Text style={styles.textBold}>you</Text> and
										<Text style={styles.textBold}>
											{' '}
											{item.likeCount} others
										</Text>
									</Text>
								) : (
									<Text style={styles.textBold}>{item.likeCount} likes</Text>
								)}
							</View>
							<Text>
								<Text style={styles.textBold}>{item.name} </Text>
								{item.caption}
							</Text>
							<View style={styles.containerSmall}>
								<TouchableOpacity>
									<Text style={styles.textGray}>
										Show all comments ({item.commentCount})
									</Text>
								</TouchableOpacity>
							</View>
							<Text style={[styles.textGray, styles.textUppercase]}>
								{item.date}
							</Text>
						</View>
					</View>
				</View>
			)}
			keyExtractor={item => item.name}
			showsVerticalScrollIndicator={false}
			ListHeaderComponent={<Header />}
		/>
	)
}

export default Posts
