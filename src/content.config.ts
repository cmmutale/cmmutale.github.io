import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		subTitle: z.string().optional(),
		description: z.string(),
		// Transform string to Date object
		// pubDate: z.coerce.date(),
		startDate: z.coerce.date().optional(),
		displayImage: z.string().optional(),
		status: z.string().optional(),
		featured: z.boolean().optional(),
	}),
});

export const collections = { blog, projects };
