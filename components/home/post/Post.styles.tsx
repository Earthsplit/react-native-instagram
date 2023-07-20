import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		marginTop: 6,
	},
	containerSmall: {
		marginTop: 4,
		marginBottom: 4,
	},
	flexContainer: {
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		gap: 8,
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 6,
	},
	postIcon: {
		width: 25,
		height: 25,
		borderRadius: 50,
	},
	textBold: {
		fontWeight: '500',
	},
	postTitleSmall: {
		fontSize: 12,
	},
	postImageVertical: {
		aspectRatio: 4 / 5,
		backgroundColor: '#000',
	},
	postImageHorizontal: {
		aspectRatio: 1.91 / 1,
		backgroundColor: '#000',
	},
	iconContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	postCaptionContainer: {
		marginTop: 6,
		marginLeft: 12,
		marginRight: 12,
	},
	textGray: {
		color: '#707070',
	},
	textUppercase: {
		textTransform: 'uppercase',
		fontSize: 10,
	},
})

export default styles
