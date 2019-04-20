 
$("document").ready(
	function()
	{	
		var galeria = document.getElementById("galeria")
     rotateImgs();
       $('#menu-button').click(function(){
      $('#menu').stop().slideToggle(300);
           $('#galeria').stop().slideToggle(300);
           
           
   }); 
         


    $('#menu>li').click(function() {

        $('#menu>li ul').style.display = 'block';

  

           
   }); 
	}
);

function rotateImgs()
{
	var firstImg = $(".imgToRotate:first-child");
	
	firstImg.addClass("current");
	
	rotate();
}

function rotate()
{

	var current = $(".current");
	
	current.animate(
	{
		"opacity": 0
	}, 8000, function()
	{
		$(this).removeClass("current");
	}
	);	
	
	current = current.next();
	 if (current[0] ==  undefined)
	   current = $(".imgToRotate:first-child");
	   
	current.css("opacity", 0).addClass("current").delay(100).animate({"opacity": 1.0}, 8000, rotate);
}
 
       var rows = document.getElementsByClassName("row");

    for (var i = 0; i < rows.length; i++)
      {
          rows[i].onmouseover = function ()
     {  
             var x = document.getElementsByClassName("infof1");
              for (var i = 0; i < x.length; i++)
                  
              x[i].style.opacity =  1;
        
         

     }
    
}
    
window.onscroll = function() 
{

    secendFunction() 
    myFunction()
    
};

function myFunction() 
{
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("gora").className = "scrollToTop";
  } else {
    document.getElementById("gora").className = "";
  }
}
   
function secendFunction() 
{
     
      var tag = document.getElementById("firma");
    
  

      var tagname = tag.getElementsByTagName('p')[0]
   
      
 var yScrollAxis = window.pageYOffset;
       
       if (yScrollAxis > 200)
           {
           tagname.style.display = "block";
           }
       else
           tagname.style.display = "none";
    
}
    
 var gallery = $('.gallery a').simpleLightbox();

    
    
