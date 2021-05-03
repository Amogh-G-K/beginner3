//data
let data = [
    {
        name: 'Scorpion',
        by: 'player1'
    },
    {
        name: 'Sub-Zero',
        by: 'player2'
    },
    {
        name: 'Liu Kang',
        by: 'player1'
    },
    {
        name: 'Raiden',
        by: 'player2'
    },
    {
        name: 'Sony Blade',
        by: 'player1'
    },
    {
        name: 'Goro',
        by: 'player2'
    }
];

//SELECTOR
const lists = document.querySelector('.info');

let details = data.map(function(item) {
    if(item.by === 'player1'){
        return '<div class="info1">' + item.name + '<br>' + item.by + '</div>';
    }
    else{
        return '<div class="info2">' + item.name + '<br>' + item.by + '</div>'
    }
});

lists.innerHTML = details.join('\n');
