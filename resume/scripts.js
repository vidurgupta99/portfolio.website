//hide current modal div using the class given to
//all modal divs in container
const hideModalText = () => {
  $('.modal-class').css('display', 'none')
}
//function that will display the first modal div
const showFirstModal = () => {
  //hides current (all) modals
  hideModalText()
  //shows modal selected with event listener below
  $('#first-modal').css('display', 'block')
}
const showSecondModal = () => {
  //removes current modal
  hideModalText()
  //shows modal selected with event listener below
  $('#second-modal').css('display', 'block')
  
}
const showThirdModal = () => {
  //removes current modal
  hideModalText()
  //shows modal selected with event listener below
  $('#third-modal').css('display', 'block')
}

$(() => {
  //use event listener to run function that displays 
  //modal when appropriate button is clicked
  $('#first-modal-button').on('click', showFirstModal)
  
  $('#second-modal-button').on('click', showSecondModal)
  
  $('#third-modal-button').on('click', showThirdModal)
})