import { Dimensions, SafeAreaView, View } from 'react-native'
import Posts from './post/Posts'

const screenHeight = Dimensions.get('window').height

const Home = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Posts />
		</SafeAreaView>
	)
}

export default Home
