let page_main_subtitle = document.getElementById(`page-main-subtitle`);
page_main_subtitle[`style`][`color`] = `green`;
page_main_subtitle[`style`][`backgroundColor`] = `purple`

let h1_tags = document.getElementsByClassName(`h1-tags`);
for(let counter = 0; counter < h1_tags.length; counter++) {
    h1_tags[counter][`innerHTML`] = `OPS, I WAS CHANGED`
}

let img_tags = document.getElementsByTagName(`img`);
for(let counter = 0; counter < img_tags.length; counter++) {
    img_tags[counter][`src`] = `https://images.unsplash.com/photo-1657915118196-7e4091a522ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`;
}

let all_p_tags = document.getElementsByTagName(`p`);
for(let counter = 0; counter < all_p_tags.length; counter++){
    if(all_p_tags[counter][`innerHTML`].includes(`link`)) {
        all_p_tags[counter][`innerHTML`] += `<a href="#"> CLICK HERE</a>`;
    }
}