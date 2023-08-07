import { StyleSheet, Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
	container: {
		height: windowHeight - 80,
		flex: 1,
	},
	video: {
		width: '100%',
		height: '100%',
	},
})

export default styles
