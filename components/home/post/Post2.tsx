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
						uri: 'https://f4.bcbits.com/img/a0204757718_16.jpg',
					}}
					style={styles.postIcon}
				/>
				<View>
					<Text style={styles.textBold}>tokyo_shoegazer_official</Text>
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
					uri: 'https://scontent.fprg4-1.fna.fbcdn.net/v/t39.30808-6/244468048_261438735987342_5834514107073768236_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=106&ccb=1-7&_nc_sid=110474&efg=eyJpIjoidCJ9&_nc_ohc=0S1XxNo4YigAX-ClBEL&tn=kYfn6CtCLqVgefcZ&_nc_ht=scontent.fprg4-1.fna&oh=00_AfAbKQ7DPWKqDeZiyfC2OpjXz2aHrNWXd38iQlEJKZ79kQ&oe=64BDF87F',
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
							<Text style={styles.textBold}>314 likes</Text>
						</Text>
					</View>
					<Text>
						<Text style={styles.textBold}>tokyo_shoegazer_official </Text>
						Today's session It is scheduled to end today
					</Text>
					<View style={styles.containerSmall}>
						<TouchableOpacity>
							<Text style={styles.textGray}>Show all comments (4)</Text>
						</TouchableOpacity>
					</View>
					<Text style={[styles.textGray, styles.textUppercase]}>
						5 days ago
					</Text>
				</View>
			</View>
		</View>
	)
}

export default Post
