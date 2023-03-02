$(() => {

    // Elements Created for JQuery
    
    $linkedinDiv = $('#linkedinParagraph') // 'linkedinParagraph' '#bioparagraph'
    $githubDiv = $('#github-paragraph') // 'resume-paragraph'
    $extraDiv = $('#projects-divy')

    
    
    
    // On Load, show/hide:
    $linkedinDiv.hide()
    $extraDiv.hide()
    $githubDiv.hide()
      
  
    
    // Funtions for on-click:
    const expandContainer = () => {
        $linkedinDiv.slideToggle(700)
        $githubDiv.slideUp(700)
        $extraDiv.slideUp(700)
    }
    
    const closeAndExpand = () => {
        $extraDiv.slideToggle(700)
        $linkedinDiv.slideUp(700)
        $githubDiv.slideUp(700)
    }
    const expandOther = () => {
        $githubDiv.slideToggle(700)
        $linkedinDiv.slideUp(700)
        $extraDiv.slideUp(700)
    }
   
    // OnClick Actions
        $('#github').on('click', expandContainer) // #about-header. github-header
        $('#extra').on('click', closeAndExpand) // 'extra'
        $('#linkedin').on('click', expandOther)
     
    
    
    })