# --- Local storage ---
---

***1. What***
Storage to store data persistently on user device. 

***2. How it works?***
 setItem, getItem, removeItem, clear on (localStorage) API

***3. Size limit***
5MB - 10MB per domain, but consider 5MB to be on safer side.

***4. Data persistence***
Persists across browser session and tab closer.

***5. Data structure***
key : value (Note: value is of type string, no other types are allowed,   serialization & deserialization (convert to string to something and vice-versa).

***6. performance*** 
synchronous (blocks main thread)

***7. Security*** 
storage, encryption, CORS, XSS (even when some others code can't interpret your data).

***8. When to use***
User prefrences, non sensitive data, (for ex: when user not logged in, but you can still maintain wishlist/cart info. because you can't insert into db as user not logged in).

***9. When not to use?***
Large datasets (performance drop), sensitive info. (like auth token), user details, cross profile data (for ex: in netflix, show watched videos list to other profile (ex: parent profile), no use of having different profiles), can be maintained but be cautious, need to clean up or have a different logic for this), generally not recommended. 

#### Note:
When two tabs were opened and you play with data, the data inside the local storage changes quickly but the UI is not reactive, that is  you toggle mode in one tab, the theme changes and the theme data is stored in local storage but in the other opened tab, the data changes but the theme doesn't change, that is the UI is not reactive with the UI.

#### In-built methods:
- getItem(key)
-  setItem(key, 'value')
-  clear() //clears all data 
- remove(key)

---