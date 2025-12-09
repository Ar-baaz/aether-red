import { Plus, User, Settings, Bell, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface TopNavbarProps {
  selectedOrg: string;
  onOrgChange: (org: string) => void;
  onToggleDarkMode: (isDark: boolean) => void;
  isDarkMode: boolean;
}

export function TopNavbar({ selectedOrg, onOrgChange, onToggleDarkMode, isDarkMode }: TopNavbarProps) {
  const organizations = ['CyberCorp Inc.', 'TechSecure Ltd.', 'DataGuard Systems'];

  const toggleDarkMode = () => {
    onToggleDarkMode(!isDarkMode);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 h-16 border-b z-50 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#0f1117] border-white/[0.08]' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between h-full px-6">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#5b6ef5] to-[#7c3aed] rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">P</span>
            </div>
            <span className={`font-semibold transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>PentestPro</span>
          </div>
          
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`gap-2 transition-colors ${
                  isDarkMode 
                    ? 'text-[#e4e4f0] hover:bg-white/[0.05]' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}>
                  {selectedOrg}
                  <ChevronDown className="w-4 h-4 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className={
                isDarkMode 
                  ? 'bg-[#1a1d2e] border-white/[0.08]' 
                  : 'bg-white border-gray-200'
              }>
                {organizations.map((org) => (
                  <DropdownMenuItem
                    key={org}
                    onClick={() => onOrgChange(org)}
                    className={isDarkMode 
                      ? `text-[#e4e4f0] ${selectedOrg === org ? 'bg-white/[0.05]' : ''}` 
                      : `text-gray-700 ${selectedOrg === org ? 'bg-gray-100' : ''}`
                    }
                  >
                    {org}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="gap-2 bg-[#5b6ef5] hover:bg-[#4a5de3] text-white">
              <Plus className="w-4 h-4" />
              Add Org
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`relative w-14 h-7 rounded-full transition-all overflow-hidden ${
              isDarkMode 
                ? 'bg-white/[0.08] hover:bg-white/[0.12]' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            <div 
              className={`absolute inset-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-[#5b6ef5] to-[#7c3aed] transition-all duration-300 flex items-center justify-center shadow-lg ${
                isDarkMode ? 'translate-x-0' : 'translate-x-7'
              }`}
            >
              {isDarkMode ? (
                <Moon className="w-3.5 h-3.5 text-white" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-white" />
              )}
            </div>
          </button>

          <Button variant="ghost" size="icon" className={`rounded-full transition-colors ${
            isDarkMode 
              ? 'hover:bg-white/[0.05] text-[#e4e4f0]' 
              : 'hover:bg-gray-100 text-gray-700'
          }`}>
            <Bell className="w-5 h-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-[#5b6ef5] to-[#7c3aed] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">AD</span>
                </div>
                <div className="text-left">
                  <div className={`text-sm font-medium transition-colors ${
                    isDarkMode ? 'text-[#e4e4f0]' : 'text-gray-900'
                  }`}>Alex Drake</div>
                  <div className={`text-xs transition-colors ${
                    isDarkMode ? 'text-[#8b90a8]' : 'text-gray-500'
                  }`}>Admin</div>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={`w-48 ${
              isDarkMode 
                ? 'bg-[#1a1d2e] border-white/[0.08]' 
                : 'bg-white border-gray-200'
            }`}>
              <DropdownMenuItem className={
                isDarkMode ? 'text-[#e4e4f0]' : 'text-gray-700'
              }>
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className={
                isDarkMode ? 'text-[#e4e4f0]' : 'text-gray-700'
              }>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className={
                isDarkMode ? 'bg-white/[0.08]' : 'bg-gray-200'
              } />
              <DropdownMenuItem className="text-[#ef4444]">
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}