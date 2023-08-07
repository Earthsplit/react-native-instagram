const videoData = [
	{
		video: require('../assets/videos/video1.mp4'),
		title: 'Kammeran Gonzalez-Keola',
		description: '🌊',
		likes: '390',
		comments: '17',
		shares: '5',
		isLiked: false,
	},
	{
		video: require('../assets/videos/video2.mp4'),
		title: 'ORHAN BADUR',
		description: 'Such a beautiful mosque 😍',
		likes: '144k',
		comments: '981',
		shares: '11k',
		isLiked: false,
	},
	{
		video: require('../assets/videos/video3.mp4'),
		title: 'Country roads, take me home',
		description: '🌊',
		likes: '582',
		comments: '9',
		shares: '153',
		isLiked: false,
	},
]

const links = [
	'1689753951860-6af6019d2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
	'1689326561417-78ad743ff4e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2841&q=80',
	'1689784730988-6cafd0821f8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80',
	'1689427147115-ee9ea359b658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
	'1685209170962-eae093d26379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
]

const postData = [
	{
		name: 'koropaev',
		location: 'Dancing House',
		logo: require('../assets/images/profilePics/profilePic2.png'),
		image:
			'https://www.solosophie.com/wp-content/uploads/2019/07/dancing_house_of_prague_czechia_and_tram-819x1024.jpg',
		caption:
			'Наверняка вы слышали от друзей или знакомых, давно живущих в Чехии, фразу, звучащую примерно как «вот сейчас...',
		commentCount: '50',
		date: 'July 6',
		isLiked: false,
		likeCount: '637',
	},
	{
		name: 'tokyo_shoegazer_official',
		logo: require('../assets/images/profilePics/profilePic3.png'),
		image: 'https://i.ytimg.com/vi/hlAgMfKSCMk/maxresdefault.jpg',
		imageHorizontal: true,
		caption: "Today's session \nIt is scheduled to end today",
		commentCount: '4',
		date: '5 days ago',
		isLiked: false,
		likeCount: '105',
	},
	{
		name: 'zelenskiy_official',
		logo: require('../assets/images/profilePics/profilePic4.png'),
		image:
			'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OGBROYPEZVMVNLCKMBDIE2XJCE.jpg',
		imageHorizontal: true,
		caption:
			'У межах Чорноморської зернової ініціативи Україна відправила до Ефіопії майже 300 тисяч тонн...',
		commentCount: '985',
		date: '2 hours ago',
		isLiked: false,
		likeCount: '105 898',
	},
]

const storyData = [
	{
		id: '1',
		url: require('../assets/images/storyPics/pozorbrno.jpeg'),
		title: 'pozorbrno',
	},
	{
		id: '2',
		url: require('../assets/images/storyPics/zelenskiy.jpeg'),
		title: 'zelenskiy_official',
	},
	{
		id: '3',
		url: require('../assets/images/storyPics/takashii.jpeg'),
		title: 'takashiifromjap...',
	},
	{
		id: '4',
		url: require('../assets/images/storyPics/plaaaato.jpeg'),
		title: 'plaaaato',
	},
	{
		id: '5',
		url: require('../assets/images/storyPics/lego.png'),
		title: 'lego',
	},
	{
		id: '6',
		url: require('../assets/images/storyPics/ltamr.jpeg'),
		title: 'letstalkaboutm...',
	},
]

export { videoData, links, postData, storyData }
