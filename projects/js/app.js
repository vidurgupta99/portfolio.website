// console.log("corgi carousel connected to app.js!");
$(() => {

    let currentImgIndex = 0

    const numOfImages = $('.carousel-images').children().length - 1


    // NEXT BUTTON EVENT
    $('.next').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

        if (currentImgIndex < numOfImages) {
            currentImgIndex++
        } else {
            currentImgIndex = 0
        }

        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
    })


    // PREVIOUS BUTTON EVENT
    $('.previous').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

        if (currentImgIndex > 0) {
            currentImgIndex--
        } else {
            currentImgIndex = numOfImages
        }

        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')


    })


});
