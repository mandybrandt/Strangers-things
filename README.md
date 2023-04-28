# Strangers-things
This one is different, in that it allows us to do more than request data... it also allows us to create data! In order to do this we will have to learn about CRUD (an acronym for Create, Read, Update, Destroy), how to improve our fetch game, and about user authentication via JSON Web Tokens (JWT).

By the end of this you'll have a deeper grasp of what we can do on the front end, and start to have an idea of what's going on inside of servers when we interact with them.
Remember, like all applications we've developed so far, the overall flow looks like this:

Fetch initial data and build application state
Build initial interface from application state
Set up all event listeners for interface
Event listeners might transform interaction into API requests (THIS IS NEW)
User interaction triggers event listeners, which in turn update data in multiple places:
Pass update requests to API (THIS IS NEW)
API returns success or failure for update
On success, update state to reflect change
On failure, render useful error message to user
React Re-renders components based on updated state