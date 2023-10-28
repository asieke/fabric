import type { Section } from '$lib/types';
export const sections: Section[] = [
	{
		id: 0,
		slug: 'api-item',
		sectionId: 'authentication',
		title: 'Authentication',
		content: 'The Todo List Search API does not require authentication. It is open for public\nuse.'
	},
	{
		id: 1,
		slug: 'api-item',
		sectionId: 'api-base-url',
		title: 'API Base URL',
		content:
			'The base URL for accessing the Todo List Search API is:\n\nhttps://api.example.com/todo-search'
	},
	{
		id: 2,
		slug: 'api-item',
		sectionId: 'search-parameters',
		title: 'Search Parameters',
		content:
			'The Todo List Search API supports the following search parameters:\n\n * query (required): The search query string.'
	},
	{
		id: 3,
		slug: 'api-item',
		sectionId: 'responses',
		title: 'Responses',
		content:
			'The API responds with JSON objects containing the search results. The structure\nof the response is as follows:\n\n{@html `{\n  "results": [\n    {\n      "id": "1",\n      "title": "Sample Todo",\n      "description": "This is a sample todo item.",\n      "due_date": "2022-12-31"\n    },\n    {\n      "id": "2",\n      "title": "Another Todo",\n      "description": "This is another todo item.",\n      "due_date": "2023-01-15"\n    }\n  ]\n}`}\n\nThe results field contains an array of todo list items that match the search\ncriteria. Each todo item object includes an id, title, description, and\ndue_date.'
	},
	{
		id: 4,
		slug: 'api-item',
		sectionId: 'examples',
		title: 'Examples',
		content:
			"In any productive workflow, managing tasks is crucial. The Update Todo List\nendpoint offers a powerful tool to modify existing tasks in a todo list. Whether\nyou need to change the task name, update the description, reschedule the due\ndate, or update the completion status, this endpoint caters to your task\nmanagement requirements efficiently.\n\n{@html `import requests\n\n# Define the search query\nquery = 'sample query'\n\n# Construct the API URL\nurl = f\"https://api.example.com/todo-search?query={query}\"\n\n# Send the GET request\nresponse = requests.get(url)\n\n# Parse the JSON response\nresults = response.json()['results']\n\n# Print the results\nfor item in results:\n    print(f\"ID: {item['id']}\")\n    print(f\"Title: {item['title']}\")\n    print(f\"Description: {item['description']}\")\n    print(f\"Due Date: {item['due_date']}\")\n    print()`}\n\n{@html `const query = 'sample query';\n\n// Construct the API URL\nconst url = `https://api.example.com/todo-search?query=${encodeURIComponent(query)}`;\n\n// Send the GET request using Fetch API\nfetch(url)\n  .then(response => response.json())\n  .then(data => {\n    const results = data.results;\n    results.forEach(item => {\n      console.log(`ID: ${item.id}`);\n      console.log(`Title: ${item.title}`);\n      console.log(`Description: ${item.description}`);\n      console.log(`Due Date: ${item.due_date}`);\n      console.log();\n    });\n  })\n  .catch(error => console.error(error));`}\n\n{@html `<?php\n\n$query = 'sample query';\n\n// Construct the API URL\n$url = 'https://api.example.com/todo-search?query=' . urlencode($query);\n\n// Send the GET request using cURL\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\n$response = curl_exec($curl);\ncurl_close($curl);\n\n// Parse the JSON response\n$data = json_decode($response, true);\n\n// Print the results\nforeach ($data['results'] as $item) {\n    echo \"ID: \" . $item['id'] . \"\\n\";\n    echo \"Title: \" . $item['title'] . \"\\n\";\n    echo \"Description: \" . $item['description'] . \"\\n\";\n    echo \"Due Date: \" . $item['due_date'] . \"\\n\\n\";\n}`}"
	},
	{
		id: 5,
		slug: 'api-item',
		sectionId: 'conclusion',
		title: 'Conclusion',
		content:
			'This concludes the documentation for the Todo List Search API. The API allows\nyou to search for todo list items based on a query parameter and retrieve the\nmatching results. You can use the provided code examples in Python, JavaScript,\nand PHP to integrate the API into your applications.'
	},
	{
		id: 6,
		slug: 'api-search',
		sectionId: 'code',
		title: 'Code',
		content:
			"In any productive workflow, managing tasks is crucial. The Update Todo List\nendpoint offers a powerful tool to modify existing tasks in a todo list. Whether\nyou need to change the task name, update the description, reschedule the due\ndate, or update the completion status, this endpoint caters to your task\nmanagement requirements efficiently.\n\n{@html `#how to do all the things\nmkdir my_directory\ncd my_directory\ntouch my_file.txt\nnano my_file.txt`}\n\n{@html `for (let i = 0; i < 5; i++) {\n\tconsole.log('number: ', i);\n}`}\n\n{@html `for ($i = 0; $i < 5; $i++) {\n\techo $i;\n}`}"
	},
	{
		id: 7,
		slug: 'api-search',
		sectionId: 'the-boys',
		title: 'The Boys',
		content: 'We are crushing it'
	},
	{
		id: 8,
		slug: 'api-search',
		sectionId: 'odd-title',
		title: 'Odd Title',
		content: 'OddlySpecific content'
	},
	{
		id: 9,
		slug: 'sdk',
		sectionId: 'guide',
		title: 'Guide',
		content:
			'This is a paragraph.\n\n * This is a list this is Alexs list\n * With two items\n\n 1. And a sublist\n 2. That is ordered\n\n * With another\n * Sublist inside\n\nAnd this is A table With two columns'
	},
	{
		id: 10,
		slug: 'sdk',
		sectionId: 'installation',
		title: 'Installation',
		content:
			'You can install it with\n\n{@html `$ npm i -S svelte-markdown`}\n\nIf you use npm or if you prefer yarn\n\n{@html `$ yarn add svelte-markdown`}\n\nIf you’re using Sapper you might need to install it as a dev dependency.'
	},
	{
		id: 11,
		slug: 'sdk',
		sectionId: 'usage',
		title: 'Usage',
		content:
			'{@html `<script>\n\timport SvelteMarkdown from \'svelte-markdown\';\n\tconst source = `\n  # This is a header\n\nThis is a paragraph.\n\n* This is a list\n* With two items\n  1. And a sublist\n  2. That is ordered\n    * With another\n    * Sublist inside\n\n| And this is | A table |\n|-------------|---------|\n| With two    | columns |`;\n</script>\n\n<SvelteMarkdown {source} />`}\n\nThis would render something like\n\n{@html `<h1>This is a header</h1>\n<p>This is a paragraph.</p>\n<ul>\n\t<li>This is a list</li>\n\t<li>\n\t\tWith two items\n\t\t<ol start="1">\n\t\t\t<li>And a sublist</li>\n\t\t\t<li>\n\t\t\t\tThat is ordered\n\t\t\t\t<ul>\n\t\t\t\t\t<li>With another</li>\n\t\t\t\t\t<li>Sublist inside</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ol>\n\t</li>\n</ul>\n<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th>And this is</th>\n\t\t\t<th>A table</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>With two</td>\n\t\t\t<td>columns</td>\n\t\t</tr>\n\t</tbody>\n</table>`}'
	},
	{
		id: 12,
		slug: 'weather',
		sectionId: 'introduction',
		title: 'Introduction',
		content:
			'In any productive workflow, managing tasks is crucial. The Update Todo List\nendpoint offers a powerful tool to modify existing tasks in a todo list. Whether\nyou need to change the task name, update the description, reschedule the due\ndate, or update the completion status, this endpoint caters to your task\nmanagement requirements efficiently.'
	},
	{
		id: 13,
		slug: 'weather',
		sectionId: 'endpoint',
		title: 'Endpoint',
		content:
			'The Update Todo List endpoint URL is:\n\n{@html `PUT /api/todo-list/:id`}\n\nReplace :id with the unique identifier of the todo list or task you want to\nupdate.'
	},
	{
		id: 14,
		slug: 'weather',
		sectionId: 'http-method',
		title: 'HTTP Method',
		content:
			'The Update Todo List endpoint uses the HTTP PUT method to perform updates on the\ntodo list.'
	},
	{
		id: 15,
		slug: 'weather',
		sectionId: 'parameters',
		title: 'Parameters',
		content:
			'The endpoint requires the following parameters:\n\n * id (required): The unique identifier of the todo list or task you want to\n   update.'
	},
	{
		id: 16,
		slug: 'weather',
		sectionId: 'request-headers',
		title: 'Request Headers',
		content:
			'The endpoint requires the following request header:\n\n * Content-Type: Use application/json for the request body.'
	},
	{
		id: 17,
		slug: 'weather',
		sectionId: 'request-body',
		title: 'Request Body',
		content:
			'The request body must be a JSON object containing the updated properties of the\ntask(s) within the todo list. The properties that can be updated include:\n\n * name (optional): The new name of the task.\n * description (optional): The updated description of the task.\n * dueDate (optional): The new due date of the task.\n * completed (optional): The updated completion status of the task (true or\n   false).'
	},
	{
		id: 18,
		slug: 'weather',
		sectionId: 'response',
		title: 'Response',
		content:
			'The Update Todo List endpoint returns a JSON object representing the updated\ntask(s) within the todo list. The response includes the following properties:\n\n * id: The unique identifier of the updated task.\n * name: The name of the task.\n * description: The description of the task.\n * dueDate: The due date of the task.\n * completed: The completion status of the task.'
	},
	{
		id: 19,
		slug: 'weather',
		sectionId: 'error-handling',
		title: 'Error Handling',
		content:
			'The Update Todo List endpoint can return the following error responses:\n\n * 400 Bad Request: Indicates that the request was malformed or missing required\n   parameters.\n * 401 Unauthorized: Indicates that authentication is required to update the\n   task(s) within the todo list.\n * 404 Not Found: Indicates that the specified todo list or task does not exist.\n * 500 Internal Server Error: Indicates a server-side error occurred.'
	},
	{
		id: 20,
		slug: 'weather',
		sectionId: 'examples',
		title: 'Examples',
		content:
			'EXAMPLE 1: UPDATE A SINGLE TASK\n\nRequest:\n\n{@html `PUT /api/todo-list/1234567890\nContent-Type: application/json\n\n{\n  "name": "Update Documentation",\n  "description": "Generate extensive Markdown documentation for an endpoint",\n  "dueDate": "2023-09-30",\n  "completed": true\n}`}\n\nResponse:\n\n{@html `200 OK\nContent-Type: application/json\n\n{\n  "id": "1234567890",\n  "name": "Update Documentation",\n  "description": "Generate extensive Markdown documentation for an endpoint",\n  "dueDate": "2023-09-30",\n  "completed": true\n}`}\n\n\nEXAMPLE 2: UPDATE MULTIPLE TASKS\n\nRequest:\n\n{@html `PUT /api/todo-list/987654321\nContent-Type: application/json\n\n[\n  {\n    "id": "task1",\n    "name": "Update Documentation",\n    "description": "Generate extensive Markdown documentation for an endpoint",\n    "dueDate": "2023-09-30",\n    "completed": true\n  },\n  {\n    "id": "task2",\n    "name": "Fix Bug",\n    "dueDate": "2023-10-10",\n    "completed": false\n  }\n]`}\n\nResponse:\n\n{@html `200 OK\nContent-Type: application/json\n\n[\n  {\n    "id": "task1",\n    "name": "Update Documentation",\n    "description": "Generate extensive Markdown documentation for an endpoint",\n    "dueDate": "2023-09-30",\n    "completed": true\n  },\n  {\n    "id": "task2",\n    "name": "Fix Bug",\n    "dueDate": "2023-10-10",\n    "completed": false\n  }\n]`}'
	},
	{
		id: 21,
		slug: 'weather',
		sectionId: 'conclusion',
		title: 'Conclusion',
		content:
			'The Update Todo List endpoint provides powerful functionality to modify existing\ntasks within a todo list. With the ability to update task details such as name,\ndescription, due date, and completion status, you can easily manage and track\nyour tasks efficiently.'
	}
];
