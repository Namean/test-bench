# Lesson 50 Box-sizing: border-box

<p style="font-size: 150%;">In this lesson we'll cover using the standard behavior of the CSS box model. Referred to as content-box, which is the default behavior of CSS. The alternative is called border-box, You may apply this behavior using the box-sizing property.</p>

Developers typically set the box-sizing property to border-box as a solution to the problem of determining the size of an element with its margin, padding, width and height included. Doing so can be a chore. To which the border-box property is a solution, and industry standard amongst developers and designers alike.

We'll be giving a concrete demonstration later on in the lesson.

Lets see how we can run into problems with the default box model and how we can fix it.

Finally fix the spacing of the side bar, there are no paddings, and the margin are incorrect. We will run into a problem then solve it.

This code should apply to all the layout methods.

remove the comments from aside, and the width property because its already defined in the file below.

The reason there is some space "in the aside element and its content" is because at the begining we added some margin to the ul because other wise the bullet points disappeared. But now we don't want it here.

ul.related

```css
.related {
  list-style: none;
  margin-left: 0;
}
```

Let's go back to the aside element and add some padding. When we want space inside of an element we should not use margin, so that' why we remove.
But we want some space inside the aside. So we use some padding

```css

aside {
    ...
    padding: 50px 40px;
}
```

Once we save the file. The Aside element is no longer in place before we adding the padding.

The reason is that the element is too big, we defined it with a width of 300px, but then the padding gets added to the total widht,
becasue that is the default behavior of the box model. which makes it 380, which makes it a bit wider than there would have been space to fix the aside.

How do we fix this problem?

Should we manually change the size of the aside, or maybe is there anothery way?

We can leave behind the default behavior of the box model.

### The box model ith box-sizing: border box

This is the default way that the box model calculates the widths and the heights.

As we've seen in practice many times. Whenever we speicify a width, then the box model will add the border and teh padding on top of that. Which is what created the situation in our layout. The side bar grew too big and no longer fit next to the article.

What if we could define a size, and the element would be that size, no matter the margin or padding.

Of course there is a way, we can use box-sizing: border-box

Everyone adds box-sizing border box, which solves the problem that we experieneced.

Now the specified width and height goes to

The final width and height calculation are very simple. In fact there is nothing to calculate, no matter the padding or border. The same goes for the width or height. They will not get added to the width and height.

Lets go back to our code and apply

The default behavior is called content-box

```css

aside {
    ...
    box-sizing: border-box;
}
```

To apply border-box to all elements we put it into the universal selector

this is what most developers add to their code

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

The above css code in the global selector, is known as a global reset.

```css
h4 {
  margin-bottom: 30px;
}
```
