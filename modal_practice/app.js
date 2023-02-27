console.log($);
console.log('modal practice app.js is linked to this index.html');


$(()=>{
    const $openBtn = $('#openModal');

    const $modal = $('#modal');

    const $closeBtn = $('#close');


    const openModal = ()=>{
        $modal.css('display', 'block')
    }
    $openBtn.on('click', openModal)


    const closeModal =()=>{
        $modal.css('display', 'none')

    }

    $closeBtn.on('click', closeModal)

    // setTimeout(openModal, 5000)
    // setTimeout(closeModal, 10000)

})