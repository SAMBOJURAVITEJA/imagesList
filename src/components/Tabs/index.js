import './index.css'

const Tabs = props => {
  const {each, changeTabs} = props
  const tabsChange = () => {
    console.log(each.tabId)
    changeTabs(each.tabId)
  }
  return (
    <li onClick={tabsChange} key={each.id}>
      <button type="button"> {each.displayText}</button>
    </li>
  )
}

export default Tabs
