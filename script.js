const socials = [
    [
        "twitter",
        "https://twitter.com/sh__faq"
    ],
    [
        "instagram",
        "https://www.instagram.com/ashfaque_pp"
    ],
    [
        "linkdin",
        "https://www.linkedin.com/in/ashfaque-pp-200b48182"
    ],
    [
        "facebook",
        "https://www.facebook.com/ashfaque.aspu.5"
    ]

];
const socials_div = document.getElementById('social');
socials.forEach(social => {
    let [platform_name, link] = social
    let a = document.createElement('a')
    a.setAttribute('href', link)
    a.innerText = platform_name
    a.setAttribute('target', "_blank")
    socials_div.appendChild(a)
});
