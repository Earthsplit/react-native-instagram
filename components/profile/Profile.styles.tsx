import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 15,
	},
	icon: {
		width: 80,
		height: 80,
		borderRadius: 50,
	},
	title: {
		fontSize: 20,
		fontWeight: '500',
	},
	flexContainer: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 14,
	},
	container: {
		marginLeft: 16,
		marginRight: 16,
	},
	textBold: {
		fontWeight: '500',
	},
	textCentered: {
		alignItems: 'center',
	},
	block: {
		backgroundColor: '#e0e0e0',
		flex: 1,
		borderRadius: 10,
		padding: 10,
	},
	smallBlock: {
		backgroundColor: '#e0e0e0',
		flex: 1,
		borderRadius: 10,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default styles
