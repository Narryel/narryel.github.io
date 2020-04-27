const cvData = {
    name: "Валентин",
    surname: "Афанасьев",
    secondName: "Олегович",
    credentials: "Афанасьев В.",
    birthDay: "14-12-1992",
    age: 27,
    profession: "Java developer",
    offspec: "Kotlin developer",
    grade: "middle",
    jobs: [
        {
            order: 0,
            asDeveloper: true,
            from: "декабря 2019",
            to: "текущее время",
            //todo dynamic
            duration: "6 месяцев",
            position: "Backend разработчик",
            companyName: "ООО Кометрика",
            companySite: "https://cometrica.ru/",
            pitch: "Продуктовая и заказная разработка проектов на основе блокчейн",
            stack: ["Java 11", "Kotlin", "Spring", "Spring Boot", "Postgresql", "Docker", "RabbitMQ", "Hyperledger Fabric", "jUnit5/Mockito"],
            responsibilities: ["new feature developing", "refactoring", "code review", "mentoring"]
        },
        {
            order: 1,
            asDeveloper: true,
            from: "октября 2018",
            to: "ноябрь 2019",
            duration: "1 год 3 месяца",
            position: "Старший инженер по разработке (fullstack dev)",
            companyName: "ПАО Сбербанк",
            companySite: "https://www.sberbank.ru/",
            pitch: "Разработка высоконагруженных веб-приложений для внутреннего пользования (инхаус)",
            stack: ["Java 7", "Java EE", "DB2", "IBM WebSphere", "jUnit4", "IBM MQ"],
            responsibilities: ["new feature developing", "refactoring", "unit tests"]
        },
        {
            order: 2,
            asDeveloper: false,
            from: "августа 2016",
            to: "сентябрь 2018",
            duration: "2 года 2 месяца",
            position: "Ведущий инженер по сопровождению",
            companyName: "ПАО Сбербанк",
            companySite: "https://www.sberbank.ru/",
            pitch: "Администрирование крупной внутренней АС (вторая линия поддержки)",
            stack: ["Java 7", "Java EE", "Oracle", "IBM WebSphere", "IBM MQ"],
            responsibilities: ["работа со сложными обращениями", "инцидент-менеджмент", "тестирование", "внедрение и тиражирование ПО", "ведение документации"]
        }


    ],
    hobbies: [],
    sport: [],
    aboutMe: ""


}


const metaPdfContent = [
    {
        text: 'Валентин Афанасьев',
        style: 'header'
    },
    {
        text: 'Java & Kotlin developer',
        style: 'subheader'
    },
    '27 лет',
    '+7-912-237-00-27',
    'narryel@gmail.com',
    'narryel.github.io'

]