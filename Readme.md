# html-plugin

  [Lego](https://github.com/bredele/lego) plugin to bind a node inner HTML with a [store](https://github.com/bredele/store) attribute

## Installation

with [component](http://github.com/component/component):

    $ component install bredele/html-brick

with [nodejs](http://nodejs.org):

    $ component install html-brick

## Usage

First, add the plugin to your view (see [lego](https://github.com/bredele/lego) to know more about views):

```js
view.add('data-html', require('html-brick'));
```

## Basic

```html
<p data-html="github"></p>
```

The plugin will look if it finds the property `github` (`view.get('github')`) and listen for changes.

```js
view.set('github', 'bredele');
```

will display:

```html
<p data-html="github">bredele</p>
```
see [live example](https://github.com/bredele/html-brick/tree/master/example)
## License

  MIT
