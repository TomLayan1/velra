// Banners
import bannerOne from '../assets/velra/slider-1.jpeg'
import bannerTwo from '../assets/velra/slider-2.jpeg'
import bannerThree from '../assets/velra/slider-3.jpeg'

// Categories
import livingRoom from "../assets/velra/living_room.jpg"
import bedRoom from "../assets/velra/bed_room.jpg"
import kidsRoom from "../assets/velra/kids_room.jpg"
import kitchen from "../assets/velra/kitchen.jpg"

// Products
import chair1 from "../assets/velra/chair/1.jpeg"
import chair2 from "../assets/velra/chair/2.jpeg"
import chair3 from "../assets/velra/chair/3.jpeg"
import chair4 from "../assets/velra/chair/4.jpeg"
import chair5 from "../assets/velra/chair/5.jpeg"
import chair6 from "../assets/velra/chair/6.jpeg"
import chair7 from "../assets/velra/chair/7.jpeg"
import chair8 from "../assets/velra/chair/8.jpeg"
import chair9 from "../assets/velra/chair/9.jpeg"
import chair10 from "../assets/velra/chair/10.jpeg"
import chair11 from "../assets/velra/chair/11.jpeg"
import chair12 from "../assets/velra/chair/12.jpeg"
import chair13 from "../assets/velra/chair/13.jpeg"
import chair14 from "../assets/velra/chair/14.jpeg"


// Users
import user1 from '../assets/velra/users/user-1.jpg'
import user2 from '../assets/velra/users/user-2.jpg'
import user3 from '../assets/velra/users/user-3.jpg'


export const navLinks = [
  {
    id: 1,
    path: "/",
    nav: "Home",
  },
  {
    id: 2,
    path: "/shop",
    nav: "Shop",
  },
  {
    id: 3,
    path: "/orders",
    nav: "Orders"
  },
  {
    id: 4,
    path: "/blog",
    nav: "Blog",
  },
  {
    id: 5,
    path: "/about",
    nav: "About Us",
  },
  {
    id: 6,
    path: "/contact",
    nav: "Contact Us",
  },
];

export const banners = [
  {
    id: 1,
    banner: bannerOne,
    text: 'ELEVATE YOUR HOME WITH PREMIUM FURNITURE',
    sub_text: "Discover timeless pieces designed to bring style, comfort, and sophistication to every room."
  },
  {
    id: 2,
    banner: bannerTwo,
    text: "STYLISH LIVING, MADE COMFORTABLE",
    sub_text: "Discover timeless pieces that blend elegance with everyday comfort — perfect for every room and every moment."
  },
  {
    id: 3,
    banner: bannerThree,
    text: "BEAUTIFUL SPACES BEGIN WITH VELRA",
    sub_text: "Discover timeless pieces that blend comfort, style, and craftsmanship — only at Velra."
  },
];

export const category = [
  {
    id: 1,
    img: livingRoom,
    name: "Living Room",
  },
  {
    id: 2,
    img: bedRoom,
    name: "Bed Room",
  },
  {
    id: 3,
    imgs: [
      {
        id: 31,
        img: kidsRoom,
        name: "Kids Room",
      },
      {
        id: 32,
        img: kitchen,
        name: "Kitchen",
      },
    ],
  },
];


export const products = [
  {
    id: 1,
    img: chair1,
    category: "Bestsell",
    brand: "Old Brand",
    title: "Natural Wood Dining Chair",
    short_description: "A timeless dining chair crafted from solid natural wood.",
    price: "129.00",
    description:
      "Add warmth and organic charm to your dining space with this natural wood dining chair. Designed with a minimalist aesthetic and a smooth finish, it's perfect for both modern and rustic interiors.",
  },
  {
    id: 2,
    img: chair2,
    category: "New Category",
    brand: "Latest Brand",
    title: "Dining Chair",
    short_description: "Sleek, comfortable, and built for everyday elegance.",
    price: "1209.00",
    description:
      "Experience comfort and contemporary design with this dining chair, featuring a durable frame and upholstered seat. Ideal for elevating your daily meals or entertaining guests in style.",
  },
  {
    id: 3,
    img: chair3,
    category: "Bestsell",
    brand: "Latest Brand",
    title: "Best Chair",
    short_description: "Our customer-favorite chair for ultimate comfort and style.",
    price: "529.00",
    description:
      "Known for its superior comfort and elegant lines, the Best Chair features ergonomic support and a durable build. A perfect addition to any living or workspace.",
  },
  {
    id: 4,
    img: chair4,
    category: "Old Category",
    brand: "Latest Brand",
    title: "Natural Wood Chair",
    short_description: "A classic wooden chair that never goes out of style.",
    price: "900.00",
    description:
      "Blending craftsmanship with tradition, this natural wood chair is versatile and durable. Whether used in a study, dining area, or lounge, it adds a grounded, elegant touch.",
  },
  {
    id: 5,
    img: chair5,
    category: "Bestsell",
    brand: "Latest Brand",
    title: "Sitting Chair",
    short_description: "Comfort meets function in this cozy sitting chair.",
    price: "129.00",
    description:
      "Sink into relaxation with this sitting chair featuring plush cushioning and supportive contours. Designed to fit into any room with ease, it’s perfect for reading, chatting, or lounging.",
  },
  {
    id: 6,
    img: chair6,
    category: "Low Price",
    brand: "Latest Brand",
    title: "Natural Wood Dining Chair",
    short_description: "Budget-friendly elegance in natural wood.",
    price: "129.00",
    description:
      "This affordable yet stylish dining chair is crafted from sustainable wood and finished for a refined look. A smart choice for those who love quality without the high price tag.",
  },
  {
    id: 7,
    img: chair7,
    category: "Bestsell",
    brand: "Latest Brand",
    title: "Beautiful Chair",
    short_description: "A visually striking chair for statement spaces.",
    price: "1129.00",
    description:
      "The Beautiful Chair lives up to its name with a graceful silhouette and high-end materials. Ideal as an accent piece, it enhances any room with a blend of sophistication and function.",
  },
  {
    id: 8,
    img: chair8,
    category: "Low Price",
    brand: "Indian",
    title: "Chair set",
    short_description: "A stylish set of chairs for coordinated living.",
    price: "129.00",
    description:
      "This matching chair set offers a cohesive look for dining or lounge areas. With smooth finishes and modern design, it combines affordability with aesthetic appeal.",
  },
  {
    id: 9,
    img: chair9,
    category: "Best One",
    brand: "Indian",
    title: "Best One",
    short_description: "Top-rated comfort and style in one chair.",
    price: "129.00",
    description:
      "The Best One delivers premium quality at an unbeatable value. Designed with ergonomic precision and durable materials, it’s the ideal choice for all-day comfort and beauty.",
  },
  {
    id: 10,
    img: chair10,
    category: "High Price",
    brand: "Indian",
    title: "Chair",
    short_description: "A refined everyday chair with luxury details.",
    price: "129.00",
    description:
      "This chair redefines everyday seating with clean lines, premium materials, and unmatched comfort. Perfect for minimalist lovers who value functionality and class.",
  },
  {
    id: 11,
    img: chair11,
    category: "Bestsell",
    brand: "Indian",
    title: "Old Chair",
    short_description: "Vintage-inspired chair with timeless charm.",
    price: "129.00",
    description:
      "Infuse your space with retro appeal using this old-school style chair. Built to last with a nostalgic touch, it adds character and warmth to your home decor.",
  },
  {
    id: 12,
    img: chair12,
    category: "High Price",
    brand: "Indian",
    title: "New Chair",
    short_description: "Modern innovation meets seating luxury.",
    price: "129.00",
    description:
      "The New Chair is a sleek blend of style and comfort, with modern contours and high-end finishes. Ideal for interiors that value trend-forward design.",
  },
  {
    id: 13,
    img: chair13,
    category: "Bestsell",
    brand: "Indian",
    title: "New Brand Chair",
    short_description: "A fresh take on contemporary seating.",
    price: "129.00",
    description:
      "Crafted by an up-and-coming brand, this chair fuses innovation with comfort. With modern aesthetics and durable materials, it’s built to make an impression.",
  },
  {
    id: 14,
    img: chair14,
    category: "High Price",
    brand: "Indian",
    title: "Stylish Chair",
    short_description: "A fashion-forward chair for trendsetters.",
    price: "129.00",
    description:
      "The Stylish Chair is the epitome of modern sophistication. With sharp lines and designer details, it transforms any room into a curated space of comfort and flair.",
  },
];

export const categoryFilter = [
  {
    id: 1,
    name: "Bestsell"
  },
  {
    id: 2,
    name: "New Category"
  },
  {
    id: 3,
    name: "Old Category"
  },
  {
    id: 4,
    name: "Low Price"
  },
  {
    id: 6,
    name: "High Price"
  },
  {
    id: 5,
    name: "Best One"
  }
]

export const brands = [
  {
    id: 1,
    name: "Old Brand",
  },
  {
    id: 2,
    name: "Latest Brand",
  },
  {
    id: 3,
    name: "Indian",
  }
];

export const testimonials = [
  {
    id: 1,
    user_img: user1,
    name: "James Walker",
    comment: "I love that Velra uses sustainable materials. It feels good knowing my home looks great and supports the planet too.",
  },
  {
    id: 2,
    user_img: user2,
    name: "Emily Carter",
    comment: "Velra’s furniture completely transformed my living room. The quality is outstanding and the design is timeless.",
  },

  {
    id: 3,
    user_img: user3,
    name: "Michael Harris",
    comment: "Fast delivery, great customer service, and the furniture? Even better than the photos. I'm so impressed!",
  }
];

export const testimonialsTwo = [
  {
    id: 1,
    name: "Emily Carter",
    comment: "Velra’s furniture completely transformed my space. The craftsmanship is unmatched.",
  },
  {
    id: 2,
    name: "James Walker",
    comment: "I’m impressed with the design and how eco-conscious the materials are.",
  },
  {
    id: 3,
    name: "Michael Harris",
    comment: "Solid build, fast delivery, and excellent support. I’ll definitely shop again.",
  },
  {
    id: 4,
    name: "Ashley Thompson",
    comment: "Beautiful furniture that feels just as good as it looks. Velra is now my go-to.",
  },
  {
    id: 5,
    name: "Daniel Brooks",
    comment: "Everything was seamless—from order to delivery. And the quality? Top-notch.",
  },
  {
    id: 6,
    name: "Ryan Scott",
    comment: "I’ve never owned furniture this sturdy and stylish before. Worth every dollar.",
  },
  {
    id: 7,
    name: "Sarah Mitchell",
    comment: "It’s refreshing to buy from a brand that actually cares about sustainability.",
  },
  {
    id: 8,
    name: "Ethan Davis",
    comment: "Velra makes furniture shopping easy and exciting. Their pieces are stunning.",
  },
  {
    id: 9,
    name: "Benjamin Reed",
    comment: "The attention to detail is insane. My dining set is now the highlight of my home.",
  },
  {
    id: 10,
    name: "Olivia Moore",
    comment: "Furniture that’s both functional and fashionable. I’m obsessed!",
  },
  {
    id: 11,
    name: "Andrew Bennett",
    comment: "Customer service was fantastic, and the furniture exceeded expectations.",
  },
  {
    id: 12,
    name: "Joshua King",
    comment: "Well-made and sustainably sourced. Velra does it right.",
  },
  {
    id: 13,
    name: "Jessica Hall",
    comment: "Love everything I ordered. It fits perfectly and feels premium.",
  },
  {
    id: 14,
    name: "William Adams",
    comment: "I’ve been recommending Velra to everyone. Stylish and sustainable? Yes please.",
  },
  {
    id: 15,
    name: "Brandon Clark",
    comment: "The finish and durability are unmatched. You can tell it’s built to last.",
  },
  {
    id: 16,
    name: "Lauren White",
    comment: "My home feels brand new. Velra brings elegance to everyday living.",
  },
  {
    id: 17,
    name: "Christopher Allen",
    comment: "Great experience from start to finish. This is how online shopping should be.",
  },
  {
    id: 18,
    name: "Nathan Turner",
    comment: "Stylish, affordable, and sustainably made—Velra checks all the boxes.",
  },
  {
    id: 19,
    name: "Emma Wright",
    comment: "I’m so happy with my new furniture. It looks even better in person.",
  },
  {
    id: 20,
    name: "Logan Martin",
    comment: "It’s rare to find furniture that combines design, comfort, and conscience so well.",
  }
];

export const orders = [
  {
    id: 1,
    img: chair1,
    name: "Natural Wood Dining Chair",
    quantity: 3,
    price: "129.00"
  },
  {
    id: 2,
    img: chair2,
    name: "Dining Chair",
    quantity: 1,
    price: "1209.00"
  },
  {
    id: 3,
    img: chair3,
    name: "Natural Wood Dining Chair",
    quantity: 3,
    price: "129.00"
  },
  {
    id: 4,
    img: chair4,
    name: "Dining Chair",
    quantity: 1,
    price: "1209.00"
  },
  {
    id: 5,
    img: chair5,
    name: "Natural Wood Dining Chair",
    quantity: 3,
    price: "129.00"
  },
  {
    id: 6,
    img: chair6,
    name: "Dining Chair",
    quantity: 1,
    price: "1209.00"
  }
]