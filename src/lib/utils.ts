import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dateTime from 'date-and-time';

export const formatDate = dateTime.format;

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, currencyCode?: string) {
	const currency = currencyCode?.toUpperCase() || 'NGN';

	return new Intl.NumberFormat('en-NG', {
		style: 'currency',
		currency,
		currencyDisplay: 'symbol',
		maximumFractionDigits: 0
	}).format(value);
}
