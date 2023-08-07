import { Text, View } from 'react-native'
import styles from './Reels.styles'

import Camera from '../../assets/icons/camera.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ReelsList from './reelsList/ReelsList'

const Reels = () => {
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
