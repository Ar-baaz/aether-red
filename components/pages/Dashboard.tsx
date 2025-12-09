import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Layers, TrendingUp, Users } from 'lucide-react';
import { Badge } from '../ui/badge';
import { HostOrgSelector } from '../HostOrgSelector';

const vulnerabilitySeverityData = [
  { name: 'Medium', value: 420, color: '#fbbf24' },
  { name: 'Low', value: 380, color: '#3b82f6' },
  { name: 'High', value: 280, color: '#f97316' },
  { name: 'Critical', value: 207, color: '#ef4444' },
];

const findingsOverTimeData = [
  { date: 'Jan', findings: 30 },
  { date: 'Feb', findings: 40 },
  { date: 'Mar', findings: 35 },
  { date: 'Apr', findings: 50 },
  { date: 'May', findings: 60 },
  { date: 'Jun', findings: 70 },
  { date: 'Jul', findings: 75 },
  { date: 'Aug', findings: 80 },
];

const recentActivity = [
  {
    finding: 'SQL Injection in login form',
    severity: 'Critical',
    asset: 'api.cybercorp.com',
    reportedBy: 'John Doe',
    date: '2025-11-14',
  },
  {
    finding: 'Cross-Site Scripting (XSS)',
    severity: 'High',
    asset: 'webapp.cybercorp.io',
    reportedBy: 'Jane Smith',
    date: '2025-11-13',
  },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1d2e] border border-white/[0.08] rounded-lg p-3 shadow-xl">
        <p className="text-[#e4e4f0] text-sm">{`${payload[0].value} findings`}</p>
      </div>
    );
  }
  return null;
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'Critical':
      return 'bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/20';
    case 'High':
      return 'bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20';
    case 'Medium':
      return 'bg-[#fbbf24]/10 text-[#fbbf24] border border-[#fbbf24]/20';
    case 'Low':
      return 'bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20';
    default:
      return 'bg-white/[0.05] text-[#8b90a8]';
  }
};

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[#e4e4f0] text-2xl mb-2">Dashboard Overview</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#1a1d2e] border-white/[0.08] hover:border-white/[0.15] transition-colors">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#8b90a8] text-sm mb-2">Total Vulnerabilities</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[#e4e4f0] text-3xl font-semibold">1,287</span>
                </div>
                <p className="text-[#10b981] text-xs">+2% this last month</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#ef4444]/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#ef4444]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d2e] border-white/[0.08] hover:border-white/[0.15] transition-colors">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#8b90a8] text-sm mb-2">Assets Scanned</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[#e4e4f0] text-3xl font-semibold">432</span>
                </div>
                <p className="text-[#8b90a8] text-xs">Total active assets</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center">
                <Layers className="w-6 h-6 text-[#3b82f6]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d2e] border-white/[0.08] hover:border-white/[0.15] transition-colors">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#8b90a8] text-sm mb-2">High Risk Findings</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[#e4e4f0] text-3xl font-semibold">98</span>
                </div>
                <p className="text-[#ef4444] text-xs">+8% this last month</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#f97316]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d2e] border-white/[0.08] hover:border-white/[0.15] transition-colors">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#8b90a8] text-sm mb-2">Active Pentesters</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[#e4e4f0] text-3xl font-semibold">12</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex -space-x-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#5b6ef5] to-[#7c3aed] border-2 border-[#1a1d2e]"></div>
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f97316] to-[#ef4444] border-2 border-[#1a1d2e]"></div>
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] border-2 border-[#1a1d2e]"></div>
                    <div className="w-5 h-5 rounded-full bg-[#252a40] border-2 border-[#1a1d2e] flex items-center justify-center">
                      <span className="text-[#8b90a8] text-[10px]">+9</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#8b5cf6]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1a1d2e] border-white/[0.08]">
          <CardHeader>
            <CardTitle className="text-[#e4e4f0]">Vulnerability Severity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={vulnerabilitySeverityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  strokeWidth={0}
                >
                  {vulnerabilitySeverityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              {vulnerabilitySeverityData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-[#8b90a8] text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d2e] border-white/[0.08]">
          <CardHeader>
            <CardTitle className="text-[#e4e4f0]">Findings Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={findingsOverTimeData}>
                <defs>
                  <linearGradient id="colorFindings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5b6ef5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#5b6ef5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" />
                <XAxis 
                  dataKey="date" 
                  stroke="#8b90a8" 
                  tick={{ fill: '#8b90a8' }}
                  axisLine={{ stroke: 'rgba(255, 255, 255, 0.08)' }}
                />
                <YAxis 
                  stroke="#8b90a8" 
                  tick={{ fill: '#8b90a8' }}
                  axisLine={{ stroke: 'rgba(255, 255, 255, 0.08)' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="findings" 
                  stroke="#5b6ef5" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorFindings)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-[#1a1d2e] border-white/[0.08]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-[#e4e4f0]">Recent Activity</CardTitle>
          <button className="text-[#5b6ef5] text-sm hover:underline">View All</button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">FINDING</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">SEVERITY</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">ASSET</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">REPORTED BY</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">DATE</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((activity, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 px-4 text-[#e4e4f0]">{activity.finding}</td>
                    <td className="py-4 px-4">
                      <Badge className={getSeverityColor(activity.severity)}>
                        {activity.severity}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-[#8b90a8]">{activity.asset}</td>
                    <td className="py-4 px-4 text-[#8b90a8]">{activity.reportedBy}</td>
                    <td className="py-4 px-4 text-[#8b90a8]">{activity.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}