# 12 - Key Sequence Detection

`keyup`, `array.push()`, `array.join()`, `array.includes()`

![](images/12_00.png)

### Array.prototype.join()

Let's take a one more look the `.join()`

The [`.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) methond joins all elements of an array (or an `array-like object`) into a string.

- syntax

  If an element is undefined or null, it is converted to the empty string.

  ```js
  array.join()
  array.join(seperator)
  ```

  - `seperator` (optional): Specifies a string to separate each element of the array. Defaults to `,`.

- example

  ```js
  var a = ['Wind', 'Rain', 'Fire'];
  a.join();      // 'Wind,Rain,Fire'
  a.join(', ');  // 'Wind, Rain, Fire'
  a.join(' + '); // 'Wind + Rain + Fire'
  a.join('');    // 'WindRainFire'
  a.join(' ');   // 'Wind Rain Fire'
  ```

### Combine pressed keys into an array

- we can `console.log()` the `e.key` out to see the name of key we pressed

```js
console.log(e.key);
```

![](images/12_01.png)

- then use `.push()` to combine key names into an array

```js
pressed.push(e.key);
```

![](images/12_02.png)

### Check if it  matches the `secretCode`

- it starts to push out the first one item in the array, if length is over the budget of `secretCode.length` letters

```js
pressed.splice(- secretCode.length - 1, pressed.length - secretCode.length);
```

![](images/12_03.png)

- check the array to see if pressed keys matches the `secretCode`, and then add cornify effect if matched

- `.join()` to turn the array into a string

```js
if(pressed.join('').includes(secretCode)) {
  console.log('Wow, Amazing!');
  cornify_add();
}
```

- I personally add two new lines for print the `secretCode` out if matched
  - [`element.insertAdjacentHTML()`](https://developer.mozilla.org/zh-TW/docs/Web/API/Element/insertAdjacentHTML)

```js
decode.innerHTML= '';
decode.insertAdjacentHTML('afterbegin', secretCode);
```

