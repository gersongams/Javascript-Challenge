# 05 - Flex Panels Image Gallery

![](images/05_00.png)

CSS `flex`, `toggle()`, `includes()`, `transitionend`

## CSS flex

[CSS Flexible box layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

there are bunch of articles about CSS flexbox layout, and I hightly recommend [this one](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) written by [Chris Coyier](https://github.com/chriscoyier) on CSS-Tricks if you are new to this fearture.

### includes()

> Safari transitionend event.propertyName === flex */
>
> Chrome + FF transitionend event.propertyName === flex-grow */

due to there are different words between browsers, so we use `.includes()` to find the key word `'flex'` here, for matches them.

```js
if (e.propertyName.includes('flex')) {
  this.classList.toggle('open-active');
}
```

