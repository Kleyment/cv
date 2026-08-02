function loadJS() {
    
    // Switch between Normal and Alt Photo
    //document.getElementById("hexUserPhoto").addEventListener("mouseover", function() {
    //    changeUserPhoto(true);
    //});
    //document.getElementById("hexUserPhoto").addEventListener("mouseleave", function() {
    //    changeUserPhoto(false);
    //});


    // Display language level
    document.getElementById("lang1").addEventListener("mouseover", function() {
        displayLanguageInfos(1,true);
    });
    document.getElementById("lang1").addEventListener("mouseleave", function() {
        displayLanguageInfos(1,false);
    });

    document.getElementById("lang2").addEventListener("mouseover", function() {
        displayLanguageInfos(2,true);
    });
    document.getElementById("lang2").addEventListener("mouseleave", function() {
        displayLanguageInfos(2,false);
    });


    // Display a preview image of the project
    document.getElementById("before-cyrano").addEventListener("click", function() {
        previewImage('cyrano',true,'.png');
    });
    document.getElementById("before-antibios").addEventListener("click", function() {
        previewImage('antibios',true,'.png');
    });
    document.getElementById("before-secuJS").addEventListener("click", function() {
        previewImage('secuJS',true,'.png');
    });
    document.getElementById("before-borneArcade").addEventListener("click", function() {
        previewImage('borneArcade',true,'.jpg');
    });

    // Display a preview image of the project
    document.getElementById("cyrano-grid").addEventListener("click", function() {
        previewImage('cyrano',true,'.png');
    });
    document.getElementById("antibios-grid").addEventListener("click", function() {
        previewImage('antibios',true,'.png');
    });
    document.getElementById("secuJS-grid").addEventListener("click", function() {
        previewImage('secuJS',true,'.png');
    });
    document.getElementById("borneArcade-grid").addEventListener("click", function() {
        previewImage('borneArcade',true,'.jpg');
    });


    // Remove the image when image is clicked
    document.getElementById("imagePreview").addEventListener("click", function() {
        previewImage('',false,'');
    });

}

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
    var ourNode=document.getElementById("imagePreview");

    if (display) {
        ourNode.src="./cv/images/"+imageName+extension;
        ourNode.style['display']="";
        ourNode.style['animation']="wildImageAppear 1s normal";
    } else {
        // If the node already exists we make sure it is invisible but that's all
        if (ourNode != null) {
            ourNode.style['display']="none";
            return;
        }
    }
}