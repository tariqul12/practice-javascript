function wootcalculas(chair,table,bad){
    if(chair<0||table<0||bad<0){
        console.log("please! enter your input:")

    }
    totalwood=(chair+1)+(table+3)+(bad+5);
    console.log("total wood needed:"+totalwood+"cf");

}
//out chack
wootcalculas(1,5,10);