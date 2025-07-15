//For of
//For in
//For Each

//For of Loop

const Marvel = ['Captain America', 'Ironman', 'Black Widow', 'Hulk', 'Thor'];
for(const Hero of Marvel){
    // console.log(Hero);
    
}

const Hero = "Tanjiro"
for(const Heros of Hero){
    // console.log(Heros);
    
}

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United State Of America')
map.set('FR', 'Franch')
map.set('BI', 'Bali')

for(const [Maps, value] of map){
    // console.log(Maps + " : "+ value);
    
}

const Breaker = {
    name : "Sakura",
    age : 19,
    country : "Tokoyo"
}

// for(const wind of Breaker){ //in forof loop Object will not work
//console.log(wind);
    
// }

for (const key in Breaker) {
    //console.log(Breaker[key]); // it will print key and values
    //console.log(key, "    :    ", Breaker[key]);
    

    
}


//Is forin loop work in Array

const Programming = ['CPP', 'Java', 'JS', 'C#', 'C']
for(const program in Programming){
    //console.log(program , " : " ,Programming[program]);
    
}

for (const mapping in map){ //we use in loop and it is not iterable 
    //console.log(mapping[map]);
    
}