import { Home, ClipboardCheck, FileText } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Compliance Tracker",
    to: "/compliance",
    icon: <ClipboardCheck className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Document Management",
    to: "/documents",
    icon: <FileText className="h-4 w-4" />,
    page: <Index />,
  },
];
