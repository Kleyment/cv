function displayLanguageInfos(langNum,mouseOver) {
    if (langNum==1) {
        if (mouseOver) {
            $('#lang1').text("845 pts TOEIC");
        } else {
            $('#lang1').text("B2");
        }
    } else {
        if (mouseOver) {
            $('#lang2').text("Diplôme Goethe-Institut");
            $('#lang2').css("right","-150px");
        } else {
            $('#lang2').text("B1");
            $('#lang2').css("right","-15px");
        }
    }
}

function changeUserPhoto(isUserbad) {
    if (isUserbad == true) {
        document.getElementById("userPhoto").src="./cv/images/baduser.jpg";
    } else {
        document.getElementById("userPhoto").src="./cv/images/gooduser.jpg";
    }
}

function previewImage(imageName, display) {
    if (display) {
        document.getElementById(imageName).style['display']="";
    } else {
        document.getElementById(imageName).style['display']="none";
    }
    //Put the image on the good tag
    //var imgNode=document.createElement("img");
    //imgNode.src="./cv/images/"+imageName+".png";
    

    //var bodyNode=document.getElementsByTagName("body")[0];
    //bodyNode.appendChild(imgNode);


    /**
     * CSS beforeSecuJS
     * z-index: 0;
     * 
     */

    /**
     * CSS (image animated) secuJS img
     * 
     * position: absolute;  
     * width: 5%;
     * z-index: -1; -> 1;
     * filter: blur(5px); -> blur(0px)
     * rotate: 90deg; -> 0;
     * display: none -> display: ''
     * 
     */

    /**
     * CSS container (body)
     * 
     * position: fixed;
     * z-index: 0;
     */
}