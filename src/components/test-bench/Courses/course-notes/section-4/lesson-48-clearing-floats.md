# Lesson 48 Clearing Floats

In the last lecture we created the problem that the red main-header collapsed its height. Because all of its child elements are floated. We need to now clear those floats.

Its not the best way, but it is the easiest, Which is to add another element to the header and clear the floats from there.

Add a div.clear to the main-header and we do not want any content. Nothing changed for now. If we add some content it will improve the situation a bit. But this is not what we want.

Let's give the main nav some other color

Selecting the clear class, using teh clear property.
we can clear the left and the right
We want to clear the both

Using the technique leads to cluttered and complex rows of floated elements and cleared divs.

There are better methods available to use.

Let us remove that div.clear and continue.

Building float layouts is outdated you don't need to understand 100% how this works. But we find it important that you learn how floats work for legacy purposes.

### Clearfix hack

The clearfix hack is something that has been widely used int he CSS community, which avoids the technique used above.

How it works, teh element with the collpased height. we add a class usually called clearfix.

main-header className="main-header cleafix"

In the CSS we select is and using an ::after pseudo element. Creates a new element that's the last child element of the container.

Which is the same as adding the div in teh previous technique.

Now we can clear the floats using the clear property.

Now remember two particularities of the ::after

first it only appears if we define something for the content property.

we can use an empty string.

pseudo elements are inline elements

by default pseudo elements are inline elements, clearing floats only works on block-level elements, we set the display property to block in the .clearfix class.

This is how we clear floats in floats layouts.

Next up, lets build a simple float layout to make our page look like the final demo. We can easily do that with floats.
