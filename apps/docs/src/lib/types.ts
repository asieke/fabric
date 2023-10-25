export type Metadata = {
	title: string;
	headings: string[];
	date: string;
	order: number;
	slug: string;
};

export type Section = {
	id: number;
	slug: string;
	sectionId: string;
	title: string;
	content: string;
};
