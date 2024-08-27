1. By default every element is positioned statically. 
2. We have static, relative, absolute, fixed and sticky positions. 

3. static ---> it stays at the same position as the document flow. 
4. relative --> it is same as static but it can moved to left/right/top/bottom with respective to it's normal position. 
5. absolute --> it takes reference to it's parent, it's parent will be the closest parent/grand parent which has a position property other than static. Normally it stays in it's normal document postion until it's given a top/left/right/bottom positions. 
6. fixed: it stays in it's position normal document one, even when scrolled it still stays there. 
b. comes out of document flow, next element takes it's normal place.
7. Sticky: It's combination of relative and fixed. 

8. Absolute and fixed makes the element out of the normal document flow, it's normal place will be taken up by the next element. 

---Sticky-----
1. Combination of relative + fixed. 
2. It's fixed until it's parent element exists in the viewport, if it's gone(i.e. scrolled), then this sticky element will no longer be visible.
3. top: some value (then it will be placed from top it can have atleast that some value, therefore for now it will be in it's normal document position, when scrolled, it is have atleast that some value until it's parent is present in the viewport).

Use cases: 
1. We have HOME CONTACT ABOUT headers in between our page and we want to make this behave as a relative until it reaches the top and then it will act as fixd until it's parent container is in the viewport. 
2. We have below structure of list. 


A 
apple 
axle 
axar
B
ball
box 
banana
C
cat 
cater 
ceiling
.
.
.
