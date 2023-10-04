

function HogTile({name, image, toggleModal}) {
  return (
    <div onClick={toggleModal}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </div>
  )
}







export default HogTile;