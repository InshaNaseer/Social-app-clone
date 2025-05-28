import { Post, Story, User } from "../types";

export const users: User[] = [
  {
    id: "1",
    username: "insha-fiya",
    fullName: "Insha Fiya",
    profileImage:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Photographer | Traveler | Coffee Lover",
    following: 645,
    followers: 1243,
    isVerified: true,
  },
  {
    id: "2",
    username: "john_smith",
    fullName: "John Smith",
    profileImage:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Adventure awaits!",
    following: 235,
    followers: 932,
  },
  {
    id: "3",
    username: "travel_addict",
    fullName: "Alex Johnson",
    profileImage:
      "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Exploring one city at a time ✈️",
    following: 512,
    followers: 2153,
    isVerified: true,
  },
  {
    id: "4",
    username: "food_lover",
    fullName: "Maria Garcia",
    profileImage:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Food blogger | Recipe developer",
    following: 325,
    followers: 1543,
  },
  {
    id: "5",
    username: "fitness_freak",
    fullName: "Mike Wilson",
    profileImage:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Personal trainer | Wellness coach",
    following: 421,
    followers: 1876,
  },
];

export const stories: Story[] = [
  {
    id: "1",
    user: users[0],
    imageUrl:
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600",
    viewed: false,
    createdAt: "2023-06-10T12:30:00Z",
  },
  {
    id: "2",
    user: users[1],
    imageUrl:
      "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600",
    viewed: false,
    createdAt: "2023-06-10T11:45:00Z",
  },
  {
    id: "3",
    user: users[2],
    imageUrl:
      "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=600",
    viewed: true,
    createdAt: "2023-06-10T10:15:00Z",
  },
  {
    id: "4",
    user: users[3],
    imageUrl:
      "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=600",
    viewed: false,
    createdAt: "2023-06-10T09:30:00Z",
  },
  {
    id: "5",
    user: users[4],
    imageUrl:
      "https://images.pexels.com/photos/3621953/pexels-photo-3621953.jpeg?auto=compress&cs=tinysrgb&w=600",
    viewed: false,
    createdAt: "2023-06-10T08:45:00Z",
  },
];

export const posts: Post[] = [
  {
    id: "1",
    user: users[0],
    imageUrl:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Beautiful sunset at the beach today! 🌅 #sunset #beach #summer",
    likes: 243,
    comments: [
      {
        id: "1",
        user: users[1],
        text: "Stunning view! Where is this?",
        likes: 5,
        createdAt: "2023-06-10T13:45:00Z",
      },
      {
        id: "2",
        user: users[2],
        text: "Wish I was there! 😍",
        likes: 3,
        createdAt: "2023-06-10T14:30:00Z",
      },
    ],
    createdAt: "2023-06-10T12:30:00Z",
  },
  {
    id: "2",
    user: users[2],
    imageUrl:
      "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption:
      "Exploring the mountains this weekend! 🏔️ #adventure #hiking #nature",
    likes: 432,
    comments: [
      {
        id: "3",
        user: users[3],
        text: "The view is breathtaking!",
        likes: 7,
        createdAt: "2023-06-09T18:45:00Z",
      },
    ],
    createdAt: "2023-06-09T16:30:00Z",
  },
  {
    id: "3",
    user: users[3],
    imageUrl:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption:
      "Homemade pasta for dinner tonight! 🍝 #foodie #homecooking #pasta",
    likes: 321,
    comments: [
      {
        id: "4",
        user: users[0],
        text: "Looks delicious! Recipe please!",
        likes: 4,
        createdAt: "2023-06-08T20:15:00Z",
      },
      {
        id: "5",
        user: users[4],
        text: "I need to try this!",
        likes: 2,
        createdAt: "2023-06-08T21:30:00Z",
      },
    ],
    createdAt: "2023-06-08T19:30:00Z",
  },
  {
    id: "4",
    user: users[1],
    imageUrl:
      "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Morning workout done! 💪 #fitness #workout #motivation",
    likes: 198,
    comments: [],
    createdAt: "2023-06-07T08:30:00Z",
  },
];

export const currentUser: User = users[0];
