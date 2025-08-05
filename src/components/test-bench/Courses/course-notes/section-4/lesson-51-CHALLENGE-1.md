# Lesson 51 Challenge #1

Now its time to build your own float layout, we will keep working on the shoe example, after building our component is

First you should active the box-sizing trick. Place the shipping next to the

I'm having trouble remembering when to use the clearfix,

I completed teh Challenge as best I could!

## Jonas's Solution!

Step 1. Fix the box model:

    add the box-sizing: border-box proerpty to the * global selector rule

Step 2: Put elements side by side which is the price and the shipping

```css

.price {
    ...
    float: left
}

.shipping {
    ...
    float: right;
}


```

This doesn't look right, so we'll put everything inside of a container called product-info

```html
<div class="product-info">
  <p class="price"><strong>$65.00</strong></p>
  <p class="shipping">Free shipping</p>

  ...

  <div class="colors">...</div>
</div>

<div class="product-details">
  <h3 class="details-title">Product details</h3>
  <ul class="details-list">
    ...
  </ul>
  <button class="add-cart">Add to cart</button>
</div>
```

We still have a problem is that the paragraph is floating between .price and .shipping

What we can do is clear the float

add the .production-desciption to the css

add the property clear: both

```css
.product-description {
  clear: both;
}
```

So we fixed the problem of the image is no longer between these two pieces of content, but we still have a problem, which is the paragraph here is floating around, or basically is in between these two pieces of content .price and .shipping

A solution to this is to take a look at this element, so which is this one, the product description and clear the float right here.

So where is that? The element we are referring to is the ..production-description

to which we have not yet added to the CSS file

on line 60 add the .production-description class with the clear: both

```css
.product-description {
  clear: both;
}
```

Now another solution would've beent to wrap these two elements here inside of another container element,
then we could have added the .clearfix class to that container.

Remember the clearfix hack I showed you earlier. We'll also need to use that for something later in the lesson.

Now let's cover the overall layout

The eleemnts that we are working with are these three boxes,

The image of shoes, the box we created ".product-info" and the box on the right "product-details"

### Determining widths

The first thing that we need to do is dterming a width for these elements.

I can show you the math that is happening.

The total width of this container is 825px

it alos has a border of 4 on each side,

So the math here is 280px - 8px

Which are teh two borders on each side, then minus 250, which is the width of this image

The height and width are set in HTML

we want 40px on either side of the .detials

(825 - 8 - 250 - 80) / 2 = 243.5 pixels

Which is 243px

apply widht of 243px to .product-info and .product-details

.product-info {
width: 243px
}

.product-details {
width: 243px
}

Now all we have to do is float all of these three elements,

we start with th eimage

apply a class of product-img to the image of the shoes

on line 12

```css
.product-img {
  float: left;
}

... .proiduct-info {
  float: left;
}

.product-details {
  float: left;
}
```

now we add those 40px of spacing, we can use marigin-right to acheive this

on product-img, and product-info

and some padding-top of 20px to .product-info

.product-info {
margin-right: 40px;
padding-top: 20px;
}

.shipping {
margin-top: 8px
}

manually aligning elements will be a thing of the past once start using flex-box
We won't have to do manual calculations of width either!! All caluclated by flexbox

.product-description {
clear:both
margin-bottom: 10px
}

.details-title {
...

- margin-top: 30px
  }

.product-details {
...

- margin-top: 20px;
  }

.product-info {

- padding-top: 20px;

* margin-top: 20px  
  }

3 + <div class="container">
...

</div>
<button>

.container {
background-color: red;
}

The container has a height of zero. Because all of the children a floated. Therefore its height collapsed. If we needed to fix that , we can use th eclearfix class for that

```css
.clearfix::after {
content: '',
display: block;
clear: both
}

.container {
/* background-color: red */
}
```
