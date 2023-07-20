import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './HomeHeader.styles'
import Heart from '../../../assets/icons/heart.svg'
import Send from '../../../assets/icons/send.svg'

const HomeHeader = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Instagram</Text>
			<View style={styles.flexContainer}>
				<TouchableOpacity>
					<Heart
						width={24}
						height={24}
						fill={'#000'}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Send
						width={24}
						height={24}
						fill={'#000'}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default HomeHeader
