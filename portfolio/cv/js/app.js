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
    if (isUserbad) {
        document.getElementById("userPhoto").src="./cv/images/baduser.jpg";
    } else {
        document.getElementById("userPhoto").src="./cv/images/gooduser.jpg";
    }
}

function previewImage(imageName, display, extension) {
    if (display) {
        // If the node already exists we make sure it is visible but that's all
        if (document.getElementById(imageName) != null) {
            document.getElementById(imageName).style['display']="";
            return;
        }

        // We take the node before the img 
        var previousNodeA=document.getElementById("before-"+imageName);

        // We create a new img node right after the a node
        var nextNodeImg=document.createElement("img");
        nextNodeImg.id=imageName;
        nextNodeImg.className="wild-images";
        nextNodeImg.src="./cv/images/"+imageName+extension;
        nextNodeImg.style['display']="";
        nextNodeImg.style['border-radius']="0%";
        nextNodeImg.style['scale']="0"; //Technically just visible during the animation

        //We add the visible node
        previousNodeA.appendChild(nextNodeImg);

    } else {
        // If the node already exists we make sure it is invisible but that's all
        if (document.getElementById(imageName) != null) {
            document.getElementById(imageName).style['display']="none";
            return;
        }
    }
}