import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dateTime from 'date-and-time';

export const formatDate = dateTime.format;

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
