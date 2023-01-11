let article = document.getElementsByTagName("article")[0];
let content = document.getElementById("content");

function close() {
	article.style.display = "none";
}
document.getElementById("close").addEventListener("click", close)

let stuff = [
	// Intro:
	`<h1>Herman Hesse's Use of Govinda in <i>Siddhartha</i></h1> <span center>by Cole Wilson</span> <p>I chose to focus on the following question for my analysis:</p> <blockquote><i>Govinda has several meetings with Siddhartha, spanning all stages of his life. At each meeting Siddhartha appears different to Govinda. How does this fluidity of Siddhartha’s personality and circumstances contribute to his eventual understanding of life, and how does Hesse use Govinda to highlight this?</i></blockquote> <p>On this website, I've highlighted each of Siddhartha's six conversations with Govinda, and their impact. Finally, there is a conclusion section that provides an analysis and a formal answer to the question.</p>`,
	
	// Meeting 1:
	"b",

	// Meeting 2:
	"c",

	// Meeting 3:
	"d",

	// Meeting 4;
	"e",

	// Meeting 5:
	"f",

	// Meeting 6:
	"g",

	// Conclusion:
	"Conclusion"
]

function show(i) {
	content.innerHTML = stuff[i-1];
	article.style.display = "block";
}