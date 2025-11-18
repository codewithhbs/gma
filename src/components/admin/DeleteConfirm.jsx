"use client";
import { X, Trash2, AlertTriangle } from "lucide-react";

export default function DeleteConfirm({ onClose, onConfirm }) {
    return (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm  flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-xs rounded-xl shadow-xl p-5 animate-scaleIn border border-gray-200">

                {/* Icon */}
                <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                        <AlertTriangle size={26} className="text-red-600" />
                    </div>
                </div>

                <h2 className="text-lg font-semibold text-center text-gray-800">
                    Delete
                </h2>

                <p className="text-center text-gray-600 mt-2 text-sm">
                    Are you sure you want to proceed? This cannot be undone.
                </p>


                {/* Buttons */}
                <div className="flex justify-center gap-3 mt-6">

                    <button
                        onClick={onClose}
                        className="px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-3 py-1.5 rounded-lg text-white bg-red-600 hover:bg-red-700 shadow-md hover:shadow-lg transition text-sm flex items-center gap-1"
                    >
                        <Trash2 size={14} /> Delete
                    </button>

                </div>
            </div>

            {/* Animation */}
            <style jsx>{`
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
        </div>
    );
}
