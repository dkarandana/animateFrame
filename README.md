# animateFrame
Animate DOM elements using jQury animate, configurations can be passed through the html data attributes. 
  
[@dkarandana](http://twitter.com/dkarandana) / Dhananjaya Karandana

### Build & Deployment Process

Code sample

#### add data-animatio from-to
```html
	<div data-animation="200_400,50_20" class="type1 animateFrame">
      <img src="http://s24.postimg.org/brkoj6uwl/url_1.jpg"/>
  </div>
```


#### bind element to animateFrame
```javascript
	$('.animateFrame').animateFrame({
		  selector:'img',
		  prop:'height',
		  time:2000,
		  reverse:true
	}); 
```
