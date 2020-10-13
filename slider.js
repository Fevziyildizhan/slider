<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">

    <style>
      .fas{
        cursor: pointer;
      }
      
    </style>
    <title>SLİDER</title>
  </head>
  <body>

    <div class="container mt-2">
        <div class="row">
            <div class="col-md-6">

                <div class="card">
                    <img class="card-img-top" src="bmw.jpg">
                    <div class="card-body">
                        <h5 class="card-title">Bmw 116d</h5>
                        <p class="card-text"></p>
                        <a class="card-link" href="#">Read More</a>
                     </div>
                     <div class="card-footer">
                            <i class="fas fa-arrow-circle-left fa-2x arrow"></i>
                            <i class="fas fa-arrow-circle-right fa-2x arrow"></i>
                     </div>
                </div>


            </div>
        </div>


    </div>

     <script src="script.slider.js" type="text/javascript"></script>
  
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>


   
  </body>
</html>

var models = [

{
    name : 'Bmw 418d',
    Image : 'bmw.jpg',
    link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
},
{
    name : 'Mazda CX-3',
    Image : 'mazda.jpg',
    link :' http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'

},

{
    name : 'Volvo S60',
    Image : 'volvo.jpg',
    link :'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'

},

{
    name : 'Skoda Superb',
    Image : 'skoda.jpg',
    link :'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'


},

{
    name : 'Honda Civic',
    Image : 'honda.jpg',
    link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'


},



]

 var index = 0;
 slaytCount = models.length;
var interval

 var settings = {
     duration : '1000',
     random : false
 }
 
init(settings)



document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){

  index--;
  showSlide(index)
  console.log(index)

})

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){

    index++;
    showSlide(index)
    console.log(index)
})

document.querySelectorAll('.arrow').forEach(function(item){

    item.addEventListener('mouseenter',function(){
        clearInterval(interval)
    })
})

document.querySelectorAll('.arrow').forEach(function(item){

    item.addEventListener('mouseleave',function(){
        init(settings)
    })
})


function init(settings){

   var previ;
 interval = setInterval(function(){
     
    if(settings.random){
   
    do{

        index = Math.floor(Math.random()*slaytCount)


    }while(index == previ)
    previ = index

      
    }else{
        if(slaytCount == index +1){
             index = -1;
        }
        showSlide(index)
       index++
    }

   showSlide(index)

  },settings.duration)



}





function showSlide(i){

index = i 

if(i<0){
    index = slaytCount - 1;
}

if(i >= slaytCount){
   index = 0;
}


document.querySelector('.card-title').textContent = models[index].name

document.querySelector('.card-img-top').setAttribute('src',models[index].Image)

document.querySelector('.card-link').setAttribute('href',models[index].link)


}







 
