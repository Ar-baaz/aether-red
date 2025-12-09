import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Search, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { HostOrgSelector } from '../HostOrgSelector';

const vulnerabilities = [
  {
    id: 'VULN-001',
    title: 'SQL Injection in Login Form',
    severity: 'Critical',
    asset: 'app.example.com',
    cvss: 9.8,
    status: 'Open',
    discovered: '2025-11-14',
  },
  {
    id: 'VULN-002',
    title: 'Cross-Site Scripting (XSS)',
    severity: 'High',
    asset: 'api.example.com',
    cvss: 7.5,
    status: 'Open',
    discovered: '2025-11-14',
  },
  {
    id: 'VULN-003',
    title: 'Weak SSL/TLS Configuration',
    severity: 'Medium',
    asset: 'mail.example.com',
    cvss: 5.3,
    status: 'In Progress',
    discovered: '2025-11-13',
  },
  {
    id: 'VULN-004',
    title: 'Missing Security Headers',
    severity: 'Low',
    asset: 'blog.example.com',
    cvss: 3.7,
    status: 'Open',
    discovered: '2025-11-13',
  },
  {
    id: 'VULN-005',
    title: 'Remote Code Execution',
    severity: 'Critical',
    asset: 'admin.example.com',
    cvss: 10.0,
    status: 'Open',
    discovered: '2025-11-12',
  },
  {
    id: 'VULN-006',
    title: 'Broken Authentication',
    severity: 'High',
    asset: 'portal.example.com',
    cvss: 8.1,
    status: 'Fixed',
    discovered: '2025-11-12',
  },
  {
    id: 'VULN-007',
    title: 'Information Disclosure',
    severity: 'Medium',
    asset: 'dev.example.com',
    cvss: 5.8,
    status: 'Open',
    discovered: '2025-11-11',
  },
];

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

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Open':
      return 'bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/20';
    case 'In Progress':
      return 'bg-[#fbbf24]/10 text-[#fbbf24] border border-[#fbbf24]/20';
    case 'Fixed':
      return 'bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20';
    default:
      return 'bg-white/[0.05] text-[#8b90a8]';
  }
};

export function Vulnerabilities() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#e4e4f0] text-2xl mb-2">Vulnerabilities</h1>
          <p className="text-[#8b90a8]">Manage and track security findings</p>
        </div>
        <HostOrgSelector />
      </div>

      <Card className="bg-[#1a1d2e] border-white/[0.08]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-[#e4e4f0]">All Findings</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b90a8]" />
                <Input
                  type="text"
                  placeholder="Search vulnerabilities..."
                  className="pl-9 w-64 bg-white/[0.05] border-white/[0.08] text-[#e4e4f0] placeholder:text-[#8b90a8]"
                />
              </div>
              <Button variant="outline" size="icon" className="bg-white/[0.05] border-white/[0.08] text-[#e4e4f0] hover:bg-white/[0.08]">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">ID</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Title</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Severity</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Asset</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">CVSS</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Discovered</th>
                </tr>
              </thead>
              <tbody>
                {vulnerabilities.map((vuln) => (
                  <tr
                    key={vuln.id}
                    className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3 px-4 text-[#e4e4f0]">{vuln.id}</td>
                    <td className="py-3 px-4 text-[#e4e4f0]">{vuln.title}</td>
                    <td className="py-3 px-4">
                      <Badge className={getSeverityColor(vuln.severity)}>
                        {vuln.severity}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-[#8b90a8]">{vuln.asset}</td>
                    <td className="py-3 px-4 text-[#e4e4f0]">{vuln.cvss}</td>
                    <td className="py-3 px-4">
                      <Badge className={getStatusColor(vuln.status)}>
                        {vuln.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-[#8b90a8]">{vuln.discovered}</td>
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