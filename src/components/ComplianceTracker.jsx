import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"

const ComplianceTracker = () => {
  const [complianceItems, setComplianceItems] = useState([
    { id: 1, name: 'Annual Tax Filing', dueDate: '2024-04-15', status: 'Pending' },
    { id: 2, name: 'Employee Safety Training', dueDate: '2024-06-30', status: 'Completed' },
    { id: 3, name: 'Data Privacy Audit', dueDate: '2024-09-01', status: 'In Progress' },
  ]);

  const [newItem, setNewItem] = useState({ name: '', dueDate: '' });

  const addComplianceItem = () => {
    if (newItem.name && newItem.dueDate) {
      setComplianceItems([...complianceItems, { ...newItem, id: Date.now(), status: 'Pending' }]);
      setNewItem({ name: '', dueDate: '' });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Compliance Tracker</h2>
      
      <div className="flex space-x-4">
        <div className="space-y-2">
          <Label htmlFor="itemName">Compliance Item</Label>
          <Input
            id="itemName"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            placeholder="Enter compliance item"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            id="dueDate"
            type="date"
            value={newItem.dueDate}
            onChange={(e) => setNewItem({ ...newItem, dueDate: e.target.value })}
          />
        </div>
        <Button onClick={addComplianceItem}>Add Item</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Compliance Item</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {complianceItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.dueDate}</TableCell>
              <TableCell>
                {item.status === 'Completed' ? (
                  <span className="flex items-center text-green-500"><CheckCircle className="mr-1 h-4 w-4" /> {item.status}</span>
                ) : item.status === 'Pending' ? (
                  <span className="flex items-center text-yellow-500"><AlertCircle className="mr-1 h-4 w-4" /> {item.status}</span>
                ) : (
                  <span className="flex items-center text-blue-500">{item.status}</span>
                )}
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => {
                  // Toggle status between Pending and Completed
                  const newStatus = item.status === 'Completed' ? 'Pending' : 'Completed';
                  setComplianceItems(complianceItems.map(i => i.id === item.id ? { ...i, status: newStatus } : i));
                }}>
                  {item.status === 'Completed' ? 'Mark Pending' : 'Mark Complete'}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComplianceTracker;
