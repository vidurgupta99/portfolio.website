//hide current modal div using the class given to
//all modal divs in container
const hideModalText = () => {
  $('.modal-class').css('display', 'none')
}
//function that will display the first modal div
const showSecondModal = () => {
  //removes current modal
  hideModalText()
  //shows modal selected with event listener below
  $('#second-modal').css('display', 'block')
  
}

$(() => {
  //use event listener to run function that displays 
  //modal when appropriate button is clicked
  $('#second-modal-button').on('click', showSecondModal)
  
})