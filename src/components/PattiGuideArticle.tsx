import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const PattiGuideArticle = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-amber-50 min-h-screen">
            <Header />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        How to Play 111 Patti for Beginners – Complete Rules Explained
                    </h1>

                    <div className="flex justify-center mb-8">
                        <img
                            src="https://www.barlarlardown.online/images/post-img-2.jpg"
                            alt="111 Patti Card Game"
                            className="w-full max-w-3xl h-auto object-cover rounded-lg"
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="mb-6">
                            111 Patti (also known as Teen Patti) is a popular card game that's easy to learn and
                            fun to play with friends and family. Rooted in traditional Indian culture, 111 Patti has
                            evolved into an engaging online and offline entertainment experience.
                        </p>

                        <p className="mb-8">
                            In this guide, we'll explain the complete rules, card rankings, and game flow of 111 Patti
                            – perfect for beginners.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">What is 111 Patti?</h2>
                        <p className="mb-4">111 Patti is a three-card game inspired by Poker.</p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>It's a game of skill and strategy</li>
                            <li>It can be played offline with friends or online in apps</li>
                            <li>It's commonly played in a circle with 3 to 6 players</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">What You Need to Start</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>A standard 52-card deck (excluding jokers)</li>
                            <li>3-6 players (or least 3 to start)</li>
                            <li>Chips (poker chip currency or real money)</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Game Flow: Step-by-Step</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Ante (Boot Amount)</h3>
                        <p className="mb-4">All players place an initial minimum bet.</p>
                        <p className="mb-6">This creates the basic "pot" money to be won.</p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Dealing Cards</h3>
                        <p className="mb-4">Each player is dealt 3 face-down cards.</p>
                        <p className="mb-4"><strong>Seen Player:</strong> One person first 3 cards</p>
                        <p className="mb-6"><strong>Blind Player:</strong> Plays without checking their cards</p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Rounds Begin</h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li><strong>Call:</strong> Match the current bet being placed</li>
                            <li><strong>Chaal:</strong> Place chips to stay in the game</li>
                            <li><strong>Fold/Pack:</strong> Quit the hand if your cards are weak</li>
                        </ul>
                        <p className="mb-6">Blind Player: One chaal is double the current point value</p>
                        <p className="mb-6">Seen Player: One chaal is equal to the current betting point value</p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Showdown</h3>
                        <p className="mb-8">When only two players remain, one can request a Show.</p>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">111 Patti Hand Rankings (High to Low)</h2>

                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
                                        <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase">Hand Type</th>
                                        <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 text-blue-600 font-medium">1</td>
                                        <td className="px-6 py-4">Trail/Trio</td>
                                        <td className="px-6 py-4">Three cards of the same rank</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-blue-600 font-medium">2</td>
                                        <td className="px-6 py-4">Pure Sequence</td>
                                        <td className="px-6 py-4">Three consecutive cards of same suit</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-blue-600 font-medium">3</td>
                                        <td className="px-6 py-4">Sequence</td>
                                        <td className="px-6 py-4">Three consecutive cards, any suits</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-blue-600 font-medium">4</td>
                                        <td className="px-6 py-4">Color</td>
                                        <td className="px-6 py-4">Three cards of same suit</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-blue-600 font-medium">5</td>
                                        <td className="px-6 py-4">Pair</td>
                                        <td className="px-6 py-4">Two cards of same rank</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-blue-600 font-medium">6</td>
                                        <td className="px-6 py-4">High Card</td>
                                        <td className="px-6 py-4">No pair or sequence; highest card wins</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pro Tips for Beginners</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Start with blind</li>
                            <li>Observe opponents</li>
                            <li>Don't bluff in fold</li>
                            <li>Practice Offline</li>
                            <li>Play Responsibly</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Is 111 Patti Safe to Play?</h2>
                        <p className="mb-4">Yes, when played responsibly. It helps develop skills like:</p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Probability and strategy</li>
                            <li>Memory and concentration</li>
                            <li>Social interaction and bonding</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Want to Try 111 Patti Online?</h2>
                        <p className="mb-6">There are several apps where you can play 111 Patti for free.</p>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Final Thoughts</h2>
                        <p className="mb-8">
                            111 Patti is more than just a game—it's a great way to bond with friends and family while
                            sharpening your strategic thinking skills.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-8">
                        <button
                            onClick={() => navigate('/guides/top-online-mobile-games')}
                            className="text-orange-500 hover:text-orange-600 transition-colors text-base font-semibold"
                        >
                            ← Previous Post
                        </button>
                        <button
                            onClick={() => navigate('/guides/best-strategy-games')}
                            className="text-orange-500 hover:text-orange-600 transition-colors text-base font-semibold"
                        >
                            Next Post →
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PattiGuideArticle;
