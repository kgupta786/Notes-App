const chalk = require('chalk');
const fs= require('fs');


const addnotes = function(title,body){
const notes = loadnotes();
flag=false;
notes.forEach(element => {
    if(element.title==title)
    {
        flag = true;
    }
});

if(flag){
 console.log(chalk.redBright('Notes already present in the database'))
}
else{
    notes.push({
        title:title,
        body:body
    });
    savenotes(notes);
    console.log(chalk.greenBright('Notes saved successfully in the database!'))
}


}


const loadnotes = function(){

try{
    const jsonobj = fs.readFileSync('notes.json');
    const norobj = JSON.parse(jsonobj.toString());
    return norobj;
}
catch(e){
return [];
}
    
}


const removenotes = function(title){
    const notes = loadnotes();
    flag=false;
    notes.forEach(element => {
        if(element.title==title)
        {
            flag = true;
        }
    });

    if(flag==true){
arrnotes=[];
notes.forEach(element => {
    if(element.title!=title)
    {
        arrnotes.push(element);
    }
});
savenotes(arrnotes);
console.log(chalk.blueBright('Notes removed successfully from the database'))
    }
    else{
        console.log(chalk.redBright('Notes already deleted from the database'))
    }
    
}


const readnotes = function(){
    const notes = loadnotes();
    
    if(notes.length>0)
    {
        notes.forEach(element => {
            console.log(chalk.blue("Notes Title: ")+element.title+chalk.yellow(" Notes Body: ")+element.body);
        });
    }
    else{
        console.log(chalk.redBright('Notes list is empty'))
    }
    
}


const savenotes = function(notes){

    const jsonobj = JSON.stringify(notes);
    fs.writeFileSync('notes.json',jsonobj);
   
}


module.exports={
    addnotes,
    removenotes,
    readnotes
}