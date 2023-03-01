$(() => {

    // Elements Created for JQuery
    
    $aboutMeDiv = $('#bio-paragraph')
    $resumeDiv = $('#resume-paragraph')
    $projectsDiv = $('#projects-divy')

    
    
    
    // On Load, show/hide:
    $aboutMeDiv.hide()
    $projectsDiv.hide()
    $resumeDiv.hide()
  
    // $erapDeets.hide()
    // $donorDeets.hide()
    // $libDeets.hide()
    // $mcanDeets.hide()
    
    
    
    // Funtions for on-click:
    const expandContainer = () => {
        $aboutMeDiv.slideToggle(700)
        $resumeDiv.slideUp(700)
        $projectsDiv.slideUp(700)
    }
    
    const closeAndExpand = () => {
        $projectsDiv.slideToggle(700)
        $aboutMeDiv.slideUp(700)
        $resumeDiv.slideUp(700)
    }
    const expandOther = () => {
        $resumeDiv.slideToggle(700)
        $aboutMeDiv.slideUp(700)
        $projectsDiv.slideUp(700)
    }
   
    // OnClick Actions
        $('#about-header').on('click', expandContainer)
        $('#projects-header').on('click', closeAndExpand)
        $('#resume-header').on('click', expandOther)
     
    
    
    })