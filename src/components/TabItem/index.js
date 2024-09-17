import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    updateTabId(tabId)
  }

  const activeBtnClass = isActive ? 'active-btn' : ''
  return (
    <li>
      <button
        type="button"
        className={`btn ${activeBtnClass}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
