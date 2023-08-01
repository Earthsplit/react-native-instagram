import { Text, SafeAreaView, View, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import styles from './Reels.styles'

import Camera from '../../assets/icons/camera.svg'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ReelsList from './reelsList/ReelsList'
import { ResizeMode, Video } from 'expo-av'

const Reels = () => {
	const ref = useRef(null)

	return (
		<View style={styles.container}>
			<View style={styles.flexContainer}>
				<Text style={styles.textTitle}>Reels</Text>
				<TouchableOpacity>
					<Camera
						width={30}
						fill='#fff'
					/>
				</TouchableOpacity>
			</View>
			<ReelsList />
		</View>
	)
}

export default Reels
