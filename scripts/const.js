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
    age: calculateAge(),
    currentCity: 'Moscow',
    currentCityRus: 'Москва',
    phoneNum: '+7-912-237-00-27',
    mainEmail: 'narryel@gmail.com',
    site: 'https://narryel.github.io',
    github: 'https://github.com/Narryel',
    profession: "Java developer",
    offspec: "Kotlin developer",
    multiSpec: "Java & Kotlin backend developer",
    grade: "middle +",
    devSince: new Date(2018, 9, 5),
    education: [
        {
            text: "Бакалавриат:", bold: true
        },
        " Уральский Федеральный Университет (УрФУ). Радиотехнический факультет. Телекоммуникации и средства связи. \n ",
        {
            text: "Магистратура:", bold: true
        },
        " Уральский Федеральный Университет (УрФУ). Радиотехнический факультет. Инфокоммуникационные технологии. \n"
    ],
    courses: [
        {provider: "OTUS", name: "Разработчик Java"},
        {provider: "Luxoft", name: "Spring Framework"},
        {provider: "Slurm", name: "Docker для админов и разработчиков, Эксперт"},
        {provider: "Slurm", name: "Система управления базами данных: PostgreSQL"},
        {provider: "Slurm", name: "Kubernetes: базовый уровень"}
    ],
    jobs: [
        {
            asDeveloper: true,
            from: "мая 2021",
            dateFrom: new Date(2021, 5, 14),
            to: "текущее время",
            dateTo: Date.now(),
            position: "Backend-разработчик",
            companyName: "Т-Банк (бывший Тинькофф)",
            companySite: "https://www.tbank.ru/",
            pitch: "Разработка микросервисов для обеспечения работы банковского процесса",
            stack: ["Kotlin", "Spring", "Spring Boot", "PostgreSQL", "Oracle", "Kubernetes", "Docker", "Kafka"],
            responsibilities: ["разработка новых фич", "рефакторинг", "код-ревью", "менторинг стажёра"]
        },
        {
            asDeveloper: true,
            from: "декабря 2019",
            dateFrom: new Date(2019, 11, 12),
            to: "май 2021",
            dateTo: new Date(2021, 5, 12),
            position: "Backend-разработчик",
            companyName: "ООО Кометрика",
            companySite: "https://cometrica.ru/",
            pitch: "Продуктовая разработка на основе блокчейн (HLF). Заказная разработка enterprise-решений для крупных заказчиков.",
            stack: ["Java 11", "Kotlin", "Spring", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "RabbitMQ", "Hyperledger Fabric", "jUnit5/Mockito"],
            responsibilities: ["разработка новых фич", "рефакторинг", "код-ревью", "менторинг"]
        },
        {
            asDeveloper: true,
            from: "октября 2018",
            dateFrom: new Date(2018, 9, 5),
            to: "ноябрь 2019",
            dateTo: new Date(2019, 10, 30),
            position: "Старший инженер по разработке (fullstack dev)",
            companyName: "ПАО Сбербанк",
            companySite: "https://www.sberbank.ru/",
            pitch: "Разработка высоконагруженных веб-приложений для внутреннего пользования (инхаус)",
            stack: ["Java 7", "Java EE", "DB2", "IBM WebSphere", "jUnit4", "IBM MQ"],
            responsibilities: ["разработка новых фич", "рефакторинг", "юнит-тесты"]
        },
        {
            asDeveloper: false,
            from: "августа 2016",
            dateFrom: new Date(2016, 7, 16),
            to: "сентябрь 2018",
            dateTo: new Date(2018, 8, 30),
            position: "Ведущий инженер по сопровождению",
            companyName: "ПАО Сбербанк",
            companySite: "https://www.sberbank.ru/",
            pitch: "Администрирование крупной внутренней АС (вторая линия поддержки)",
            stack: ["Java 7", "Java EE", "Oracle", "IBM WebSphere", "IBM MQ"],
            responsibilities: ["работа со сложными обращениями", "инцидент-менеджмент", "тестирование", "внедрение и тиражирование ПО", "ведение документации"]
        }
    ],
    projects: [
        {
            name: "VΛ Atelier",
            link: "https://va-atelier.ru",
            pitch: "Собственный проект с нуля до продакшена: интернет-магазин кожаных изделий ручной работы. В одиночку: продукт, сайт, бэкенд, деплой, юридическая часть.",
            stack: ["Vanilla JS SPA", "Kotlin", "Ktor", "SQLite", "GitHub Actions", "nginx"],
            facts: ["SPA без фреймворков и сборки", "API на Kotlin/Ktor с юнит-тестами", "CI/CD через GitHub Actions на VPS"]
        },
        {
            name: "Калорийка",
            inProgress: true,
            pitch: "Telegram-бот дневника питания: отправляешь фото еды с весами — он распознаёт блюда через vision-модель и считает калории и БЖУ. Правки — голосом или текстом.",
            stack: ["Python", "Telegram Bot API", "Vision LLM"],
            facts: ["фото еды → калории и БЖУ", "правки голосом и текстом", "личный бот, до 10 пользователей"]
        },
        {
            name: "Динамическое резюме",
            link: "https://narryel.github.io",
            pitch: "Этот сайт. Один источник данных собирает и веб-страницу, и PDF с настраиваемым содержимым (чекбоксы в модалке выше).",
            stack: ["JavaScript", "pdfmake"],
            facts: ["PDF собирается целиком на клиенте"]
        }
    ],
    hobbiesAndSport: [
        "Плавание — бассейн и открытая вода. Переплыл большое количество озёр и рек России: 11 км на Тургояке, а на Онежском озере эстафетой из Ялгоры вместе с командой прошли 88 км за 36 часов, из которых мои — 25.\n",
        "Велосипед: катаюсь с велоклубом, велосипед оброс гаджетами и деталями с 3D-принтера.\n",
        "3D-печать и параметрическое моделирование (OpenSCAD): проектирую и печатаю функциональные вещи — держатели, крепления, корпуса.\n",
        [
            "Кожевенное ремесло: шью изделия из кожи под собственным брендом VΛ (оно же проект ",
            {
                text: "va-atelier.ru",
                link: "https://va-atelier.ru"
            },
            ")."
        ]
    ],
    aboutMe: [
        "Своей сильной стороной считаю умение находить общий язык с людьми. Во время дискуссий стараюсь понять \"другую сторону\".\n",
        [
            "Не успокаиваюсь, пока побочный проект не доехал до прода: так доехали ",
            {
                text: "va-atelier.ru",
                link: "https://va-atelier.ru"
            },
            " и этот сайт.\n"
        ],
        "Стараюсь развиваться во многих областях, немножко перфекционист :)\n"
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
        "(основные задачи можно посмотреть в графе 'Опыт работы'). \n",
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
        " Позднее перешел в компанию Кометрика (г. Москва) в качестве backend-разработчика, а затем — в команду АО Тинькофф, который с 2024 года называется Т-Банк, и работаю там по сей день.",
        " Параллельно с наймом запустил собственный проект — интернет-магазин кожаных изделий ",
        {
            text: "va-atelier.ru",
            link: "https://va-atelier.ru"
        },
        "."
    ]
}

function calculateAge() {
    let ageDifMs = Date.now() - new Date(1992, 11, 14);
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function getYearsLiteral(years) {
    if (years % 10 === 1 && years % 100 !== 11) {
        return " год";
    } else if (years % 10 >= 2 && years % 10 <= 4 && (years % 100 < 10 || years % 100 >= 20)) {
        return " года";
    } else {
        return " лет";
    }
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
    cvData.age + getYearsLiteral(cvData.age) + ', ' + cvData.currentCityRus,
    // TODO может обратно добавлю
    // cvData.phoneNum,
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
