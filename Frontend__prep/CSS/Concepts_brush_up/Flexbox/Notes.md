- Press ! + tab for basic html structure


---- Flexbox ----- 
1. Use display: flex property to initialize a flex container, it gives flexibility to the items inside this container, now the items inside this flexbox will adopt the available space.
2. You can align these items inside this box in rows and columns. 
3. You can specify how these items can grow and shrink 

-- Main / Cross Axis inside this container ---
1. By default using display to flex, is laid in a row and flex-wrap property is set to nowrap.
2. By default, main-axis is horizontal to the flexbox, cross-line is vertical to the flexbox.

3. flex-direction - using this we can set the layout to be row based layout or column based layout.

4. You can layout items using these axis and not b horizontally or vertically.

5. To layout items by main axis, we have justify-content property, by default it has flex-start value, other values are flex-end, center, space-between, space-around. 

6. To align items vertically that is in cross-axis, we have align-items property and by default it is set to stretch, other values are center, flex-start.

7. align-content: or only multi-line flexbox container.

8. flex-wrap: by default it is set to strecth, doing so our items will be shrinked if the availabe space is reduced, if we want our items to have it's assigned values and maybe take up new line in order to fit these items with it's assigned value, we have to set this property to wrap.

9. In column based flex, cross-axis is horizontal and main axis is vertical.

Main point
1. The container is only for laying out spacing between your items as well as positioning of your items inside of the container.
2. The actual flexbox item properties are meant to either override 
those positioning and layout properties or to apply different flexible sizing to these elements as you can see by default when we decrease the size of your browser, our items shrink in size but
if we wanted to prevent that we have some properties for items

3. flex-shrink:0 (we don' want to shrink our item).

4. flex-grow to tell our items to grow bigger whenever we have extra space available in the container (flex-grow:1).
5. We can also tell our multiple items to grow, they grow proportionately to one another. If same value it takes equal space, if not it will be done proportionately.

6. For example: we have a width of 200px to our items, and the item1 has flex-grow set to 2 and flex2 to 1, then the let over space (for ex: 90px), then flex1 will get (90/3 * 2) that is 60px, total is 200x + 60px and item2 will be 200x + 30px.

7. flex-basis: it tells where to start growing, when set to 0, it imagines that our item has 0 width when it tarts adding as additional space to it, if we do so for above case, we now will have item1 is exactly twice big as item2. 

8. If you need to override the cross axis alignment of a property, you can do that with align-self property,
for ex: display: flex, will have align-items to strecth and the items will strecth, if you want one of your item not to stretch, you can have align-self to center/flex-start/flex-start.

9. Order property: used to change the order of our items (visually) inside our container without actually changing out html. (order: 2). 
Not to use, it messes the flow hence effecting the screen reader behaviour. 

-- Shortand for item properties:
1. flex: (flex-grow) (flex-shrink) (flex-basis).


In CSS Flexbox, there are several properties you need to be familiar with to effectively utilize flexbox layout. Here's a list of some essential properties:

1. display: To enable flexbox layout, you set the display property to "flex" or "inline-flex" on the container element.

2. flex-direction: Determines the direction of the main axis. It can be set to "row", "row-reverse", "column", or "column-reverse".

3. flex-wrap: Defines whether flex items are forced into a single line or can be wrapped onto multiple lines. Values can be "nowrap", "wrap", or "wrap-reverse".

4. flex-flow: A shorthand property for setting both flex-direction and flex-wrap.

5. justify-content: Aligns flex items along the main axis. Options include "flex-start", "flex-end", "center", "space-between", and "space-around".

6. align-items: Aligns flex items along the cross axis. Values can be "flex-start", "flex-end", "center", "baseline", or "stretch".

7. align-content: Aligns flex lines (when there are multiple lines) along the cross axis. Similar to align-items, but it works on the extra space in the cross-axis. Options include "flex-start", "flex-end", "center", "space-between", "space-around", and "stretch".

8. flex: Determines how a flex item grows or shrinks to fit the container. It's a shorthand property for flex-grow, flex-shrink, and flex-basis.

9. flex-grow: Specifies the factor by which a flex item will grow relative to the other flex items in the container when there is extra space.

10. flex-shrink: Specifies the factor by which a flex item will shrink relative to the other flex items in the container when there is not enough space.

11. flex-basis: Defines the initial size of a flex item before any remaining space is distributed.

12. order: Specifies the order in which a flex item appears in the flex container. By default, all flex items have an order of 0, but this property can be used to change the order.

These are the main properties used in CSS Flexbox layout. Understanding how each property works and how they interact with each other is crucial for creating flexible and responsive layouts.

