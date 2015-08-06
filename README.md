# md-avatar

Generate material design avatar with canvas!
![63348403-8385-4102-87fb-25e5bbedffe4](https://cloud.githubusercontent.com/assets/2386165/9112806/99e41156-3c83-11e5-8ccb-ac0b7afae16b.png)


## install
```
bower install scarletsky/md-avatar
```

## usage
```javascript
new mdAvatar(options); // It will return a canvas dom element.

new mdAvatar({
	size: 100,
	text: 'S'
});

new mdAvatar({
	size: 64,
	text: 'G'
}).toDataURL();
```

## options

- target (default: `null`)
	
	The ID of target canvas, or you can pass a canvas dom. If this field not provide, it will return a new canvas element by `document.createElement('canvas')`.

- size (default: `32`)

	The size of avatar(canvas).

- text (default: `?`)

	The text in avatar. You can pass a string in to this field, but it will **only take the FIRST char**.

- textColor (default: `white`)

	The color of text.

- textSize (default: `this.size / 2`)

	The size of text.

- textAlign (default: `center`)


- textBaseline (default: `middle`)


- fontFamily (default: `sans-serif`)


- bgColor (default: depend on `this.text`)

	The avatar's background color. By default, it contains color patterns(500) in [Material Design Color](https://www.google.com/design/spec/style/color.html). And the color's default value is depend on `this.text`(not random).


## LICENSE

MIT
