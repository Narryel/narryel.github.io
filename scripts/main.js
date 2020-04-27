// Modal window (generatte PDF)
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function fillPdfContent() {
    let pdfContent = {
        content: [],
        styles: {
            header: {
                fontSize: 22,
                bold: false,
                alignment: 'left',
                margin: [0, 90, 0, 0]
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
            }
        }
    }
    pdfContent.content.push(metaPdfContent)


    fillJobsContent(pdfContent.content);
    // let photoCbValue = document.getElementById("photoCb").value;
    // if (photoCbValue) {
    //     let columnBio = {
    //         columns: [
    //             {
    //                 text: 'Валентин Афанасьев',
    //                 style: 'header'
    //             },
    //             {
    //                 image: '',
    //                 width: 300
    //             }
    //         ]
    //     }
    //     pdfContent.content.push(columnBio)
    // }

    return pdfContent


}


function fillJobsContent(content) {
    content.push({
        text: 'Опыт работы',
        style: 'subheader'
    })

    let jobRadioValue = document.querySelector('input[name="job"]:checked').value;
    let jobArray = []

    switch (jobRadioValue) {
        case 'last': {
            jobArray.push(formatJobInfo(cvData.jobs[0]))
            break
        }

        case 'all': {
            cvData.jobs.forEach(function (element, index, array) {
                jobArray.push(formatJobInfo(element))
            })
            break
        }

        case 'dev': {
            //fixme не оптимально
            let devJobs = cvData.jobs.filter(function (elem) {
                return elem.asDeveloper===true
            })
            devJobs.forEach(function (element, index, array) {
                jobArray.push(formatJobInfo(element))
            })
            break
        }

    }
    content.push({
        ul: jobArray
    })

}

function formatJobInfo(jobData) {
    return [
        {
            text: jobData.position + ' в компании ' + jobData.companyName,
            style: 'subheader2'
        },
        {
            text: jobData.pitch, italics: true
        },
        {
            text: 'c ' + jobData.from + ' по ' + jobData.to + ' (' + jobData.duration + ') \n',
            style: 'smallGray'
        },
        {
            text: 'Стек: ' + jobData.stack.join(' , '),
        },
        {
            text: 'Задачи: ' + jobData.responsibilities.join(' , '),
        },

    ]
}

function makePDF() {
    let pdfContent = fillPdfContent();
    pdfMake.createPdf(pdfContent).download(cvData.credentials + " CV.pdf");
}

function openPDF() {
    let pdfContent = fillPdfContent();
    pdfMake.createPdf(pdfContent).open();
}


let dd = {
    content: [
        {
            stack: [
                cvData.credentials,
                {text: 'This is a subheader', style: 'subheader'},
            ],
            style: 'header'
        },
        {
            text: [
                'Margins have slightly different behavior than other layout properties. They are not inherited, unlike anything else. They\'re applied only to those nodes which explicitly ',
                'set margin or style property.\n',
            ]
        },
        {
            text: 'This paragraph (consisting of a single line) directly sets top and bottom margin to 20',
            margin: [0, 20],
        },
        {
            stack: [
                {
                    text: [
                        'This line begins a stack of paragraphs. The whole stack uses a ',
                        {text: 'superMargin', italics: true},
                        ' style (with margin and fontSize properties).',
                    ]
                },
                {
                    text: ['When you look at the', {
                        text: ' document definition',
                        italics: true
                    }, ', you will notice that fontSize is inherited by all paragraphs inside the stack.']
                },
                'Margin however is only applied once (to the whole stack).'
            ],
            style: 'superMargin'
        },
        {
            stack: [
                'I\'m not sure yet if this is the desired behavior. I find it a better approach however. One thing to be considered in the future is an explicit layout property called inheritMargin which could opt-in the inheritance.\n\n',
                {
                    fontSize: 15,
                    text: [
                        'Currently margins for ',
                        /* the following margin definition doesn't change anything */
                        {text: 'inlines', margin: 20},
                        ' are ignored\n\n'
                    ],
                },
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify'
        }
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            alignment: 'right',
            margin: [0, 190, 0, 80]
        },
        subheader: {
            fontSize: 14
        },
        superMargin: {
            margin: [20, 0, 40, 0],
            fontSize: 15
        }
    }

}