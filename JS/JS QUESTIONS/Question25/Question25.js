var library = [
    {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    readingStatus: true
    },
    {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true
    },
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false
    }
    ];

    for(i=0;i<library.length;i++){
        let k=library[i];
        if(k.readingStatus==true){
            console.log(`Already read ${k.title} by ${k.author}`)
        }
        else{
            console.log(`You still need to read ${k.title} by ${k.author}`);
        }
    }

    
