import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Plus } from 'lucide-react';

export function AddHost() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[#e4e4f0] text-2xl mb-2">Add Host</h1>
        <p className="text-[#8b90a8]">Add new hosts and targets for scanning</p>
      </div>

      <Card className="bg-[#1a1d2e] border-white/[0.08]">
        <CardHeader>
          <CardTitle className="text-[#e4e4f0]">Add New Target</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="simple" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/[0.05]">
              <TabsTrigger value="simple" className="data-[state=active]:bg-[#5b6ef5] data-[state=active]:text-white">Add Host</TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-[#5b6ef5] data-[state=active]:text-white">Advanced</TabsTrigger>
            </TabsList>
            
            <TabsContent value="simple" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="hostname" className="text-[#e4e4f0]">Hostname / IP Address</Label>
                  <Input
                    id="hostname"
                    type="text"
                    placeholder="example.com or 192.168.1.1"
                    className="bg-white/[0.05] border-white/[0.08] text-[#e4e4f0] placeholder:text-[#8b90a8]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="port" className="text-[#e4e4f0]">Port</Label>
                  <Input
                    id="port"
                    type="text"
                    placeholder="80, 443, 8080"
                    className="bg-white/[0.05] border-white/[0.08] text-[#e4e4f0] placeholder:text-[#8b90a8]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="protocol" className="text-[#e4e4f0]">Protocol</Label>
                  <select
                    id="protocol"
                    className="flex h-10 w-full rounded-md border border-white/[0.08] bg-white/[0.05] px-3 py-2 text-[#e4e4f0]"
                  >
                    <option>HTTP</option>
                    <option>HTTPS</option>
                    <option>FTP</option>
                    <option>SSH</option>
                    <option>Custom</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-[#e4e4f0]">Category</Label>
                  <select
                    id="category"
                    className="flex h-10 w-full rounded-md border border-white/[0.08] bg-white/[0.05] px-3 py-2 text-[#e4e4f0]"
                  >
                    <option>Web Server</option>
                    <option>Database</option>
                    <option>API</option>
                    <option>Network Device</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-[#e4e4f0]">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Add notes about this target..."
                  className="resize-none bg-white/[0.05] border-white/[0.08] text-[#e4e4f0] placeholder:text-[#8b90a8]"
                  rows={4}
                />
              </div>

              <div className="flex gap-2">
                <Button className="gap-2 bg-[#5b6ef5] hover:bg-[#4a5de3] text-white">
                  <Plus className="w-4 h-4" />
                  Add Host
                </Button>
                <Button variant="outline" className="bg-white/[0.05] border-white/[0.08] text-[#e4e4f0] hover:bg-white/[0.08]">
                  Add & Scan
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="advanced" className="space-y-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="bulk-input" className="text-[#e4e4f0]">Bulk Import (One per line)</Label>
                <Textarea
                  id="bulk-input"
                  placeholder="example.com&#10;192.168.1.1:443&#10;https://api.example.com&#10;10.0.0.1-10.0.0.254"
                  className="resize-none font-mono bg-white/[0.05] border-white/[0.08] text-[#e4e4f0] placeholder:text-[#8b90a8]"
                  rows={12}
                />
                <p className="text-[#8b90a8] text-sm">
                  Supported formats: domain, IP, IP:port, URL, IP range (CIDR)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="scan-options" className="text-[#e4e4f0]">Scan Options</Label>
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-[#e4e4f0]">Port Scan</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-[#e4e4f0]">Service Detection</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-[#e4e4f0]">Vulnerability Scan</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-[#e4e4f0]">Aggressive Mode</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="gap-2 bg-[#5b6ef5] hover:bg-[#4a5de3] text-white">
                  <Plus className="w-4 h-4" />
                  Import Hosts
                </Button>
                <Button variant="outline" className="bg-white/[0.05] border-white/[0.08] text-[#e4e4f0] hover:bg-white/[0.08]">
                  Import & Scan
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
