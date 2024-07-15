31. CSS Theory

This lesson covers selector specificity, or priority.

Of the selectors that we know so far

id, class, pseudo, element, universal,

```css
footer p {
  color: green !important;
}
```

Is just a hack that should not be used.

We can avoid its use by writing simple selectors

32. CSS Inheritance

default style = user agent style

Not all properties get inherited, its mostly the ones about text.

inherited values have the lowest priority.

## 33. CHALLENGE #1

- Buttons can have hover states!, just not any of the other states like visited

I actually had fun during the challenge, Jonas, I thought about skipping the remain parts of the video after I had finished, the challnege, on my own but I'm glad I didn't because, he pointed out some things that I did not notice...

Most notably, about cursor type when click on a button
it shows like the regular mouse button, but he changed it to the

```css
/* BUTTON */
.add-cart {
  /* background-color: #000;
  border: none;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase; */
  cursor: pointer;
}
```

## 34. CSS Theory #3: The CSS Box Model

- Buttons can have hover states!, just not any of the other states like visited

I actually had fun during the challenge, Jonas, I thought about skipping the remain parts of the video after I had finished, the challnege, on my own but I'm glad I didn't because, he pointed out some things that I did not notice...

Most notably, about cursor type when click on a button
it shows like the regular mouse button, but he changed it to the

## 39. Types of blocks

## 40. CSS Theory #5 Absolute positioning

Normal Flow

Default positioning
Elements is "in flow"

Elements are simply laid out according to their order int he HTMl code

Default poisitioning
position: relative

Absolute Positioning

Element is removed from the normal flow: "out of flow"

- No impact on surrounding elements, might overlap them

We use top, bottom, left, or right to offeset the elemtn from its relatively positioned container

position: absolute
