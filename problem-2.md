## Problem 2 Prompt:
For each of the following two jQuery function calls, describe a scenario where would you use them and why.

### 1. $('.todo-item').on('click', function(e) { console.log(e) });
  Event handlers are only bound to the current selected element(s). This means that they have to exist on the page at the time the code executes ".on". I would listen to the todo-item when I want to add a certain feature to only existing elements on the DOM. For example, I just want to add ".hover()" to ONLY the existing items and NOT any new items.

### 2. $(document).on('click', '.todo-item', function(e) { console.log(e) });
  Listening to the document is always tricky. I would ONLY listen to the document when I am sure that there is no parent element for the element that I am selecting.

  Although this function utilizes event delegation, I wouldn't use it. Event delegation is great if there is a chance of there ever being AJAX calls of new items. However, listening to the document would probably cause the worst performing scenario. Personally, I would avoid listening to the document. I rather add an empty div as the parent element of the targeted element rather than something "global" like document or window because the event will not have to bubble all the way up to the document. Instead, it would only have to travel a short distance to it's parent element.

  Since this jQuery call is trying to delegate event handling, I will come up with an scenario for event delegation. My example: Adding a ".toggle()" event to all items on on a list, including new items that are added. Event delegation has an advantage that it can process events from descendants elements that are added to the document at later time. If I were to bind the ".toggle()" to the list item, the new list items that I would add will not have the ability. If I were to bind it to the parent element (or in this case, the document), incoming new list items will have the ability.
