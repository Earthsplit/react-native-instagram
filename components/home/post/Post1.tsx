import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Post.styles'
import More from '../../../assets/icons/more.svg'
import Heart from '../../../assets/icons/heart.svg'
import Share from '../../../assets/icons/share.svg'
import Send from '../../../assets/icons/send.svg'
import Save from '../../../assets/icons/save.svg'

const Post = () => {
	return (
		<View style={styles.container}>
			<View style={styles.flexContainer}>
				<Image
					source={{
						uri: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-19/317259316_1860897497584917_8380826562689354298_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=YxUH9eGTDW0AX8F55hY&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDhNh-D8i1KFEZCo1zVQxqWHO6KxOTr4BhzMHXdYIj8Cw&oe=64BD8021&_nc_sid=8b3546',
					}}
					style={styles.postIcon}
				/>
				<View>
					<Text style={styles.textBold}>koroopaev</Text>
					<Text style={styles.postTitleSmall}>Dancing House</Text>
				</View>
				<View style={{ marginLeft: 'auto' }}>
					<TouchableOpacity>
						<More
							width={24}
							fill={'#000'}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<Image
				source={{
					uri: 'https://www.solosophie.com/wp-content/uploads/2019/07/dancing_house_of_prague_czechia_and_tram.jpg',
				}}
				resizeMode='contain'
				style={styles.postImageVertical}
			/>
			<View style={styles.postCaptionContainer}>
				<View style={styles.iconContainer}>
					<TouchableOpacity>
						<Heart
							width={24}
							fill={'#000'}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Send
							width={24}
							fill={'#000'}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Share
							width={24}
							fill={'#000'}
						/>
					</TouchableOpacity>
					<View style={{ marginLeft: 'auto' }}>
						<TouchableOpacity>
							<Save
								width={24}
								fill={'#000'}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ marginBottom: 6 }}>
					<View style={styles.containerSmall}>
						<Text>
							Liked by <Text style={styles.textBold}>kendricklamar</Text> and
							<Text style={styles.textBold}> 638 others</Text>
						</Text>
					</View>
					<Text>
						<Text style={styles.textBold}>koroopaev </Text>
						Наверняка вы слышали от друзей или знакомых, давно живущих в Чехии,
						фразу, звучащую примерно как «вот сейчас...
					</Text>
					<View style={styles.containerSmall}>
						<TouchableOpacity>
							<Text style={styles.textGray}>Show all comments (50)</Text>
						</TouchableOpacity>
					</View>
					<Text style={[styles.textGray, styles.textUppercase]}>July 6</Text>
				</View>
			</View>
		</View>
	)
}

export default Post
