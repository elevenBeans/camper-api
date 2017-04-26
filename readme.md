# Freeecodecamp API projects
Domain Name: https://camper-api-ele.herokuapp.com/

## Timestamp Microservice

Router: `/timestamp/:time?`

`eg. https://camper-api-ele.herokuapp.com/timestamp/1111111111`

Output:

``` json
{
	"natural": "2005-03-18T01:58:31.000Z",
	"unix": 1111111111
}

```

## Request Header Parser Microservice

Router: `/whoami`

`eg. https://camper-api-ele.herokuapp.com/whoami`

Output:

``` json
{
	"ipaddress": "::ffff:10.43.206.154",
	"language": "zh-CN,zh;q=0.8,en;q=0.6,ja;q=0.4",
	"software": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
}

```

## URL Shortener Microservice

Router: `/littleurl/:url?`

`eg. https://camper-api-ele.herokuapp.com/littleurl/https://www.ctrip.com`

Output:

``` json
{
	"original_url": "https://www.ctrip.com",
	"short_url": "http://camper-api-ele.herokuapp.com/littleurl/118"
}

```

Router: `/littleurl/118`

Output:

![](https://raw.githubusercontent.com/elevenBeans/Grocery/master/ShortURLResult.png)

## Image Search Abstraction Layer

Router: `/imgsearch/keywords?offset=3`

`eg. https://camper-api-ele.herokuapp.com/imgsearch/aircraftcarrier?offset=3`

Output:

``` json
[{
	"name": "11:00 PM Aircraft Carrier 0 comments",
	"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.QoNktH8P64Pi9JaoCs7-bwEsDh&pid=Api",
	"contentUrl": "http://www.bing.com/cr?IG=7C06A4C10D52436D9D6D6B572D29EB4B&CID=3E185003F45B61DE2BE85A73F5CB6096&rd=1&h=ipRnDzMt5n0nQslayF7VCE5LnHqMoPq_lo0m8zigaEk&v=1&r=http%3a%2f%2f2.bp.blogspot.com%2f_uA2BDYzq_0c%2fTKy118Pk9hI%2fAAAAAAAABTU%2fQKBcqtT3qsc%2fs1600%2f1535lyq.jpg&p=DevEx,5008.1",
	"insightsSourcesSummary": {
		"shoppingSourcesCount": 0,
		"recipeSourcesCount": 0
	}
},
{
	"name": "sports: Aircraft Carrier Wallpapers.....",
	"thumbnailUrl": "https://tse4.mm.bing.net/th?id=OIP.i5JAt7smC4EAKit8D5DOoAEsDh&pid=Api",
	"contentUrl": "http://www.bing.com/cr?IG=7C06A4C10D52436D9D6D6B572D29EB4B&CID=3E185003F45B61DE2BE85A73F5CB6096&rd=1&h=MPv1hnwDqQbp7yL2QIAJXhqyVO1D_GPLmvw1zdUzP1I&v=1&r=http%3a%2f%2f4.bp.blogspot.com%2f-HwoV2UZmToc%2fT4UvTt9KBvI%2fAAAAAAAAQHE%2fKqc2gF3qxT8%2fs1600%2f_aircraft--%252Bcarrier--%252Bwallpaper_006.jpg&p=DevEx,5014.1",
	"insightsSourcesSummary": {
		"shoppingSourcesCount": 0,
		"recipeSourcesCount": 0
	}
},
{
	"name": "sports: Aircraft Carrier Wallpapers.....",
	"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.TJzt7VBjP7_6yLXGugMhQgEsDh&pid=Api",
	"contentUrl": "http://www.bing.com/cr?IG=7C06A4C10D52436D9D6D6B572D29EB4B&CID=3E185003F45B61DE2BE85A73F5CB6096&rd=1&h=kdlOlXp5ts3k0Ecc9aI64LAxBgWKen8LrUb14bQtGW8&v=1&r=http%3a%2f%2f2.bp.blogspot.com%2f-WamorAg9Uo0%2fT4UvCWZ5-aI%2fAAAAAAAAQGk%2fDFV2_Zch0Rg%2fs1600%2f_aircraft--%2bcarrier--%2bwallpaper_002.jpg&p=DevEx,5020.1",
	"insightsSourcesSummary": {
		"shoppingSourcesCount": 1,
		"recipeSourcesCount": 0
	}
}]

```

Router: `/imgsearch-latest`

Output:

``` json
[
{
	"term": "aircraftcarrier",
	"when": "2017-04-26T02:03:41.957Z"
},
{
	"term": "yaoming",
	"when": "2017-04-25T12:21:41.547Z"
},
{
	"term": "armstrong",
	"when": "2017-04-25T12:18:58.867Z"
}]
```