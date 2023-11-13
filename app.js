var listOfTegs = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var resultOfTegs = {}

for (var i = 0; i < listOfTegs.length; i++){
    var tegs = listOfTegs[i]

    if (resultOfTegs[tegs]){
      resultOfTegs[tegs]++
    } else {
      resultOfTegs[tegs] = 1
    }
}
console.log(resultOfTegs)


var order = prompt('coffee or tea?')

var starbucks = {
    coffee: {
        americano: 'Американо-Идеальный кофе разбавленный чистой, отфильтрованной водой',
        latte: 'Латте-Кофе с добавлением большого количества горячего молока и молочной пены ',
        cappuccino: 'Капучино-Кофе с добавлением небольшого количества молока , и большим количеством молочной пены',
        espresso: 'Эспрессо-Чистый кофе',
        macchiato: 'Макиато-Двойная порция кофе с добавлением молочной пены'
    },
    tea: {
        green:'Зеленый чай-Листья китайского зеленого чая с горячей водой',//Зеленый чай
        chamomile:'Ромашковый чай-Травяной напиток, который приготавливается на основе сушеных цветков ромашки',  //Ромашковый чай
        ginger:'Имбирный чай-Напиток, приготовленный на основе корня имбиря с добавлением мёда (по желанию)',  //Имбирный чай
        mint:'Мятный чай-Листья зеленого чая с добалением мяты и горячей воды',  //Мятный чай
        hibiscus:'Гибискучовый чай-Tравяной чайный напиток изготавливаемый из сушёных чашечек цветков розеллы, или суданской розы'  //Гибискучовый чай
    }
}

if (order in starbucks){
    var chooseName = prompt(`Введите название ${order}: `)

    if (order === 'coffee' && chooseName in starbucks.coffee){
        alert(`${starbucks.coffee[chooseName]} оформлен`)
    } else if (order === 'tea' && chooseName in starbucks.tea){
        alert(`${starbucks.tea[chooseName]} оформлен`)
    }else {
        alert(`${chooseName} нет в списке напитков`)
    }
} else {
    alert(`${order} нет в списке меню`)
}