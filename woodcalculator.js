function woodCalculator(chair,table,bad){
    if(chair<0||table<0||bad<0){
        console.log("Please!enter your input:");
    }
    totalWood=(chair+1)+(table+3)+(bad+5);
    console.log("total wood needed "+totalWood+" cf");
}
woodCalculator(1,5,10);