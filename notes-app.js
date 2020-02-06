const yargs = require('yargs')
const Notes = require('./utils.js')
yargs.command(
{

    command: 'add',
    describe:'Notes adding feature',
    builder:{
    
        title:{
            describe:'It adds a notes title',
            demandOption:true
        },
        body:{
            describe:'It adds a notes body',
            demandOption:true
        }
    },
    handler: function(argv){
        // console.log(argv.title)
Notes.addnotes(argv.title, argv.body);
    }
})

yargs.command(
    {
    
        command: 'remove',
        describe:'Notes removing feature',
        builder:{
        
            title:{
                describe:'It adds a notes title',
                demandOption:true
            }
        },
        handler: function(argv){
            Notes.removenotes(argv.title);
        }
    })




    yargs.command(
        {
        
            command: 'read',
            describe:'Notes reading feature',
            handler: function(argv){
                Notes.readnotes();
            }
        })




console.log(yargs.argv);