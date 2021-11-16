function compyer(business,minister,sochib){
    if (business>minister){
        if(business>sochib){
            return "business is biggest"
        }
        else{
            return "sochib is biggest"
        }

    }
    else{
        if(minister>sochib){
            return "minister is biggest"
            
        }
        else{
            return "sochib is biggest"
        }
    }
}
const result = compyer(599,45444,5362);
console.log(result);
