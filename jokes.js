const getRando = () => {
    return Math.floor(Math.random()*87);
}

console.log(getRando());

let joke = [`Why did the scarecrow win an award? Because he was outstanding in his field!`,`I told my wife she was drawing her eyebrows too high. She looked surprised.`,`What's orange and sounds like a parrot? A carrot!`,`Parallel lines have so much in common. It's a shame they'll never meet.`,`Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.`,`Why did the bicycle fall over? Because it was two-tired!`,`I'm reading a book on anti-gravity. It's impossible to put down!`,`Did you hear about the cheese factory that exploded? There was nothing left but de-brie.`,`I used to play piano by ear, but now I use my hands.`,`Why don't scientists trust atoms? Because they make up everything!`,`How do you organize a space party? You "planet"!`,`I told my wife she was drawing her eyebrows too low. She looked surprised.`,`What do you call a fish with no eyes? Fsh!`,`I'm on a seafood diet. I see food, and I eat it!`,`Parallel lines have it easy. They'll never meet their in-laws.`,`Did you hear about the claustrophobic astronaut? He just needed a little space.`,`How do you make a tissue dance? You put a little boogie in it!`,`I couldn't figure out why my computer was getting heavier. Then I realized I had too many tabs open.`,`What's brown and sticky? A stick!`,`Did you hear about the kidnapping at the playground? They woke up!`,`I used to play piano by ear, but now I use my hands.`,`I'm friends with all electricians. We have such good current connections.`,`What do you get when you cross a snowman and a vampire? Frostbite!`,`My wife told me I should do lunges to stay in shape. That would be a big step forward.`,`Did you hear about the guy who invented Lifesavers? He made a mint!`,`How do you organize a space party? You "planet"!`,`What's the difference between a snowman and a snowwoman? Snowballs!`,`I'm reading a book on anti-gravity. It's impossible to put down!`,`Did you hear about the Italian chef that died? He pasta way.`,`I used to be a baker, but I couldn't make enough dough.`,`Why don't skeletons fight each other? They don't have the guts!`,`What's orange and sounds like a parrot? A carrot!`,`I used to be a baker, but I couldn't make enough dough.`,`How do you organize a space party? You "planet"!`,`Did you hear about the cheese factory that exploded? There was nothing left but de-brie.`,`I told my wife she was drawing her eyebrows too high. She looked surprised.`,`What do you call a bear with no teeth? A gummy bear!`,`How do you make a tissue dance? You put a little boogie in it!`,`I used to play piano by ear, but now I use my hands.`,`Why did the scarecrow win an award? Because he was outstanding in his field!`,`Did you hear about the claustrophobic astronaut? He just needed a little space.`,`Parallel lines have so much in common. It's a shame they'll never meet.`,`I'm on a seafood diet. I see food, and I eat it!`,`What's brown and sticky? A stick!`,`How do you make a lemon drop? Just let it fall!`,`Did you hear about the kidnapping at the playground? They woke up!`,`I couldn't figure out why my computer was getting heavier. Then I realized I had too many tabs open.`,`What do you call a fish with no eyes? Fsh!`,`My wife told me I should do lunges to stay in shape. That would be a big step forward.`,`Did you hear about the guy who invented Lifesavers? He made a mint!`,`How does a penguin build its house? Igloos it together!`,`Why did the math book look sad? Because it had too many problems.`,`What did one wall say to the other wall? "I'll meet you at the corner."`,`Why did the scarecrow become a successful politician? Because he was outstanding in his field.`,`I'm reading a book on anti-gravity. It's impossible to put down!`,`How do you organize a space party? You "planet"!`,`What's brown and sticky? A stick!`,`Did you hear about the cheese factory that exploded? There was nothing left but de-brie.`,`I used to be a baker, but I couldn't make enough dough.`,`Parallel lines have so much in common. It's a shame they'll never meet.`,`What do you call a bear with no teeth? A gummy bear!`,`I used to play piano by ear, but now I use my hands.`,`Why don't skeletons fight each other? They don't have the guts!`,`What's orange and sounds like a parrot? A carrot!`,`I told my wife she was drawing her eyebrows too high. She looked surprised.`,`Did you hear about the claustrophobic astronaut? He just needed a little space.`,`How do you make a tissue dance? You put a little boogie in it!`,`I'm on a seafood diet. I see food, and I eat it!`,`What's the difference between a snowman and a snowwoman? Snowballs!`,`I couldn't figure out why my computer was getting heavier. Then I realized I had too many tabs open.`,`Did you hear about the guy who invented Lifesavers? He made a mint!`,`I'm friends with all electricians. We have such good current connections.`,`How do you organize a space party? You "planet"!`,`What's the difference between a hippo and a zippo? One is heavy; the other is a little lighter.`,`Did you hear about the Italian chef that died? He pasta way.`,`I used to be a baker, but I couldn't make enough dough.`,`Why don't scientists trust atoms? Because they make up everything!`,`What do you get when you cross a snowman and a vampire? Frostbite!`,`Did you hear about the kidnapping at the playground? They woke up!`,`I told my wife she was drawing her eyebrows too low. She looked surprised.`,`How do you make a lemon drop? Just let it fall!`,`Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.`,`I used to play piano by ear, but now I use my hands.`,`Why did the scarecrow win an award? Because he was outstanding in his field!`,`Parallel lines have it easy. They'll never meet their in-laws.`,`What's brown and sticky? A stick!`]

document.getElementsByTagName("p")[0].innerHTML = joke[getRando()];