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
        styles: pdfStyles
    }
    pdfContent.content.push(metaPdfContent)

    fillEduContent(pdfContent.content)
    fillJobsContent(pdfContent.content);
    fillBioContent(pdfContent.content);

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
            text: 'c ' + jobData.from + ' по ' + jobData.to + ' (' + jobData.duration + ') \n',
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

function makePDF() {
    let pdfContent = fillPdfContent();
    pdfMake.createPdf(pdfContent).download(cvData.credentials + " CV.pdf");
}

function openPDF() {
    let pdfContent = fillPdfContent();
    pdfMake.createPdf(pdfContent).open();
}
