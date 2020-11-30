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
    currentCity: 'Moscow',
    currentCityRus: 'Москва',
    phoneNum: '+7-912-237-00-27',
    mainEmail: 'narryel@gmail.com',
    site: 'https://narryel.github.io',
    github: 'https://github.com/Narryel',
    profession: "Java developer",
    offspec: "Kotlin developer",
    multiSpec: "Java & Kotlin developer",
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
            dateFrom: new Date(2019, 11, 12),
            to: "текущее время",
            dateTo: Date.now(),
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
            dateFrom: new Date(2018, 9, 5),
            to: "ноябрь 2019",
            dateTo: new Date(2019, 10, 30),
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
            dateFrom: new Date(2016, 7, 16),
            to: "сентябрь 2018",
            dateTo: new Date(2018, 8, 30),
            position: "Ведущий инженер по сопровождению",
            companyName: "ПАО Сбербанк",
            companySite: "https://sberbank.ru/",
            pitch: "Администрирование крупной внутренней АС (вторая линия поддержки)",
            stack: ["Java 7", "Java EE", "Oracle", "IBM WebSphere", "IBM MQ"],
            responsibilities: ["работа со сложными обращениями", "инцидент-менеджмент", "тестирование", "внедрение и тиражирование ПО", "ведение документации"]
        }


    ],
    hobbiesAndSport: [
        "Хобби у меня достаточно много, основные поедающие время и деньги сейчас – это сноуборд и страйкбол.\n",
        "Ещё люблю собирать мини-коллекции и в 2019 году удалось посетить 3 разных страны. \n",
        "Нравится заниматься спортом - фитнес и плавание, умею играть в настольный теннис и футбол (и чуточку во все остальные спортивные игры)."
    ],
    aboutMe: [
        "Своей сильной стороной считаю умение находить общий язык с людьми. Во время дискуссий стараюсь понять \"другую сторону\" \n",
        "Стараюсь развиваться во многих областях, немножко перфекционист :) \n"
    ],
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
        text: cvData.name + ' ' + cvData.surname,
        style: STYLENAMES.HEADER
    },
    {
        text: cvData.multiSpec,
        style: STYLENAMES.SUBHEADER
    },
    cvData.age + ' лет',
    cvData.currentCity,
    cvData.phoneNum,
    cvData.mainEmail,
    cvData.site,
    cvData.github

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
        margin: [0, 20, 0, 10]
    }

}