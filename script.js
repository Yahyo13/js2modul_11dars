let box = document.querySelector(`.box`)


let data = [
    {
        number: '001',
        name: `Bulbasaur`,
        img: `./001.png.png`,
        button: `Grass Poison`,
        count: 25,
        weight: `6.9 kg`, 
        p:`Fire Ice Flying Psychic`
    },

    {
        number: '002',
        name: `Ivysaur`,
        img: `./002.png.png`,
        button: `Grass Poison`,
        count: 100,
        weight: `13.0 kg`, 
        p:`Fire Ice Flying Psychic`
    },


    {
        number: '003',
        name: `Venusaur`,
        img: `./003.png.png`,
        button: `Grass Poison`,
        count: `undefined`,
        weight: `100.0 kg`, 
        p:`Fire Ice Flying Psychic`
    },

    {
        number: '004',
        name: `Charmander`,
        img: `./004.png.png`,
        button: `Fire`,
        count: 25,
        weight: `8.5 kg`, 
        p:`Water Ground Rock`
    },

    {
        number: '005',
        name: `Charmeleon`,
        img: `./005.png.png`,
        button: `Fire`,
        count: 100,
        weight: `19.0 kg`, 
        p:`Water Ground Rock`
    },

    {
        number: '006',
        name: `Charizard`,
        img: `./006.png.png`,
        button: `Fire Flying`,
        count: 'undefined',
        weight: `90.5 kg`, 
        p:`Water Electric Rock`
    },

    {
        number: '007',
        name: `Squirtle`,
        img: `./007.png.png`,
        button: `Water`,
        count: 25,
        weight: `9.0 kg`, 
        p:`Electric Grass`
    },

    {
        number: '008',
        name: `Wartortle`,
        img: `./008.png.png`,
        button: `Water`,
        count: 100,
        weight: `22.5 kg`, 
        p:`Electric Grass`
    },


    {
        number: '009',
        name: `Blastoise`,
        img: `./009.png.png`,
        button: `Water`,
        count: 'undefined',
        weight: `85.5 kg`, 
        p:`Electric Grass`
    },

    {
        number: '010',
        name: `Caterpie`,
        img: `./010.png.png`,
        button: `Bug`,
        count: 12,
        weight: `2.9 kg`, 
        p:`Fire Flying Rock`
    },

    {
        number: '011',
        name: `Metapod`,
        img: `./011.png.png`,
        button: `Bug`, 
        count: 50,
        weight: `9.9 kg`, 
        p:`Fire Flying Rock`
    },

    {
        number: '012',
        name: `Butterfree`,
        img: `./012.png.png`,
        button: `Bug Flying`,
        count: `undefined`,
        weight: `32.0 kg`, 
        p:`Fire Electric Ice Flying Rock`
    },

    {number: '013',
        name: `Weedle`,
        img: `./013.png.png`,
        button: `Bug Poison`,
        count: 12,
        weight: `3.2 kg`, 
        p:`Fire Flying Psychic Rock`
    },

    {number: '014',
        name: `Kakuna`,
        img: `./014.png.png`,
        button: `Bug Poison`,
        count: 50,
        weight: `10.0 kg`, 
        p:`Fire Flying Psychic Rock`
    },

    {number: '015',
        name: `Beedrill`,
        img: `./015.png.png`,
        button: `Bug Poison`,
        count: `undefined`,
        weight: `29.5 kg`, 
        p:`Fire Flying Psychic Rock`
    },

    {number: '016',
        name: `Pidgey`,
        img: `./016.png.png`,
        button: `Normal Flying`,
        count: 12,
        weight: `1.8 kg`, 
        p:`Electric Rock`
    },

    {number: '017',
        name: `Pidgeotto`,
        img: `./017.png.png`,
        button: `Normal Flying`,
        count: 50,
        weight: `30.0 kg`, 
        p:`Electric Rock`
    },

    {number: '018',
        name: `Pidgeot`,
        img: `./018.png.png`,
        button: `Normal Flying`,
        count: `undefined`,
        weight: `39.5 kg`, 
        p:`Electric Rock`
    },

    {number: '019',
        name: `Rattata`,
        img: `./019.png.png`,
        button: `Normal`,
        count: 25,
        weight: `3.5 kg`, 
        p:`Fighting`
    },
    
    {number: '020',
        name: `Raticate`,
        img: `./020.png.png`,
        button: `Grass Poison`,
        count: `undefined`,
        weight: `18.5 kg`, 
        p:`Fighting`
    }

]





let myFunction = ( filtered)=>{
box.innerHTML = "";
    
filtered.map((item)=>{

    box.innerHTML += `
    <div class="b">
            <div class="number">${item.number}</div>
             <h2>${item.name}</h2>
            <img src="${item.img}" alt=""> <br>
            <button>${item.button}</button>
                <h3>Candy count: ${item.count}</h3>
                <h3>${item.weight}</h3>
                <h4>${item.p}</h4>
    </div>
      
    `;
});
       
}



let select = document.querySelector(`select`)

myFunction(data)
select.addEventListener(`change`, ()=>{
    let newDate = [...data]

    if(select.value == 'name'){
        newDate.sort((a,b)=> a.name.localeCompare(b.name))
    }else if(select.value == 'name2'){
        newDate.sort((a,b)=> b.name.localeCompare(a.name))
    }else if(select.value == 'password'){
        newDate.sort((a,b)=> a.number - b.number)
    }else if(select.value == 'password2'){
        newDate.sort((a,b)=> b.number - a.number)
    }
    

    myFunction(newDate)
})

let inp = document.querySelector(`input`)

inp.addEventListener(`input`, ()=>{
    let filtered = data.filter((item)=>{
        return item.name.toLowerCase().includes(inp.value.toLowerCase())
    })
    myFunction(filtered)
})