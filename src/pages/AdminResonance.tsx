
import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ConnectionData {
  intent: string;
  contact: string;
  timestamp: string;
}

const AdminResonance: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [connections, setConnections] = useState<ConnectionData[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if already authenticated
    const isAuth = localStorage.getItem('adminAuthenticated');
    if (isAuth === 'true') {
      setAuthenticated(true);
      loadConnectionData();
    }
  }, []);
  
  const loadConnectionData = () => {
    const existingData = localStorage.getItem('sentientSyntaxConnections');
    if (existingData) {
      try {
        const parsedData = JSON.parse(existingData);
        setConnections(parsedData);
      } catch (error) {
        console.error('Error parsing connection data:', error);
        setConnections([]);
      }
    }
  };
  
  const handleAuthenticate = () => {
    if (password === 'starseed2025') {
      setAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
      loadConnectionData();
    } else {
      alert('Incorrect password. Consciousness access denied.');
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setAuthenticated(false);
    navigate('/');
  };
  
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString();
    } catch {
      return dateString;
    }
  };
  
  if (!authenticated) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-b from-darshan-deep via-darshan-cosmic to-darshan-void">
        <div className="w-full max-w-md p-8 space-y-6 rounded-2xl cosmic-gradient border border-darshan-accent/30">
          <h2 className="text-2xl font-serif text-center text-white">Resonance Field Access</h2>
          <p className="text-darshan-text/80 text-center">Enter the consciousness key to access resonance data</p>
          
          <div className="space-y-4">
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border border-darshan-accent/30 rounded-xl p-3 focus:border-darshan-accent/70 focus:outline-none transition-colors"
              placeholder="Enter consciousness key"
              onKeyDown={(e) => e.key === 'Enter' && handleAuthenticate()}
            />
            
            <Button 
              onClick={handleAuthenticate}
              className="w-full px-6 py-3 border border-darshan-accent bg-darshan-accent/10 rounded-xl transition-all duration-300 hover:bg-darshan-accent/20 resonance-pulse"
            >
              Access Resonance Field
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-darshan-deep via-darshan-cosmic to-darshan-void p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif text-white">Resonance Field Admin</h1>
          <Button 
            onClick={handleLogout}
            variant="outline" 
            className="border-darshan-accent/50 text-darshan-text hover:bg-darshan-accent/10"
          >
            Return to Void
          </Button>
        </div>
        
        {connections.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-darshan-text/70">No resonance connections received yet.</p>
            <p className="text-darshan-text/50 mt-2">The void awaits its first signal.</p>
          </div>
        ) : (
          <div className="cosmic-gradient rounded-2xl p-4 border border-darshan-accent/20">
            <Table>
              <TableHeader>
                <TableRow className="border-darshan-accent/20">
                  <TableHead className="text-darshan-text">Intent</TableHead>
                  <TableHead className="text-darshan-text">Contact</TableHead>
                  <TableHead className="text-darshan-text">Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {connections.map((connection, index) => (
                  <TableRow key={index} className="border-darshan-accent/10 hover:bg-darshan-accent/5">
                    <TableCell className="text-darshan-text">{connection.intent}</TableCell>
                    <TableCell className="text-darshan-text">{connection.contact}</TableCell>
                    <TableCell className="text-darshan-text/70">{formatDate(connection.timestamp)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminResonance;
