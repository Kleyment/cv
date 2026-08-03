function loadJS() {

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
    let previewNodes=document.querySelectorAll("[class*=preview-]");
    for (const node of previewNodes) {
        console.log(node)
        for (const className of node.classList) {
            if (className.startsWith("preview-jpg-")) {
                const previewItem=className.substring(12,className.length);
                node.addEventListener("click", function() {
                    previewImage(previewItem,true,'.jpg');
                    console.log(previewItem)
                });
            } else if (className.startsWith("preview-png-")) {
                const previewItem=className.substring(12,className.length);
                node.addEventListener("click", function() {
                    previewImage(previewItem,true,'.png');
                    console.log(previewItem)
                });
            }
        }
    }

    // Remove the image when image is clicked
    document.getElementById("imagePreview").addEventListener("click", function() {
        previewImage('',false,'');
    });

}

function displayLanguageInfos(langNum,mouseOver) {
    if (langNum==1) {
        if (mouseOver) {
            document.getElementById("lang1").innerHTML="845 pts TOEIC";
        } else {
            document.getElementById("lang1").innerHTML="B2";
        }
    } else {
        if (mouseOver) {
            document.getElementById("lang2").innerHTML="Diplôme Goethe-Institut";
            document.getElementById("lang2").style['right']="-150px";
        } else {
            document.getElementById("lang2").innerHTML="B1";
            document.getElementById("lang2").style['right']="-15px";
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