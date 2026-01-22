import { defineCollection, z } from 'astro:content';

export const collections = {
	blog: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			publishDate: z.coerce.date(),
			img: z.string().optional(),
			img_alt: z.string().optional(),
			draft: z.boolean().optional(),
		}),
	}),
	products: defineCollection({
		type: 'data',
		schema: z.object({
			// SEO
			seoTitle: z.string(),
			seoDescription: z.string(),
			seoKeywords: z.string(),
			ogImage: z.string().optional(),
			structuredData: z.any().optional(),
			
			// Draft mode
			draft: z.boolean().optional(),
			
			// Category
			category: z.enum(['services', 'telescope', 'accessoire', 'astronomie']).optional(),
			
			// Product pricing and purchase
			price: z.string().optional(),
			priceNote: z.string().optional(),
			stripeBuyButtonId: z.string().optional(),
			stripePublishableKey: z.string().optional(),
			emailContact: z.string().optional(),
			
			// Product sections configuration
			sections: z.array(z.object({
				type: z.enum(['hero', 'gallery', 'video', 'features', 'specs', 'pricing', 'custom']),
				id: z.string().optional(),
				data: z.any()
			})),
			
			// Navigation
			navigationItems: z.array(z.object({
				id: z.string(),
				label: z.string()
			})).optional(),
			
			// Footer options
			showContactCTA: z.boolean().optional(),
			showNavigation: z.boolean().optional(),
			showLightbox: z.boolean().optional()
		})
	}),
	builds: defineCollection({
		type: 'data',
		schema: z.object({
			title: z.string(),
			author: z.string(),
			description: z.string().optional(),
			webLink: z.string().url().optional(),
			latitude: z.number(),
			longitude: z.number(),
			mainPhoto: z.string(),
			additionalPhotos: z.array(z.string()).optional(),
			draft: z.boolean().optional()
		})
	})
};