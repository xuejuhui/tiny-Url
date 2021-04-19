# tinyUrl

**Non-Functional Requirements:**

1. The system should be highly available. This is required because, if our service is down, all the URL redirections will start failing. An explanation for how to achieve this will suffice.

   - System that is highly available can operate continuously without failing. They are well-tested and equipped with redundant components. Few Examples that can be done to obtain high availability
     having multiple servers with loadbalancer and autoScaling. AutoScaling will automatically increase and decrease server based on traffic. Multiple Server with loadbalancing will ensure performance and availability since when a single server goes down
     it will still route your traffic to available server instance. Edge server also help with availability hosting server in different regions and location so if one region server goes down, others will still handle the traffic.

2. URL redirection should happen in real-time with minimal latency.

   - To reduce the latency use redis for caching and it will improve the latency. "Not implement yet"
