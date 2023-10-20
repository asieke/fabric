<script lang="ts">
</script>

<h1>Weather API Documentation</h1>

<p>
	Welcome to the Weather API documentation. Here you'll find all you need to know to integrate our
	Weather API into your application.
</p>

<h2>Table of Contents</h2>
<ol>
	<li><span>Introduction</span></li>
	<li><span>Authentication</span></li>
	<li>
		<span>Endpoints</span>
		<ol>
			<li>Current Weather</li>
			<li>Forecast</li>
		</ol>
	</li>
	<li><span>Rate Limiting</span></li>
</ol>

<hr />

<h2 id="introduction">Introduction</h2>
<p>This API allows you to retrieve weather information for cities around the world.</p>

<h3>Base URL</h3>
<code>https://api.weather.com/v1/</code>

<h2 id="authentication">Authentication</h2>
<p>Authentication is done through API keys.</p>

<h3>Getting an API Key</h3>
<p>Visit <a href="/">this page</a> to get your API key.</p>

<h4>Using the API Key</h4>
<blockquote>
	Your API key must be included in all API requests in the header <code>api_key</code>.
</blockquote>

<h2 id="endpoints">Endpoints</h2>

<h3 id="current-weather">Current Weather</h3>

<p>Get current weather information for a city.</p>

<h4>Request</h4>
<code> GET /weather/current?city=city_name </code>

<h4>Response</h4>
<table>
	<thead>
		<tr>
			<th>Field</th>
			<th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>temperature</td>
			<td>float</td>
			<td>Current temperature in Celsius</td>
		</tr>
		<tr>
			<td>humidity</td>
			<td>integer</td>
			<td>Current humidity percentage</td>
		</tr>
	</tbody>
</table>

<h3 id="forecast">Forecast</h3>
<p>Get a 5-day weather forecast for a city.</p>

<h4>Request</h4>
<code> GET /weather/forecast?city=city_name </code>

<h4>Response</h4>
<ul>
	<li><code>days</code>: Array of days for which forecast is available</li>
	<li><code>temperature</code>: Forecasted temperature</li>
	<li><code>humidity</code>: Forecasted humidity</li>
</ul>

<h2 id="rate-limiting">Rate Limiting</h2>
<p>
	You can make up to 1000 requests per hour. Additional requests will result in a 429 status code.
</p>
