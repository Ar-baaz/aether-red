import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Play, Pause, StopCircle, Clock, Target, BarChart3, AlertCircle, TrendingUp } from 'lucide-react';

interface Campaign {
  id: string;
  name: string;
  target: string;
  status: 'running' | 'paused' | 'completed' | 'stopped';
  progress: number;
  startTime: string;
  duration: string;
  vulnerabilitiesFound: number;
  hostsScanned: number;
  totalHosts: number;
}

export function Campaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: 'camp-001',
      name: 'Q4 Production Infrastructure Scan',
      target: 'prod.example.com',
      status: 'running',
      progress: 67,
      startTime: '2025-11-22 09:15:00',
      duration: '2h 34m',
      vulnerabilitiesFound: 23,
      hostsScanned: 45,
      totalHosts: 67
    },
    {
      id: 'camp-002',
      name: 'API Security Assessment',
      target: 'api.example.com',
      status: 'running',
      progress: 34,
      startTime: '2025-11-22 11:45:00',
      duration: '1h 12m',
      vulnerabilitiesFound: 8,
      hostsScanned: 12,
      totalHosts: 35
    },
    {
      id: 'camp-003',
      name: 'Web Application Pentest',
      target: 'app.example.com',
      status: 'paused',
      progress: 89,
      startTime: '2025-11-21 14:20:00',
      duration: '5h 47m',
      vulnerabilitiesFound: 42,
      hostsScanned: 89,
      totalHosts: 100
    },
    {
      id: 'camp-004',
      name: 'Network Infrastructure Audit',
      target: '10.0.0.0/16',
      status: 'completed',
      progress: 100,
      startTime: '2025-11-20 08:00:00',
      duration: '12h 15m',
      vulnerabilitiesFound: 156,
      hostsScanned: 500,
      totalHosts: 500
    },
    {
      id: 'camp-005',
      name: 'Mobile API Gateway Scan',
      target: 'mobile.api.example.com',
      status: 'stopped',
      progress: 45,
      startTime: '2025-11-19 16:30:00',
      duration: '3h 22m',
      vulnerabilitiesFound: 15,
      hostsScanned: 18,
      totalHosts: 40
    },
    {
      id: 'camp-006',
      name: 'Cloud Infrastructure Review',
      target: 'AWS us-east-1',
      status: 'completed',
      progress: 100,
      startTime: '2025-11-18 10:00:00',
      duration: '8h 30m',
      vulnerabilitiesFound: 78,
      hostsScanned: 234,
      totalHosts: 234
    }
  ]);

  const handlePause = (id: string) => {
    setCampaigns(campaigns.map(camp => 
      camp.id === id ? { ...camp, status: 'paused' as const } : camp
    ));
  };

  const handleResume = (id: string) => {
    setCampaigns(campaigns.map(camp => 
      camp.id === id ? { ...camp, status: 'running' as const } : camp
    ));
  };

  const handleStop = (id: string) => {
    setCampaigns(campaigns.map(camp => 
      camp.id === id ? { ...camp, status: 'stopped' as const } : camp
    ));
  };

  const getStatusBadge = (status: Campaign['status']) => {
    switch (status) {
      case 'running':
        return (
          <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
            Running
          </Badge>
        );
      case 'paused':
        return (
          <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
            <Pause className="w-3 h-3 mr-1" />
            Paused
          </Badge>
        );
      case 'completed':
        return (
          <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
            Completed
          </Badge>
        );
      case 'stopped':
        return (
          <Badge className="bg-red-500/10 text-red-500 border-red-500/20">
            Stopped
          </Badge>
        );
    }
  };

  const runningCampaigns = campaigns.filter(c => c.status === 'running').length;
  const pausedCampaigns = campaigns.filter(c => c.status === 'paused').length;
  const completedCampaigns = campaigns.filter(c => c.status === 'completed').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Campaign Logs
          </h1>
          <p className="text-[#8b90a8]">Monitor and manage all security scanning campaigns</p>
        </div>
        <Button className="bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] text-white hover:shadow-lg hover:shadow-purple-500/20">
          <Play className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="bg-[#1a1d2e] border-white/[0.08] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="text-3xl mb-1 text-white">{runningCampaigns}</div>
          <div className="text-sm text-[#8b90a8]">Running Campaigns</div>
        </Card>

        <Card className="bg-[#1a1d2e] border-white/[0.08] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
              <Pause className="w-6 h-6 text-white" />
            </div>
            <Clock className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-3xl mb-1 text-white">{pausedCampaigns}</div>
          <div className="text-sm text-[#8b90a8]">Paused Campaigns</div>
        </Card>

        <Card className="bg-[#1a1d2e] border-white/[0.08] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <Target className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl mb-1 text-white">{completedCampaigns}</div>
          <div className="text-sm text-[#8b90a8]">Completed Campaigns</div>
        </Card>

        <Card className="bg-[#1a1d2e] border-white/[0.08] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-3xl mb-1 text-white">
            {campaigns.reduce((acc, c) => acc + c.vulnerabilitiesFound, 0)}
          </div>
          <div className="text-sm text-[#8b90a8]">Total Vulnerabilities</div>
        </Card>
      </div>

      {/* Campaigns List */}
      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="bg-[#1a1d2e] border-white/[0.08] p-6 hover:border-white/[0.15] transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl text-white">{campaign.name}</h3>
                  {getStatusBadge(campaign.status)}
                </div>
                <div className="flex items-center gap-6 text-sm text-[#8b90a8]">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    {campaign.target}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Started: {campaign.startTime}
                  </div>
                  <div className="flex items-center gap-2">
                    Duration: {campaign.duration}
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {campaign.status === 'running' && (
                  <>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handlePause(campaign.id)}
                      className="border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10"
                    >
                      <Pause className="w-4 h-4 mr-1" />
                      Pause
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStop(campaign.id)}
                      className="border-red-500/20 text-red-500 hover:bg-red-500/10"
                    >
                      <StopCircle className="w-4 h-4 mr-1" />
                      Stop
                    </Button>
                  </>
                )}
                {campaign.status === 'paused' && (
                  <>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleResume(campaign.id)}
                      className="border-emerald-500/20 text-emerald-500 hover:bg-emerald-500/10"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Resume
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStop(campaign.id)}
                      className="border-red-500/20 text-red-500 hover:bg-red-500/10"
                    >
                      <StopCircle className="w-4 h-4 mr-1" />
                      Stop
                    </Button>
                  </>
                )}
                {(campaign.status === 'completed' || campaign.status === 'stopped') && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/10 text-white/60 hover:bg-white/5"
                  >
                    View Details
                  </Button>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-[#8b90a8]">Scan Progress</span>
                <span className="text-white">{campaign.progress}%</span>
              </div>
              <div className="h-2 bg-[#0f1117] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    campaign.status === 'running'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                      : campaign.status === 'paused'
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                      : campaign.status === 'completed'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                      : 'bg-gradient-to-r from-red-500 to-pink-500'
                  }`}
                  style={{ width: `${campaign.progress}%` }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#0f1117] rounded-lg p-3">
                <div className="text-sm text-[#8b90a8] mb-1">Hosts Scanned</div>
                <div className="text-xl text-white">
                  {campaign.hostsScanned} / {campaign.totalHosts}
                </div>
              </div>
              <div className="bg-[#0f1117] rounded-lg p-3">
                <div className="text-sm text-[#8b90a8] mb-1">Vulnerabilities Found</div>
                <div className="text-xl text-white">{campaign.vulnerabilitiesFound}</div>
              </div>
              <div className="bg-[#0f1117] rounded-lg p-3">
                <div className="text-sm text-[#8b90a8] mb-1">Completion Rate</div>
                <div className="text-xl text-white">{campaign.progress}%</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
