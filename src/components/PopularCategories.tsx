import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "Game Guides",
      image: "https://bartarinb.com/wp-content/uploads/2025/07/56566.webp",
      path: "/game-guides"
    },
    {
      id: 2,
      title: "Game Reviews",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSqsv0lBwZ-HYpTzSYzVxKamAgF8bZBKu2vNOdDYEl99sG0cd9I",
      path: "/GameReviewpage"
    },
    {
      id: 3,
      title: "Tips & Tricks",
      image: "https://i.pinimg.com/736x/f7/ee/3d/f7ee3dfc72fc9cf611124194bb40888c.jpg",
      path: "/tippage"
    },
    {
      id: 4,
      title: "Trending Games",
      image: "https://img.freepik.com/premium-photo/online-casino-casino-online-poker-poker-dice-chips-tokens-roulette-online-gambling-azart-games_980736-2106.jpg?w=360",
      path: "/trending-games"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Popular Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map(category => (
          <div
            key={category.id}
            className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all hover:scale-105 shadow-xl h-[22rem]"
            onClick={() => navigate(category.path)}
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="p-6">
                <h3 className="text-white font-bold text-2xl">{category.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-colors"
          onClick={() => navigate('/all-categories')}
        >
          Explore Them All
        </button>
      </div>
    </div>
  );
};

export default PopularCategories;
