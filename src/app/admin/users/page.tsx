"use client";

import React from "react";
import { useAdmin } from "../../../context/AdminContext";

export default function AdminUsers() {
  const { users, setUsers, triggerToast } = useAdmin();

  // Toggle User Role
  const handleToggleUserRole = async (id: string, currentRole: string) => {
    const nextRole = currentRole === "Administrator" ? "Customer" : currentRole === "Customer" ? "Vendor" : "Administrator";
    try {
      const res = await fetch("/api/admin/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, role: nextRole }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to update role");
      }
      setUsers(
        users.map((u) => (u.id === id ? { ...u, role: nextRole } : u))
      );
      triggerToast(`User role updated to ${nextRole}.`, "info");
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Failed to update user role.";
      console.error(err);
      triggerToast(errorMsg, "error");
    }
  };

  // Delete User
  const handleDeleteUser = async (id: string, name: string) => {
    if (confirm(`Remove access for user "${name}"?`)) {
      try {
        const res = await fetch(`/api/admin/users?id=${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to delete user");
        }
        setUsers(users.filter((u) => u.id !== id));
        triggerToast(`User "${name}" has been removed.`, "info");
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Failed to remove user.";
        console.error(err);
        triggerToast(errorMsg, "error");
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Users Header Info */}
      <div className="bg-white p-5 rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h3 className="text-base font-bold text-[#2d2422]">Account Management Console</h3>
          <p className="text-xs text-[#7a6e6a]">Create, modify access roles, or revoke user privileges</p>
        </div>
        <div className="px-4 py-2 rounded-lg bg-[#ff5f1f]/5 border border-[#ff5f1f]/10 text-xs text-[#c2410c] font-semibold shrink-0">
          Total Accounts: {users.length}
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 overflow-hidden text-left">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#FAF6F5] text-[#7a6e6a] text-xs font-semibold uppercase border-b border-[#f2e7e3]">
                <th className="p-4 pl-6">ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email Address</th>
                <th className="p-4">System Role</th>
                <th className="p-4">Member Since</th>
                <th className="p-4 pr-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f2e7e3]">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-neutral-50/50 transition-colors align-middle">
                  <td className="p-4 pl-6 font-semibold text-neutral-400">#{u.id}</td>
                  <td className="p-4 font-bold text-[#2d2422]">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-[#ffb085]/20 text-[#c2410c] flex items-center justify-center font-bold text-xs shrink-0">
                        {u.name.charAt(0)}
                      </span>
                      <span>{u.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-neutral-600 font-mono text-xs">{u.email}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                        u.role === "Administrator"
                          ? "bg-purple-50 text-purple-700 border-purple-200"
                          : u.role === "Vendor"
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : "bg-neutral-100 text-neutral-700 border-neutral-200"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="p-4 text-xs text-[#7a6e6a]">{u.joinedDate}</td>
                  <td className="p-4 pr-6 text-center">
                    <div className="flex items-center justify-center gap-2.5">
                      <button
                        onClick={() => handleToggleUserRole(u.id, u.role)}
                        className="px-3 py-1.5 rounded-lg border border-[#f2e7e3] text-xs font-semibold text-[#2d2422] hover:bg-[#FAF6F5] transition-all cursor-pointer"
                        title="Toggle user role permission levels"
                      >
                        Rotate Role
                      </button>
                      <button
                        onClick={() => handleDeleteUser(u.id, u.name)}
                        className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-200 transition-all cursor-pointer"
                        title="Revoke Account Access"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
