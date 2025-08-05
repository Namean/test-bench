# Building a simple float layout

Now that we have a basic knowledge of how floats, and clearing floats works. Let's build a simple layout for our page.

Here we have an aside, as a side bar here. and our main content on the left side. And we have our main-header on the top, and the footer on the bottom.

Let's identify the main parts of our layout.

- Header
- Article / Aside
- Footer

Let's start by selecting these elements in our code, again. Because we can just comment it out later.

```css
article {
}
aside {
}
footer {
}
```

The first thing were going to do is work on the container.

Making it 1200px

```css
.container {
  width: 1200px;
}
```

To visualize this a bit better, we cna give these elements different background colors

```css
article {
  background-color: green;
}
aside {
  background-color: red;
}
footer {
  background-color: yellow;
}
```

Now let's get to work, we know how float works. Before using floats we need to change the width of the elements of the article and aside, and since they're block elements, they take up 100% width of the container. If we want them side by side they need to be a certain width. We are going to give the article 900px and the side bar 300px.

```css
article {
  background-color: green;
  width: 900px;
  float: left;
}
aside {
  background-color: red;
  width: 300px;
  float: right;
}
footer {
  background-color: yellow;
}
```

Now they are nicely side by side. But notice what happened to the footer. The footer is floating around the elements. So here we have the article, aside, then footer. If we set the aside to float the elements will float around it.

This is confusing which is why we'll replace this later.

What we must do now is clear the float. We don't need to create any new empty div or use clearfix. Because we already have the element which we want to clear the flow, which is the footer.

Before we needed to create an empty div or use the clearfix. But here we already have that element.

So we apply the clear property to the footer

```css
footer {
  clear: both;
}
```

It doens't matter if we used left or right, just use both.

In this situation it doesn't matter if we use right or left. Because there is no empty space between them anyway. Let's create some space between them. Using margin or padding is not the best approach. What we can do is decrease the size of the article element by 75px

```css
article {
  background-color: red;
  width: 825px; /* 900px - 75px = 825px */
  float: left;
}
```

Doing so will create a gap between the elements. So now there's a gap. If there is some remaining space it weill stay between the two.

Setting float to right is not ideal

And with that we've finished the layout already.
