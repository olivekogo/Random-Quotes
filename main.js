var quotes =[
'The caged bird sings with a fearful trill of things unknown but longed for still and his tune is heard on the distant hillfor the caged bird sings of freedom.— Maya Angelou',
'Two things are infinite: the universe and human stupidity; and I am not sure about the universe. ― Albert Einstein',
'In three words I can sum up everything I have learned about life: it goes on. ― Robert Frost',
'No one can make you feel inferior without your consent. ― Eleanor Roosevelt',
'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. ― Martin Luther King Jr.',
'To live is the rarest thing in the world. Most people exist, that is all. ― Oscar Wilde',
'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. ― Ralph Waldo Emerson'
]

function newQuote(){

var randomNumber = Math.floor(Math.random()*(quotes.length));

document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];	
}
