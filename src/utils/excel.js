/* eslint-disable import/prefer-default-export */
import XLSX from 'xlsx';

export const readXlsx = (entry, sheetName) => {
  const file = XLSX.read(entry, { type: 'array' });
  // console.log(file);

  console.log(file.SheetNames);

  console.log(entry);
  console.log(sheetName);
};
