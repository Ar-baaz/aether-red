import { Card, CardContent } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { HostOrgSelector } from '../HostOrgSelector';

const networkData = [
  { ip: '192.168.1.1', hostname: 'router.local', status: 'Active', ports: '22, 80, 443' },
  { ip: '192.168.1.10', hostname: 'web-server-01', status: 'Active', ports: '80, 443, 8080' },
  { ip: '192.168.1.15', hostname: 'db-server', status: 'Active', ports: '3306, 5432' },
  { ip: '192.168.1.20', hostname: 'api-gateway', status: 'Active', ports: '443, 8443' },
];

const webHistory = [
  { url: 'https://example.com/admin', method: 'GET', status: 200, timestamp: '14:32:15' },
  { url: 'https://example.com/api/users', method: 'POST', status: 401, timestamp: '14:31:45' },
  { url: 'https://example.com/login', method: 'POST', status: 302, timestamp: '14:31:20' },
  { url: 'https://example.com/dashboard', method: 'GET', status: 200, timestamp: '14:30:55' },
];

const intelData = [
  { type: 'Email', value: 'admin@example.com', source: 'WHOIS', confidence: 'High' },
  { type: 'Subdomain', value: 'dev.example.com', source: 'DNS', confidence: 'High' },
  { type: 'Technology', value: 'Nginx 1.21.0', source: 'Banner', confidence: 'High' },
  { type: 'Employee', value: 'John Doe', source: 'LinkedIn', confidence: 'Medium' },
];

const assets = [
  { name: 'app.example.com', type: 'Web App', risk: 'High', services: 'HTTP, HTTPS' },
  { name: 'api.example.com', type: 'API', risk: 'Critical', services: 'HTTPS, REST' },
  { name: 'mail.example.com', type: 'Mail Server', risk: 'Medium', services: 'SMTP, IMAP' },
  { name: 'db-prod-01', type: 'Database', risk: 'Critical', services: 'MySQL' },
];

export function Recon() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#e4e4f0] text-2xl mb-2">Reconnaissance</h1>
          <p className="text-[#8b90a8]">Gather intelligence and map your attack surface</p>
        </div>
        <HostOrgSelector />
      </div>

      <Card className="bg-[#1a1d2e] border-white/[0.08]">
        <CardContent className="pt-6">
          <Tabs defaultValue="network" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/[0.05]">
              <TabsTrigger value="network" className="gap-2 data-[state=active]:bg-[#5b6ef5] data-[state=active]:text-white">
                <Globe className="w-4 h-4" />
                Network
              </TabsTrigger>
              <TabsTrigger value="web-history" className="gap-2 data-[state=active]:bg-[#5b6ef5] data-[state=active]:text-white">
                <History className="w-4 h-4" />
                Web History
              </TabsTrigger>
              <TabsTrigger value="intel" className="gap-2 data-[state=active]:bg-[#5b6ef5] data-[state=active]:text-white">
                <Search className="w-4 h-4" />
                Intel Search
              </TabsTrigger>
              <TabsTrigger value="assets" className="gap-2 data-[state=active]:bg-[#5b6ef5] data-[state=active]:text-white">
                <Server className="w-4 h-4" />
                Assets
              </TabsTrigger>
            </TabsList>

            <TabsContent value="network" className="mt-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Search network..." className="flex-1 bg-white/[0.05] border-white/[0.08] text-[#e4e4f0] placeholder:text-[#8b90a8]" />
                  <Button className="bg-[#5b6ef5] hover:bg-[#4a5de3] text-white">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/[0.08]">
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">IP Address</th>
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Hostname</th>
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Open Ports</th>
                      </tr>
                    </thead>
                    <tbody>
                      {networkData.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="py-3 px-4 text-[#e4e4f0]">{item.ip}</td>
                          <td className="py-3 px-4 text-[#e4e4f0]">{item.hostname}</td>
                          <td className="py-3 px-4">
                            <Badge className="bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                              {item.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-[#8b90a8]">{item.ports}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="web-history" className="mt-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Filter requests..." className="flex-1 bg-white/[0.05] border-white/[0.08] text-[#e4e4f0] placeholder:text-[#8b90a8]" />
                  <Button className="bg-[#5b6ef5] hover:bg-[#4a5de3] text-white">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/[0.08]">
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">URL</th>
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Method</th>
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {webHistory.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="py-3 px-4 text-[#e4e4f0]">{item.url}</td>
                          <td className="py-3 px-4">
                            <Badge variant="outline" className="border-white/[0.08] text-[#8b90a8]">{item.method}</Badge>
                          </td>
                          <td className="py-3 px-4 text-[#e4e4f0]">{item.status}</td>
                          <td className="py-3 px-4 text-[#8b90a8]">{item.timestamp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="intel" className="mt-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Search intelligence..." className="flex-1 bg-white/[0.05] border-white/[0.08] text-[#e4e4f0] placeholder:text-[#8b90a8]" />
                  <Button className="bg-[#5b6ef5] hover:bg-[#4a5de3] text-white">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/[0.08]">
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Type</th>
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Value</th>
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Source</th>
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Confidence</th>
                      </tr>
                    </thead>
                    <tbody>
                      {intelData.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="py-3 px-4">
                            <Badge variant="outline" className="border-white/[0.08] text-[#8b90a8]">{item.type}</Badge>
                          </td>
                          <td className="py-3 px-4 text-[#e4e4f0]">{item.value}</td>
                          <td className="py-3 px-4 text-[#8b90a8]">{item.source}</td>
                          <td className="py-3 px-4">
                            <Badge className={item.confidence === 'High' ? 'bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20' : 'bg-[#fbbf24]/10 text-[#fbbf24] border border-[#fbbf24]/20'}>
                              {item.confidence}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="assets" className="mt-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Search assets..." className="flex-1 bg-white/[0.05] border-white/[0.08] text-[#e4e4f0] placeholder:text-[#8b90a8]" />
                  <Button className="bg-[#5b6ef5] hover:bg-[#4a5de3] text-white">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/[0.08]">
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Asset Name</th>
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Type</th>
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Risk Level</th>
                        <th className="text-left py-3 px-4 text-[#8b90a8] text-sm font-medium">Services</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assets.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="py-3 px-4 text-[#e4e4f0]">{item.name}</td>
                          <td className="py-3 px-4">
                            <Badge variant="outline" className="border-white/[0.08] text-[#8b90a8]">{item.type}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={
                              item.risk === 'Critical' ? 'bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/20' :
                              item.risk === 'High' ? 'bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20' :
                              'bg-[#fbbf24]/10 text-[#fbbf24] border border-[#fbbf24]/20'
                            }>
                              {item.risk}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-[#8b90a8]">{item.services}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}