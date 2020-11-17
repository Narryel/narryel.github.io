// Modal window (generate PDF)
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

function fillMetaContent(content) {

    let photoCbValue = document.getElementById('photoCb').checked;
    if (photoCbValue !== true) {

        content.push(metaPdfContent)
        return
    }

    let columnBio = {
        columns: [
            metaPdfContent,
            {
                image: circleAva,
                fit: [175, 175],
                margin: [40, 40, 0, 0]

            }
        ]
    }
    content.push(columnBio)
}

function fillPdfContent() {
    let pdfContent = {
        content: [],
        styles: pdfStyles
    }


    fillMetaContent(pdfContent.content)
    fillEduContent(pdfContent.content)
    fillJobsContent(pdfContent.content)
    fillBioContent(pdfContent.content)
    fillHobbyContent(pdfContent.content)
    fillPitchContent(pdfContent.content)


    return pdfContent


}

function fillEduContent(content) {
    let eduCbValue = document.getElementById('eduCb').checked;
    if (eduCbValue !== true) return

    content.push({
        text: 'Образование',
        style: STYLENAMES.PARAGRAPH_NAME
    })

    content.push(
        {
            text: cvData.education
        }
    )
}

function fillJobsContent(content) {
    content.push({
        text: 'Опыт работы',
        style: STYLENAMES.PARAGRAPH_NAME
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
                return elem.asDeveloper === true
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

function fillBioContent(content) {
    let bioCbValue = document.getElementById('bioCb').checked;
    if (bioCbValue !== true) return

    content.push({
        text: 'Биография',
        style: STYLENAMES.PARAGRAPH_NAME
    })

    content.push(
        {
            text: cvData.bio
        }
    )

}

function fillHobbyContent(content) {
    let hobbyAndSportCbValue = document.getElementById('hobbyAndSportCb').checked;
    if (hobbyAndSportCbValue !== true) return

    content.push({
        text: 'Хобби',
        style: STYLENAMES.PARAGRAPH_NAME
    })

    content.push(
        {
            text: cvData.hobbiesAndSport
        }
    )

}


function formatJobInfo(jobData) {
    return [
        {
            text: jobData.position + ' в компании ' + jobData.companyName,
            style: STYLENAMES.H2
        },
        {
            text: jobData.pitch, italics: true
        },
        {
            text: 'c ' + jobData.from + ' по ' + jobData.to + ' (' + calculateDifferenceOfDateToNow(jobData.dateFrom, jobData.dateTo) + ') \n',
            style: STYLENAMES.SMALL_GRAY
        },
        {
            text: 'Стек: ' + jobData.stack.join(' , '),
        },
        {
            text: 'Задачи: ' + jobData.responsibilities.join(' , '),
        },
        {
            text: 'Сайт компании: ' + jobData.companySite,
        },
        "\n"

    ]
}

function fillPitchContent(content) {
    let pitchCbValue = document.getElementById('pitchCb').checked;
    if (pitchCbValue !== true) return

    content.push({
        text: 'Обо мне',
        style: STYLENAMES.PARAGRAPH_NAME
    })

    content.push(
        {
            text: cvData.aboutMe
        }
    )


}

function makePDF() {
    let pdfContent = fillPdfContent();
    pdfMake.createPdf(pdfContent).download(cvData.credentials + " CV.pdf");
}

function openPDF() {
    let pdfContent = fillPdfContent();
    pdfMake.createPdf(pdfContent).open();
}


function calculateDifferenceOfDateToNow(dateFrom, dateTo) {
    let dateDiff = new Date(dateTo - dateFrom)
    let yearDiff = dateDiff.getUTCFullYear() - 1970
    let yearDiffLiteral = getYearLiteral(yearDiff)


    if (yearDiff <= 0) {
        return "" + dateDiff.getUTCMonth() + getMonthLiteral(dateDiff.getUTCMonth())
    } else {
        return "" + yearDiff + yearDiffLiteral + dateDiff.getUTCMonth() + getMonthLiteral(dateDiff.getUTCMonth())
    }
}

function getYearLiteral(yearDifference) {
    if (yearDifference === 1) {
        return " год "
    } else if (yearDifference > 1 && yearDifference < 4) {
        return " года "
    } else {
        return " лет "
    }
}

function getMonthLiteral(monthDifference) {
    if (monthDifference === 1) {
        return " месяц"
    } else if (monthDifference > 1 && monthDifference < 4) {
        return " месяца"
    } else {
        return " месяцев"
    }
}