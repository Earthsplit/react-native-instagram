import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	photo: {
		width: 85,
		height: 85,
		borderRadius: 50,
	},
	storyBorder: {
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#666',
		padding: 2,
	},
	storyTitle: {
		fontSize: 12,
		marginTop: 4,
		marginBottom: 8,
	},
	storyContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
	},
	container: {
		paddingLeft: 12,
		borderBottomColor: 'rgb(219, 219, 219)',
		borderBottomWidth: 1,
	},
})

export default styles
