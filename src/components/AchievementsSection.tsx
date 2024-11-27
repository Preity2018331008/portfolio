const achievements = [
  {
    title: "ICPC Algo Queen 2024",
    position: "Silver Medal",
    type: "international"
  },
  {
    title: "ICPC Algo Queen 2023",
    position: "Global Rank: 35",
    type: "international"
  },
  {
    title: "National Girls Programming Contest 2022",
    position: "2nd Runner up",
    type: "national"
  },
  {
    title: "Code Jam to I/O for Women 2022",
    position: "Global Rank: 88",
    type: "international"
  },
  {
    title: "ICPC Dhaka Regional 2021",
    position: "Rank: 24",
    type: "regional"
  },
  {
    title: "CUET IUPC",
    position: "11th Position",
    type: "national"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Achievements
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div 
              key={achievement.title}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-primary font-medium">
                {achievement.position}
              </p>
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                achievement.type === 'international' 
                  ? 'bg-blue-100 text-blue-800' 
                  : achievement.type === 'regional'
                  ? 'bg-purple-100 text-purple-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Expert rated coder on Codeforces (Max Rating: 1716) with 1500+ problems solved across platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
