var slideIndex=1;
showSlide(slideIndex);


function changeSlide(n)
{
	slideIndex+= n;
	showSlide(slideIndex);	
}

function showSlide(n)
{
	var i;
	var slides= document.getElementsByClassName("mySlides");
	if(n > slides.length)
	{
		slideIndex=1
	}
	if(n < 1)
	{
		slideIndex= slides.length

	}
	for(i=0;i<slides.length;i++)
	{
		slides[i].style.display="none";
	}
	slides[slideIndex-1].style.display="block";
}

function togglefun()
{
	var t=document.getElementsByClassName("list");
	var i;
	for(i=0;i<t.length;i++)
	{
		t[i].style.display="block";
	}
}