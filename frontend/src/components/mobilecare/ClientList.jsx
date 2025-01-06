import React from 'react';

const ClientList = () => {
  return (
    <div className="client-list">
      <h2>Clients</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Assigned Nurse</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Active</td>
            <td>Jane Smith</td>
            <td>
              <button>View</button>
              <button>Edit</button>
            </td>
          </tr>
          {/* Additional rows */}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
