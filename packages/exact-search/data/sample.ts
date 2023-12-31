export const sections = [
  {
    id: 0,
    slug: 'getting-started',
    sectionId: 'section-3',
    title: 'Code',
    content:
      "CODE\n\nIn any productive workflow, managing tasks is crucial. The Update Todo List\nendpoint offers a powerful tool to modify existing tasks in a todo list. Whether\nyou need to change the task name, update the description, reschedule the due\ndate, or update the completion status, this endpoint caters to your task\nmanagement requirements efficiently.\n\n{@html `#how to do all the things\nmkdir my_directory\ncd my_directory\ntouch my_file.txt\nnano my_file.txt`}\n\n{@html `for (let i = 0; i < 5; i++) {\n\tconsole.log('number: ', i);\n}`}\n\n{@html `for ($i = 0; $i < 5; $i++) {\n\techo $i;\n}`}"
  },
  {
    id: 1,
    slug: 'getting-started',
    sectionId: 'section-4',
    title: 'The Boys!',
    content: 'THE BOYS!\n\nWe are crushing it'
  },
  {
    id: 2,
    slug: 'sdk',
    sectionId: 'section-1',
    title: 'Guide',
    content:
      'GUIDE\n\nThis is a paragraph.\n\n * This is a list this is Alexs list\n * With two items\n\n 1. And a sublist\n 2. That is ordered\n\n * With another\n * Sublist inside\n\nAnd this is A table With two columns'
  },
  {
    id: 3,
    slug: 'sdk',
    sectionId: 'section-2',
    title: 'Installation',
    content:
      'INSTALLATION\n\nYou can install it with\n\n{@html `$ npm i -S svelte-markdown`}\n\nIf you use npm or if you prefer yarn\n\n{@html `$ yarn add svelte-markdown`}\n\nIf you’re using Sapper you might need to install it as a dev dependency.'
  },
  {
    id: 4,
    slug: 'sdk',
    sectionId: 'section-3',
    title: 'Usage',
    content:
      'USAGE\n\n{@html `<script>\n\timport SvelteMarkdown from \'svelte-markdown\';\n\tconst source = `\n  # This is a header\n\nThis is a paragraph.\n\n* This is a list\n* With two items\n  1. And a sublist\n  2. That is ordered\n    * With another\n    * Sublist inside\n\n| And this is | A table |\n|-------------|---------|\n| With two    | columns |`;\n</script>\n\n<SvelteMarkdown {source} />`}\n\nThis would render something like\n\n{@html `<h1>This is a header</h1>\n<p>This is a paragraph.</p>\n<ul>\n\t<li>This is a list</li>\n\t<li>\n\t\tWith two items\n\t\t<ol start="1">\n\t\t\t<li>And a sublist</li>\n\t\t\t<li>\n\t\t\t\tThat is ordered\n\t\t\t\t<ul>\n\t\t\t\t\t<li>With another</li>\n\t\t\t\t\t<li>Sublist inside</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ol>\n\t</li>\n</ul>\n<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th>And this is</th>\n\t\t\t<th>A table</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>With two</td>\n\t\t\t<td>columns</td>\n\t\t</tr>\n\t</tbody>\n</table>`}'
  },
  {
    id: 5,
    slug: 'weather',
    sectionId: 'section-3',
    title: 'Introduction',
    content:
      'INTRODUCTION\n\nIn any productive workflow, managing tasks is crucial. The Update Todo List\nendpoint offers a powerful tool to modify existing tasks in a todo list. Whether\nyou need to change the task name, update the description, reschedule the due\ndate, or update the completion status, this endpoint caters to your task\nmanagement requirements efficiently.'
  },
  {
    id: 6,
    slug: 'weather',
    sectionId: 'section-4',
    title: 'Endpoint',
    content:
      'ENDPOINT\n\nThe Update Todo List endpoint URL is:\n\n{@html `PUT /api/todo-list/:id`}\n\nReplace :id with the unique identifier of the todo list or task you want to\nupdate.'
  },
  {
    id: 7,
    slug: 'weather',
    sectionId: 'section-5',
    title: 'HTTP Method',
    content:
      'HTTP METHOD\n\nThe Update Todo List endpoint uses the HTTP PUT method to perform updates on the\ntodo list.'
  },
  {
    id: 8,
    slug: 'weather',
    sectionId: 'section-6',
    title: 'Parameters',
    content:
      'PARAMETERS\n\nThe endpoint requires the following parameters:\n\n * id (required): The unique identifier of the todo list or task you want to\n   update.'
  },
  {
    id: 9,
    slug: 'weather',
    sectionId: 'section-7',
    title: 'Request Headers',
    content:
      'REQUEST HEADERS\n\nThe endpoint requires the following request header:\n\n * Content-Type: Use application/json for the request body.'
  },
  {
    id: 10,
    slug: 'weather',
    sectionId: 'section-8',
    title: 'Request Body',
    content:
      'REQUEST BODY\n\nThe request body must be a JSON object containing the updated properties of the\ntask(s) within the todo list. The properties that can be updated include:\n\n * name (optional): The new name of the task.\n * description (optional): The updated description of the task.\n * dueDate (optional): The new due date of the task.\n * completed (optional): The updated completion status of the task (true or\n   false).'
  },
  {
    id: 11,
    slug: 'weather',
    sectionId: 'section-9',
    title: 'Response',
    content:
      'RESPONSE\n\nThe Update Todo List endpoint returns a JSON object representing the updated\ntask(s) within the todo list. The response includes the following properties:\n\n * id: The unique identifier of the updated task.\n * name: The name of the task.\n * description: The description of the task.\n * dueDate: The due date of the task.\n * completed: The completion status of the task.'
  },
  {
    id: 12,
    slug: 'weather',
    sectionId: 'section-10',
    title: 'Error Handling',
    content:
      'ERROR HANDLING\n\nThe Update Todo List endpoint can return the following error responses:\n\n * 400 Bad Request: Indicates that the request was malformed or missing required\n   parameters.\n * 401 Unauthorized: Indicates that authentication is required to update the\n   task(s) within the todo list.\n * 404 Not Found: Indicates that the specified todo list or task does not exist.\n * 500 Internal Server Error: Indicates a server-side error occurred.'
  },
  {
    id: 13,
    slug: 'weather',
    sectionId: 'section-11',
    title: 'Examples',
    content:
      'EXAMPLES\n\n\nEXAMPLE 1: UPDATE A SINGLE TASK\n\nRequest:\n\n{@html `PUT /api/todo-list/1234567890\nContent-Type: application/json\n\n{\n  "name": "Update Documentation",\n  "description": "Generate extensive Markdown documentation for an endpoint",\n  "dueDate": "2023-09-30",\n  "completed": true\n}`}\n\nResponse:\n\n{@html `200 OK\nContent-Type: application/json\n\n{\n  "id": "1234567890",\n  "name": "Update Documentation",\n  "description": "Generate extensive Markdown documentation for an endpoint",\n  "dueDate": "2023-09-30",\n  "completed": true\n}`}\n\n\nEXAMPLE 2: UPDATE MULTIPLE TASKS\n\nRequest:\n\n{@html `PUT /api/todo-list/987654321\nContent-Type: application/json\n\n[\n  {\n    "id": "task1",\n    "name": "Update Documentation",\n    "description": "Generate extensive Markdown documentation for an endpoint",\n    "dueDate": "2023-09-30",\n    "completed": true\n  },\n  {\n    "id": "task2",\n    "name": "Fix Bug",\n    "dueDate": "2023-10-10",\n    "completed": false\n  }\n]`}\n\nResponse:\n\n{@html `200 OK\nContent-Type: application/json\n\n[\n  {\n    "id": "task1",\n    "name": "Update Documentation",\n    "description": "Generate extensive Markdown documentation for an endpoint",\n    "dueDate": "2023-09-30",\n    "completed": true\n  },\n  {\n    "id": "task2",\n    "name": "Fix Bug",\n    "dueDate": "2023-10-10",\n    "completed": false\n  }\n]`}'
  },
  {
    id: 14,
    slug: 'weather',
    sectionId: 'section-12',
    title: 'Conclusion',
    content:
      'CONCLUSION\n\nThe Update Todo List endpoint provides powerful functionality to modify existing\ntasks within a todo list. With the ability to update task details such as name,\ndescription, due date, and completion status, you can easily manage and track\nyour tasks efficiently.'
  }
];
