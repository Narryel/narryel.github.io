


var news = [
["Уважаемые жители штата!", "Сейчас в холле Мэрии ЛС проходит набор в Коллегию Адвокатов."],
["Уважаемые жители штата!", "В холле Мэрии ЛС вы можете получить лицензию Частного Адвоката."],
["Уважаемые граждане штата, Коллегия Адвокатов ведет круглосуточную работу.","Наши сотрудники готовы оказать вам квалифицированную юридическую помощь."],
["По отношению к Вам совершены противоправные действия или нарушены конституционные права?","В холле Мэрии ЛС Вы можете заключить договор с Адвокатом и подать Исковое заявление."],
["Уважаемые Гос. Служащие, напоминаем о необходимости реализации прав граждан.", "По первому запросу от задержанного Вы обязанный запросить Адвоката."],
["Уважаемые граждане штата, возникли вопросы по законодательной базе?","В холле Мэрии ЛС Вы можете получить квалифицированную юридическую помощь."],
["Уважаемые граждане штата, считаете, что Вас незаконно задержали?", "Реализуйте свое конституционное право и запросите Адвоката, который защитит Ваши права."],

]

function generateText(){
    var gos = document.getElementById('gosNews')
    console.log('script')
    console.log(gos)
    var text = document.createTextNode("This just got added")

    var div = document.createElement("div")
    div.innerHTML = "Hello"

    news.forEach(print)
    

}

function print(item, index, arr) {
        var gos = document.getElementById('gosNews')
        item.forEach(printNews)

        var nameDiv = document.createElement("div")
        var name = document.getElementById("lawyerSelect").value
        nameDiv.innerHTML = "С уважением, "+ name
        gos.appendChild(nameDiv)
        gos.appendChild(document.createElement("br"))
}

function printNews(item, index, arr){
    var gos = document.getElementById('gosNews')
             let div = document.createElement("div")
             div.innerHTML = item
             console.log(gos)
             gos.appendChild(div)
             }
