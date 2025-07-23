import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="bg-white w-full rounded-none shadow-lg overflow-hidden mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-8 md:px-16 py-8 md:py-12">
        {/* Left Text Section */}
        <div className="py-2 sm:py-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Your Gaming Blog for Skill, Fun & Strategy
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Welcome to Officialamy Guide
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
            Looking for a gaming blog that keeps things smart, fun, and totally entertaining?
            <span className="font-bold"> 111PattiGuidexyz</span> is your go-to source for informative game articles,
            how-to guides, strategy tips, and game reviews — all focused on skill-based and casual games
            that you can enjoy with friends or solo. Whether you enjoy board games, card games, or the
            latest skill-based app titles, our blog is here to guide you, educate you, and keep you in
            the loop with trending game content.
          </p>

          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              What You'll Find on <span className="text-yellow-600">Officialamy.online</span>
            </h3>
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
              {[
                {
                  title: 'Informative Game Guides:',
                  content:
                    'From classic board games to modern app-based games, we break down the rules and teach you how to play — no confusion, just fun.',
                },
                {
                  title: 'Gaming Tips & Smart Play Strategies:',
                  content:
                    'Learn how to play better with tips that improve your focus, memory, and gameplay — perfect for casual players and curious minds.',
                },
                {
                  title: 'Reviews & Game Highlights:',
                  content:
                    'Find out which games are worth playing. We cover mobile, card, and board games that are entertaining, safe, and skill-based.',
                },
                {
                  title: 'News & Updates:',
                  content:
                    'Stay current with the latest game updates, new features, and trending titles in the gaming world.',
                },
                {
                  title: 'Trusted Download Links:',
                  content:
                    'We only guide you toward safe and verified download sources — no shady apps, just clean fun.',
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1 text-xl">•</span>
                  <span>
                    <strong>{item.title}</strong> {item.content}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex items-center justify-center">
          <img
            src="https://www.barlarlardown.online/images/4.png"
            alt="Gaming Content"
            className="rounded-lg shadow-xl object-cover w-full h-full max-h-[500px] md:min-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
