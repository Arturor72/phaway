$(document).ready(main());
var canvas = this.__canvas = new fabric.Canvas('c');
canvas.set({backgroundColor: "#fafafa",});
loadAnillo("img/Anillado.png",canvas);
function loadAnillo(pathAnillo, canvas){

    (function() {
        fabric.Object.prototype.transparentCorners = false;
        
        var mImage=new fabric.Image.fromURL(pathAnillo, function(img) {
          img.scale(0.155).set({
            left: -4,
            top: -4,
            angle: 0,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            selectable:false,
          });
          canvas.add(img);
          canvas.bringToFront(img);
        }) ;

      })();
}
function createBackground(nameBackground, canvas){
    var path="img/fondos/";
    var extension=".jpg";
    (function() {
//        loadAnillo("img/Anillado.png",canvas);
        fabric.Object.prototype.transparentCorners = false;
        
        var mImage=new fabric.Image.fromURL(path+nameBackground+extension, function(img) {
          img.scale(0.15).set({
            left: 21,
            top: 0,
            angle: 0,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            selectable:false,
          });
          var objs = canvas.getObjects();
          var c=0;
          var shadow = {
            color: 'rgba(0,0,0,0.6)',
            blur: 20,    
            offsetX: 10,
            offsetY: 10,
            opacity: 0.6,
            fillShadow: true, 
            strokeShadow: true 
        }
          img.setShadow(shadow);
          if (objs.length) {
              objs.forEach(function(e) {
                  if (e && e.type === 'image' && containsx(e._element.src,"fondos*")) {
                    c++;
                    console.log(1);
                    e._element.src = path+nameBackground+extension;
                    canvas.renderAll();
                  }
              });
          }
          if(c==0 ){
            canvas.add(img);
            canvas.sendToBack(img);
            }
        }) ;

      })();
}

function addImage(pathImage, canvas){
    (function() {
        fabric.Object.prototype.transparentCorners = false;
        var mImage=new fabric.Image.fromURL(pathImage, function(img) {
          img.scale(0.3).set({
            left: 30,
            top: 0,
            angle: 0
          });
          var objs = canvas.getObjects();
          var c=0;
          if (objs.length) {
              objs.forEach(function(e) {
                  if (e && e.type === 'image' && containsx(e._element.src,"avatar*")) {
                    c++;
                    e._element.src = pathImage;
                    canvas.renderAll();
                  }
              });
          }
          if(c==0 ){
            canvas.add(img);
            }
        }) ;
      })();
}

function containsx(path, regexString){
    var re = new RegExp (regexString);
    return re.test(path);
}

function createText(texto, canvas){
    console.log(canvas.getHeight()-40);
    (function() {
        console.log("addText "+texto);
        var text = new fabric.IText(texto, { 
            left: canvas.getWidth()/2, top: canvas.getHeight()-40, fontFamily: 'Arial', fontSize: 40,
        });
        canvas.add(text);
        canvas.renderAll();
    })();
}

function changeFont(canvas, myFont){
    
    var obj=canvas.getActiveObject();
    console.log(canvas.getActiveObject().get('type'));
    if(canvas.getActiveObject().get('type')==="i-text"){
        console.log("Dentro");
        obj.set({
            fontFamily: myFont,
        });
        canvas.renderAll();
    }

}
//sendBackwards
function main() {

    $('.multi-item-carousel').carousel({
        interval: false
      });
      
      // for every slide in carousel, copy the next slide's item in the slide.
      // Do the same for the next, next item.
      $('.multi-item-carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        if (next.next().length>0) {
          next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
      });
    
    $(".Fondo").on("click",function(){
        createBackground("Fondo",canvas);
    });
    $(".FondoGato").on("click",function(){
        createBackground("FondoGato",canvas);
    });
    $(".FondoBailarina").on("click",function(){
        createBackground("FondoBailarina",canvas);
    });
    $(".FondoUnicornio").on("click",function(){
        createBackground("FondoUnicornio",canvas);
    });
    
    $(".Elefante").on("click",function(){
        addImage("img/avatar/Elefante.png",canvas);
    });
    $(".Gato").on("click",function(){
        addImage("img/avatar/Gato.png",canvas);
    });
    $(".RatonaSola").on("click",function(){
        addImage("img/avatar/RatonaSola.png",canvas);
    });
    $(".Unicornio").on("click",function(){
        addImage("img/avatar/Unicornio.png",canvas);
        
        console.log("1")        
    });
    $("#addText").on("click",function(){
        var texto=$("#nameText").val();
        createText(texto,canvas);
    });
    $("#saveImage").on("click", function(){
        canvas.discardActiveObject();
        canvas.renderAll(); 
        $("#c").get(0).toBlob(function(blob){
            
            saveAs(blob,"MyImage.png");


       });
        
    });
    $("#changeFont").on("click", function(){
        var changeFontText=$("#changeFontSelect").val();
        changeFont(canvas, changeFontText);
    });


    

}

function loadFB(){

    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
      FB.init({
        appId: '121698668509802',
        version: 'v2.7' 
      });     
    });

}




