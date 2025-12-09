import { Server, Building2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface HostOrgSelectorProps {
  isDarkMode?: boolean;
}

const hosts = [
  'api.cybercorp.com',
  'webapp.cybercorp.io',
  'admin.example.com',
  'mail.example.com',
  'blog.example.com',
  'app.example.com',
];

const organizations = [
  'CyberCorp Inc.',
  'TechSecure Ltd.',
  'DataGuard Systems',
];

export function HostOrgSelector({ isDarkMode = true }: HostOrgSelectorProps) {
  return (
    <div className="flex gap-4 items-center">
      {/* Organization Selector */}
      <div className="flex items-center gap-2 min-w-[200px]">
        <Building2 className={`w-4 h-4 ${isDarkMode ? 'text-[#8b90a8]' : 'text-gray-500'}`} />
        <Select defaultValue={organizations[0]}>
          <SelectTrigger className={`transition-colors ${
            isDarkMode 
              ? 'bg-[#1a1d2e] border-white/[0.08] text-[#e4e4f0]' 
              : 'bg-white border-gray-200 text-gray-900'
          }`}>
            <SelectValue placeholder="Select organization" />
          </SelectTrigger>
          <SelectContent className={
            isDarkMode 
              ? 'bg-[#1a1d2e] border-white/[0.08]' 
              : 'bg-white border-gray-200'
          }>
            {organizations.map((org) => (
              <SelectItem 
                key={org} 
                value={org}
                className={
                  isDarkMode 
                    ? 'text-[#e4e4f0] focus:bg-white/[0.05]' 
                    : 'text-gray-900 focus:bg-gray-100'
                }
              >
                {org}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Host Selector */}
      <div className="flex items-center gap-2 min-w-[250px]">
        <Server className={`w-4 h-4 ${isDarkMode ? 'text-[#8b90a8]' : 'text-gray-500'}`} />
        <Select defaultValue={hosts[0]}>
          <SelectTrigger className={`transition-colors ${
            isDarkMode 
              ? 'bg-[#1a1d2e] border-white/[0.08] text-[#e4e4f0]' 
              : 'bg-white border-gray-200 text-gray-900'
          }`}>
            <SelectValue placeholder="Select host" />
          </SelectTrigger>
          <SelectContent className={
            isDarkMode 
              ? 'bg-[#1a1d2e] border-white/[0.08]' 
              : 'bg-white border-gray-200'
          }>
            {hosts.map((host) => (
              <SelectItem 
                key={host} 
                value={host}
                className={
                  isDarkMode 
                    ? 'text-[#e4e4f0] focus:bg-white/[0.05]' 
                    : 'text-gray-900 focus:bg-gray-100'
                }
              >
                {host}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
