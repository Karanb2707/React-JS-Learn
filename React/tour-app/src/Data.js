const data = [
  {
    id: 1,
    name: "Mumbai",
    info: "Mumbai, the financial capital of India, is a city that never sleeps. From the iconic Gateway of India to the bustling Marine Drive, it offers a dynamic mix of cultures, business, and entertainment. Mumbai is home to Bollywood, luxury shopping, historical landmarks, and some of the most diverse food scenes in India. Its local trains, dabbawalas, and high-rises reflect both tradition and progress. The city’s coastline, art galleries, heritage buildings like Chhatrapati Shivaji Terminus, and neighborhoods like Colaba and Bandra make it a truly cosmopolitan hub.",
    image: "https://c4.wallpaperflare.com/wallpaper/113/868/982/chhatrapati-shivaji-maharaj-terminus-mumbai-india-wallpaper-preview.jpg",
    price: 95000
  },
  {
    id: 2,
    name: "Delhi",
    info: "Delhi, India’s capital, is a fascinating blend of ancient history and modern infrastructure. With monuments like the Red Fort, Qutub Minar, and Humayun’s Tomb, it serves as a living museum of Mughal architecture. Delhi is also home to a thriving political scene, bustling markets such as Chandni Chowk, and expansive green parks. Areas like Connaught Place and Hauz Khas reflect urban sophistication. Its street food, especially parathas and chaat, is world-famous. Delhi showcases India's diversity, from religious landmarks to cultural centers, making it a must-visit for history buffs and explorers.",
    image: "https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_640.jpg",
    price: 88000
  },
  {
    id: 3,
    name: "Bangalore",
    info: "Bangalore, now Bengaluru, is often dubbed the Silicon Valley of India due to its booming IT sector. The city is known for its cool climate, lush gardens, and thriving tech culture. Besides global corporations and startups, Bangalore offers historic charm with places like Tipu Sultan’s Palace and Bangalore Palace. The nightlife, craft beer culture, and eateries around Indiranagar and Koramangala are popular among youth. It also serves as a gateway to scenic spots like Coorg and Mysore. Its mix of progress and green spaces make it a favorite among professionals and students alike.",
    image: "https://plus.unsplash.com/premium_photo-1697729606469-027395aadb6f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2Fsb3JlfGVufDB8fDB8fHww",
    price: 92000
  },
  {
    id: 4,
    name: "Hyderabad",
    info: "Hyderabad, the City of Pearls, is a city rich in heritage and modern advancements. The city is known for iconic landmarks like Charminar, Golconda Fort, and the bustling Laad Bazaar. A confluence of cultures, Hyderabad is where biryani is not just a dish but a tradition. The city also boasts a strong tech presence with HITEC City hosting major IT firms. It is home to Ramoji Film City and has a growing cosmopolitan vibe while maintaining its royal Nizam-era charm. The seamless blend of old-world architecture and modern skyscrapers makes Hyderabad unique.",
    image: "https://images.unsplash.com/photo-1657981630164-769503f3a9a8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh5ZGVyYWJhZHxlbnwwfHwwfHx8MA%3D%3D",
    price: 75000
  },
  {
    id: 5,
    name: "Chennai",
    info: "Chennai, formerly known as Madras, is a cultural stronghold of South India. With a coastline that features the long Marina Beach, Chennai is also a hotspot for classical Carnatic music and Bharatanatyam dance. The city is home to stunning Dravidian-style temples like Kapaleeshwarar Temple and ancient churches. It has a thriving automobile and IT industry, contributing significantly to India’s economy. Known for its strong sense of tradition and hospitality, Chennai blends modern commerce with age-old customs. Its filter coffee, traditional silk, and vibrant festivals add to its distinct identity.",
    image: "https://images.unsplash.com/photo-1563715493579-e0b3e0493b60?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoZW5uYWl8ZW58MHx8MHx8fDA%3D",
    price: 79000
  },
  {
    id: 6,
    name: "Pune",
    info: "Pune, known as the Oxford of the East, is an educational and cultural hub in Maharashtra. It’s a city where tradition meets innovation, housing ancient forts like Shaniwar Wada and modern tech parks. The city’s student population keeps it vibrant and dynamic. Pune’s pleasant weather, proximity to hill stations like Lonavala, and a rich Marathi cultural scene make it very livable. It’s also recognized for its booming IT and automobile industries. Weekend getaways, spiritual retreats like Osho Ashram, and thriving food culture contribute to Pune’s growing popularity among young professionals.",
    image: "https://thumbs.dreamstime.com/b/historical-shaniwar-wada-palace-pune-maharastra-india-garden-shaniwarwada-fortification-city-maharashtra-built-163963152.jpg",
    price: 72000
  },
  {
    id: 7,
    name: "Kolkata",
    info: "Kolkata, the cultural capital of India, is a city of literature, art, and revolutionary thought. Formerly Calcutta, it was the capital of British India and retains its colonial charm through buildings like Victoria Memorial and Howrah Bridge. The city hosts grand celebrations of Durga Puja, a festival that exemplifies local art and community spirit. From tram rides to iconic sweets like rasgulla and sandesh, Kolkata is steeped in tradition. Its intellectual spirit is kept alive through book fairs, theaters, and coffee house debates. A walk down College Street reveals its deep literary soul.",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D",
    price: 68000
  },
  {
    id: 8,
    name: "Ahmedabad",
    info: "Ahmedabad, the largest city in Gujarat, is a vibrant mix of modernity and heritage. Recognized as India’s first UNESCO World Heritage City, it boasts historical sites like the Sabarmati Ashram, Sidi Saiyyed Mosque, and Adalaj Stepwell. Known for its textile industry and colorful Navratri celebrations, the city plays a major role in Gujarat’s economy and tourism. The Sabarmati Riverfront, bustling markets, and savory street food create a unique cultural experience. With a growing presence in education and startups, Ahmedabad represents a city on the rise without losing touch with its Gandhian legacy.",
    image: "https://thumbs.dreamstime.com/b/adalaj-stepwell-indian-heritage-tourist-place-ahmedabad-guja-gujarat-91077429.jpg",
    price: 73000
  },
  {
    id: 9,
    name: "Jaipur",
    info: "Jaipur, the Pink City of India, is a stunning blend of royal history and vibrant culture. Known for its pink-hued buildings, it’s home to majestic palaces like the City Palace, Hawa Mahal, and Amber Fort. As the capital of Rajasthan, it showcases Rajputana grandeur with bustling bazaars, traditional crafts, and folk music. The city forms part of the Golden Triangle tourist circuit and attracts millions each year. Jaipur’s hospitality, heritage hotels, camel rides, and local cuisine like dal bati churma add charm to its royal appeal. It’s a photographer’s and historian’s dream.",
    image: "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg",
    price: 66000
  }
];

export default data;
