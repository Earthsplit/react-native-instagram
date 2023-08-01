import { View, Text, TouchableOpacity } from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist'

import { videoData } from '../../../myData/data'
import { Video, ResizeMode } from 'expo-av'
import { useRef, useState } from 'react'
import styles from './Reel.style'

import Heart from '../../../assets/icons/heart.svg'
import HeartFilled from '../../../assets/icons/heartFilled.svg'
import More from '../../../assets/icons/more.svg'
import Send from '../../../assets/icons/send.svg'
import Share from '../../../assets/icons/share.svg'

const ReelsList = () => {
	const ref = useRef(null)
	const [mute, setMute] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	const [data, setData] = useState(videoData)

	const handleLike = itemIndex => {
		setData(prevData => {
			const newData = [...prevData]
			newData[itemIndex].isLiked = !newData[itemIndex].isLiked
			return newData
		})
	}

	const handleChangeIndexValue = ({ index }) => {
		setCurrentIndex(index)
	}

	return (
		<SwiperFlatList
			data={videoData}
			onChangeIndex={handleChangeIndexValue}
			renderItem={({ item, index }) => (
				<View style={styles.container}>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={() => setMute(!mute)}
						style={{
							width: '100%',
							height: '100%',
							flex: 1,
						}}
					>
						<Video
							ref={ref}
							source={item.video}
							isMuted={mute}
							resizeMode={ResizeMode.COVER}
							isLooping
							style={styles.video}
							shouldPlay={currentIndex == index ? true : false}
						/>
						<View
							style={{ position: 'absolute', bottom: '4%', paddingLeft: 12 }}
						>
							<Text style={{ color: '#fff' }}>{item.title}</Text>
							<Text style={{ color: '#fff' }}>{item.description}</Text>
						</View>
						<View
							style={{
								position: 'absolute',
								paddingRight: '4%',
								bottom: '4%',
								right: 0,
								alignItems: 'center',
								gap: 18,
							}}
						>
							<View style={{ alignItems: 'center' }}>
								<TouchableOpacity onPress={() => handleLike(index)}>
									{item.isLiked ? (
										<HeartFilled
											width={30}
											fill='#ff0000'
										/>
									) : (
										<Heart
											width={30}
											fill='#fff'
										/>
									)}
								</TouchableOpacity>
								<Text style={{ color: '#fff' }}>{item.likes}</Text>
							</View>
							<View style={{ alignItems: 'center' }}>
								<TouchableOpacity>
									<Send
										width={30}
										fill='#fff'
									/>
								</TouchableOpacity>
								<Text style={{ color: '#fff' }}>{item.comments}</Text>
							</View>
							<View style={{ alignItems: 'center' }}>
								<TouchableOpacity>
									<Share
										width={30}
										fill='#fff'
									/>
								</TouchableOpacity>
								<Text style={{ color: '#fff' }}>{item.shares}</Text>
							</View>
							<TouchableOpacity>
								<More
									width={30}
									fill='#fff'
								/>
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
			)}
			keyExtractor={(_, index) => index.toString()}
			vertical
		/>
	)
}

export default ReelsList
