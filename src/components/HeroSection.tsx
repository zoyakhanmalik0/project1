import React from 'react';
import { Download } from 'lucide-react';

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-6">

      {/* Top Image Section */}
      <div className="w-full max-w-2xl mb-8">
        <img
          src="https://apkfbi.com/wp-content/uploads/2025/03/1-1.webp"
          alt="Game Preview"
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* First Set of Download Buttons */}
      <div className="w-full max-w-md space-y-4 mb-10">
        <a href="https://3pattiteen.com/?from_gameid=8290658&channelCode=100000" target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-red-600 text-white text-lg font-semibold py-4 px-6 rounded-xl shadow-lg hover:from-pink-600 hover:to-red-700 transition duration-300"
        >
          <Download size={20} />
          Download 3 Patti Teen
        </a>

        <a href="https://dragontigerclub.pk/?from_gameid=5790598&channelCode=5106107" target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-emerald-600 text-white text-lg font-semibold py-4 px-6 rounded-xl shadow-lg hover:from-green-500 hover:to-emerald-700 transition duration-300"
        >
          <Download size={20} />
          Download 3 Patti DragonTigerClub
        </a>

        <a href="https://3pattino1.net/?from_gameid=7688535&channelCode=100000" target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg font-semibold py-4 px-6 rounded-xl shadow-lg hover:from-yellow-500 hover:to-orange-600 transition duration-300"
        >
          <Download size={20} />
          Download 3 Patti No 1
        </a>
      </div>

      {/* Second Image Section */}
      <div className="w-full max-w-3xl mb-10">
        <img
          src="https://miro.medium.com/v2/resize:fit:1280/1*1cPINnY3SbqkqC4TLAL43g.jpeg"
          alt="3 Patti Promotion"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Second Set of Download Buttons */}
      <div className="w-full max-w-md space-y-4 mb-10">
        <a href="https://flyingchess.com/?from_gameid=8290658&channelCode=100000" target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold py-4 px-6 rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300"
        >
          <Download size={20} />
          Download Flying Chess
        </a>

        <a href="https://dragontigerclub.pk/?from_gameid=5790598&channelCode=5106107" target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-lg font-semibold py-4 px-6 rounded-xl shadow-lg hover:from-sky-600 hover:to-blue-700 transition duration-300"
        >
          <Download size={20} />
          Download Teen Patti Blue
        </a>

        <a href="https://3pattino1.net/?from_gameid=7688535&channelCode=100000" target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white text-lg font-semibold py-4 px-6 rounded-xl shadow-lg hover:from-amber-600 hover:to-yellow-700 transition duration-300"
        >
          <Download size={20} />
          Download 3 Patti Gold
        </a>

        <a href="https://dragontigerclub.pk/?from_gameid=5790598&channelCode=5106107" target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-lg font-semibold py-4 px-6 rounded-xl shadow-lg hover:from-rose-600 hover:to-pink-700 transition duration-300"
        >
          <Download size={20} />
          Download 3 Patti Loot
        </a>

        <a href="https://3pattino1.net/?from_gameid=7688535&channelCode=100000" target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-lg font-semibold py-4 px-6 rounded-xl shadow-lg hover:from-cyan-600 hover:to-teal-700 transition duration-300"
        >
          <Download size={20} />
          Download 3 Patti Ok
        </a>

        <a href="https://3pattino1.net/?from_gameid=7688535&channelCode=100000" target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-lime-500 to-green-600 text-white text-lg font-semibold py-4 px-6 rounded-xl shadow-lg hover:from-lime-600 hover:to-green-700 transition duration-300"
        >
          <Download size={20} />
          Download 3 Patti Lucky
        </a>
      </div>

      {/* Final Image Section */}
      <div className="w-full max-w-2xl mb-10">
        <img
          src="https://miro.medium.com/v2/resize:fit:694/1*O3xsvJ5O5t22A0v6IyE2Ag.jpeg"
          alt="Game Bonus Poster"
          className="w-full h-auto rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default DownloadPage;
