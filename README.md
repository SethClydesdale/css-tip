# CSS Tip

CSS Tip is a personal project of mine for creating tooltips with nothing more than CSS ( and maybe a little JS for converting titles to datasets ), to fully custmize the look and feel of tooltips with stunning effects and more..


## Using the CSS

At the moment, I split everything into three files for the sake of organization ; defaults, effects, and skins. Note that you should combine at least one rule from the skins file with the defaults if you don't want just text as the tooltip. Anyway, you can find more info below.

**[defaults](https://github.com/SethClydesdale/css-tip/blob/master/tooltip-defaults.css) :** The defaults file contains what you think it contains ; the default tool tip settings. This resets the font and text properties, as well as some adjustments to position, margins, padding, etc..

**[effects](https://github.com/SethClydesdale/css-tip/blob/master/tooltip-effects.css) :** The effects file contains various hover effects, such as ; fade in, slide in, pop in, etc.. I'm sure I'll add more when I think of some. You can add one effect or combine multiple effects, as well as utilize classes to isolate certain effects to specific links.

![example](http://i21.servimg.com/u/f21/18/21/60/73/csstip10.gif)

**[skins](https://github.com/SethClydesdale/css-tip/blob/master/tooltip-skins.css) :** Lastly, the skins file contains the basic makeup of the tooltip ; font color, background, border, etc.. Since the defaults doesn't contain any background colors, I'd recommend at least copying one rule from this file to combine with the defaults.


## Getting the tooltips to work

The tooltips are simple to get working, because the css uses the custom data-csstip attribute to display tooltip text. Simply add this attribute onto any HTML element you're using and you're set ! Here's a brief example on an anchor :
```html
<a href="#top" data-csstip="Go to the top of the page">Top</a>
```

Now if you already have a ton of elements with the default ``title`` attribute and don't feel like changing them I also wrote a small script for converting the default title to the dataset title. You can add the script found [here](https://github.com/SethClydesdale/css-tip/blob/master/title-replacer.js) wherever you like in your document and you should be set. 


## Project

I'll be working on this from time to time, so check up whenever you want if you're interested. I plan on writing some more styles as well as writing a little generator to make generating a CSS tooltip code easier.
