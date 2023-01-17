const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* Selection du slider*/
const image = document.querySelector('.slider');

/* nombre de slides*/
const nbSlide = 4;

/* selection de la fleche droite*/
const suivant = document.querySelector('.arrow_right');

/* selection de la fleche gauche*/
const precedent = document.querySelector('.arrow_left');

/* variable pour compter*/
let count = 0;

/* selection de tous les points*/
const dots = document.querySelectorAll('.dot')

/* selection de la tagline*/
const tag = document.querySelector('.tagged')

/*fonction suivant*/
function SlideSuivant()
{
	dots[count].classList.remove('dot_selected');
if (count+1 >= slides.length) {
	count = 0;
} else {
	count = count + 1;
}
	dots[count].classList.add('dot_selected');
 let slide=slides[count]
 const tagline=slide.tagLine
 tag.innerHTML=tagline

 let source=slide.image
 image.src=source

}


/*evenement du click suivant*/
suivant.addEventListener('click',SlideSuivant)

/*fonction precedent*/
function SlidePrecedent()

{
	dots[count].classList.remove('dot_selected');
	if (count > 0) {
		count = count - 1;
	} else {
		count = 3;
	}
	dots[count].classList.add('dot_selected');

	let slide=slides[count]
	const tagline=slide.tagLine
	tag.innerHTML=tagline

	let source=slide.image
	image.src=source
}

/*evenement du click precedent*/
precedent.addEventListener('click',SlidePrecedent)
