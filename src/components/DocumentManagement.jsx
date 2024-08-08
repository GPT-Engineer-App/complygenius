import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, Download, Trash2 } from "lucide-react"

const DocumentManagement = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Employee Handbook', type: 'PDF', uploadDate: '2024-01-15' },
    { id: 2, name: 'Safety Procedures', type: 'DOCX', uploadDate: '2024-02-01' },
    { id: 3, name: 'Tax Forms 2023', type: 'PDF', uploadDate: '2024-03-10' },
  ]);

  const [newDocument, setNewDocument] = useState({ name: '', type: '' });

  const addDocument = () => {
    if (newDocument.name && newDocument.type) {
      setDocuments([...documents, { ...newDocument, id: Date.now(), uploadDate: new Date().toISOString().split('T')[0] }]);
      setNewDocument({ name: '', type: '' });
    }
  };

  const deleteDocument = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Document Management</h2>
      
      <div className="flex space-x-4">
        <div className="space-y-2">
          <Label htmlFor="docName">Document Name</Label>
          <Input
            id="docName"
            value={newDocument.name}
            onChange={(e) => setNewDocument({ ...newDocument, name: e.target.value })}
            placeholder="Enter document name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="docType">Document Type</Label>
          <Input
            id="docType"
            value={newDocument.type}
            onChange={(e) => setNewDocument({ ...newDocument, type: e.target.value })}
            placeholder="e.g., PDF, DOCX"
          />
        </div>
        <Button onClick={addDocument}>Add Document</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Document Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Upload Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                {doc.name}
              </TableCell>
              <TableCell>{doc.type}</TableCell>
              <TableCell>{doc.uploadDate}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-1 h-4 w-4" /> Download
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => deleteDocument(doc.id)}>
                    <Trash2 className="mr-1 h-4 w-4" /> Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DocumentManagement;
