function compiyer(business,minister,sochib){
  if(business>minister){
      if(business>sochib){
        return "business is bigger";
      }
      else{
        return "sochib is bigger"
      }
  }
  else{
    if(minister>sochib){
      return "minister is bigger";
    }
    else{
      return "sochib is bigger";
    }
  }
}
console.log(compiyer(30,13,25));
