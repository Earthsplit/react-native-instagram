import {
	View,
	Text,
	SafeAreaView,
	Pressable,
	Image,
	Animated,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Close from '../../../../../assets/icons/close.svg'
import More from '../../../../../assets/icons/more.svg'
import styles from './StoryItem.style'
import { useRouter, useLocalSearchParams } from 'expo-router'

const StoryItem = () => {
	const { name, icon } = useLocalSearchParams()
	const router = useRouter()

	const progress = new Animated.Value(0)
	const progressAnimation = progress.interpolate({
		inputRange: [0, 5],
		outputRange: ['0%', '100%'],
	})

	useEffect(() => {
		let timer = setTimeout(() => {
			router.back()
		}, 5000)

		Animated.timing(progress, {
			toValue: 5,
			duration: 5000,
			useNativeDriver: false,
		}).start()

		return () => clearTimeout(timer)
	})

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.progressionBar}>
				<Animated.View
					style={[styles.progressionBarInner, { width: progressAnimation }]}
				/>
			</View>
			<View style={styles.storyCaption}>
				<View style={styles.storyBorder}>
					<Image
						source={icon as any}
						style={styles.photo}
					/>
				</View>
				<Text style={{ fontWeight: '500' }}>{name}</Text>
				<View style={styles.iconGroup}>
					<Pressable>
						<More
							width={35}
							fill='#000'
						/>
					</Pressable>
					<Pressable onPress={() => router.back()}>
						<Close
							width={35}
							fill='#000'
						/>
					</Pressable>
				</View>
			</View>
			<View style={styles.imageContainer}>
				<Image
					style={{
						width: '100%',
						height: '75%',
					}}
					source={icon as any}
					resizeMode='contain'
				/>
			</View>
		</SafeAreaView>
	)
}

export default StoryItem
