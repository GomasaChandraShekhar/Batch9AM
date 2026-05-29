import fs from 'fs';
import * as XLSX from 'xlsx';
import { parse } from 'csv-parse/sync';

export class ReadFiles {

    readJsonFile(filePath: string): any {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }

    readExcelFile(filePath: string): any {
        const workbook = XLSX.readFile(filePath);
        const sheetName: string = workbook.SheetNames[0];
        console.log(`Sheet name is :: ${sheetName}`);
        const worksheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet);
    }

    readCsvFile(filePath: string): any {
        const csvFile = fs.readFileSync(filePath, 'utf-8');
        return parse(csvFile, { columns: true, skip_empty_lines: true });
    }


}


