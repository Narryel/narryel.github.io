const STYLENAMES = {
    PARAGRAPH_NAME: 'paragraphStart',
    HEADER: 'header',
    SUBHEADER: 'subheader',
    H2: 'subheader2',
    SMALL_GRAY: 'smallGray'
}

const cvData = {
    name: "Валентин",
    surname: "Афанасьев",
    secondName: "Олегович",
    credentials: "Афанасьев В.",
    birthDay: "14-12-1992",
    age: 27,
    phoneNum: '+7-912-237-00-27',
    mainEmail: 'narryel@gmail.com',
    cite: 'narryel.github.io',
    profession: "Java developer",
    offspec: "Kotlin developer",
    grade: "middle",
    education: [
        {
            text: "Бакалавриат:", bold: true
        },
        " Уральский Федеральный Университет (УрФУ). Радиотехнический факультет. Телекоммуникации и средства связи. \n ",
        {
            text: "Магистратура:", bold: true
        },
        " Уральский Федеральный Университет (УрФу). Радиотехнический факультет. Инфокоммуникационные технологии. \n"
    ],
    jobs: [
        {
            asDeveloper: true,
            from: "декабря 2019",
            to: "текущее время",
            //todo dynamic
            duration: "6 месяцев",
            position: "Backend-разработчик",
            companyName: "ООО Кометрика",
            companySite: "https://cometrica.ru/",
            pitch: "Продуктовая и заказная разработка проектов на основе блокчейн",
            stack: ["Java 11", "Kotlin", "Spring", "Spring Boot", "Postgresql", "Docker", "RabbitMQ", "Hyperledger Fabric", "jUnit5/Mockito"],
            responsibilities: ["new feature developing", "refactoring", "code review", "mentoring"]
        },
        {
            asDeveloper: true,
            from: "октября 2018",
            to: "ноябрь 2019",
            duration: "1 год 3 месяца",
            position: "Старший инженер по разработке (fullstack dev)",
            companyName: "ПАО Сбербанк",
            companySite: "https://sberbank.ru/",
            pitch: "Разработка высоконагруженных веб-приложений для внутреннего пользования (инхаус)",
            stack: ["Java 7", "Java EE", "DB2", "IBM WebSphere", "jUnit4", "IBM MQ"],
            responsibilities: ["new feature developing", "refactoring", "unit tests"]
        },
        {
            asDeveloper: false,
            from: "августа 2016",
            to: "сентябрь 2018",
            duration: "2 года 2 месяца",
            position: "Ведущий инженер по сопровождению",
            companyName: "ПАО Сбербанк",
            companySite: "https://sberbank.ru/",
            pitch: "Администрирование крупной внутренней АС (вторая линия поддержки)",
            stack: ["Java 7", "Java EE", "Oracle", "IBM WebSphere", "IBM MQ"],
            responsibilities: ["работа со сложными обращениями", "инцидент-менеджмент", "тестирование", "внедрение и тиражирование ПО", "ведение документации"]
        }


    ],
    hobbies: [],
    sport: [],
    aboutMe: "",
    bio: [
        "Родился и до 25ти лет прожил в городе Екатеринбурге. Успешно окончил бакалавриат ",
        {
            text: "Уральского Федерального Университета (УрФУ) по программе Телекоммуникации и Средства Связи (Радиотехнический факультет). ",
            italics: true
        },
        "Поступил на магистратуру той же специальности и начал параллельно работать в продажах телекома (проектный менеджмент). После защиты диссертации магистра ",
        {
            text: "устроился на первую работу в IT в ПАО Сбербанк в группу администрирования фронтальной АС ",
            italics: true
        },
        "(основные задачи можно посмотреть в графе \'Опыт работы\'). \n",
        " Проработав два года, понял, что мне хочется более глубоко разбираться в своем продукте и ",
        {
            text: "перевелся в управление Казначейства ПАО Сбербанка (г. Санкт-Петербург) уже в должности разработчика. \n",
            italics: true
        },
        "Выполнял задачи по доработке высоконагруженной системы и на бэк и на фронте.",
        {
            text: " Прошел курсы по JVM-стеку: \"OTUS.RU - Разработчик Java\" и \"LUXOFT.COM - Spring Framework\". \n",
            italics: true
        },
        " Позднее перешел в компанию Кометрика (г. Москва) в качестве backend-разработчика, где и работаю по текущий день"
    ]


}


const metaPdfContent = [
    {
        text: 'Валентин Афанасьев',
        style: STYLENAMES.HEADER
    },
    {
        text: 'Java & Kotlin developer',
        style: STYLENAMES.SUBHEADER
    },
    '27 лет',
    '+7-912-237-00-27',
    'narryel@gmail.com',
    'https://narryel.github.io'

]



const pdfStyles = {
    header: {
        fontSize: 22,
        bold: false,
        alignment: 'left',
        margin: [0, 60, 0, 0]
    },
    subheader: {
        fontSize: 18,
        margin: [0, 0, 0, 0]

    },
    subheader2: {
        fontSize: 16,
        margin: [0, 0, 0, 0]

    },
    superMargin: {
        margin: [20, 0, 40, 0],
        fontSize: 15
    },
    smallGray: {
        fontSize: 12,
        italics: true,
        color: '#8e8e8e'
    },
    paragraphStart: {
        fontSize: 18,
        bold: true,
        margin: [0, 10, 0, 10]
    }

}