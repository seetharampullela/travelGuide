const TravelItems = props => {
  const {travelItems} = props
  const {imageUrl, name, id, description} = travelItems

  return (
    <li key={id}>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}
export default TravelItems
