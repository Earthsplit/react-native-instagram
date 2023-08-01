import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './Profile.styles'
import AddProfile from '../../assets/icons/addProfile.svg'
import More from '../../assets/icons/more.svg'
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
						source={{
							uri: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-19/313275952_1208736029674905_7578388477210151345_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=OjPuk_RtNkgAX_Cz8HW&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAKCXHFQlULuUatLVokgoc2TGw6SxJunO34F5J0oeUr-w&oe=64BEC5F5&_nc_sid=8b3546',
						}}
						style={styles.icon}
					/>
					<View style={{ alignItems: 'center' }}>
						<Text style={styles.textBold}>6</Text>
						<Text>Posts</Text>
					</View>
					<View style={{ alignItems: 'center' }}>
						<Text style={styles.textBold}>93</Text>
						<Text>followers</Text>
					</View>
					<View style={{ alignItems: 'center' }}>
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
