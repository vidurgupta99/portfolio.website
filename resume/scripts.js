//I wanted to make a drop down menu. this is the first thing that i'm going to do in jquery. 
//here is my reference, it was a great tool in making this happen
//https://www.youtube.com/watch?v=kxfXH0dxU70

$(() => {
    $('#links').hover(
        () => {
            $('ul.sub').slideDown(500)
        },
        () => {
            $('ul.sub').slideUp(300)
        }
    )


const addText1 = () => {
    let description1 = $('<p>').text(`In Arts R Us I used an express-style app with a mongo database to build a fully-functioning CRUD based application. I used Express, Html, Mongo, Javascript, and CSS to accomplish this.`)

    $('#p1').append(description1)
    $('#project1Button').prop('disabled', true)

    }

const addText2  = () => {
    let description2 = $('<p>').text(`In Comic World I collaborated with another partner to accomplish a fully functioning CRUD based application using ReactJS for our front-end and MongoDB as our back-end. I successfully implented a sort feature which makes a unique array of names with no duplicates based on JSON information from an API.`)

    $('#p2').append(description2)
    $('#project2Button').prop('disabled', true)

    }

const addText3  = () => {
    let description3 = $('<p>').text(`Keyboard Part-Picker is a CRUD Based application where users can build their own keyboard, or select a default one from a list they can search through. I built this with two other teammates, and we used Django as our back-end framework, react as our front-end, and PostgreSQL as our backend server. `)
    
    $('#p3').append(description3)
    $('#project3Button').prop('disabled', true)
    
}
$('#project1Button').on('click', addText1)
$('#project2Button').on('click', addText2)
$('#project3Button').on('click', addText3)
})

