import {useState} from 'react'
import TabItem from '../TabItem/index'
import AppItem from '../AppItem/index'
import './index.css'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
    {
      appId: 0,
      appName: 'Facebook',
      imageUrl:
        'data:image/jpeg;base64,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',
      category: 'SOCIAL',
    },
    {
      appId: 1,
      appName: 'Messenger',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png',
      category: 'SOCIAL',
    },
    {
      appId: 2,
      appName: 'WhatsApp',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png',
      category: 'SOCIAL',
    },
    {
      appId: 3,
      appName: 'Instagram',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
      category: 'SOCIAL',
    },
    {
      appId: 4,
      appName: 'Snapchat',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png',
      category: 'SOCIAL',
    },
    {
      appId: 5,
      appName: 'Twitter',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png',
      category: 'SOCIAL',
    },
    {
      appId: 6,
      appName: 'Pinterest',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png',
      category: 'SOCIAL',
    },
    {
      appId: 7,
      appName: 'WeChat',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png',
      category: 'SOCIAL',
    },
    {
      appId: 8,
      appName: 'LinkedIn',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png',
      category: 'SOCIAL',
    },
    {
      appId: 9,
      appName: 'Telegram',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png',
      category: 'SOCIAL',
    },
    {
      appId: 10,
      appName: 'Subway Surfers',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png',
      category: 'GAMES',
    },
    {
      appId: 11,
      appName: 'Crossy Road',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png',
      category: 'GAMES',
    },
    {
      appId: 12,
      appName: 'Super Chef',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png',
      category: 'GAMES',
    },
    {
      appId: 13,
      appName: 'Angry Birds',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png',
      category: 'GAMES',
    },
    {
      appId: 14,
      appName: 'Hill Climb 2',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png',
      category: 'GAMES',
    },
    {
      appId: 15,
      appName: 'Temple Run',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png',
      category: 'GAMES',
    },
    {
      appId: 16,
      appName: 'Dr. Driving',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png',
      category: 'GAMES',
    },
    {
      appId: 17,
      appName: 'Smurfs Bubble',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png',
      category: 'GAMES',
    },
    {
      appId: 18,
      appName: 'Grade Learning',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png',
      category: 'GAMES',
    },
    {
      appId: 19,
      appName: 'My Talking Tom',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png',
      category: 'GAMES',
    },
    {
      appId: 20,
      appName: 'Inshorts',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
      category: 'NEWS',
    },
    {
      appId: 21,
      appName: 'Way2News',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
      category: 'NEWS',
    },
    {
      appId: 22,
      appName: 'Google News',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
      category: 'NEWS',
    },
    {
      appId: 23,
      appName: 'Flipboard',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
      category: 'NEWS',
    },
    {
      appId: 24,
      appName: 'SmartNews',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
      category: 'NEWS',
    },
    {
      appId: 25,
      appName: 'BBC News',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
      category: 'NEWS',
    },
    {
      appId: 26,
      appName: 'CNN News',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
      category: 'NEWS',
    },
    {
      appId: 27,
      appName: 'Daily Wire',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
      category: 'NEWS',
    },
    {
      appId: 28,
      appName: 'AP News',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
      category: 'NEWS',
    },
    {
      appId: 29,
      appName: 'News Break',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
      category: 'NEWS',
    },
    {
      appId: 30,
      appName: 'Zomato',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
      category: 'FOOD',
    },
    {
      appId: 31,
      appName: 'Swiggy',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
      category: 'FOOD',
    },
    {
      appId: 32,
      appName: "Domino's Pizza",
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
      category: 'FOOD',
    },
    {
      appId: 33,
      appName: 'All in One',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
      category: 'FOOD',
    },
    {
      appId: 34,
      appName: 'Instacart',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
      category: 'FOOD',
    },
    {
      appId: 35,
      appName: 'Saucey',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
      category: 'FOOD',
    },
    {
      appId: 36,
      appName: 'Waitr',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
      category: 'FOOD',
    },
    {
      appId: 37,
      appName: 'Grubhub',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
      category: 'FOOD',
    },
    {
      appId: 38,
      appName: 'Mercato',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
      category: 'FOOD',
    },
    {
      appId: 39,
      appName: 'DOT',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
      category: 'FOOD',
    },
  ]

const AppStore = () => {
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId)
  const [searchInput, setSearchInput] = useState('')

  const filteredTabApps = appsList.filter(
    eachItem => eachItem.category === activeTabId,
  )

  const updateTabId = tabId => {
    setActiveTabId(tabId)
  }

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const filteredApps = filteredTabApps.filter(eachItem =>
    eachItem.appName.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="app-store-container">
      <h1>App Store</h1>

      <div className="search-container">
        <input
          type="search"
          value={searchInput}
          onChange={onChangeSearchInput}
          placeholder="Search"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
          alt="search icon"
          className="search-img"
        />
      </div>

      <div>
        <ul className="tab-list">
          {tabsList.map(eachItem => (
            <TabItem
              key={eachItem.tabId}
              tabDetails={eachItem}
              updateTabId={updateTabId}
              isActive={activeTabId === eachItem.tabId}
            />
          ))}
        </ul>
      </div>

      <div>
        <ul className="app-list">
          {filteredApps.map(eachItem => (
            <AppItem key={eachItem.appId} appDetails={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AppStore
