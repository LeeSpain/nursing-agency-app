import React from "react";

const FamilyAccess = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <h1 className="text-xl font-bold p-4">Family Access</h1>
      </header>
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Manage Family Members</h2>
        <form className="mb-6">
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Name" className="p-2 border rounded" />
            <input type="email" placeholder="Email" className="p-2 border rounded" />
            <select className="p-2 border rounded">
              <option>Viewer</option>
              <option>Editor</option>
            </select>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">Invite</button>
          </div>
        </form>
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr>
              <th className="p-2 border-b">Name</th>
              <th className="p-2 border-b">Email</th>
              <th className="p-2 border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b">John Doe</td>
              <td className="p-2 border-b">john@example.com</td>
              <td className="p-2 border-b">Viewer</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default FamilyAccess;
