import fs from 'fs';
import {parse} from 'csv-parse/sync';

export class DataProvider {

    static getJsonData(filePath: string): any {
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        return jsonData;
    }
    
    // for data driven testing from CSV files
    static getCsvData(filePath: string): any[] {
        const csvData = parse(fs.readFileSync(filePath, 'utf-8'), {
            columns: true,
            skip_empty_lines: true  
        });
        return csvData;
    }
}