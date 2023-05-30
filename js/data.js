// var host = window.location.host;
var host = "nishithp.tech"
let template =
    `
                <li>
                    <div class="{{Direction}} animation">
                        <div class="flag-wrapper">
                            <span class="flag">{{Flag}}</span>
                            <span class="time-wrapper"><span class="time">{{Time}}</span></span>
                        </div>
                        <div class="desc">{{Description}}</div>
                    </div>
                </li>
            `

let code = `
            <div class="swiper-slide">
                <img src="{{image_src}}" style="width:100%" alt="{{image_alt}}">
            </div>
            `

let projectsCard =
    `
                    <div class="swiper-slide" id="project-card">
                        <img src="{{project_image}}"
                            alt="{{project_image_alt}}">

                        <p class="project-title">{{project_title}}</p>
                        <p class="project-description">{{project_desc}}</p>
                        <div class="project-links">
                            <a href="{{project_links_1}}" target="_blank" aria-label="View Source Code"><i class="fa-solid fa-code"></i></a>
                            <a href="{{project_links_2}}" target="_blank" aria-label="View Live Project"><i class="fa-solid fa-hat-wizard"></i></a>
                        </div>
                    </div>
            `

$.getJSON(`https://assets.${host}/website/data.json`, function (json) {
    appendData(json)
});

function appendData(data) {
    let timeline = document.getElementById("timeline");
    let slideshow = document.getElementById("slideshow");
    let projects = document.getElementById("projects-card-wrapper")


    data["Roadmap"].reverse().forEach(entry => {
        let temp = template;
        let placeholders = {
            "{{Direction}}": entry.direction,
            "{{Flag}}": entry.flag,
            "{{Time}}": entry.time,
            "{{Description}}": entry.description
        }

        for (let placeholder of Object.keys(placeholders))
            temp = temp.replace(placeholder, placeholders[placeholder])

        timeline.innerHTML += temp;

    })

    data["Certificates_New"].forEach(entry => {
        let temp = code.replace("{{image_src}}", entry.src)
        temp = temp.replace("{{image_alt}}", entry.alt)
        slideshow.innerHTML += temp;
    })

    data["Projects"].forEach(entry => {
        let temp = projectsCard;
        let placeholders = {
            "{{project_image}}": entry.image,
            "{{project_image_alt}}": entry.title,
            "{{project_title}}": entry.title,
            "{{project_desc}}": entry.desc,
            "{{project_links_1}}": entry.links[0],
            "{{project_links_2}}": entry.links[1]
        }

        for (let placeholder of Object.keys(placeholders))
            temp = temp.replace(placeholder, placeholders[placeholder])

        projects.innerHTML += temp;
    })
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains("animation"))
                entry.target.classList.add("scroll-animation")
            else if (entry.isIntersecting && entry.target.classList.contains("animation-fade"))
            entry.target.classList.add("scroll-animation-fade")
            /* else
                entry.target.classList.remove("scroll-animation") */
        })
    });
    document.body.querySelectorAll(`.animation`).forEach(element => {
        observer.observe(element)
    })
    document.body.querySelectorAll(`.animation-fade`).forEach(element => {
        observer.observe(element)
    })
}