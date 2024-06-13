"use client";
import React, { useEffect, useState } from "react";

interface IProps {
  open: boolean;
  onClose: any;
}
const Drawer = ({ open, onClose }: IProps) => {
  const [showDrawer, setShowDrawer] = useState<boolean>(open);

  // ** Effect
  useEffect(() => {
    setShowDrawer(open);
  }, [open]);

  // ** Functional
  const handleClose = () => {
    setShowDrawer(false);
    onClose && onClose();
  };

  return (
    <div
      className={`${
        showDrawer
          ? "fixed top-0 left-0 w-full h-screen bg-gray-800 z-50"
          : "hidden"
      }`}
    >
      <div className="absolute top-0 left-0 h-screen w-64 bg-white shadow-lg">
        {/* Nội dung Drawer */}
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center h-12 border-b border-gray-200">
            <span className="text-xl font-medium">Drawer</span>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6" />
                <path strokeLinecap="round" strokeWidth="2" d="M6 6L18 18" />
              </svg>
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {/* Nội dung bên trong Drawer */}
            <ul className="list-none">
              <li className="py-2">
                <a href="/" className="text-gray-700 hover:text-gray-900">
                  Trang chủ
                </a>
              </li>
              <li className="py-2">
                <a href="/about" className="text-gray-700 hover:text-gray-900">
                  Giới thiệu
                </a>
              </li>
              <li className="py-2">
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${
          showDrawer
            ? "fixed top-0 left-0 w-full h-screen bg-black opacity-50"
            : "hidden"
        }`}
        onClick={handleClose}
      />
    </div>
  );
};

export default Drawer;
