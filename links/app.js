$(() => {

    // Elements Created for JQuery
    
    $aboutMeDiv = $('#bio-paragraph')
    $resumeDiv = $('#resume-paragraph')
    $projectsDiv = $('#projects-divy')
    $professionalDiv = $('.hide-jobs')
    $skillsDeets = $('#skills')
    $experience = $('#experiencehead')
    $resumeSections = $('.resumeheader')
    $resumeDeets = $('.resume-details')
    
    
    
    // On Load, show/hide:
    $aboutMeDiv.hide()
    $projectsDiv.hide()
    $resumeDiv.hide()
  
    // $erapDeets.hide()
    // $donorDeets.hide()
    // $libDeets.hide()
    // $mcanDeets.hide()
    
    
    
    // Funtions for on-click:
    const toggleAboutMe = () => {
        $aboutMeDiv.slideToggle(2000)
        $resumeDiv.slideUp(2000)
        $projectsDiv.slideUp(2000)
    }
    const toggleProjects = () => {
        $projectsDiv.slideToggle(2000)
        $aboutMeDiv.slideUp(2000)
        $resumeDiv.slideUp(2000)
    }
    const toggleResume = () => {
        $resumeDiv.slideToggle(2000)
        $aboutMeDiv.slideUp(2000)
        $projectsDiv.slideUp(2000)
        $eduDetails.slideUp(1500)
        $volDetails.slideUp(1500)
        $skillsDeets.slideUp(1500)
    }
   
    // OnClick Actions
        $('#about-header').on('click', toggleAboutMe)
        $('#projects-header').on('click', toggleProjects)
        $('#resume-header').on('click', toggleResume)
     
    
    
    })