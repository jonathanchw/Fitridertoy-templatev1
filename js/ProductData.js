const productData = [
  {
    id: 1,
    name: "Grasp & Glow Ball",
    price: 6.95,
    shipping: 0,
    image: "img1.png",
    description:
      "<p>The Grasp & Glow Ball is an enchanting sensory delight for your little one. Crafted with soft, textured material, this ball is perfect for tiny hands to grasp and explore. Its gentle glow adds a touch of magic during playtime, providing both visual and tactile stimulation for sensory development. Let your child′s curiosity light up as they hold, squeeze, and roll this captivating ball, making every moment a glowing adventure.</p><p><strong>Product Dimensions: </strong>4 x 4 x 4 inches</p><p><strong> Color: </strong>blue, yellow, red, green</p>",
    href: "grasp&glowball.html",
  },
  {
    id: 2,
    name: "Soft Dino Buddy",
    price: 7.95,
    shipping: 0,
    image: "img2.png",
    description:
      "<p>Meet your child′s new prehistoric pal, the Soft Dino Buddy! With its huggable plush exterior and charming design, this cuddly companion is ready to accompany your little one on endless adventures. Whether it′s snuggling up at bedtime or embarking on imaginative play, the Soft Dino Buddy offers comfort and companionship while sparking your child′s creativity and fostering emotional connections.</p><p><strong>Product Dimensions: </strong>10 x 8 x 5 inches</p><p><strong> Color: </strong>blue</p>",
    href: "SoftDinoBuddy.html",
  },
  {
    id: 21,
    name: "Cow Plushie",
    price: 8.68,
    shipping: 0,
    image: "img21.png",
    description:
      "<p>Introducing our adorable Cow Plushie, the cuddly companion your child has been dreaming of! Crafted with the softest, huggable materials, this charming stuffed cow is the perfect snuggle buddy for both playtime and bedtime. Its endearing black and white markings and sweet expression make it an instant favorite. Whether its a comforting naptime buddy or a cute addition to your childs room decor, this Cow Plushie is ready to provide endless smiles and warm, fuzzy moments. Embrace the joy of cuddles with this lovable, huggable bovine friend today.</p><p><strong>Product Dimensions: </strong>5 x 8 x 8 inches</p><p><strong> Color: </strong>green</p>",
    href: "CowPlushie.html",
  },
  {
    id: 3,
    name: "Spin Cup Sensory Set",
    price: 9.95,
    shipping: 0,
    image: "img3.png",
    description:
      "<p>The Spin Cup Sensory Set brings a whirlwind of sensory exploration to playtime! This captivating set includes a spinning base and an assortment of uniquely textured cups that engage touch, sight, and coordination. As your child stacks, spins, and explores different cup combinations, they′ll enhance their fine motor skills and cognitive development. Watch their eyes light up with wonder as they discover the endless ways to play and learn with the SpinCup Sensory Set.</p><p><strong>Product Dimensions: </strong>6 x 7 x 6 inches</p><p><strong> Color: </strong>orange, yellow, green</p>",
    href: "SpinCupSensorySet.html",
  },
  {
    id: 4,
    name: "Choogo Charles Train Plushie",
    price: 10.95,
    shipping: 0,
    image: "img4.png",
    description:
      "<p>All aboard for cuddles and adventures with Choogo Charles Train Plushie! This adorable plush toy captures the spirit of a friendly train conductor, complete with a soft uniform and a charming smile. Whether your child dreams of railway journeys or cozy snuggle sessions, Choogo Charles is here to make every moment a heartwarming and imaginative experience.</p><p><strong>Product Dimensions: </strong>12 x 6 x 4 inches</p><p><strong> Color: </strong>red, black</p>",
    href: "ChoogoCharlesTrainPlushie.html",
  },
  {
    id: 5,
    name: "Squid Toy Sensory Teether",
    price: 19.99,
    shipping: 0,
    image: "img5.png",
    description:
      "<p>Soothe and stimulate your baby′s senses with the Squid Toy Sensory Teether. Crafted from safe, BPA-free materials, this teether features a variety of textures and shapes that provide relief for teething discomfort while promoting sensory exploration. Its squishy, lightweight design makes it easy for little hands to hold and manipulate, ensuring hours of teething relief and joyful discovery.</p><p><strong>Product Dimensions: </strong>5 x 3 x 0.5 inches</p><p><strong> Color: </strong>orange</p>",
    href: "SquidToySensoryTeether.html",
  },
  {
    id: 6,
    name: "Speedy Car Blocks",
    price: 24.99,
    shipping: 0,
    image: "img6.png",
    description:
      "<p>Unleash your child′s creativity with Speedy Car Blocks! This innovative building set combines the thrill of construction with the excitement of vehicle play. With interlocking blocks and wheels, kids can design and assemble their own speedy cars, enhancing fine motor skills and imaginative thinking. The Speedy Car Blocks set sparks a world of endless engineering possibilities and high-speed adventures.</p><p><strong>Product Dimensions: </strong>8 x 3 x 2 inches</p><p><strong> Color: </strong>orange, black</p>",
    href: "SpeedyCarBlocks.html",
  },
  {
    id: 7,
    name: "Mind Flash Memory Cube",
    price: 39.99,
    shipping: 0,
    image: "img7.png",
    description:
      "<p>Sharpen memory skills while having a blast with the MindFlash Memory Cube! This interactive game challenges players to remember and replicate sequences of light and sound. With varying difficulty levels, it′s perfect for solo play or group competitions, fostering cognitive development and pattern recognition. Get ready to exercise your brain and dazzle your senses with the MindFlash Memory Cube.</p><p><strong>Product Dimensions: </strong>2.5 x 2.5 x 2.5 inches</p><p><strong> Color: </strong>white, black, red, yellow, green, blue, purple</p>",
    href: "MindFlashMemoryCube.html",
  },
  {
    id: 8,
    name: "Kart Hoverboard Adventure Kit",
    price: 54.95,
    shipping: 0,
    image: "img8.png",
    description:
      "<p>Ignite your child′s sense of adventure with the Kart Hoverboard Adventure Kit! Packed with exploration essentials, this kit includes binoculars, a compass, a map, and a rugged backpack. Whether they′re embarking on backyard quests or imaginary journeys, young explorers will love discovering the world around them and cultivating a lifelong love for nature and discovery.</p><p><strong>Product Dimensions: </strong>4 x 10 x 7 inches</p><p><strong> Color: </strong>black, white</p>",
    href: "KartHoverboardAdventureKit.html",
  },
  {
    id: 9,
    name: "Sand Digger Excavator",
    price: 64.95,
    shipping: 0,
    image: "img9.png",
    description:
      "<p>Bring the sandbox to life with the Sand Digger Excavator! This interactive toy lets kids scoop, dig, and create in the sand with a realistic excavator arm. Encouraging outdoor play and imaginative construction, this digger provides endless entertainment while promoting fine motor skills and hand-eye coordination. Watch as your child transforms the sand into their own construction site masterpiece.</p><p><strong>Product Dimensions: </strong>18 x 9 x 7 inches</p><p><strong> Color: </strong>orange, black</p>",
    href: "SandDiggerExcavator.html",
  },
  {
    id: 10,
    name: "Daisy the Cuddle Doll",
    price: 69.95,
    shipping: 0,
    image: "img10.png",
    description:
      "<p>Introducing the Daisy Cuddle Doll, a source of comfort, companionship, and endless hugs! With its soft, plush body and charming daisy-themed outfit, this doll becomes a cherished friend for your little one. Whether it′s naptime, playtime, or simply a moment of snuggles, the Daisy Cuddle Doll is there to provide warmth and love, fostering emotional connections and imaginative play.</p><p><strong>Product Dimensions: </strong>15 x 5 x 3 inches</p><p><strong> Color: </strong>white, blue, orange</p>",
    href: "DaisytheCuddleDoll.html",
  },
  {
    id: 11,
    name: "Ariel Wonder Haven",
    price: 99.95,
    shipping: 0,
    image: "img11.png",
    description:
      "<p>Step into a world of enchantment with the Ariel Wonder Haven! This magical playset invites children to explore the wonders of an underwater kingdom. Complete with vibrant underwater scenes, hidden compartments, and mini figurines, the Ariel Wonder Haven sparks imaginative storytelling and creative adventures that dive deep into the realms of fantasy and play.</p><p><strong>Product Dimensions: </strong>20 x 18 x 15 inches</p><p><strong> Color: </strong>pink, white</p>",
    href: "ArielWonderHaven.html",
  },
  {
    id: 12,
    name: "Dash CodeBot Blue",
    price: 129.95,
    shipping: 0,
    image: "img12.png",
    description:
      "<p>Unleash the power of coding and robotics with the Dash CodeBot Blue! This interactive robot engages aspiring young programmers in learning coding concepts through hands-on activities and games. With its user-friendly interface and endless coding possibilities, Dash CodeBot Blue makes coding education accessible, exciting, and full of innovative potential, igniting a passion for technology and problem-solving.</p><p><strong>Product Dimensions: </strong>6 x 8 x 5 inches</p><p><strong> Color: </strong>blue, orange</p>",
    href: "DashCodeBotBlue.html",
  },
  {
    id: 13,
    name: "3 Wheel Scooter",
    price: 130.9,
    shipping: 0,
    image: "img13.png",
    description:
      "<p>Introducing our sleek and innovative 3 Wheel Scooter, the perfect ride for all ages! Whether youre a young adventurer or a seasoned traveler, this scooter combines stability and style. Its three-wheel design provides exceptional balance, making it an ideal choice for beginners and those seeking a more secure ride. Cruise through the neighborhood or take it for a spin at the park, and let the fun begin. With easy maneuverability and a comfortable ride, our 3 Wheel Scooter ensures a smooth journey every time. Get ready to turn heads and turn corners with this versatile and exciting mode of transportation.</p><p><strong>Product Dimensions: </strong>36.5 x 9.5 x 7.75 inches</p><p><strong> Color: </strong>blue</p>",
    href: "3WheelScooter.html",
  },
  {
    id: 14,
    name: "Kids Electric Sports Car",
    price: 179.9,
    shipping: 0,
    image: "img14.png",
    description:
      "<p>Introducing our Kids Electric Sports Car – the ultimate thrill for young adventurers! This sleek and pint-sized powerhouse is designed for pure excitement. With its striking design, realistic engine sounds, and easy-to-use controls, its the perfect ride-on toy to ignite your childs imagination. The high-quality electric motor ensures a smooth and safe drive, while the adjustable seat and functional headlights add extra style and functionality. Watch your little one zoom around in style, fostering a love for the road and a sense of adventure from an early age. Its more than a toy; its a thrilling experience!</p><p><strong>Product Dimensions: </strong>42.5 x 23.5 x 18.5 inches</p><p><strong> Color: </strong>black</p>",
    href: "KidsElectricSportsCar.html",
  },
];
