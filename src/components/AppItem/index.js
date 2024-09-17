import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-icon" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
