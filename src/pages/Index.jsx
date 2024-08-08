import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Bell, FileText, CheckCircle } from "lucide-react"
import ComplianceTracker from '../components/ComplianceTracker';
import DocumentManagement from '../components/DocumentManagement';

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Compliance Management Dashboard</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Tracker</TabsTrigger>
          <TabsTrigger value="documents">Document Management</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
                <CardDescription>Overall compliance health</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">85% Compliant</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><Bell className="mr-2 h-4 w-4" /> Annual Report Due (3 days)</li>
                  <li className="flex items-center"><Bell className="mr-2 h-4 w-4" /> License Renewal (5 days)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
                <CardDescription>Latest compliance changes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><FileText className="mr-2 h-4 w-4" /> New OSHA Guidelines</li>
                  <li className="flex items-center"><FileText className="mr-2 h-4 w-4" /> Updated Tax Regulations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Alert className="mt-4">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Action Required</AlertTitle>
            <AlertDescription>
              Please review and update your employee safety training records by the end of this week.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="compliance">
          <ComplianceTracker />
        </TabsContent>

        <TabsContent value="documents">
          <DocumentManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
