import { useState, useRef, useEffect } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Send, 
  Sparkles, 
  Shield, 
  Radar, 
  Bug, 
  Search,
  Terminal,
  Code,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  User,
  Play,
  Pause,
  XCircle,
  Clock,
  Activity,
  Server,
  Database,
  Network
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  taskType?: 'pentesting' | 'recon' | 'rca' | 'analysis' | 'question';
  status?: 'running' | 'completed' | 'failed';
  taskExecution?: {
    phase: string;
    progress: number;
    currentAction: string;
    logs: string[];
  };
  results?: {
    vulnerabilities?: number;
    hostsScanned?: number;
    findings?: string[];
  };
}

const quickActions = [
  { 
    icon: Shield, 
    label: 'Run Pentest', 
    prompt: 'Perform a comprehensive penetration test on target hosts',
    color: 'from-red-500 to-pink-500'
  },
  { 
    icon: Radar, 
    label: 'Start Recon', 
    prompt: 'Initiate reconnaissance scan to discover assets and vulnerabilities',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: Bug, 
    label: 'Analyze Findings', 
    prompt: 'Analyze recent security findings and provide detailed explanations',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    icon: Search, 
    label: 'Root Cause Analysis', 
    prompt: 'Perform root cause analysis on critical vulnerabilities',
    color: 'from-orange-500 to-red-500'
  }
];

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'system',
      content: 'Welcome to **Aether chat** — your AI-powered security operations assistant. I can help you execute pentesting tasks, perform reconnaissance, analyze vulnerabilities, conduct root cause analysis, and answer questions about your security findings.',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickAction = (prompt: string) => {
    setInput(prompt);
    inputRef.current?.focus();
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate task execution for pentest/recon
    const taskType = determineTaskType(input);
    const isTask = ['pentesting', 'recon'].includes(taskType || '');

    if (isTask) {
      // Add running task message
      setTimeout(() => {
        const runningMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: generateResponse(input),
          timestamp: new Date(),
          taskType: taskType,
          status: 'running',
          taskExecution: {
            phase: 'Initialization',
            progress: 15,
            currentAction: 'Setting up scan environment...',
            logs: [
              '✓ Validating target hosts',
              '✓ Loading security modules',
              '→ Establishing secure connection...'
            ]
          }
        };
        setMessages(prev => [...prev, runningMessage]);
        setIsTyping(false);

        // Update progress
        setTimeout(() => {
          setMessages(prev => prev.map(msg => 
            msg.id === runningMessage.id 
              ? {
                  ...msg,
                  taskExecution: {
                    phase: 'Scanning',
                    progress: 45,
                    currentAction: 'Performing deep vulnerability scan...',
                    logs: [
                      '✓ Port scanning completed (142 ports)',
                      '✓ Service enumeration done',
                      '→ Testing for SQL injection vectors...',
                      '→ Analyzing authentication mechanisms...'
                    ]
                  }
                }
              : msg
          ));
        }, 2000);

        // Complete the task
        setTimeout(() => {
          setMessages(prev => prev.map(msg => 
            msg.id === runningMessage.id 
              ? {
                  ...msg,
                  status: 'completed',
                  taskExecution: {
                    phase: 'Completed',
                    progress: 100,
                    currentAction: 'Generating comprehensive report...',
                    logs: [
                      '✓ Vulnerability assessment complete',
                      '✓ Generated detailed findings report',
                      '✓ Risk scoring calculated',
                      '✓ Remediation recommendations prepared'
                    ]
                  },
                  results: {
                    vulnerabilities: Math.floor(Math.random() * 20) + 5,
                    hostsScanned: Math.floor(Math.random() * 50) + 10,
                    findings: [
                      'SQL Injection vulnerability detected in login form',
                      'Missing security headers (CSP, X-Frame-Options)',
                      'Outdated SSL/TLS configuration',
                      'Exposed sensitive endpoints'
                    ]
                  }
                }
              : msg
          ));
        }, 4500);
      }, 1000);
    } else {
      // Regular response
      setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: generateResponse(input),
          timestamp: new Date(),
          taskType: taskType,
          status: 'completed'
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const determineTaskType = (input: string): Message['taskType'] => {
    const lower = input.toLowerCase();
    if (lower.includes('pentest') || lower.includes('penetration')) return 'pentesting';
    if (lower.includes('recon') || lower.includes('reconnaissance')) return 'recon';
    if (lower.includes('rca') || lower.includes('root cause')) return 'rca';
    if (lower.includes('analyze') || lower.includes('analysis')) return 'analysis';
    return 'question';
  };

  const generateResponse = (input: string): string => {
    const taskType = determineTaskType(input);
    
    switch (taskType) {
      case 'pentesting':
        return `Initiating comprehensive penetration test. I'll execute a multi-phase security assessment covering:\n\n**Test Scope:**\n• Network infrastructure scanning\n• Web application security testing\n• API endpoint vulnerability assessment\n• Authentication & authorization testing\n• SQL injection & XSS detection\n\nMonitoring execution in real-time below...`;
      
      case 'recon':
        return `Starting reconnaissance operations. I'll gather intelligence across multiple vectors:\n\n**Reconnaissance Phases:**\n• DNS enumeration and subdomain discovery\n• Port scanning and service identification\n• Technology stack fingerprinting\n• SSL/TLS configuration analysis\n• Exposed credentials scanning\n\nTracking progress in real-time below...`;
      
      case 'rca':
        return `Performing root cause analysis on recent critical vulnerabilities:\n\n**Analysis Summary:**\n\n🔴 **Critical: SQL Injection in Authentication Module**\n- Root Cause: Unsanitized user input in login query\n- Attack Vector: POST /api/auth/login\n- Impact: Database access, privilege escalation\n- Recommendation: Implement parameterized queries, input validation\n\n🔴 **Critical: Authentication Bypass**\n- Root Cause: JWT token validation flaw\n- Attack Vector: Modified token payload\n- Impact: Unauthorized access to admin functions\n- Recommendation: Strengthen token validation, implement refresh token rotation\n\nWould you like me to generate remediation tickets for these issues?`;
      
      case 'analysis':
        return `I've analyzed your recent security findings. Here's a comprehensive breakdown:\n\n**Vulnerability Distribution:**\n- Critical: 3 vulnerabilities\n- High: 12 vulnerabilities\n- Medium: 18 vulnerabilities\n- Low: 7 vulnerabilities\n\n**Key Concerns:**\n1. Multiple SQL injection vectors in API endpoints\n2. Missing authentication on sensitive routes\n3. Outdated dependencies with known exploits\n4. Weak encryption algorithms in use\n\n**Risk Assessment:**\nOverall Security Posture: **MEDIUM-HIGH RISK**\n\nImmediate action required on critical findings. I recommend starting with the authentication bypass vulnerability as it provides the highest impact for attackers.`;
      
      default:
        return `I can help you with that. As your security operations assistant, I have access to:\n\n• **Vulnerability Database**: All discovered security issues\n• **Host Inventory**: Complete asset visibility\n• **Scan Results**: Historical and current campaign data\n• **Threat Intelligence**: Latest CVE and exploit information\n\nWhat specific information would you like to know about your security posture?`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getTaskBadge = (taskType?: Message['taskType'], status?: Message['status']) => {
    if (!taskType) return null;

    const badges = {
      pentesting: { icon: Shield, label: 'Pentesting', color: 'bg-red-500/10 text-red-500 border-red-500/20' },
      recon: { icon: Radar, label: 'Reconnaissance', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
      rca: { icon: Search, label: 'RCA', color: 'bg-orange-500/10 text-orange-500 border-orange-500/20' },
      analysis: { icon: Bug, label: 'Analysis', color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
      question: { icon: Sparkles, label: 'Query', color: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20' }
    };

    const badge = badges[taskType];
    const Icon = badge.icon;

    return (
      <Badge className={`${badge.color} mb-3`}>
        <Icon className="w-3 h-3 mr-1" />
        {badge.label}
        {status === 'running' && <Loader2 className="w-3 h-3 ml-2 animate-spin" />}
      </Badge>
    );
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-[#0a0c12]">
      {/* Header */}
      <div className="shrink-0 border-b border-white/[0.08] bg-[#0f1117]/95 backdrop-blur-sm px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5b6ef5] to-[#7c3aed] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center gap-2">
                Aether chat
              </h1>
              <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-xs h-4 px-1.5">
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse mr-1" />
                Online
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
          {/* Quick Actions - Show only at start */}
          {messages.length === 1 && (
            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Card
                    key={index}
                    className="bg-[#1a1d2e] border-white/[0.08] p-4 hover:border-white/[0.15] transition-all cursor-pointer group"
                    onClick={() => handleQuickAction(action.prompt)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white mb-1">{action.label}</div>
                        <div className="text-sm text-[#8b90a8] line-clamp-2">{action.prompt}</div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Messages */}
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.type !== 'user' && (
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5b6ef5] to-[#7c3aed] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div className={`flex-1 max-w-3xl ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                <div className={
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] text-white ml-auto rounded-2xl p-4 max-w-2xl' 
                    : message.type === 'system'
                    ? 'bg-[#1a1d2e]/50 border border-white/[0.08] rounded-2xl p-4 w-full'
                    : 'bg-[#1a1d2e] border border-white/[0.08] rounded-2xl p-4 w-full'
                }>
                  {message.type === 'assistant' && getTaskBadge(message.taskType, message.status)}
                  
                  <div className={`${message.type === 'user' ? 'text-white' : 'text-[#e4e4f0]'} whitespace-pre-wrap`}>
                    {message.content.split('**').map((part, i) => 
                      i % 2 === 0 ? <span key={i}>{part}</span> : <strong key={i} className="text-white">{part}</strong>
                    )}
                  </div>

                  {/* Task Execution UI */}
                  {message.taskExecution && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 space-y-3"
                    >
                      {/* Progress Bar */}
                      <div className="bg-[#0f1117] rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white flex items-center gap-2">
                            {message.status === 'running' && <Activity className="w-4 h-4 text-blue-500 animate-pulse" />}
                            {message.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                            {message.taskExecution.phase}
                          </span>
                          <span className="text-[#8b90a8]">{message.taskExecution.progress}%</span>
                        </div>
                        <div className="h-2 bg-[#1a1d2e] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${message.taskExecution.progress}%` }}
                            transition={{ duration: 0.5 }}
                            className={`h-full rounded-full ${
                              message.status === 'completed' 
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                                : 'bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed]'
                            }`}
                          />
                        </div>
                        <div className="text-sm text-[#8b90a8] flex items-center gap-2">
                          <Terminal className="w-4 h-4" />
                          {message.taskExecution.currentAction}
                        </div>
                      </div>

                      {/* Live Logs */}
                      <div className="bg-[#0f1117] rounded-lg p-4">
                        <div className="flex items-center gap-2 text-sm text-[#8b90a8] mb-3">
                          <Code className="w-4 h-4" />
                          Execution Logs
                        </div>
                        <div className="space-y-1.5 font-mono text-xs">
                          <AnimatePresence>
                            {message.taskExecution.logs.map((log, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`${
                                  log.startsWith('✓') ? 'text-emerald-400' :
                                  log.startsWith('→') ? 'text-blue-400' :
                                  log.startsWith('✗') ? 'text-red-400' :
                                  'text-white/60'
                                }`}
                              >
                                {log}
                              </motion.div>
                            ))}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Results Display */}
                  {message.results && message.status === 'completed' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 space-y-3"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#0f1117] rounded-lg p-3 border border-red-500/20">
                          <div className="flex items-center gap-2 text-sm text-red-400 mb-1">
                            <AlertTriangle className="w-4 h-4" />
                            Vulnerabilities
                          </div>
                          <div className="text-2xl text-white">{message.results.vulnerabilities}</div>
                        </div>
                        <div className="bg-[#0f1117] rounded-lg p-3 border border-blue-500/20">
                          <div className="flex items-center gap-2 text-sm text-blue-400 mb-1">
                            <Server className="w-4 h-4" />
                            Hosts Scanned
                          </div>
                          <div className="text-2xl text-white">{message.results.hostsScanned}</div>
                        </div>
                      </div>
                      
                      {message.results.findings && (
                        <div className="bg-[#0f1117] rounded-lg p-3 border border-orange-500/20">
                          <div className="flex items-center gap-2 text-sm text-orange-400 mb-3">
                            <Database className="w-4 h-4" />
                            Critical Findings
                          </div>
                          <div className="space-y-2">
                            {message.results.findings.map((finding, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm">
                                <AlertTriangle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                <span className="text-white/80">{finding}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  <div className="text-xs text-white/30 mt-3">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>

              {message.type === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-4 justify-start">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5b6ef5] to-[#7c3aed] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="bg-[#1a1d2e] border border-white/[0.08] rounded-2xl p-4">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-[#5b6ef5] animate-spin" />
                  <span className="text-[#8b90a8]">Analyzing and processing your request...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="shrink-0 bg-transparent">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* Floating Input Container */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5b6ef5] via-[#7c3aed] to-[#5b6ef5] rounded-3xl opacity-30 blur-xl animate-pulse" />
            
            {/* Input Card */}
            <Card className="relative bg-[#1a1d2e]/90 backdrop-blur-xl border-white/[0.15] overflow-hidden shadow-2xl rounded-3xl">
              <div className="flex items-end gap-3 p-4">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about security findings, run pentests, perform recon, or request analysis..."
                  className="flex-1 bg-transparent text-white placeholder:text-white/30 resize-none outline-none min-h-[24px] max-h-[120px] py-1"
                  rows={1}
                  style={{ 
                    height: 'auto',
                    minHeight: '24px'
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = 'auto';
                    target.style.height = target.scrollHeight + 'px';
                  }}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isTyping}
                  className="bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] text-white hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed h-10 w-10 rounded-2xl p-0 transition-all hover:scale-105"
                >
                  {isTyping ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="text-xs text-center text-white/30 mt-4">
            Aether chat can execute security tasks, analyze findings, and answer questions about your infrastructure
          </div>
        </div>
      </div>
    </div>
  );
}