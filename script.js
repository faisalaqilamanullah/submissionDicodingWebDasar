function toggleDark() {
    //select toggle
    let toggleDark = document.getElementById("toggle")

    //dark mode style
    let darkMode = "background-color: #10111B !important; color: #dddddd !important"

    //light mode style
    let lightMode = "background-color: #f8f8f8 !important; color: #10111B !important"

    //get navbar
    let navbar = document.querySelectorAll(".themes");


    if (toggleDark.checked == true) {
        document.body.style = darkMode;

        var i;
        for (i = 0; i < navbar.length; i++) {
            navbar[i].style = darkMode;
        }

        btnDark();
        console.log("ok");
    }
    else {
        document.body.style = lightMode;
        var i;
        for (i = 0; i < navbar.length; i++) {
            navbar[i].style = lightMode;
        }


        console.log("ok");
        btnLight();

    }
}

function toggleDark2() {
    //select toggle
    let toggleDark = document.getElementById("toggle-dark-mobile")

    //dark mode style
    let darkMode = "background-color: #10111B !important; color: #dddddd !important"

    //light mode style
    let lightMode = "background-color: #f8f8f8 !important; color: #10111B !important"

    //get navbar
    let navbar = document.querySelectorAll(".themes");


    if (toggleDark.checked == true) {
        document.body.style = darkMode;

        var i;
        for (i = 0; i < navbar.length; i++) {
            navbar[i].style = darkMode;
        }

        btnDark();
        console.log("ok");
    }
    else {
        document.body.style = lightMode;
        var i;
        for (i = 0; i < navbar.length; i++) {
            navbar[i].style = lightMode;
        }


        console.log("ok");
        btnLight();

    }
}

function btnLight() {
    let lightStyle = "border: #858585 solid 1px;; color:#10111B"
    let getElemBtn = document.querySelectorAll(".btn-light");

    var i;
    for (i = 0; i < getElemBtn.length; i++) {
        getElemBtn[i].style = lightStyle;
    }

}
function btnDark() {
    let btnDark = ""
    let getElemBtn = document.querySelectorAll(".btn-light");

    var i;
    for (i = 0; i < getElemBtn.length; i++) {
        getElemBtn[i].style = btnDark;
    }

}

function openNav() {
    document.getElementById("mySidepanel").style.width = "70%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

function getClick(elem) {
    let getHeader = document.getElementById("header-biodata");

    let getDeskripsi = document.getElementById("deskripsi-biodata");

    let getFoto = document.getElementById("img-profil");

    if (elem == "Profil") {
        getHeader.innerHTML = elem;
        getHeader.style.transition = "0.3s";
        getFoto.src = "./img/foto_profil.png";
        getDeskripsi.innerHTML = " <p>Halo nama saya <b>Faisal Aqil</b>. <br> Saya berdomisili di Kota Malang dan menyukai <br> desain website dan aplikasi</p > ";
    } else if (elem == "Hobi") {
        getHeader.innerHTML = elem;
        getFoto.src = "./img/fotografi.png";
        getDeskripsi.innerHTML = " <p>Saya mempunya beberapa hobi, antara lain fotografi, mendesain, dan belajar hal baru. </p > ";
    } else {
        getHeader.innerHTML = elem;
        getFoto.src = "./img/kota_malang.png";
        getDeskripsi.innerHTML = " <p>Kota Malang adalah pilihan saya untuk melanjutkan pendidikan. Selain itu saya juga senang mengunjungi beberapa tempat wisata, antara lain <b>Kampung Warna Warni<b> </p > ";

    }

    console.log(elem);


}
