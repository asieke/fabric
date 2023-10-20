---
title: Introduction
date: 2022-01-02
headings: [Guide, Installation, Usage]
order: 2
---

# Introduction

## Guide

This is a paragraph.

- This is a list this is Alexs list
- With two items

1. And a sublist
2. That is ordered

- With another
- Sublist inside

| And this is | A table |
| ----------- | ------- |
| With two    | columns |

## Installation

You can install it with

```console
$ npm i -S svelte-markdown
```

If you use npm or if you prefer yarn

```console
$ yarn add svelte-markdown
```

If you're using Sapper you might need to install it as a dev dependency.

## Usage

```html
<script>
	import SvelteMarkdown from 'svelte-markdown';
	const source = `
  # This is a header

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |`;
</script>

<SvelteMarkdown {source} />
```

This would render something like

```html
<h1>This is a header</h1>
<p>This is a paragraph.</p>
<ul>
	<li>This is a list</li>
	<li>
		With two items
		<ol start="1">
			<li>And a sublist</li>
			<li>
				That is ordered
				<ul>
					<li>With another</li>
					<li>Sublist inside</li>
				</ul>
			</li>
		</ol>
	</li>
</ul>
<table>
	<thead>
		<tr>
			<th>And this is</th>
			<th>A table</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>With two</td>
			<td>columns</td>
		</tr>
	</tbody>
</table>
```
