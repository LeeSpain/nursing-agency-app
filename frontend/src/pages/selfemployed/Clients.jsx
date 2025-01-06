import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelfNurseHeader from "../../components/selfemployed/Self-NurseHeader"; // Adjust the path as necessary
import {
  Search,
  User,
  ChevronRight,
  Calendar,
  MessageSquare,
  Heart,
} from "lucide-react";

const ClientCard = ({
  id,
  name,
  age,
  contact,
  healthStatus,
  lastAppointment,
  address,
  selected,
  onSelect,
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
        <p className="text-sm text-slate-600">Age: {age}</p>
        <p className="text-sm text-slate-600">Contact: {contact}</p>
        <p className="text-sm text-slate-600">Address: {address}</p>
        <p className="text-sm text-slate-600">Last Appointment: {lastAppointment}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          healthStatus === "Good"
            ? "bg-emerald-50 text-emerald-600"
            : "bg-red-50 text-red-600"
        }`}
      >
        {healthStatus}
      </div>
      <Link to={`/clients/${id}`}>
        <ChevronRight className="w-5 h-5 text-slate-400" />
      </Link>
    </div>
  </div>
);

const Clients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedClients, setSelectedClients] = useState([]);

  const clients = [
    {
      id: 1,
      name: "John Doe",
      age: 45,
      contact: "555-1234",
      healthStatus: "Good",
      lastAppointment: "2025-01-02",
      address: "123 Elm Street",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 60,
      contact: "555-5678",
      healthStatus: "Critical",
      lastAppointment: "2025-01-01",
      address: "456 Oak Avenue",
    },
    {
      id: 3,
      name: "Emily Brown",
      age: 30,
      contact: "555-9876",
      healthStatus: "Good",
      lastAppointment: "2024-12-30",
      address: "789 Maple Lane",
    },
  ];

  // Filter and sort logic
  const filteredClients = clients
    .filter((client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((client) =>
      filterStatus ? client.healthStatus === filterStatus : true
    )
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "appointment") {
        return new Date(b.lastAppointment) - new Date(a.lastAppointment);
      }
      return 0;
    });

  const handleSelect = (id) => {
    setSelectedClients((prev) =>
      prev.includes(id) ? prev.filter((clientId) => clientId !== id) : [...prev, id]
    );
  };

  const handleSendBulkMessage = () => {
    alert(`Sending message to clients: ${selectedClients.join(", ")}`);
  };

  const handleScheduleAppointments = () => {
    alert(`Scheduling appointments for clients: ${selectedClients.join(", ")}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <SelfNurseHeader />
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-emerald-700">
            Clients<span className="text-[#A390E4]"> Overview</span>
          </h1>
          <p className="text-lg text-slate-600">
            Access and manage details of your clients.
          </p>
        </div>

        {/* Filter & Bulk Actions */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clients..."
              className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#A390E4]"
            />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg shadow-sm"
            >
              <option value="">All Status</option>
              <option value="Good">Good</option>
              <option value="Critical">Critical</option>
            </select>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg shadow-sm"
            >
              <option value="">Sort By</option>
              <option value="name">Name</option>
              <option value="appointment">Last Appointment</option>
            </select>
          </div>
          <div>
            <button
              onClick={handleSendBulkMessage}
              className="px-4 py-2 bg-[#A390E4] text-white rounded-lg shadow hover:bg-purple-600"
            >
              Send Message
            </button>
            <button
              onClick={handleScheduleAppointments}
              className="ml-4 px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600"
            >
              Schedule Appointments
            </button>
          </div>
        </div>

        {/* Client List */}
        <div className="grid gap-4">
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <ClientCard
                key={client.id}
                {...client}
                selected={selectedClients.includes(client.id)}
                onSelect={handleSelect}
              />
            ))
          ) : (
            <p className="text-slate-600">No clients found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Clients;
