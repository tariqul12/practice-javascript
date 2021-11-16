function getFullName(firstName,lastName){
    // console.log(arguments);
    let fullName='';
    for(i=0;i<arguments.length;i++){
        let namePart=arguments[i];
        fullName=fullName+' '+namePart;
        
    }
    return fullName;
    
}
const name=getFullName('omok','sonket','hanif','sonket','poribohon');
console.log(name);