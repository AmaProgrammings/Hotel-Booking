
export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  amenities: string[];
  images: string[];
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  location: string;
  rating: number;
  price: number; // Starting price
  images: string[];
  amenities: string[];
  rooms: Room[];
  featured?: boolean;
}

export const hotels: Hotel[] = [
  {
    id: "h1",
    name: "Oceanview Resort & Spa",
    description: "Luxurious beachfront resort with stunning ocean views, world-class spa services, and exceptional dining experiences.",
    location: "Malibu, California",
    rating: 4.8,
    price: 299,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    amenities: ["Free WiFi", "Swimming Pool", "Spa", "Gym", "Beach Access", "Room Service", "Restaurant", "Bar"],
    rooms: [
      {
        id: "r1",
        name: "Deluxe Ocean View",
        description: "Spacious room with a king-sized bed and private balcony overlooking the ocean.",
        price: 299,
        capacity: 2,
        amenities: ["King Bed", "Private Balcony", "Ocean View", "Mini Bar", "Free WiFi", "Coffee Maker"],
        images: [
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
          "https://images.unsplash.com/photo-1567197427669-a0d3603a3586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        ]
      },
      {
        id: "r2",
        name: "Premium Suite",
        description: "Luxury suite with separate living area, two bathrooms, and panoramic ocean views.",
        price: 499,
        capacity: 4,
        amenities: ["King Bed", "Sofa Bed", "Two Bathrooms", "Panoramic View", "Mini Bar", "Free WiFi", "Coffee Maker", "Jacuzzi"],
        images: [
          "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        ]
      }
    ]
  },
  {
    id: "h2",
    name: "Mountain Lodge & Cabins",
    description: "Rustic yet elegant mountain retreat with private cabins, stunning views, and outdoor activities for all seasons.",
    location: "Aspen, Colorado",
    rating: 4.6,
    price: 249,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1548704404-c0fe36261784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      "https://images.unsplash.com/photo-1469797384183-f7a2f171fd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    ],
    amenities: ["Free WiFi", "Fireplace", "Hiking Trails", "Restaurant", "Bar", "Spa", "Free Parking"],
    rooms: [
      {
        id: "r3",
        name: "Mountain View Cabin",
        description: "Cozy cabin with a king-sized bed, fireplace, and private deck with mountain views.",
        price: 249,
        capacity: 2,
        amenities: ["King Bed", "Fireplace", "Private Deck", "Mountain View", "Free WiFi", "Coffee Maker"],
        images: [
          "https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
      },
      {
        id: "r4",
        name: "Family Lodge Suite",
        description: "Spacious suite with two bedrooms, full kitchen, and large living area with fireplace.",
        price: 399,
        capacity: 6,
        amenities: ["Two Bedrooms", "Kitchen", "Fireplace", "Dining Area", "Mountain View", "Free WiFi", "Coffee Maker"],
        images: [
          "https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
      }
    ]
  },
  {
    id: "h3",
    name: "City Lights Boutique Hotel",
    description: "Modern boutique hotel in the heart of the city with stylish rooms and proximity to major attractions.",
    location: "New York City, NY",
    rating: 4.5,
    price: 199,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    ],
    amenities: ["Free WiFi", "Fitness Center", "Restaurant", "Bar", "Room Service", "Concierge"],
    rooms: [
      {
        id: "r5",
        name: "Urban King Room",
        description: "Stylish room with a king-sized bed, city views, and modern amenities.",
        price: 199,
        capacity: 2,
        amenities: ["King Bed", "City View", "Mini Bar", "Free WiFi", "Coffee Maker", "Smart TV"],
        images: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1587985064135-0366536eab42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
      },
      {
        id: "r6",
        name: "Executive Suite",
        description: "Spacious suite with separate living area, premium amenities, and panoramic city views.",
        price: 349,
        capacity: 2,
        amenities: ["King Bed", "Separate Living Area", "Panoramic View", "Mini Bar", "Free WiFi", "Coffee Maker", "Smart TV", "Workstation"],
        images: [
          "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
      }
    ]
  },
  {
    id: "h4",
    name: "Desert Oasis Resort",
    description: "Tranquil desert retreat with stunning views, luxurious amenities, and a world-class golf course.",
    location: "Scottsdale, Arizona",
    rating: 4.7,
    price: 279,
    images: [
      "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80",
      "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    amenities: ["Free WiFi", "Swimming Pools", "Golf Course", "Spa", "Fitness Center", "Restaurant", "Bar", "Tennis Courts"],
    rooms: [
      {
        id: "r7",
        name: "Desert View Room",
        description: "Comfortable room with a king-sized bed and balcony with desert and mountain views.",
        price: 279,
        capacity: 2,
        amenities: ["King Bed", "Balcony", "Desert View", "Mini Bar", "Free WiFi", "Coffee Maker"],
        images: [
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        ]
      },
      {
        id: "r8",
        name: "Luxury Villa",
        description: "Private villa with pool, two bedrooms, and stunning desert views.",
        price: 599,
        capacity: 4,
        amenities: ["Two Bedrooms", "Private Pool", "Kitchen", "Desert View", "Free WiFi", "Coffee Maker", "Outdoor Dining"],
        images: [
          "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        ]
      }
    ]
  },
  {
    id: "h5",
    name: "Lakeside Retreat",
    description: "Peaceful lakefront property with private beach, water activities, and cozy accommodations.",
    location: "Lake Tahoe, California",
    rating: 4.6,
    price: 259,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    amenities: ["Free WiFi", "Private Beach", "Water Sports", "Bonfire Pits", "Restaurant", "Bar", "Free Parking"],
    rooms: [
      {
        id: "r9",
        name: "Lakefront Room",
        description: "Cozy room with a queen-sized bed and direct access to the lake.",
        price: 259,
        capacity: 2,
        amenities: ["Queen Bed", "Lake Access", "Lake View", "Free WiFi", "Coffee Maker"],
        images: [
          "https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        ]
      },
      {
        id: "r10",
        name: "Waterfront Cottage",
        description: "Private cottage with one bedroom, full kitchen, and deck overlooking the lake.",
        price: 399,
        capacity: 4,
        amenities: ["Queen Bed", "Sofa Bed", "Kitchen", "Deck", "Lake View", "Free WiFi", "Coffee Maker", "Fireplace"],
        images: [
          "https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1602343168117-bb8a12d7c180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
        ]
      }
    ]
  }
];
