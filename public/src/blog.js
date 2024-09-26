function controlBlog(i){
    switchTab('blogContentPage')
    DOM(`blogContent`).innerText = blogData[i]
}

/*
    Where the Blogs are stored.
    No, I don't write them here. But I do store them here.
    It looks bad, what a shame :p
*/
let blogData = [
    "Init // July 24th, 2024\n\nWriting introductions is the hardest thing for me to do, and this is no exception. Obviously you know what this is, but I still feel a need to introduce it for some reason. This is the really cool and awesome FlamemasterNXF blog. There will most likely be at least 2 posts per month - I will ensure there’s at least one. I hope that the UI for this blog is satisfactory, it was pretty rushed (I wanted to start the actual writing). I'm not sure what else to say here... on to the first real post!\n\nThe first real post is better written than this, I promise :p",
    "Time // July 24th, 2024\n\n"
]