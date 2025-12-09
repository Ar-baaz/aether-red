import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search, Filter, CheckCircle2 } from 'lucide-react';

const falsePositives = [
  {
    id: 'FP-001',
    originalId: 'VULN-023',
    title: 'Directory Listing Enabled',
    asset: 'docs.example.com',
    severity: 'Medium',
    markedBy: 'John Doe',
    markedDate: '2025-11-13',
    reason: 'Intentional - Public documentation directory',
  },
  {
    id: 'FP-002',
    originalId: 'VULN-034',
    title: 'Weak Cipher Suite',
    asset: 'legacy.example.com',
    severity: 'Low',
    markedBy: 'Jane Smith',
    markedDate: '2025-11-12',
    reason: 'Legacy system - planned for decommission',
  },
  {
    id: 'FP-003',
    originalId: 'VULN-045',
    title: 'Missing HSTS Header',
    asset: 'internal.example.com',
    severity: 'Low',
    markedBy: 'Bob Johnson',
    markedDate: '2025-11-11',
    reason: 'Internal-only application - not exposed to internet',
  },
  {
    id: 'FP-004',
    originalId: 'VULN-067',
    title: 'Cookie Without Secure Flag',
    asset: 'dev.example.com',
    severity: 'Medium',
    markedBy: 'Alice Brown',
    markedDate: '2025-11-10',
    reason: 'Development environment - HTTP only',
  },
  {
    id: 'FP-005',
    originalId: 'VULN-089',
    title: 'Information Disclosure',
    asset: 'status.example.com',
    severity: 'Low',
    markedBy: 'John Doe',
    markedDate: '2025-11-09',
    reason: 'Public status page - information is meant to be public',
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

export function FalsePositives() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[#e4e4f0] text-2xl mb-2">False Positives</h1>
        <p className="text-[#8b90a8]">Manage findings marked as false positives</p>
      </div>

      <Card className="bg-[#1a1d2e] border-white/[0.08]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-[#e4e4f0]">Marked False Positives</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b90a8]" />
                <Input
                  type="text"
                  placeholder="Search false positives..."
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
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">FP ID</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Original ID</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Title</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Asset</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Severity</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Marked By</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Date</th>
                  <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Reason</th>
                </tr>
              </thead>
              <tbody>
                {falsePositives.map((fp) => (
                  <tr
                    key={fp.id}
                    className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                        <span className="text-[#e4e4f0]">{fp.id}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[#8b90a8]">{fp.originalId}</td>
                    <td className="py-3 px-4 text-[#e4e4f0]">{fp.title}</td>
                    <td className="py-3 px-4 text-[#8b90a8]">{fp.asset}</td>
                    <td className="py-3 px-4">
                      <Badge className={getSeverityColor(fp.severity)}>
                        {fp.severity}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-[#8b90a8]">{fp.markedBy}</td>
                    <td className="py-3 px-4 text-[#8b90a8]">{fp.markedDate}</td>
                    <td className="py-3 px-4 text-[#8b90a8] max-w-xs truncate">
                      {fp.reason}
                    </td>
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
