import React from 'react';
import * as XLSX from 'xlsx';

const ExportToExcel = ({ data, fileName = 'data' }) => {
  const handleExport = () => {
    // Convert data to worksheet
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Generate Excel file
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  };

  return (
    <button
      onClick={handleExport}
      className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
    >
      Export to Excel
    </button>
  );
};

export default ExportToExcel;
