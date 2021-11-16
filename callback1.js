function welComeGuest(name,greetHandler){
    greetHandler(name);
}

const actorName = 'Tom Hanks';

function greetMorning(name){
    console.log('Good Morning',name);
}
function greetEvening(name){
    console.log('Good Evening',name);
}
function greetAfterNoon(name){
    console.log('Good Afternoon',name);
}

welComeGuest(actorName,greetAfterNoon);
welComeGuest('Kate Winslet',greetEvening);
welComeGuest('Shakib Khan',greetMorning);
welComeGuest('Tariqul Islam',function(name){
    console.log('Spacial Welcome',name);
})

// function handlerClick(){
//     console.log('Someone Click Me');
// }

// document.getElementById('id').addEventListener('click', handlerClick)