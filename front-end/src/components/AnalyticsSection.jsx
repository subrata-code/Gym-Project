import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, CartesianGrid
} from 'recharts';
import { motion } from 'framer-motion';

const engagementData = [
  { day: 'Mon', users: 30 },
  { day: 'Tue', users: 45 },
  { day: 'Wed', users: 52 },
  { day: 'Thu', users: 60 },
  { day: 'Fri', users: 70 },
  { day: 'Sat', users: 120 },
  { day: 'Sun', users: 90 }
];

const helpfulnessData = [
  { name: 'Highly Helpful', value: 400 },
  { name: 'Moderate', value: 200 },
  { name: 'Not Helpful', value: 50 }
];

const COLORS = ['#22c55e', '#facc15', '#ef4444'];

const PlatformAnalytics = () => {
  return (
    <section id="platform-analytics" className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">📊 Platform Usage Analytics</h2>
        <p className="text-center text-purple-300 mb-12">Track how users are engaging and how helpful your app is!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Line Chart: Daily Engagement */}
          <div className="bg-indigo-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">📈 Daily Active Users</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={engagementData}>
                <XAxis dataKey="day" stroke="#fff" />
                <YAxis stroke="#fff" />
                <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#facc15" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart: Helpfulness Rating */}
          <div className="bg-indigo-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">⭐ Helpfulness Feedback</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={helpfulnessData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {helpfulnessData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Extra Admin Insight */}
        <motion.div
          className="mt-10 text-center text-lg font-semibold text-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          🎉 84% of users say the app is helping them reach fitness goals. Keep innovating!
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PlatformAnalytics;
