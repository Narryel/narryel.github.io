// ---------- Page rendering (динамическая вёрстка из cvData) ----------

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function renderHero() {
    document.getElementById('heroName').textContent = cvData.name + ' ' + cvData.surname;
    document.getElementById('heroTitle').textContent = cvData.multiSpec;

    const meta = document.getElementById('heroMeta');
    meta.append(el('span', 'hero-meta-item', cvData.currentCityRus));
    meta.append(el('span', 'hero-meta-dot', '·'));
    meta.append(el('span', 'hero-meta-item', cvData.age + getYearsLiteral(cvData.age)));

    const tagline = document.getElementById('heroTagline');
    const years = calculateDifferenceOfDateToNow(cvData.devSince, Date.now());
    tagline.textContent = 'В разработке с 2018 года (' + years.trim() + '). ' +
        'Микросервисы в большом банке днём, свои продукты — вечером.';

    const contacts = document.getElementById('heroContacts');
    const links = [
        {href: 'mailto:' + cvData.mainEmail, text: cvData.mainEmail},
        {href: cvData.github, text: 'github.com/Narryel'},
        {href: cvData.site, text: 'narryel.github.io'}
    ];
    links.forEach(function (l) {
        const a = el('a', 'contact-chip', l.text);
        a.href = l.href;
        contacts.append(a);
    });

    const avatar = document.getElementById('heroAvatar');
    if (avatar) avatar.src = 'img/photo/circleAva.png';
}

function renderStats() {
    const wrap = document.getElementById('heroStats');
    const fullYearsBetween = function (from, to) {
        return Math.floor((to - from) / (365.25 * 24 * 3600 * 1000));
    };
    const devYears = fullYearsBetween(cvData.devSince, Date.now());
    const bankYears = fullYearsBetween(cvData.jobs[0].dateFrom, Date.now());
    const liveProjects = cvData.projects.filter(function (p) {
        return !p.inProgress;
    }).length;
    const stats = [
        {value: devYears + '+', label: 'лет в разработке'},
        {value: bankYears, label: 'лет в Т-Банке'},
        {value: liveProjects, label: 'своих проекта в проде'}
    ];
    stats.forEach(function (s) {
        const item = el('div', 'stat');
        item.append(el('div', 'stat-value', String(s.value)));
        item.append(el('div', 'stat-label', s.label));
        wrap.append(item);
    });
}

function renderChips(items, className) {
    const wrap = el('div', 'chips');
    items.forEach(function (item) {
        wrap.append(el('span', className, item));
    });
    return wrap;
}

function renderAbout() {
    const wrap = document.getElementById('aboutSection');
    wrap.append(el('h2', 'section-title', 'Обо мне'));
    const p = el('p', 'section-text');
    appendRichText(p, cvData.aboutMe);
    wrap.append(p);
}

function renderJobs() {
    const wrap = document.getElementById('jobsSection');
    wrap.append(el('h2', 'section-title', 'Опыт работы'));

    const timeline = el('div', 'timeline');
    cvData.jobs.forEach(function (job) {
        const item = el('div', 'timeline-item');
        item.append(el('div', 'timeline-dot'));

        const head = el('div', 'job-head');
        const title = el('div', 'job-title-row');
        title.append(el('h3', 'job-position', job.position));

        const company = el('a', 'job-company', job.companyName);
        company.href = job.companySite;
        company.target = '_blank';
        company.rel = 'noopener';
        title.append(company);
        head.append(title);

        head.append(el('div', 'job-period', 'с ' + job.from + ' по ' + job.to + ' (' + calculateDifferenceOfDateToNow(job.dateFrom, job.dateTo).trim() + ')'));
        head.append(el('p', 'job-pitch', job.pitch));
        item.append(head);

        item.append(renderChips(job.stack, 'chip'));
        item.append(renderChips(job.responsibilities, 'chip chip-soft'));
        timeline.append(item);
    });
    wrap.append(timeline);
}

function renderProjects() {
    const wrap = document.getElementById('projectsSection');
    wrap.append(el('h2', 'section-title', 'Проекты'));

    const grid = el('div', 'projects-grid');
    cvData.projects.forEach(function (project) {
        const card = el('div', 'project-card');

        const nameRow = el('div', 'project-name-row');
        let name;
        if (project.link) {
            name = el('a', 'project-name', project.name);
            name.href = project.link;
            name.target = '_blank';
            name.rel = 'noopener';
        } else {
            name = el('span', 'project-name', project.name);
        }
        nameRow.append(name);
        if (project.inProgress) {
            nameRow.append(el('span', 'project-badge', 'в процессе разработки'));
        }
        card.append(nameRow);

        card.append(el('p', 'project-pitch', project.pitch));

        card.append(renderChips(project.stack, 'chip'));
        const facts = el('ul', 'project-facts');
        project.facts.forEach(function (fact) {
            facts.append(el('li', null, fact));
        });
        card.append(facts);
        grid.append(card);
    });
    wrap.append(grid);
}

function renderEducation() {
    const wrap = document.getElementById('eduSection');
    wrap.append(el('h2', 'section-title', 'Образование'));
    const p = el('p', 'section-text');
    cvData.education.forEach(function (part) {
        if (typeof part === 'string') {
            p.append(part);
        } else {
            p.append(el('strong', null, part.text));
        }
    });
    wrap.append(p);

    if (cvData.courses && cvData.courses.length) {
        wrap.append(el('h3', 'subsection-title', 'Курсы'));
        const list = el('ul', 'course-list');
        cvData.courses.forEach(function (course) {
            const li = el('li', 'course-item');
            li.append(el('span', 'course-provider', course.provider));
            if (course.url) {
                const a = el('a', 'course-link', course.name);
                a.href = course.url;
                a.target = '_blank';
                a.rel = 'noopener';
                li.append(a);
            } else {
                li.append(el('span', null, course.name));
            }
            list.append(li);
        });
        wrap.append(list);
    }
}

function renderBio() {
    const wrap = document.getElementById('bioSection');
    wrap.append(el('h2', 'section-title', 'Биография'));

    buildBioParagraphs(cvData.bio).forEach(function (parts) {
        const p = el('p', 'section-text');
        parts.forEach(function (node) {
            p.append(node);
        });
        wrap.append(p);
    });
}

// Собирает куски био в абзацы: "\n" в любом куске (в т.ч. курсивном) начинает новый абзац
function buildBioParagraphs(bio) {
    const paragraphs = [];
    let current = [];

    function flush() {
        if (current.length) {
            paragraphs.push(current);
            current = [];
        }
    }

    bio.forEach(function (part) {
        const isObject = typeof part !== 'string';
        const pieces = (isObject ? part.text : part).split('\n');
        pieces.forEach(function (piece, index) {
            if (index > 0) flush();
            if (!piece) return;
            if (isObject) {
                current.push(part.link ? renderBioLink(part) : el('em', null, piece));
            } else {
                current.push(document.createTextNode(piece));
            }
        });
    });
    flush();
    return paragraphs;
}

function renderBioLink(part) {
    const a = el('a', null, part.text);
    a.href = part.link;
    a.target = '_blank';
    a.rel = 'noopener';
    return a;
}

function renderRichText(parts) {
    const fragment = document.createDocumentFragment();
    parts.forEach(function (part) {
        if (typeof part === 'string') {
            fragment.append(part.replace(/\n/g, ' '));
        } else {
            fragment.append(el('em', null, part.text));
        }
    });
    return fragment.childNodes;
}

// Кусок текста: строка, {text, italics}, {text, link} или вложенный массив этих вариантов
function appendRichText(parent, parts) {
    (Array.isArray(parts) ? parts : [parts]).forEach(function (part) {
        if (Array.isArray(part)) {
            appendRichText(parent, part);
        } else if (typeof part === 'string') {
            parent.append(part.replace(/\n/g, ' '));
        } else if (part.link) {
            parent.append(renderBioLink(part));
        } else {
            parent.append(el('em', null, part.text));
        }
    });
}

function renderHobbies() {
    const wrap = document.getElementById('hobbySection');
    wrap.append(el('h2', 'section-title', 'Хобби и спорт'));
    const list = el('ul', 'hobby-list');
    cvData.hobbiesAndSport.forEach(function (hobby) {
        const item = el('li', 'hobby-item');
        appendRichText(item, hobby);
        list.append(item);
    });
    wrap.append(list);
}

function renderFooter() {
    document.getElementById('footerYear').textContent = String(new Date().getFullYear());
}

function renderPage() {
    renderHero();
    renderStats();
    renderAbout();
    renderJobs();
    renderProjects();
    renderEducation();
    renderBio();
    renderHobbies();
    renderFooter();
}

// ---------- Modal window (generate PDF) ----------
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
    fillProjectsContent(pdfContent.content)
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

    if (cvData.courses && cvData.courses.length) {
        content.push({
            text: 'Курсы',
            style: STYLENAMES.H2,
            margin: [0, 10, 0, 6]
        })
        content.push({
            ul: cvData.courses.map(function (course) {
                return {
                    text: course.provider + ' — ' + course.name,
                    link: course.url || undefined
                }
            })
        })
    }
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

function fillProjectsContent(content) {
    let projectsCbValue = document.getElementById('projectsCb').checked;
    if (projectsCbValue !== true) return

    content.push({
        text: 'Проекты',
        style: STYLENAMES.PARAGRAPH_NAME
    })

    let projectsArray = cvData.projects.map(function (project) {
        return [
            {
                text: project.name +
                    (project.link ? ' — ' + project.link : '') +
                    (project.inProgress ? ' (в процессе разработки)' : ''),
                style: STYLENAMES.H2
            },
            {
                text: project.pitch, italics: true
            },
            {
                text: 'Стек: ' + project.stack.join(' , '),
            },
            {
                text: 'Особенности: ' + project.facts.join(' , '),
            },
            "\n"
        ]
    })

    content.push({
        ul: projectsArray
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

    let returnString = ""
    if (yearDiff > 0) {
        returnString += yearDiff + getYearsLiteral(yearDiff) + " "
    }
    return returnString + (dateDiff.getUTCMonth() + 1) + getMonthLiteral(dateDiff.getUTCMonth() + 1)

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

renderPage();
