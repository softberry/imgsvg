

# imgsvg

include svg images simply in ``<img>`` tag and give it data attribute ``data-imgsvg``. 
All those elements will be replaced with  ``<svg>``  vector graphics. 

## Why imgsvg

**CSS** can animate and style ``svg`` files but they should not be included in ``img`` . 
With this small utility, you can now include ``svg`` images in ``img`` tags but still can use advantages of **css** .

If you place an image like this : 

``<img src="circle.svg" width ="200" height="200" alt="This is an circle" >`` 

it will be converted into :

	<svg height="100" width="100">
		<circle cx="50" cy="50" r="40" 
		stroke="black" stroke-width="3"
		fill="red" />
	</svg>

## Advantages

- Place your vector graphics in simpler form but keep using the advantages of nativ behavior of **svg**. 
- Content Management Systems usually let editors to add images always in ``<img>`` tags. This is not a pitfall anymore. 