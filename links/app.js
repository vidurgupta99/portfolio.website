$(() => {

    // Elements Created for JQuery
    
    $linkedinDiv = $('#linkedinParagraph')
    $githubDiv = $('#github-paragraph')
    $extraDiv = $('#extraDiv')

    // On Load, show/hide:
    $linkedinDiv.hide()
    $extraDiv.hide()
    $githubDiv.hide()
          
    // Funtions for on-click:

    const closeAndExpand = () => {
        $extraDiv.slideToggle(700)
        $linkedinDiv.slideUp(700)
        $githubDiv.slideUp(700)
    }
    const expandContainer = () => {
        $linkedinDiv.slideToggle(700)
        $githubDiv.slideUp(700)
        $extraDiv.slideUp(700)
    }
    
    const expandOther = () => {
        $githubDiv.slideToggle(700)
        $linkedinDiv.slideUp(700)
        $extraDiv.slideUp(700)
    }
   
        $('#github').on('click', expandContainer)
        $('#extra').on('click', closeAndExpand)
        $('#linkedin').on('click', expandOther)
    })