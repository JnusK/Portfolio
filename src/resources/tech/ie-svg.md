#SVG Icons will freeze webpages on IE when dynamic
When I had to use svg icons as buttons for users to click on to close a component that includes the svg icon, the onClick event will cause the whole web app to freeze in IE, specifically IE 11. 

To counter this, the style of `<use>` in `<svg>` must have the style of `pointer-events: none;`. 
A code snippet for a svg icon that will not cause the app to freeze is below.
 
    <svg onClick={doSomething} >
        <use xlinkHref="#icon" style={{pointerEvents: 'none'}} />
    </svg>
    
Lesson learnt? Do not use IE...