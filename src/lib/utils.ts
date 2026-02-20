import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Optimizes an image URL by applying modern formats and compression.
 * Uses Unsplash parameters for Unsplash images and weserv.nl proxy for others.
 */
export function optimizeImage(url: string, { width = 1200, quality = 75 } = {}) {
    if (!url) return '';

    // Handle Unsplash
    if (url.includes('images.unsplash.com')) {
        const baseUrl = url.split('?')[0];
        return `${baseUrl}?q=${quality}&w=${width}&auto=format&fm=avif&fit=crop`;
    }

    // Handle other external images (like WordPress) using weserv.nl proxy
    // This converts images to WebP and resizes them on the fly
    return `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=${quality}&output=webp`;
}
