

# imgsvg

[![local-connection](https://img.shields.io/npm/v/local-connection.svg?style=for-the-badge)]()
[![npm](https://img.shields.io/npm/l/local-connection.svg?style=for-the-badge)]()
[![GitHub last commit](https://img.shields.io/github/last-commit/softberry/Local-Connection.svg?style=for-the-badge)]()
![Travis](https://img.shields.io/travis/softberry/Local-Connection.svg?style=for-the-badge)

Get in contact for help from developer:

[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/Local-Connection/Lobby)
[![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/emresakarya?utm_source=github&utm_medium=button&utm_term=emresakarya&utm_campaign=github)
[![Website](https://img.shields.io/website-up-down-green-red/http/emresakarya.com.svg?label=Visit WebSite&style=for-the-badge)](http://www.emresakarya.com/local-connection/)


include svg images simply in ``<img>`` tag and give it data attribute ``data-imgsvg``. 
All those elements will be replaced with  ``<svg>``  vector graphics. 

## Why imgsvg

**CSS** can animate and style ``svg`` files but they should not be included in ``img`` . 
With this small utility, you can now include ``svg`` images in ``img`` tags but still can use advantages of **css** .

If you place an image like this : 

``<img src="circle.svg" width ="100" height="100" alt="This is an circle" >`` 

it will be converted into :

	<svg height="100" width="100">
		<circle cx="50" cy="50" r="40" 
		stroke="black" stroke-width="3"
		width ="100" 
		height="100"
		fill="red" />
	</svg>

## Advantages

- Place your vector graphics in simpler form but keep using the advantages of nativ behavior of **svg**. 
- Content Management Systems usually let editors to add images always in ``<img>`` tags. This is not a pitfall anymore. 
- ## How to use it:

Download minified snipped from ``dist/imgsvg.min.js`` and serve it with your other files. And simply add in to you ``html`` files.

**PS** Images must  have ``data-imgsvg`` attribute and file suffix must be ``.svg`` .


		**Sample HTML Page**

        
	
	    <!doctype html>
		    <html>
			    <head>
				    <title>Sample page img2svg</title>
			    </head>
			    <body>
		            <img src="images/sampleimage.svg" alt="A sample image" width="128" height="256">
		            <script src="imgsvg.min.js"></script>
	            </body>
            </html>