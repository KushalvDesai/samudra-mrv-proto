
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { mockProjects } from "@/data/mockProjects";
import { Coins, TrendingUp, CheckCircle, AlertCircle, ExternalLink, Copy, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CreditCalculation {
  baseCredits: number;
  qualityMultiplier: number;
  verificationBonus: number;
  totalCredits: number;
  estimatedValue: number;
}

export const CreditIssuance = () => {
  const { toast } = useToast();
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [calculation, setCalculation] = useState<CreditCalculation | null>(null);
  const [issuanceState, setIssuanceState] = useState<'idle' | 'calculating' | 'minting' | 'complete'>('idle');
  const [blockchainTxId, setBlockchainTxId] = useState<string>("");

  const availableProjects = mockProjects.filter(p => p.creditsAvailable > 0);
  const selectedProjectData = mockProjects.find(p => p.id === selectedProject);

  const calculateCredits = () => {
    if (!selectedProjectData) return;
    
    setIssuanceState('calculating');
    
    // Simulate calculation delay
    setTimeout(() => {
      const baseCredits = selectedProjectData.creditsAvailable;
      const qualityMultiplier = selectedProjectData.ndviScore;
      const verificationBonus = selectedProjectData.verificationHistory.length > 0 ? 0.1 : 0;
      const totalCredits = Math.floor(baseCredits * qualityMultiplier * (1 + verificationBonus));
      
      const calc: CreditCalculation = {
        baseCredits,
        qualityMultiplier,
        verificationBonus,
        totalCredits,
        estimatedValue: totalCredits * 2100 // ₹2100 per credit estimate
      };
      
      setCalculation(calc);
      setIssuanceState('idle');
    }, 1500);
  };

  const mintCredits = async () => {
    if (!calculation || !selectedProjectData) return;
    
    setIssuanceState('minting');
    
    // Simulate blockchain transaction
    setTimeout(() => {
      const mockTxId = `0x${Math.random().toString(16).substr(2, 64)}`;
      setBlockchainTxId(mockTxId);
      setIssuanceState('complete');
      
      toast({
        title: "Credits Minted Successfully!",
        description: `${calculation.totalCredits} carbon credits have been issued on the blockchain.`,
      });
    }, 3000);
  };

  const copyTxId = () => {
    navigator.clipboard.writeText(blockchainTxId);
    toast({
      title: "Transaction ID Copied",
      description: "Blockchain transaction ID copied to clipboard.",
    });
  };

  const resetIssuance = () => {
    setSelectedProject("");
    setCustomAmount("");
    setCalculation(null);
    setIssuanceState('idle');
    setBlockchainTxId("");
  };

  return (
    <div className="h-full p-4 sm:p-6 space-y-4 sm:space-y-6">
      <Card className="shadow-soft h-full flex flex-col">
        <CardHeader className="pb-4 flex-shrink-0">
          <CardTitle className="text-lg sm:text-xl lg:text-2xl flex items-center space-x-2 min-h-[2rem] leading-tight">
            <Coins className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
            <span>Carbon Credit Issuance</span>
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Calculate and mint verified carbon offset credits from restoration projects
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {issuanceState !== 'complete' ? (
          <>
            {/* Project Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="project-select">Select Project</Label>
                <Select value={selectedProject} onValueChange={setSelectedProject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a project with available credits" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableProjects.map((project) => (
                      <SelectItem key={project.id} value={project.id}>
                        {project.name} - {project.creditsAvailable} credits available
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom-amount">Custom Amount (Optional)</Label>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Leave blank for maximum"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  disabled={!selectedProject}
                />
              </div>
            </div>

            {/* Project Summary */}
            {selectedProjectData && (
              <Card className="bg-gradient-to-r from-accent/20 to-secondary/10 border-primary/20">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Project Status</p>
                      <Badge className={
                        selectedProjectData.status === 'verified' ? 'bg-success text-success-foreground' : 
                        'bg-secondary text-secondary-foreground'
                      }>
                        {selectedProjectData.status}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-muted-foreground">NDVI Quality Score</p>
                      <p className="font-semibold text-success">{selectedProjectData.ndviScore}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Available Credits</p>
                      <p className="font-semibold text-primary">{selectedProjectData.creditsAvailable}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Verification Status</p>
                      <p className="font-semibold">
                        {selectedProjectData.verificationHistory.length > 0 ? 'Verified' : 'Pending'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Calculate Button */}
            {selectedProject && (
              <div className="flex justify-center">
                <Button 
                  onClick={calculateCredits}
                  disabled={issuanceState === 'calculating'}
                  className="bg-gradient-ocean hover:opacity-90 px-8"
                >
                  {issuanceState === 'calculating' ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Calculating...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Calculate Credits
                    </>
                  )}
                </Button>
              </div>
            )}

            {/* Calculation Results */}
            {calculation && (
              <Card className="border-success/20 bg-success/5">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Credit Calculation Results</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Base Credits Available:</span>
                        <span className="font-semibold">{calculation.baseCredits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Quality Multiplier (NDVI):</span>
                        <span className="font-semibold text-success">{calculation.qualityMultiplier.toFixed(3)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Verification Bonus:</span>
                        <span className="font-semibold text-primary">+{(calculation.verificationBonus * 100).toFixed(0)}%</span>
                      </div>
                      <hr className="border-border" />
                      <div className="flex justify-between text-lg">
                        <span className="font-medium">Total Credits to Issue:</span>
                        <span className="font-bold text-primary">{calculation.totalCredits}</span>
                      </div>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Estimated Market Value</h4>
                      <div className="text-3xl font-bold text-success mb-2">
                        ₹{calculation.estimatedValue.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Based on current market rate of ₹2100/credit
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button 
                      onClick={mintCredits}
                      disabled={issuanceState === 'minting'}
                      className="bg-gradient-forest hover:opacity-90 px-8"
                    >
                      {issuanceState === 'minting' ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Minting on Blockchain...
                        </>
                      ) : (
                        <>
                          <Coins className="h-4 w-4 mr-2" />
                          Mint {calculation.totalCredits} Credits
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Minting Progress */}
            {issuanceState === 'minting' && (
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Loader2 className="h-5 w-5 animate-spin text-primary" />
                      <span className="font-medium">Processing blockchain transaction...</span>
                    </div>
                    <Progress value={66} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      Creating smart contract transaction for carbon credit issuance. This may take a few moments.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        ) : (
          /* Success State */
          <Card className="border-success/20 bg-success/5">
            <CardHeader>
              <CardTitle className="text-xl flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-success" />
                <span>Credits Successfully Minted!</span>
              </CardTitle>
              <CardDescription>
                Your carbon credits have been issued on the blockchain
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium">Transaction Details</h4>
                  <div className="bg-card p-3 rounded-lg space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Credits Minted:</span>
                      <span className="font-semibold">{calculation?.totalCredits}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Project:</span>
                      <span className="font-semibold">{selectedProjectData?.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Estimated Value:</span>
                      <span className="font-semibold text-success">₹{calculation?.estimatedValue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Blockchain Transaction</h4>
                  <div className="bg-card p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Transaction ID:</span>
                      <Button variant="ghost" size="sm" onClick={copyTxId} className="h-6 px-2">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <code className="text-xs font-mono bg-muted p-2 rounded block overflow-hidden">
                      {blockchainTxId}
                    </code>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View on Blockchain Explorer
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" onClick={resetIssuance}>
                  Issue More Credits
                </Button>
                <Button className="bg-gradient-ocean hover:opacity-90">
                  View Credit Registry
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
    </div>
  );
};

