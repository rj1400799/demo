# --- Session storage ---
---

***1. What?*** 
Storage for to store data persistently

***2. How it works?*** 
sesionStorage API (getItem, setItem, removeItem, clear)

***3. Size Limit***
5MB per domain

***4. Performace*** 
Synchronous 

***5. Data Persistence*** 
Cleared when browser session end(tab close, window close)

***6. Data structure*** 
key :value (value is string)

***7. Security*** 
Storage limit, XSS, encrypt, keep session expiry (use setInterval, setTimeout etc etc).

***8. When to use?*** 
Temporary sensitive data

***9. When not to use?*** 
Large dataset, async, long duration

### Special case:
- When you duplicate tab, it first creates a copy of this stored data and sets it to this duplicate tab's initial state and after this the two tabs are independent of each other (won't share state anymore).

---