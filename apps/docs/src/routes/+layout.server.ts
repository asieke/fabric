export const load = async () => {
	// read all of the files in the routes (docs) folder
	// and return the list of filenames
	const modules = import.meta.glob('./(docs)/*', { as: 'raw', eager: true });

	console.log('[PAGE SERVER]', modules);

	return {
		hello: modules
	};
};
