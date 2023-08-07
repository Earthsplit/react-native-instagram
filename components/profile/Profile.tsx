import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'

import styles from './Profile.styles'
import { AddProfile, More } from '../../assets/icons'
import Photos from '../explore/explorePhotos/Photos'

const Profile = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>Profile</Text>
					<View style={styles.flexContainer}>
						<TouchableOpacity>
							<AddProfile
								width={24}
								height={24}
								fill={'#000'}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<More
								width={24}
								height={24}
								fill={'#000'}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.flexContainer}>
					<Image
						source={require('../../assets/images/profilePics/profilePic.png')}
						style={styles.icon}
					/>
					<View style={styles.textCentered}>
						<Text style={styles.textBold}>6</Text>
						<Text>Posts</Text>
					</View>
					<View style={styles.textCentered}>
						<Text style={styles.textBold}>93</Text>
						<Text>followers</Text>
					</View>
					<View style={styles.textCentered}>
						<Text style={styles.textBold}>122</Text>
						<Text>followers</Text>
					</View>
				</View>
				<View style={{ marginTop: 8 }}>
					<Text style={styles.textBold}>Yehor</Text>
					<Text>Personal blog</Text>
				</View>
				<View style={[styles.flexContainer, { marginTop: 10 }]}>
					<View style={styles.block}>
						<Text style={styles.textBold}>Proffesional dashboard</Text>
						<Text>60 accounts reached in the last 30 days.</Text>
					</View>
				</View>
				<View style={[styles.flexContainer, { marginVertical: 10 }]}>
					<View style={styles.smallBlock}>
						<Text style={styles.textBold}>Edit profile</Text>
					</View>
					<View style={styles.smallBlock}>
						<Text style={styles.textBold}>Share profile</Text>
					</View>
					<View style={styles.smallBlock}>
						<Text style={styles.textBold}>Call</Text>
					</View>
				</View>
			</View>
			<Photos photoCount={11} />
		</SafeAreaView>
	)
}

export default Profile
