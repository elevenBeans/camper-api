# Freeecodecamp API projects
Domain Name: https://camper-api-ele.herokuapp.com/

## Timestamp Microservice

Router: `/timestamp/:time?`

`eg. https://camper-api-ele.herokuapp.com/timestamp/1111111111`

Output:

```
{
	natural: "2005-03-18T01:58:31.000Z",
	unix: 1111111111
}

```

## Request Header Parser Microservice

Router: `/whoami`

`eg. https://camper-api-ele.herokuapp.com/whoami`

Output:

```
{
	ipaddress: "::ffff:10.43.206.154",
	language: "zh-CN,zh;q=0.8,en;q=0.6,ja;q=0.4",
	software: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
}

```

## URL Shortener Microservice

Router: `/little-url/:url?`

`eg. https://camper-api-ele.herokuapp.com/little-url/https://www.ctrip.com`

Output:

```
{
	original_url: "https://www.ctrip.com",
	short_url: "http://camper-api-ele.herokuapp.com/little-url/118"
}

```

Router: `http://camper-api-ele.herokuapp.com/little-url/118`

Output:

![](https://raw.githubusercontent.com/elevenBeans/Grocery/master/ShortURLResult.png)