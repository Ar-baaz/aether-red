import { useState } from 'react';
import { motion } from 'motion/react';
import {
  LayoutDashboard,
  AlertTriangle,
  Brain,
  PlusCircle,
  Radar,
  MessageSquare,
  XCircle,
  FileText,
  Activity,
} from 'lucide-react';

interface LeftSidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
}

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'vulnerabilities', label: 'Vulnerabilities', icon: AlertTriangle },
  { id: 'pentester-llm', label: 'Pentester LLM', icon: Brain },
  { id: 'add-host', label: 'Add Host', icon: PlusCircle },
  { id: 'recon', label: 'Recon', icon: Radar },
  { id: 'chat', label: 'Aether chat', icon: MessageSquare },
  { id: 'false-positives', label: 'False Positives', icon: XCircle },
  { id: 'campaigns', label: 'Campaign Logs', icon: Activity },
  { id: 'reports', label: 'Reports', icon: FileText },
];

export function LeftSidebar({ currentPage, onPageChange, isDarkMode }: LeftSidebarProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.aside
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={false}
        animate={{
          width: isHovered ? 256 : 80
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }}
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] border-r overflow-hidden z-40 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-[#0f1117] border-white/[0.08]' 
            : 'bg-white border-gray-200'
        }`}
      >
        <nav className="p-4 space-y-1 overflow-y-auto h-full">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                initial={false}
                whileHover={{ x: 2 }}
                className={`w-full flex items-center gap-3 rounded-lg transition-all relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] text-white shadow-lg shadow-[#5b6ef5]/20'
                    : isDarkMode 
                      ? 'text-[#8b90a8] hover:bg-white/[0.05] hover:text-[#e4e4f0]'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                style={{
                  padding: '12px 16px',
                  justifyContent: isHovered ? 'flex-start' : 'center'
                }}
              >
                {/* Active indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}

                <Icon className="w-5 h-5 shrink-0" />
                
                <motion.span
                  initial={false}
                  animate={{ 
                    opacity: isHovered ? 1 : 0,
                    width: isHovered ? 'auto' : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap overflow-hidden"
                >
                  {item.label}
                </motion.span>
              </motion.button>
            );
          })}
        </nav>

        {/* Hover hint - only show when collapsed */}
        {!isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-4 left-0 right-0 flex justify-center"
          >
            <div className={`w-8 h-1 rounded-full ${
              isDarkMode ? 'bg-white/20' : 'bg-gray-300'
            }`} />
          </motion.div>
        )}
      </motion.aside>

      {/* Spacer to prevent content overlap */}
      <motion.div
        animate={{
          width: 80
        }}
        className="shrink-0"
      />
    </>
  );
}