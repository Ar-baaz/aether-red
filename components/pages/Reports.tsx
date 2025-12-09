import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search, Download, FileText, Eye, Calendar, BarChart3, File, CheckCircle2, AlertCircle, Clock, Plus, Filter } from 'lucide-react';
import { HostOrgSelector } from '../HostOrgSelector';

interface Report {
  id: string;
  name: string;
  type: 'Executive Summary' | 'Technical Report' | 'Compliance Report' | 'Vulnerability Report';
  format: 'pdf' | 'json' | 'csv' | 'html';
  campaignId: string;
  campaignName: string;
  createdAt: string;
  status: 'generating' | 'ready' | 'failed';
  size: string;
  vulnerabilities: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
}

export function Reports() {
  const [searchQuery, setSearchQuery] = useState('');
  const [reports] = useState<Report[]>([
    {
      id: 'rep-001',
      name: 'Q4 Production Infrastructure - Executive Summary',
      type: 'Executive Summary',
      format: 'pdf',
      campaignId: 'camp-001',
      campaignName: 'Q4 Production Infrastructure Scan',
      createdAt: '2025-11-22 12:30:00',
      status: 'ready',
      size: '2.4 MB',
      vulnerabilities: { critical: 3, high: 8, medium: 9, low: 3 }
    },
    {
      id: 'rep-002',
      name: 'API Security Assessment - Technical Report',
      type: 'Technical Report',
      format: 'pdf',
      campaignId: 'camp-002',
      campaignName: 'API Security Assessment',
      createdAt: '2025-11-22 11:45:00',
      status: 'generating',
      size: '-',
      vulnerabilities: { critical: 1, high: 2, medium: 4, low: 1 }
    },
    {
      id: 'rep-003',
      name: 'Network Infrastructure Audit - Compliance Report',
      type: 'Compliance Report',
      format: 'pdf',
      campaignId: 'camp-004',
      campaignName: 'Network Infrastructure Audit',
      createdAt: '2025-11-21 16:20:00',
      status: 'ready',
      size: '8.7 MB',
      vulnerabilities: { critical: 12, high: 34, medium: 67, low: 43 }
    },
    {
      id: 'rep-004',
      name: 'Web Application Pentest - Vulnerability Export',
      type: 'Vulnerability Report',
      format: 'json',
      campaignId: 'camp-003',
      campaignName: 'Web Application Pentest',
      createdAt: '2025-11-21 14:15:00',
      status: 'ready',
      size: '1.2 MB',
      vulnerabilities: { critical: 5, high: 15, medium: 18, low: 4 }
    },
    {
      id: 'rep-005',
      name: 'Cloud Infrastructure Review - CSV Export',
      type: 'Vulnerability Report',
      format: 'csv',
      campaignId: 'camp-006',
      campaignName: 'Cloud Infrastructure Review',
      createdAt: '2025-11-20 09:30:00',
      status: 'ready',
      size: '456 KB',
      vulnerabilities: { critical: 7, high: 21, medium: 32, low: 18 }
    },
    {
      id: 'rep-006',
      name: 'Mobile API Gateway - Technical Analysis',
      type: 'Technical Report',
      format: 'html',
      campaignId: 'camp-005',
      campaignName: 'Mobile API Gateway Scan',
      createdAt: '2025-11-19 18:00:00',
      status: 'failed',
      size: '-',
      vulnerabilities: { critical: 2, high: 5, medium: 6, low: 2 }
    }
  ]);

  const getFormatIcon = (format: Report['format']) => {
    switch (format) {
      case 'pdf':
        return <File className="w-5 h-5 text-red-500" />;
      case 'json':
        return <File className="w-5 h-5 text-yellow-500" />;
      case 'csv':
        return <File className="w-5 h-5 text-emerald-500" />;
      case 'html':
        return <FileText className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStatusBadge = (status: Report['status']) => {
    switch (status) {
      case 'generating':
        return (
          <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse mr-2" />
            Generating
          </Badge>
        );
      case 'ready':
        return (
          <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Ready
          </Badge>
        );
      case 'failed':
        return (
          <Badge className="bg-red-500/10 text-red-500 border-red-500/20">
            <AlertCircle className="w-3 h-3 mr-1" />
            Failed
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Reports
          </h1>
          <p className="text-[#8b90a8]">Generate and manage security assessment reports</p>
        </div>
        <div className="flex items-center gap-4">
          <HostOrgSelector />
          <Button className="bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] text-white hover:shadow-lg hover:shadow-purple-500/20">
            <Plus className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="bg-[#1a1d2e] border-white/[0.08] p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[#0f1117] border-white/5 text-white placeholder:text-white/30"
            />
          </div>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
        </div>
      </Card>

      {/* Reports List */}
      <div className="space-y-4">
        {reports
          .filter(report => 
            report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            report.campaignName.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((report) => (
          <Card key={report.id} className="bg-[#1a1d2e] border-white/[0.08] p-6 hover:border-white/[0.15] transition-all">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                {/* Format Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#0f1117] flex items-center justify-center shrink-0">
                  {getFormatIcon(report.format)}
                </div>

                {/* Report Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-white">{report.name}</h3>
                    {getStatusBadge(report.status)}
                    <Badge variant="outline" className="border-white/10 text-white/60">
                      {report.type}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-[#8b90a8] mb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Campaign: {report.campaignName}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {report.createdAt}
                    </div>
                    {report.status === 'ready' && (
                      <div className="flex items-center gap-2">
                        Size: {report.size}
                      </div>
                    )}
                  </div>

                  {/* Vulnerability Summary */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-sm text-red-500">{report.vulnerabilities.critical} Critical</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-sm text-orange-500">{report.vulnerabilities.high} High</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="text-sm text-yellow-500">{report.vulnerabilities.medium} Medium</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-sm text-blue-500">{report.vulnerabilities.low} Low</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 ml-4">
                {report.status === 'ready' && (
                  <>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/10 text-white hover:bg-white/5"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] text-white hover:shadow-lg hover:shadow-purple-500/20"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </>
                )}
                {report.status === 'generating' && (
                  <Button
                    size="sm"
                    variant="outline"
                    disabled
                    className="border-yellow-500/20 text-yellow-500"
                  >
                    <Clock className="w-4 h-4 mr-1 animate-spin" />
                    Processing...
                  </Button>
                )}
                {report.status === 'failed' && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-500/20 text-red-500 hover:bg-red-500/10"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    Retry
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}