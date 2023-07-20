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
						uri: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-19/312162754_2783092025157728_428709372056906420_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=YB48DX8X3scAX8JsojT&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBdcTGfnWTfhep6dSJK26xTGSsQJh382eXQXTNyC-g-Aw&oe=64BEAA42&_nc_sid=8b3546',
					}}
					style={styles.postIcon}
				/>
				<View>
					<Text style={styles.textBold}>zelenskiy_official</Text>
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
					uri: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-15/361788113_708151754658295_1353581684210589316_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=TM6q1wWiGaUAX90y9rV&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE1MTE3MTQyMDI5NzU5NjcxMQ%3D%3D.2-ccb7-5&oh=00_AfCkZL5DIBiWqaZK6vtog8eXD2OFSnxtTeV8GF9PyC6ifQ&oe=64BDB436&_nc_sid=ee9879',
				}}
				resizeMode='cover'
				style={styles.postImageHorizontal}
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
							<Text style={styles.textBold}>34,151 likes</Text>
						</Text>
					</View>
					<Text>
						<Text style={styles.textBold}>tokyo_shoegazer_official </Text>У
						межах Чорноморської зернової ініціативи Україна відправила до
						Ефіопії майже 300 тисяч тонн...
					</Text>
					<View style={styles.containerSmall}>
						<TouchableOpacity>
							<Text style={styles.textGray}>Show all comments (4)</Text>
						</TouchableOpacity>
					</View>
					<Text style={[styles.textGray, styles.textUppercase]}>
						2 hours ago
					</Text>
				</View>
			</View>
		</View>
	)
}

export default Post
