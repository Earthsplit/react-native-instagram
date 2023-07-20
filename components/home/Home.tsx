import { Dimensions, SafeAreaView, ScrollView, View } from 'react-native'
import Header from './header/HomeHeader'
import Stories from './header/stories/Stories'
import styles from './Home.styles'
import Post1 from './post/Post1'
import Post2 from './post/Post2'
import Post3 from './post/Post3'

const screenHeight = Dimensions.get('window').height

const Home = () => {
	return (
		<SafeAreaView>
			<View style={{ height: screenHeight }}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ flexGrow: 1 }}
				>
					<Header />
					<Stories />
					<Post1 />
					<Post2 />
					<View style={{ marginBottom: 130 }}>
						<Post3 />
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

export default Home
