# Lesson 47. Using Floats

Before we build a float layout, we need to know how the float property works

We'll keep working on the blog-post page.

to create a layout like this

screenshot('4:45')

We atually have these related posts as a sode box, both below the complete header,

and the footer which goes from left to right

To start learning about floats, what if we wanted these two elements to appear side by side?

This is a paragraph element which is default is a block, therefore it occupies its own line. level element, meaning it occupies its own line.

We can change that by making the paragrah and inline element, using the display property.

But lets explore another way.

Lets give each of these two elements class names, in our HTML

So we can easily select them

```html
<img
  className="author-img"
  src="https://picsum.photos/id/11/50/50"
  alt="Headshot of Laura Jones"
  height="50"
  width="50"
/>

<p id="author" className="author">
  Posted by <strong>Desmond Wilson</strong> on Monday, June 21st 2027
</p>
```

The image is taken out of the document's flow. meaning other elements will float around it.

There are a few options for float, mainly left right or none.

This image is taken out of the document's flow like an absouluteyly positioned elements. All other elements will float around it.

The p if floating around the image. To demonstrate this we can use some blind text

with the emmet macro 'lorem'

<img src="file:///Users/allspark/Desktop/Section-4-Floats-images/float-demonstration.png">

You can see how this text floats around this image

We can see that the text of .author begins where the text is, but behind the image in green.

It doesn't change anything, even if we change it to 50px

Changing the font size to 80px we can start to see the .author text moving.

We can confirm that the image has been taken completly out of the document's flow.

As if its not on the page, it doens't affect the surrounding elements.

We can correct this by floating the .author element as well.

we have more modern ways of doing this, such as flexbox and css grid.

Its important that you get the knowledge of how floats work.

Let's try to add some margin bottom of 20px

A floated element is still able to create some margins around it. We want space outside the element.

We can select elements multiple times.

The goal is to float the h1 and the main navigation
to have them on the same line
which create an "interesting" phenomina

The intereting thing that's happening, if you notice the gray background, We cans see that the element has lost its height, and its still visible because it has some padding.

If we remove this padding it will disappear.

Why is this happening, all of its child elements the h1 and the nav, All of them are floated as if they are not on the page. The element no longer has any content. So it makes sense that its height is 0.

If we come down to the box model. The width is 720, but is height is 0

Its only the padding on top and bottom, that's making this element visible.

This phenomenon is what we call the 'collapsing element'

this happened because both of its children are floated. Of course we do not want this. We want this element to have the height that it had before.

### Absolute Positioning vs. Floats

Floats are not a positioning scheme like Absolute Positioning.

They are still another way elements can be out of flow. So it makes sense to compare them.

When an element is floated. Its removed out of the normal flow. It is regarded as the same as

What's different about floats is that floated elements still have an impact. Text and in-line elements will wrap around the floated element. In this regard floated elements are different from absolutely positioned elements.

Finally, one important characteristic. The container elements will not adjust its height to the floated element.

In the next lecture we'll fix the issue of collapsing heights.
