// baca comments dari localstorage dan convert ke js dari text
let comments = JSON.parse(localStorage.getItem("comments"))

// kalau belum ada comments
if (!comments){
    comments = [] // array kosong
    localStorage.setItem("comments", JSON.stringify(comments))
} else {
    // sudah ada comments kita tampilkan
    for (c of comments) {
        document.getElementById("post-comment").innerHTML += `<p>[${c[0]}] ${c[1]}</p>`
    }
}

function tambahComment(){
    const d = new Date();
    let komen = document.getElementById("input-comment").value

    document.getElementById("post-comment").innerHTML += `<p>[${d.toString()}] ${komen}</p>`

    // komentar kita simpan ke local storage
    comments.push([d.toString(), komen])
    localStorage.setItem("comments", JSON.stringify(comments))
}