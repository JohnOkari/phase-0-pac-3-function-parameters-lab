

function introduction(name){ 
    return `Hi, my name is ${name}.`; 
    // return `Hi, my name is `+name+`.`; 
}

function introductionWithLanguage(name, js){
    return`Hi, my name is ${name} and I am learning to program in ${js}.`;
}


function introductionWithLanguageOptional(name, language){
    return`Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, JavaScript="language"){
    return`Hi, my name is ${name} and I am learning to program in ${JavaScript}.`;
}
 
 

