import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			seoTitle: z.string().optional(),
			seoDescription: z.string().optional(),
			seoKeywords: z.string().optional(),
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
	})
};
