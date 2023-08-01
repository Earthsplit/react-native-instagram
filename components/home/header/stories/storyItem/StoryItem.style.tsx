import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
	progressionBar: {
		height: 3,
		backgroundColor: '#999',
		width: '95%',
	},
	progressionBarInner: {
		height: '100%',
		backgroundColor: '#000',
		width: '50%',
	},
	container: {
		marginTop: 14,
		alignItems: 'center',
	},
	storyCaption: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 14,
		paddingVertical: 6,
		gap: 4,
	},
	iconGroup: {
		flexDirection: 'row',
		marginLeft: 'auto',
	},
	storyBorder: {
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#666',
		padding: 2,
	},
	photo: {
		width: 35,
		height: 35,
		borderRadius: 50,
	},
	imageContainer: {
		width: '100%',
		height: height,
	},
})

export default styles
