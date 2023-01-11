let article = document.getElementsByTagName("article")[0];
let content = document.getElementById("content");

function close() {
	article.style.display = "none";
}
document.body.addEventListener("keyup", (e) => {
  if (e.key === "Escape") close()
});
document.getElementById("close").addEventListener("click", close)

let stuff = [
	// Intro:
	`
 <h1>Herman Hesse's Use of Govinda in <i>Siddhartha</i></h1>
 <span center>by Cole Wilson</span> 
 <p>I chose to focus on the following question for my analysis:</p>
 <blockquote>
	 <i>Govinda has several meetings with Siddhartha, spanning all
	 stages of his life. At each meeting Siddhartha appears different to Govinda.
	 How does this fluidity of Siddhartha’s personality and circumstances contribute
	 to his eventual understanding of life, and how does Hesse use Govinda to
	 highlight this?</i>
 </blockquote>
 <p>
	 On this website, I've highlighted each
	 of Siddhartha's six conversations with Govinda, and their impact. Finally,
	 there is a conclusion section that provides an analysis and a formal answer
		to the question.
	</p>
 <hr>
 <p>This website was made using basic HTML, JavaScript, and CSS. You can
 find the entire code for this project at <a href="https://github.com/cole-wilson/siddhartha/">github.com/cole-wilson/siddhartha</a>.</p>
 <p>
		My sources included the following:
	</p>
 <ol>

<li><a href="https://photos.com/featured/winding-river-course-seen-from-above-mint-images-art-wolfe.html">River Graphic</a></li>

<li><a href="https://www.himalayanacademy.com/view/manivelu-dws-timeline-vedic-priests-yajna">Vedic Ritual Painting</a></li>

<li><a href="https://samim.io/p/2020-07-12-fasting-buddha/">Fasting Buddha Statue</a></li>

<li><a href="https://fineartamerica.com/featured/buddhist-monks-walking-along-dirt-road-martin-puddy.html">Walking Monks</a></li>

<li><a href="https://kirit.com/Sermon%20in%20the%20Deer%20Park">Deer Park Painting</a></li>

<li><a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.priyaahlawat.com%2Fworks%2F1999582%2Fbargaining-indian-village-market&psig=AOvVaw2CYht0kSputN2ct82-OQ4I&ust=1673501353970000&source=images&cd=vfe&ved=0CBAQjhxqFwoTCJi0u8DkvvwCFQAAAAAdAAAAABAR">Market</a></li>

<li><a href="https://commons.wikimedia.org/wiki/File:Ferryman_Crossing_Jalangi,_Swarupganj,_Mayapur,_WB.jpg">Ferry Boat on a River</a></li>

<li><a href="https://www.amazon.com/Siddhartha-Literary-Touchstone-Hermann-Hesse/dp/1580493904">SIddhartha Book Cover</a></li>

</ol>

 `,
	
	// Meeting 1:
	`
<h1>Meeting 1: The Brahmin's Son</h1>
<i center>Siddhartha tells Govinda that they must leave to learn from the Samanas.</i>
<p>
	This initial meeting of the two friends serves to introduce their personalities
	and shows Siddhartha’s dissatisfaction with his life. It also characterizes Govinda
	as passive and a “follower” of Siddhartha. Their somewhat clashing personalities
	foreshadow future conflict between the two. On page 17, Hesse writes that Govinda
	“paled like the peel of a banana” upon hearing his friend’s decision to join the
	Samanas and lead an ascetic life, and is very opposed and worried. His first thought
	is whether Siddhartha’s father will allow it, showing that he does not truly
	understand Siddhartha’s motivations (or at the very least does not share them).
	Established as content with his place in life and resistant to change, Govinda
	surprises both Siddhartha and the reader when he later accompanies his friend to
	travel with the Samanas. The key purpose of this early dialogue is to set up the
	exposition and show how Siddhartha lived in his first “stage” of his life.
</p>

 `,

	// Meeting 2:
`
<h1>Meeting 2: The Samana</h1>
<i center>Siddhartha discusses the lack of understanding that can be gained from Samana teachings.</i>
<p>
	Hesse sets up this second meeting as describing Govinda as Siddhartha’s “shadow” (pg. 23),
	while simultaneously noting that they almost never spoke with one another. Therefore, the
	two conversations that occur in quick succession can be considered quite important. By
	claiming that an ascetic lifestyle has no apparent value, Siddhartha once again changes
	himself internally. Renouncing his earlier feelings that the Samanas would satisfy his quest
	for enlightenment, he once again searches for something further. Govinda however, has once
	again become content with his situation and sees no reason to change anything. This is a key
	difference in their personalities that will be a recurring theme throughout the novella.
	Govinda is almost always happy with what he has: trusting the existing system to take him
	into a higher state of being without truly committing to change himself. Siddhartha on the
	other hand, is almost never satisfied with his situation: always willing and yearning to grow
	and become “more.” Govinda’s inability to think outside the box and break out of existing
	systems will eventually alienate him from his friend, and lead him into a life of perpetual
	unhappiness. Furthermore, Govinda’s claim that their learning is following the path of an
	ascending spiral and that they have already “climbed several steps” is not logically sound.
	Like a circle, a spiral too is cyclical: tightening and tightening but never fully meeting
	the center. Siddhartha understands this, and wishes to create more of a radius: a direct
	path to the center. In the end, Herman Hesse uses these conversations to further highlight
	Siddhartha’s quest for knowledge as well as Govinda’s lack of initiative.
</p>
 `,

	// Meeting 3:
	`
<h1>Meeting 3: The Pilgrims</h1>
<i center>Siddhartha apparently changes his mind and leaves to visit the Buddha with Govinda.</i>
<p>
This interaction also serves as an important turning point in the novel. In perhaps his only
independent act, Govinda suggests that he and Siddhartha visit the Buddha in Savathi. Siddhartha
seems pleasantly surprised at his friend's initiative and agrees. However, it is clear from the
beginning that he does not regard the Buddha as someone who will make a meaningful difference in
his life. On page 27, Siddhartha claims that the Buddha’s (Gotama’s) true gift is that he “is
calling [them] away from the Samanas!,” and that “Whether he has other things to give to [them],... 
let [them] wait for this with quieted hearts.” Per their previous interaction, it is already known
that Siddhartha’s intention was to leave the Samanas. However, he doesn’t! This hesitancy can likely
be drawn back to his friendship with Govinda, and his reluctance to leave him behind. By waiting for
Govinda to initiate the departure, he can leave with a clear conscience.
</p>
 `,

	// Meeting 4;
	`
 <h1>Meeting 4: Deer Park</h1>
 <i center>Siddhartha informs Govinda that he will not join as a disciple of the Buddha and instead leave Govinda to lead his own life.</i>
 <p>
 Claiming that “this is what you wanted for yourself!,” on page 32, Siddhartha firmly puts
 Govinda in his place, making a concrete decision for him. Arguably, this act is done completely
 out of love. Siddhartha shows that he has his friend’s true interests at heart by making the
 choice for him to stay. Without Siddhartha’s intervention, Govinda possibly would have followed
 him away from the Buddha. Siddhartha also purposely distances himself from his friend because
 he has a feeling that true enlightenment can only come from temporarily following his desires.
 It can also be posited that Siddhartha parts with his friend for another reason. Govinda is
 currently the only thing tying Siddhartha back to his past life at his father’s house. With
 Govinda along, Siddhartha can never fully break away from his previous life and become someone new.
 </p>
 `,

	// Meeting 5:
	`
<h1>Meeting 5: The Merchant</h1>
<i center>Govinda discovers Siddhartha under a tree.</i>
<p>
When Govinda happens across Siddhartha sleeping under the tree next to the river, he does not
recognize him. Instead, out of the kindness of his heart, he stops to ensure the sleeper’s safety.
By showing Govinda as a protective guardian to Siddhartha, Hesse shows their roles to appear
(initially) reversed, with Govinda seeming patronizing and protective of Siddhartha. Clearly,
after such a long time the dynamic between the two has changed, Hesse writes on page 75 that “Govinda
looked for a long time with doubt in his eyes at the friend of his youth.” Govinda seems to (perhaps
rightfully) place himself on higher moral ground than his former friend and feel slightly superior
to him. Instead of living a life of piety and mysticism, Siddhartha has just spent several years
living in complete luxury believing it will enlighten him. However, Govinda does not understand this
and soon leaves his friend alone. This interaction is extremely important, as it sets up a new dynamic
between the friends and prepares the reader for the sixth interaction where it once again changes.
Finally, Siddhartha’s meeting with Govinda furthers his idea that monasticism and following teachings
cannot lead to enlightenment. Right in front of him is a perfect example: Govinda does not appear to
be “happy” or to have reached Nirvana, and instead seems to be going through the motions of an endless
circle/spiral reminiscent of their words in the 2nd interaction.
</p>
`,

	// Meeting 6:
	`
<h1>Meeting 6: The Ferryman</h1>
<i>Govinda seeks wisdom from Siddhartha and attains enlightenment after kissing his forehead.</i>
<p>
The two friends meet again in their longest interaction yet (spanning several pages!). In it, Govinda
is ferried across the river by Siddhartha. After recognizing each other, they sit on the bank and talk
for a while. By admitting he hasn’t yet been enlightened, Govinda confirms his friend’s idea of false
teachings and appears lost and saddened to the reader. Despite this, he still does not believe that
Siddhartha can solve any of this. Hesse writes on page 110 that Govinda secretly “[thinks] to himself:
This Siddhartha is a strange person. He articulates odd ideas and his teachings sound foolish….” After
kissing his forehead, Govinda sees “a long sequence of many other faces — a flowing river of thousands
of faces — all come and disappear….” Those faces exemplify Siddhartha’s idea of self discovery and living
many lives. After seeing this, the readers assume that Govinda too is enlightened and has attained Nirvana.
Hesse uses this sequence of events for several reasons. First, he uses Govinda to show that <i>anyone</i>
can attain Nirvana, no matter how far they stray from the path or and “lost.” Also, by comparing Govinda
and Siddhartha to one another, Hesse pits their ideals and ways of life against each other as well. Will
the Gotoma Buddha’s teachings prevail over Siddhartha’s self discovery? No they don’t. Only by following
Siddhartha’s way could Govinda be enlightened, and this makes a strong comment on the message of the book,
which will be discussed in the conclusion.
</p>
 `,

	// Conclusion:
	`
 <h1>Conclusion</h1>
 <p>Herman Hesse uses the character of Govinda in several ways. First, he acts as a sounding board for Siddhartha’s monologues, giving us insight into Siddhartha’s thinking process and motivation. Without Govinda, Siddhartha’s reasoning and decisions would be a mystery to the readers without dialogue to support it. Govinda is an efficient utility to show these things, and Hesse uses him masterfully. Every single conversation marks a turning or shifting point in the story, so on a very basic level readers can regard Govinda as a plot necessity.</p>
<p>But Govinda is much more than that! In addition to a “sounding board,” he also serves as a foil to Siddhartha. By establishing them as contrasting characters (mentally weak vs. strong, passive vs. having initiative, subservient vs. individualistic), Hesse highlights Siddhartha’s strengths and unique qualities. Despite their differences though, they both share the same end goal: enlightenment, something they both end up achieving. However, Govinda is only able to attain true enlightenment through Siddhartha’s actions. Because of this, Hesse firmly cements Siddhartha as a true teacher: a Buddha, and thus makes a comment on how individual searching is the only way to truly understand one’s self.</p>
<p>Finally, Hesse scatters Govinda’s meetings with his friend out over long periods of time. In several instances, Govinda does not even recognize Siddhartha! The various ways Siddhartha appears to him in different stages of life (Brahmin, ascetic, merchant, and ferryman), show the many hats Siddhartha had to wear in order to achieve Nirvana. This multifaceted view of Siddhartha draws interesting parallels to the theme and cycle of life, death, and rebirth that permeates the novella. In addition to the countless lives he has lived before the time of the book, Siddhartha has also lived through many shorter lives throughout the course of the story. This further posits that a wealth of experiences and a variety of perspectives is imperative to follow the Middle Way. By experiencing all sorts of lives and situations, one can have a better understanding of their current life.</p>

 `
]

function show(i) {
	content.innerHTML = stuff[i-1];
	article.style.display = "block";
}
