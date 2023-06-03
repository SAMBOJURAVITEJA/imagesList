import './index.css'

const Images = props => {
  const {each, changeImages} = props

  const imagesChange = () => {
    changeImages(each.id)
  }

  return (
    <li onClick={imagesChange} key={each.id}>
      <button type="button">
        <img src={each.thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default Images
