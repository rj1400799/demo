/**
 * Communication Protocols: 
 * Communcation between two systems (some rules, regulations, architecture)
 * 
 * 1. HTTP (hyper text transfer protocol --> consider as a template which predines 
 *    req/res body, how communication should happen)
 */

/**
 * --------HTTP---------------
 *  
 * 1. It first makes a TCP connection with the server, it says to server, boss I'm sending data,
 *    are you ready. Once it's ready.
 * 2. It makes req/res.
 * 3. Every request makes a new TCP connection, for every req made, it gets some data.
 * 4. Use cases: Anything related to web browsing. 
 */

/**
 * HTTP/3 --> Quick 
 * 1. Youtube uses this. 
 * 2. It establishes the UDP connection. No handshakes
 * 3. In initial req only it sends data and expects some data.
 * 4. How fast? It does header compression, faster, improved performance,
 *    better network congestion. (use case when large data has to be send).
 * 5. Use case: IoT, Virtual Reality. 
 */

/**
 * TCP --> Here, 3 way requests, 3 shake hands
 * (Transmission control protocol)
 * 1. TCP ----------- syn ----> Server
 * 
 * 2. TCP <----- SYNC + ACK ---- Server 
 * server gives a sequence number and tells to use this for next xommunication
 * that will happen. 
 * 
 * 3. TCP ------ACK-----------> Server 
 * (client says I got this num and sends acknowledgement). 
 * 
 * Why this number??
 * 1. TCP --> I'm sending lot of data in form of packets, so
 *    if any packet is missing, I will make sure I will resend it.
 * 2. TCP guarentees that no data packet misses while sending.
 * 3. Email protocols --> TCP 
 * 4. Doesn't care about realability. 
 */

/**
 * UDP(User datagram protocol) ---> Intent is to be quick, without making any handshakes,
 * some packets may loss, it doesn't take any responsibilty. 
 * 2. Ex: Voice calls/ Video conferencing
 */

/**
 * 1. HTTPS --> Along with TCP, it does TLS (transport layer security)
 * 2. Server gives a public key, and says client to use this key to encrypt
 *    the data and send it to me. (To make sure packets are not read in between).
 * 3. Encrypt/deencrypt data at both ends. 
 * 4. Server first gives a public key. 
 * 5. Client then sends a session key. 
 * 6. Even if some packet is stolen inbetween, no one can read that data.
 * 7. Use case: Web browsing. 
 */

/**
 * Websockets: It uses HTTP first to connect and the it upgrades to
 * make it websockets connection. 
 * Now it's makes duplex communication. No connections are made fo every
 * data transportation from server or client. 
 * It's a long lasting communication. 
 * 
 * Live chats, realtime features
 */

/**
 * SMTP( Simple Mail transfer protocol) : Used in case of mailing. 
 * 
 * Sender --> SMTP Server ---> Receiver.
 * 
 * 1. Req made from sender, but no data is returned for sender here. 
 * 2. User sends to SMTP server, it then knows it's protocol and knows
 *    how to send to the receiver. 
 * 
 */

/**
 * FDP (File Transfer Protocol): 
 * 1. When large data has to be send, we generally think of below ways,
 *    stream data, use http, convert data to binary data. 
 * 2. Use case is for sending huge files. 
 * 3. Feature: Upload/ download files. 
 */

/**
 * Things to remember
 * 1. What are diff protocols
 * 2. How communincation happens
 * 
 */