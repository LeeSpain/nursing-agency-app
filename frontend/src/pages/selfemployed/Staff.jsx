import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Search,
  User,
  MessageSquare,
  FileText,
  Plus,
  Edit,
  Calendar,
  BarChart,
  Award,
} from "lucide-react";
import SelfNurseHeader from "../../components/selfemployed/Self-NurseHeader"; // Adjust the path if necessary

// Individual Staff Card Component
const StaffCard = ({
  id,
  name,
  role,
  status,
  lastActivity,
  performance,
  tasks,
  onSelect,
  selected,
}) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:shadow-sm transition-all">
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onSelect(id)}
        className="h-4 w-4 text-[#A390E4] border-gray-300 rounded focus:ring-[#A390E4]"
      />
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
        <User className="w-6 h-6 text-[#A390E4]" />
      </div>
      <div>
        <h3 className="font-medium text-slate-900">{name}</h3>
        <p className="text-sm text-slate-600">Role: {role}</p>
        <p className="text-sm text-slate-600">Last Activity: {lastActivity}</p>
        <p className="text-sm text-slate-600">
          Tasks Completed: <span className="font-medium">{tasks}</span>
        </p>
        <p className="text-sm text-slate-600">
          Performance: <span className={`font-medium ${performance >= 80 ? "text-emerald-600" : "text-red-600"}`}>{performance}%</span>
        </p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
        }`}
      >
        {status}
      </div>
      <Link to={`/staff/${id}`} className="flex items-center gap-2 hover:text-[#A390E4]">
        <Edit className="w-4 h-4" /> Edit
      </Link>
      <ChevronRight className="w-5 h-5 text-slate-400" />
    </div>
  </div>
);

// Main Staff Page
const Staff = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedStaff, setSelectedStaff] = useState([]);

  const staffList = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Assistant",
      status: "Active",
      lastActivity: "2025-01-04",
      tasks: 45,
      performance: 90,
    },
    {
      id: 2,
      name: "Michael Smith",
      role: "Specialist",
      status: "Inactive",
      lastActivity: "2025-01-02",
      tasks: 30,
      performance: 75,
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Assistant",
      status: "Active",
      lastActivity: "2025-01-01",
      tasks: 20,
      performance: 60,
    },
  ];

  // Filter staff based on search and status
  const filteredStaff = staffList.filter((staff) => {
    const matchesSearch = staff.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus ? staff.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  const handleSelect = (id) => {
    setSelectedStaff((prev) =>
      prev.includes(id) ? prev.filter((staffId) => staffId !== id) : [...prev, id]
    );
  };

  const handleSendBulkMessage = () => {
    alert(`Sending message to staff: ${selectedStaff.join(", ")}`);
  };

  const handleAssignTasks = () => {
    alert(`Assigning tasks to staff: ${selectedStaff.join(", ")}`);
  };

  const handleAddStaff = () => {
    alert("Add Staff functionality will be implemented here.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <SelfNurseHeader />
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-emerald-700">
            Staff<span className="text-[#A390E4]"> Management</span>
          </h1>
          <p className="text-lg text-slate-600">
            Manage your team members and track their activities.
          </p>
        </div>

        {/* Filter and Bulk Actions */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search staff..."
              className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#A390E4]"
            />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg shadow-sm"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleSendBulkMessage}
              className="px-4 py-2 bg-[#A390E4] text-white rounded-lg shadow hover:bg-purple-600"
            >
              Send Message
            </button>
            <button
              onClick={handleAssignTasks}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
            >
              Assign Tasks
            </button>
            <button
              onClick={handleAddStaff}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Staff
            </button>
          </div>
        </div>

        {/* Staff List */}
        <div className="grid gap-4">
          {filteredStaff.length > 0 ? (
            filteredStaff.map((staff) => (
              <StaffCard
                key={staff.id}
                {...staff}
                selected={selectedStaff.includes(staff.id)}
                onSelect={handleSelect}
              />
            ))
          ) : (
            <p className="text-slate-600">No staff found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Staff;
