---
title: 'The Evolution of HTTP - Understanding HTTP 0.9, HTTP 1.0, HTTP 1.1, HTTP 2 and HTTP 3'
publishedOn: 2025-02-02
slug: 'the-evolution-of-http-understanding-http-09-http-10-http-11-http-2-and-http-3'
metaDescription: 'Learn everything about HTTP, from its early versions (HTTP/0.9, HTTP/1.0, HTTP/1.1) to modern advancements like HTTP/2 and HTTP/3. Understand key features, improvements, and how HTTP powers the web today.'
setup: |
  import { Picture } from "astro-imagetools/components";
---

**Hypertext Transfer Protocol (HTTP)** is an application-layer protocol for transmitting hypermedia documents, such as **HTML pages, text, images, videos**, and much more. It was designed for communication between **web browsers and web servers**, but it can also be used for other purposes, such as **machine-to-machine communication, programmatic access to APIs,** and more.

## HTTP/0.9

- **Released in 1991.**
- The request only had one HTTP method, **GET**, to retrieve a resource using a path.
- The response included only an **HTML file**. There were **no HTTP headers, status codes, etc.**
- To indicate an error, the server would provide an **error-specific HTML page** in response.

**Request:**

```http
GET /index.html
```

**Response:**

```http
<html>
  Welcome to the example.re homepage!
</html>
```

## HTTP/1.0

- **Finalized in 1996.**
- **Versioning information** was sent within each request (**HTTP/1.0 was appended to the GET line**).
- Introduced multiple **HTTP methods**:
  - **HEAD** and **POST** methods were added.
  - **POST** was introduced to send **data from client to server**.
- Introduced the concept of **HTTP headers**.
- **Status codes** were added to indicate **success or failure**.
- Allowed the transmission of **documents other than plain HTML files** using the **Content-Type header**.
- In the meantime, proper **standardization was in progress** alongside HTTP/1.0 implementations.

## HTTP/1.1

- **Published in early 1997** (a few months after HTTP/1.0).
- **Persistent connections** introduced to reuse an HTTP connection instead of opening a new **TCP connection** for each request.
- **Keep-alive** mechanism added:
  - Clients sent the **Connection: keep-alive** header.
  - The server responded with **Connection: keep-alive** to maintain the connection.
- **Pipelining** introduced to allow sending multiple requests over the same connection without waiting for responses, reducing latency.
- **Chunked transfer encoding** introduced:
  - Allowed the server to send **data in chunks** without knowing the total size beforehand.
  - Reduced latency and supported **dynamic content generation**.
- **Enhanced cache control mechanisms**:
  - Added headers like **Cache-Control**, **ETag**, and **Last-Modified**.
- **Content negotiation** introduced:
  - **Accept:** (Type Negotiation)
  - **Accept-Language:** (Language Negotiation)
  - **Accept-Encoding:** (Encoding Negotiation)
- **Host header** introduced, allowing multiple domains on a single IP address (**Server colocation**).

**Example HTTP/1.1 Request:**

```http
GET /api/products HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: application/json
Accept-Encoding: gzip, deflate
Accept-Language: en-US, fr;q=0.8
Cache-Control: max-age=3600
Connection: keep-alive
```

**Example HTTP/1.1 Response:**

```http
HTTP/1.1 200 OK
Date: Wed, 30 Jan 2025 12:34:56 GMT
Server: Apache/2.4.41 (Ubuntu)
Content-Type: application/json
Content-Encoding: gzip
Transfer-Encoding: chunked
ETag: "abc123etag"
Cache-Control: public, max-age=3600
Vary: Accept-Encoding
Connection: keep-alive

1F
{"id":1,"name":"Laptop"}
14
{"id":2,"name":"Smartphone"}
0
```

- **First published as [RFC 2068](https://datatracker.ietf.org/doc/html/rfc2068) in January 1997.**

### Secure Transmission with SSL and TLS

- **SSL (1994)** introduced encryption to HTTP, enabling **secure e-commerce**.
- SSL evolved into **TLS**, essential for **protecting private data**.

### HTTP for Complex Applications

- **WebDAV (1996)** extended HTTP for **document editing, address books, and calendars**.
- **REST (2000s)** became the norm for **APIs**, using standard HTTP methods.
- **Server-Sent Events (SSE)** and **WebSockets** extended HTTP capabilities for **real-time communication**.
- **Security models evolved**, introducing headers like **CORS**, **CSP**, **Do Not Track (DNT)**, and **X-Frame-Options**.

## HTTP/2

- **Released in 2015.**
- The web became more **media-rich** and **interactive**, requiring better performance.
- **Google’s SPDY** protocol inspired **HTTP/2**, which improved **latency and security**.
- **Binary protocol:** Faster and more efficient than text-based HTTP/1.x.
- **Header compression** to reduce HTTP header size.
- **Multiplexing:** Multiple requests and responses can be sent over a single connection **simultaneously**.
- **Better network resource utilization** by avoiding multiple TCP connections.
- **Server push** allows **sending resources** before the client requests them.
- **Alternative services** via the `Alt-Svc` header for improved routing.
- **Backward compatible** with HTTP/1.1.

## HTTP/3

- **Uses QUIC instead of TCP**, making it faster and more reliable.
- **QUIC reduces latency** by handling **packet loss** better.
- **QUIC is built on top of UDP**, it is not directly affected by the limitations of TCP
- **Supports multiplexing** like HTTP/2 but avoids TCP’s limitations.
- **Most major browsers support HTTP/3**, including **Chrome, Edge, and Firefox**.

## References

- https://developer.mozilla.org/en-US/docs/Web/HTTP
- https://http.dev/
- https://en.wikipedia.org/wiki/HTTP
