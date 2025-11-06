import { useState } from 'react'
import Head from 'next/head'

export default function StoryBook() {
  const [currentPage, setCurrentPage] = useState(0)

  const story = [
    {
      title: "The Adventures of Whiskers and Billy",
      text: "Once upon a time, in a sunny meadow surrounded by rolling hills, lived a curious orange cat named Whiskers and a playful baby goat named Billy.",
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Chapter 1: The Meeting",
      text: "Whiskers was napping under an old oak tree when she heard a soft 'Maaa!' She opened one eye and saw the tiniest goat she had ever seen.",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "",
      text: "'Hello there!' said Whiskers, stretching her paws. 'I'm Whiskers. What's your name?' The baby goat hopped closer. 'I'm Billy! Want to play?'",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "",
      text: "From that moment on, Whiskers and Billy became the best of friends. They would meet every morning when the sun painted the sky pink and gold.",
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "Chapter 2: The Great Climb",
      text: "One day, Billy looked up at the big hill. 'I want to climb to the top!' he announced. Whiskers twitched her whiskers nervously. 'That's very high...'",
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "",
      text: "But Billy was determined. 'Come on, Whiskers! It will be an adventure!' So the brave cat and the fearless goat began their journey up the hill.",
      bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      title: "",
      text: "Billy hopped from rock to rock with ease, his little hooves sure and steady. Whiskers climbed more carefully, using her sharp claws to grip the stones.",
      bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      title: "",
      text: "Halfway up, they found a beautiful butterfly with wings like stained glass. It danced around them, leading them to a patch of sweet clover.",
      bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      title: "",
      text: "'This is delicious!' said Billy, munching happily. Whiskers lay in the soft grass, purring contentedly as she watched the clouds drift by.",
      bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      title: "",
      text: "After their snack, they continued climbing. The path grew steeper, but they encouraged each other. 'You can do it!' 'Almost there!'",
      bg: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)"
    },
    {
      title: "",
      text: "Finally, they reached the summit! The view was breathtaking. They could see the entire valley below, dotted with farms and forests.",
      bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    },
    {
      title: "",
      text: "'We did it!' cheered Billy, jumping with joy. Whiskers smiled proudly. Together, they had conquered the great hill!",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Chapter 3: The Storm",
      text: "Dark clouds rolled in suddenly. Thunder rumbled. 'We need shelter!' meowed Whiskers. Billy looked around frantically for a safe place.",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "",
      text: "They spotted a small cave and dashed inside just as rain began to pour. The cave was cozy and dry, with soft moss covering the floor.",
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "",
      text: "Lightning flashed outside. Billy snuggled close to Whiskers, trembling slightly. 'Don't worry,' purred Whiskers. 'The storm will pass soon.'",
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "",
      text: "To keep Billy calm, Whiskers told stories of her adventures - about chasing mice, climbing trees, and exploring the old barn.",
      bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      title: "",
      text: "Billy shared his stories too - about learning to jump, his first taste of fresh grass, and playing with the other farm animals.",
      bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      title: "",
      text: "As they talked and laughed, Billy forgot all about the storm. Before they knew it, the rain had stopped and the sun was peeking through the clouds.",
      bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      title: "",
      text: "They stepped outside to find the most beautiful rainbow arching across the sky. 'It's magical!' gasped Billy. Whiskers nodded in agreement.",
      bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      title: "Chapter 4: The Hidden Garden",
      text: "Following the rainbow's path, they discovered a secret garden filled with colorful flowers and buzzing bees. It was like a fairy tale!",
      bg: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)"
    },
    {
      title: "",
      text: "Roses climbed over stone walls. Lavender swayed in the breeze. Daisies and sunflowers nodded their heads as if welcoming the friends.",
      bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    },
    {
      title: "",
      text: "'This must be the most beautiful place in the world!' said Billy, spinning in circles with happiness. Butterflies landed on his little horns.",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "",
      text: "Whiskers discovered a fountain in the center of the garden. The water sparkled like diamonds in the sunlight. She lapped up the cool, fresh water.",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "",
      text: "They spent the afternoon exploring every corner of the garden. They found a family of rabbits, a wise old turtle, and even a friendly hedgehog.",
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "",
      text: "The hedgehog, named Prickles, told them the garden was centuries old. 'Many have sought it, but few have found it. You two are special.'",
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "Chapter 5: The Picnic",
      text: "The next day, Billy had an idea. 'Let's have a picnic in the garden!' Whiskers agreed enthusiastically. They began gathering supplies.",
      bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      title: "",
      text: "Billy brought fresh clover and dandelion greens. Whiskers contributed sardines and cream from the farmhouse. They also packed berries and honey.",
      bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      title: "",
      text: "They spread a checkered blanket under a willow tree. The branches hung down like a curtain, creating a cozy private space.",
      bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      title: "",
      text: "As they ate, they talked about their dreams. Billy wanted to become the best climber in the valley. Whiskers wanted to explore the entire world.",
      bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      title: "",
      text: "'Maybe we can do both together!' suggested Billy. Whiskers purred happily. 'I'd like that very much. Adventures are better with friends.'",
      bg: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)"
    },
    {
      title: "",
      text: "After lunch, they played hide and seek among the flowers. Billy was surprisingly good at hiding despite his bright white coat.",
      bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    },
    {
      title: "",
      text: "When the sun began to set, painting the sky orange and purple, they lay on their backs watching the first stars appear.",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Chapter 6: The Night Adventure",
      text: "'Have you ever been out at night?' asked Whiskers. Billy shook his head. 'Never. Is it scary?' 'It's magical,' replied Whiskers. 'Come, I'll show you.'",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "",
      text: "As darkness fell, the garden transformed. Fireflies began to glow, creating tiny points of light everywhere. The flowers released sweet perfumes.",
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "",
      text: "An owl hooted softly from a nearby tree. 'Don't worry,' whispered Whiskers. 'That's just Oliver. He's friendly.' The owl winked one large eye at them.",
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "",
      text: "They walked through the moonlit garden, their path illuminated by fireflies. Everything looked different at night - mysterious and enchanting.",
      bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      title: "",
      text: "Billy saw a shooting star. 'Make a wish!' said Whiskers. Billy closed his eyes tight. 'I wish for our friendship to last forever.'",
      bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      title: "",
      text: "Whiskers made the same wish. They touched noses, sealing their promise to always be friends, no matter what adventures lay ahead.",
      bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      title: "Chapter 7: The Talent Show",
      text: "The farm animals were organizing a talent show. 'We should enter!' said Billy excitedly. But Whiskers was nervous. 'What talent do I have?'",
      bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      title: "",
      text: "'You're amazing at climbing!' said Billy. 'And you can jump so high!' Whiskers thought about it. 'What about you?' 'I can balance on anything!'",
      bg: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)"
    },
    {
      title: "",
      text: "They decided to create an act together - a climbing and balancing performance. They practiced every day, encouraging each other when tricks were difficult.",
      bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    },
    {
      title: "",
      text: "The day of the show arrived. The barn was decorated with ribbons and flowers. All the animals gathered to watch the performances.",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "",
      text: "The chickens sang a chorus. The pigs did a comedy routine. The sheep performed a synchronized dance. Every act was wonderful!",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "",
      text: "Finally, it was Whiskers and Billy's turn. Whiskers climbed a tall pole while Billy balanced on a beam, and they performed tricks in perfect harmony.",
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "",
      text: "The crowd cheered wildly! For their finale, Whiskers leaped from the pole and landed perfectly on Billy's back as he balanced on one hoof.",
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "",
      text: "They won first prize - a shiny blue ribbon! But the real prize was knowing they had achieved something amazing together.",
      bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      title: "Chapter 8: The Rescue",
      text: "One morning, Whiskers heard desperate chirping. A baby bird had fallen from its nest high in a tree. 'We have to help!' said Billy.",
      bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      title: "",
      text: "The nest was very high, even for Whiskers. 'I'll climb up with the bird,' said Whiskers. 'You keep watch below.' Billy nodded seriously.",
      bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      title: "",
      text: "Whiskers carefully picked up the tiny bird in her mouth, being gentle with her teeth. She began the long climb up the tree trunk.",
      bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      title: "",
      text: "The mother bird watched anxiously. Whiskers climbed higher and higher, her muscles straining. Billy called encouragement from below.",
      bg: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)"
    },
    {
      title: "",
      text: "Finally, Whiskers reached the nest. She gently placed the baby bird inside. The mother bird chirped gratefully, nuzzling her babies.",
      bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    },
    {
      title: "",
      text: "As Whiskers climbed down, all the birds in the tree sang a beautiful song of thanks. Billy danced with joy that their friend was safe.",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "",
      text: "From that day on, the birds would always sing special songs when Whiskers and Billy passed by. They had made even more friends!",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "Chapter 9: The Winter Wonder",
      text: "Winter arrived, bringing the first snow. Billy had never seen snow before. 'What is this white stuff?' he asked, touching it with his hoof.",
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "",
      text: "'It's snow!' laughed Whiskers. 'Watch this!' She made a snowball and rolled it across the ground. Billy's eyes grew wide with wonder.",
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "",
      text: "They spent the whole day playing in the snow. They made snow angels - well, a snow cat and a snow goat. They built a snowman with a carrot nose.",
      bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      title: "",
      text: "Billy discovered he could slide down hills on his belly. 'This is amazing!' he shouted, zooming down the slope. Whiskers chased after him, laughing.",
      bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      title: "",
      text: "When they got cold, they went to the barn. The farmer's wife gave them warm milk and fresh hay. They cuddled together, sharing warmth.",
      bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      title: "",
      text: "'Every season with you is special,' said Billy sleepily. Whiskers purred in agreement, her eyes slowly closing as snow fell softly outside.",
      bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      title: "Chapter 10: The Spring Festival",
      text: "When spring arrived, the whole valley celebrated with a festival. There would be games, food, music, and dancing!",
      bg: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)"
    },
    {
      title: "",
      text: "'Let's enter the three-legged race!' suggested Billy. They tied their legs together and practiced running. At first, they kept falling over!",
      bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    },
    {
      title: "",
      text: "But they didn't give up. They learned to move together, counting 'One, two, three!' Soon they were running smoothly across the meadow.",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "",
      text: "On festival day, the meadow was transformed with colorful banners, flower garlands, and delicious smells from food stalls everywhere.",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "",
      text: "They raced against other pairs - two rabbits, two ducks, and even two mice. The race was close, with everyone running their fastest.",
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "",
      text: "Whiskers and Billy crossed the finish line first! They had won! They celebrated by sharing a huge plate of festival treats.",
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "",
      text: "As the sun set, everyone gathered for the spring dance. Whiskers and Billy danced together under the stars, their hearts full of joy.",
      bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      title: "Chapter 11: The Lesson",
      text: "One day, a new animal arrived at the farm - a grumpy old donkey named Clyde. He didn't want to talk to anyone. 'Leave me alone!' he brayed.",
      bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      title: "",
      text: "'Why is he so sad?' whispered Billy. Whiskers thought carefully. 'Maybe he's lonely. Maybe he needs friends but doesn't know how to ask.'",
      bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      title: "",
      text: "They decided to be kind to Clyde, even though he was grumpy. Every day, they said hello. They left treats by his fence. They never gave up.",
      bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      title: "",
      text: "Slowly, Clyde began to soften. One day, he actually said 'Good morning' back! Billy and Whiskers exchanged excited glances.",
      bg: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)"
    },
    {
      title: "",
      text: "Eventually, Clyde told them his story. He had been lonely for so long that he'd forgotten how to be friendly. 'Thank you for not giving up on me,' he said.",
      bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    },
    {
      title: "",
      text: "From then on, Clyde joined their adventures. They learned that kindness and patience can melt even the grumpiest hearts.",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Chapter 12: The Treasure Hunt",
      text: "Old Prickles the hedgehog gave them a treasure map. 'This belonged to the garden's first keeper,' he explained. 'The treasure still waits to be found.'",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "",
      text: "The map showed mysterious symbols and riddles. 'Where the sun sleeps at night, beneath the ancient stone, there the treasure lies.' What could it mean?",
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "",
      text: "'The sun sleeps in the west!' realized Billy. They found an old stone marker on the western edge of the garden and began to dig.",
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "",
      text: "Their paws and hooves scraped away dirt until finally - clink! They hit something solid. Working together, they unearthed a small wooden chest.",
      bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      title: "",
      text: "Inside the chest wasn't gold or jewels. It was seeds - hundreds of different flower seeds, each one labeled in beautiful handwriting.",
      bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      title: "",
      text: "They planted the seeds throughout the garden. Months later, new flowers bloomed - varieties that hadn't been seen in a hundred years!",
      bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      title: "",
      text: "The real treasure was making the garden even more beautiful for everyone to enjoy. They learned that the best treasures are those you can share.",
      bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      title: "Epilogue: Forever Friends",
      text: "Seasons passed, and Whiskers and Billy grew older. But their friendship never changed. Every day brought new adventures, big and small.",
      bg: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)"
    },
    {
      title: "",
      text: "Sometimes they climbed mountains. Sometimes they just napped in the sun. It didn't matter what they did, as long as they were together.",
      bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    },
    {
      title: "",
      text: "Other young animals would come to them for advice. 'How did you become such good friends?' they would ask. The answer was always simple.",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "",
      text: "'We were kind to each other. We listened. We helped each other be brave. We shared our joys and comforted each other's fears.'",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "",
      text: "'We laughed together and cried together. We celebrated victories and learned from mistakes. We never gave up on each other.'",
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "",
      text: "And most importantly: 'We chose to be friends every single day.' Because that's what true friendship is - a choice you make over and over again.",
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "The End",
      text: "And so, Whiskers the cat and Billy the baby goat continued their adventures, knowing that as long as they had each other, every day would be magical. The End.",
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
  ]

  const goToPage = (page) => {
    if (page >= 0 && page < story.length) {
      setCurrentPage(page)
    }
  }

  return (
    <>
      <Head>
        <title>The Adventures of Whiskers and Billy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="book-container">
        <div className="page" style={{ background: story[currentPage].bg }}>
          <div className="safe-zone">
            <div className="page-number">Page {currentPage + 1} of {story.length}</div>

            {story[currentPage].title && (
              <h1 className="page-title">{story[currentPage].title}</h1>
            )}

            <div className="page-text">{story[currentPage].text}</div>

            <div className="navigation">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 0}
                className="nav-button"
              >
                ← Previous
              </button>

              <div className="page-indicator">
                {Array.from({ length: story.length }, (_, i) => (
                  <span
                    key={i}
                    className={`dot ${i === currentPage ? 'active' : ''}`}
                    onClick={() => goToPage(i)}
                  />
                ))}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === story.length - 1}
                className="nav-button"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
