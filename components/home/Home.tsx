import { SafeAreaView } from 'react-native'
import Posts from './post/Posts'

const Home = () => {
	return (
		<SafeAreaView style={{ flex: 1, marginTop: 10 }}>
			<Posts />
		</SafeAreaView>
	)
}

export default Home
