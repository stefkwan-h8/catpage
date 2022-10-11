function tambahComment(){
    const d = new Date();
    let komen = document.getElementById("input-comment").value

    document.getElementById("post-comment").innerHTML += `<p>[${d.toString()}] ${komen}</p>`
}