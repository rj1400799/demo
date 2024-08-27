#How web works
1. what happens when you do 'google.com' 

2. Network tab ---> any network call which goes beyound your browser.

3. Anybody's machine can be a server 

##Server --> a machine/computer which can process a request and after processing it can respond. 

4. Our machines can't be a server because it gets shutdown, limited memory, limited CPU, RAM. 

5. AVAILABILITY --> 24/7 (sever).

6. If two devices wants to connect, each device should have IP Address.

7. Domain name --->  
   a. We do 'google.com' in our browser. 
   b. If we have internet access (through ISP), first we make call to DNS (Domain Name Server), can then we make an call to exact target server using IP Address. 
   c. DNS --> has mapping (name -> it's IP Address)

8. DNS is also a combination of severs, as we have millions of domains,
   we can't simply have one place to keep all of it just like dictionery,
   it's not possble. 
9. Therefore we have different parts of the url/IP Address. 
10. . --> refers to root domain 
   a. com, edu, org, gov, au --> refers tp top-level domains 
   b. google.com, microsoft.com --> second-level domains
   c. www.(XXX), download.(XXX), --> third-level domains 

11. Using this way, we will be able to dig deeper into to needed server's IP Address. 

12. Server can be a datacenter to serve millions of requests, datacenter's ---> cpus's with power backups, ram. we dpn't need monitors here. 
13. Countries are connected to internet via optical fibers which are setup through oceans. 
14. ISPs (Internet service providers) setup a satellite in every locality, through which (via wireless or wired) provides internet to the people around it. 
15. But how these actually work?
16. Refer screenshot (ISP)

#Flow
1. Browser --> router --> ISP --> DNS (with domain name we reach here)
2. DNS --> ISP --> ROUTER --> BROWSER (gets IP address)
3. BRoWSER --> ROUTER --> ISP --> SERVER

1. Lot of things happen before hitting router. 
2. It checks in the browser if we have cache related to IP address/domain name. (network layer, http layer)
3. Then it checks in service worker for cache. (service worker layer).
4. Next in operating system, ip address can be same, you can check.
5. Router (now a days routers can also have info about mappings, dns, also does caching).
6. ISP (it also does caching).

1. Result code --> 304 (comes from service worker), call went to server and server says you already had the exact current data, use the same one. 
2. 200 --> from server successful.
3. browser can only make upto 6-8 parallel calls, more than that can be queued, queue mechanism. 

#Google does Peering, 
1. Normal flow --> computer --> router --> local ISP --> Regional ISP --> Global ISP1, this is the flow from every country, another country will have Global ISP2. This is how they are connected.
2. But google does peering, datacenters are established in every country.
3. Peering flow --> computer --> router --> local ISP --> Google.

#Netflix 
1. Puts data directly inside ISPs on rental basis, that is it requests ISPs to provide platform to host their data. 
2. This data can be directly streamed to the user's rather than it being following normal flow. 


#Inside DNS
1. Also has info about the domain's owner, address, etc...
1. WHOIS --> Privacy protection 

............Client........................ 

1. DNS LOOKUP 

2. TCP HANDSHAKE 
3. SSL HANDSHAKE --> for https, we also make this handshake for extra protection

4. HTTP GET REQUEST 

14KB RESPONSE 
ACK 
28KB RESPONSE 
ACK 
56KC RESPONSE 
ACK

.............Server..................................

1. SSL HANDSHAKE --> for https, we also make this handshake for extra protection, it exchanges a certificate(client key) using which it can communicate and no other can get to know what we are communicating.


2. How web page renders???
a. Refer to A Layman's diagram 
b. We have DOM tree
c. CSSDOM tree 
d. Both are merged with final 'render tree' after making some computations (apply inheritance, specificity, hiding non visible dom nodes, hide hidden dom nodes and all). 

3. In elements tab --> styles (all styles you tried to apply will be shown).
4. In elements tab --> computed (shows the applied styles only).

#JS Executing 
1. parsing js means it blocks remaining all other things. 


#Compositing
1. What layer should be kept top and all. 
2. alignmenting our all layers

###CSS --> RENDERING BLOCKING 
###JS --> PARSING BLOCKING 