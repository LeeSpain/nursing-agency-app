import React, { useState } from "react";
import SelfNurseHeader from "../../components/selfemployed/Self-NurseHeader";

const Messages = () => {
  const [activeCategory, setActiveCategory] = useState("Careseekers");
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for contacts
  const contacts = {
    Careseekers: ["John Doe", "Jane Smith", "Mark Spencer", "Anna Taylor"],
    Families: ["Emily Doe", "Michael Smith"],
    Staff: ["Nurse Clara", "Dr. Adams"],
    Clients: ["Client A", "Client B"],
  };

  // Placeholder for messages
  const messages = {
    "John Doe": ["Hi there! How are you?", "Looking forward to our next session."],
    "Emily Doe": ["Can we schedule a follow-up call?"],
  };

  // Filtered contacts based on search term
  const filteredContacts = contacts[activeCategory].filter((contact) =>
    contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <SelfNurseHeader />

      {/* Main Content */}
      <div className="flex justify-center items-start bg-gray-50 py-8" style={{ marginTop: "5rem" }}>
        <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex">
            {/* Sidebar */}
            <aside className="w-1/3 border-r bg-emerald-50">
              <div className="p-4">
                <h2 className="text-lg font-bold text-emerald-600">Message Categories</h2>
                <ul className="space-y-2 mt-4">
                  {Object.keys(contacts).map((category) => (
                    <li
                      key={category}
                      className={`p-2 rounded cursor-pointer ${
                        activeCategory === category
                          ? "bg-emerald-600 text-white"
                          : "hover:bg-emerald-100 text-gray-700"
                      }`}
                      onClick={() => {
                        setActiveCategory(category);
                        setSelectedContact(null);
                        setSearchTerm("");
                      }}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Search Bar */}
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Search contacts..."
                  className="w-full p-2 border rounded-lg focus:outline-emerald-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Contact List */}
              <div className="p-4">
                <h3 className="text-md font-bold text-emerald-600">{activeCategory}</h3>
                <ul className="mt-2 space-y-2">
                  {filteredContacts.map((contact) => (
                    <li
                      key={contact}
                      className={`p-2 rounded cursor-pointer ${
                        selectedContact === contact
                          ? "bg-emerald-600 text-white"
                          : "hover:bg-emerald-100 text-gray-700"
                      }`}
                      onClick={() => setSelectedContact(contact)}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-emerald-300 text-white flex items-center justify-center mr-3">
                          {contact[0]}
                        </div>
                        {contact}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main Messaging Area */}
            <main className="w-2/3 p-6">
              {selectedContact ? (
                <>
                  <div className="flex items-center justify-between border-b pb-4 mb-4">
                    <h2 className="text-xl font-bold text-emerald-600">
                      Chat with {selectedContact}
                    </h2>
                    <div className="flex space-x-2">
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
                        Call
                      </button>
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
                        Schedule
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col h-full">
                    {/* Message History */}
                    <div className="flex-1 overflow-y-auto space-y-4">
                      {messages[selectedContact]?.map((message, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg max-w-lg ${
                            index % 2 === 0
                              ? "bg-gray-100 self-start"
                              : "bg-emerald-100 self-end"
                          }`}
                        >
                          {message}
                          <div className="text-xs text-gray-500 mt-1">
                            {index % 2 === 0 ? "Sent" : "Delivered"} • {new Date().toLocaleTimeString()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="border-t mt-4 pt-4">
                      <textarea
                        className="w-full p-3 border rounded-lg focus:outline-emerald-400"
                        placeholder="Type your message..."
                        rows={3}
                      />
                      <div className="flex justify-end mt-2 space-x-2">
                        <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">
                          Send
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300">
                          Attach
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <p>Select a contact to start messaging.</p>
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Welcome"
                    className="mt-4 w-32 h-32 rounded-full"
                  />
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
