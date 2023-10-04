
function Modal({modalState, currentHog}) {
  const {name, image, specialty, greased, weight} = currentHog;
  const highestMedal = currentHog["highest medal achieved"]

  function test() {
    console.log("hello frens!")
  }

  return (
    <div onClick={test} id="modal-container" className={modalState ? "hide" : ""}>
      <div id="modal">
        <h3>{name}</h3>
        <ul>
          <li>Specialty: {specialty}</li>
          <li>Weight: {weight}</li>
          <li>Greased: {greased ? "Greased" : "Not Greased"}</li>
          <li>Highest Medal Achieved: {highestMedal}</li>
        </ul>
        <hr />
        <img className='smallImg' src={image} alt={name} />
      </div>
    </div>
  )
}

export default Modal