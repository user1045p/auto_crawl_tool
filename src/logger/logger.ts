import * as fs from 'fs';
import * as util from 'util';
const path = require('path');
import { format } from 'date-fns';

export class Logger {

  private static logFilePath: string = path.join(__dirname, '../../logs/app.log');
  // Ensure logs directory exists
  private static ensureLogDirectoryExists(): void {
    const dir = path.dirname(this.logFilePath);
    if (!fs || !fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }
  // Format log message
  private static formatMessage(level: string, message: string): string {
    const timestamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    return `[${timestamp}][${level.toUpperCase()}] ${message}`;
  }

  // Utility method to format strings with placeholders
  private static formatString(message: string, args: any[]): string {
    return message.replace(/\{\}/g, (match) => {
      if (args.length === 0) return match;
      return String(args.shift());
    });
  }
  // Write log message to file asynchronously
  private static async writeLogToFile(level: string, message: string, ...args: any[]): Promise<void> {
    this.ensureLogDirectoryExists();
    const fullMessage = args.length > 0 ? util.format(message, ...args) : message;
    const formattedMessage = this.formatMessage(level, message);
    fs.appendFile(this.logFilePath, formattedMessage + '\n', (err) => {
      if (err) {
        console.error('Failed to write log to file:', err);
      }
    });
  }

  // Public log methods for different levels
  public static info(message: string, ...args: any[]): void {
    const formatted = this.formatMessage('INFO', this.formatString(message, args));
    console.info(formatted);
    this.writeLogToFile('INFO', message, ...args);
  }

  public static warn(message: string, ...args: any[]): void {
    const formatted = this.formatMessage('WARN', this.formatString(message, args));
    console.warn(formatted);
    this.writeLogToFile('WARN', message, ...args);
  }

  public static error(message: string, ...args: any[]): void {
    const formatted = this.formatMessage('ERROR', this.formatString(message, args));
    console.error(formatted);
    this.writeLogToFile('ERROR', message, ...args);
  }
}