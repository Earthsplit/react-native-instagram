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
		logo: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-19/317259316_1860897497584917_8380826562689354298_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=YxUH9eGTDW0AX8F55hY&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDhNh-D8i1KFEZCo1zVQxqWHO6KxOTr4BhzMHXdYIj8Cw&oe=64BD8021&_nc_sid=8b3546',
		image:
			'https://www.solosophie.com/wp-content/uploads/2019/07/dancing_house_of_prague_czechia_and_tram.jpg',
		caption:
			'Наверняка вы слышали от друзей или знакомых, давно живущих в Чехии, фразу, звучащую примерно как «вот сейчас...',
		commentCount: '50',
		date: 'July 6',
		isLiked: false,
		likeCount: 637,
	},
	{
		name: 'tokyo_shoegazer_official',
		logo: 'https://f4.bcbits.com/img/a0204757718_16.jpg',
		image:
			'https://scontent.fprg4-1.fna.fbcdn.net/v/t39.30808-6/244468048_261438735987342_5834514107073768236_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=106&ccb=1-7&_nc_sid=110474&efg=eyJpIjoidCJ9&_nc_ohc=0S1XxNo4YigAX-ClBEL&tn=kYfn6CtCLqVgefcZ&_nc_ht=scontent.fprg4-1.fna&oh=00_AfAbKQ7DPWKqDeZiyfC2OpjXz2aHrNWXd38iQlEJKZ79kQ&oe=64BDF87F',
		imageHorizontal: true,
		caption: "Today's session \nIt is scheduled to end today",
		commentCount: '4',
		date: '5 days ago',
		isLiked: false,
		likeCount: 105,
	},
	{
		name: 'zelenskiy_official',
		logo: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-19/312162754_2783092025157728_428709372056906420_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=YB48DX8X3scAX8JsojT&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBdcTGfnWTfhep6dSJK26xTGSsQJh382eXQXTNyC-g-Aw&oe=64BEAA42&_nc_sid=8b3546',
		image:
			'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-15/361788113_708151754658295_1353581684210589316_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=TM6q1wWiGaUAX90y9rV&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE1MTE3MTQyMDI5NzU5NjcxMQ%3D%3D.2-ccb7-5&oh=00_AfCkZL5DIBiWqaZK6vtog8eXD2OFSnxtTeV8GF9PyC6ifQ&oe=64BDB436&_nc_sid=ee9879',
		imageHorizontal: true,
		caption:
			'У межах Чорноморської зернової ініціативи Україна відправила до Ефіопії майже 300 тисяч тонн...',
		commentCount: '985',
		date: '2 hours ago',
		isLiked: false,
		likeCount: 105898,
	},
]

const storyData = [
	{
		id: '1',
		url: require('../assets/images/pozorbrno.jpeg'),
		title: 'pozorbrno',
	},
	{
		id: '2',
		url: require('../assets/images/zelenskiy.jpeg'),
		title: 'zelenskiy_official',
	},
	{
		id: '3',
		url: require('../assets/images/takashii.jpeg'),
		title: 'takashiifromjap...',
	},
	{
		id: '4',
		url: require('../assets/images/plaaaato.jpeg'),
		title: 'plaaaato',
	},
	{
		id: '5',
		url: require('../assets/images/lego.png'),
		title: 'lego',
	},
	{
		id: '6',
		url: require('../assets/images/ltamr.jpeg'),
		title: 'letstalkaboutm...',
	},
]

export { videoData, links, postData, storyData }
