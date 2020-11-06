---
title: "Contact Discovery Abuse"
date: "2020-10-11"
draft: false
tags:
    - technology
---

Major messaging platforms such as WhatsApp offer an automated service for synchronising the contents of your address book to determine which of your contacts also use their services. This is used for mapping of your address book contents onto existing users in order for you to be able to send them a message through the service. It’s a necessary part of WhatsApp’s operation as without it, you wouldn’t be able to tell who else in your contact list uses the app. However, research[^1] into contact discovery features of modern communication platforms revealed severe privacy issues which, if exploited, can reveal not only active phone numbers but also details such as profile pictures and status descriptions. 

The paper primarily discusses the US mobile phone number space, however the approach is applicable for any country as phone numbers are centrally governed and distributed in accordance with set standards.

## What is Contact Discovery?
Contact discovery is a procedure carried out by applications such as WhatsApp which determines which contacts in your address book also use the service in order to connect you with your friends and family.

Services which utilise a centralised database approaches can easily extrapolate social graphs of their users by observing the message traffic exchanged between them. More interestingly, the contact discovery feature can potentially reveal *all* contacts of users to the service provider given that they must be matched with the service database.

### Leaking Social Graphs
Since many messengers facilitate contact discovery by simply uploading *all* of the contacts from its user’s address book.[^2] This is used so that the service can notify you about newly registered users facilitating social growth, but it can also construct a full social graph for each user — information which can be used for blackmail, social engineering and targeting.

## Crawling
Malicious users can create a pool of user accounts to crawl the database by requesting information about randomly chosen (or generated) phone numbers. Unfortunately, enumeration attacks cannot be fully prevented considering that legitimate users must be able to query the database for contacts. Traditional protection such as rate-limiting seems to be a reasonable approach, however not all platforms implement it. 

The research paper[^1] demonstrates that crawling global databases can be used to query 10% of US mobile phone numbers for WhatsApp alone in just a few weeks. Given sufficient resources and time, that number would steadily increase.

## What can be extracted?
When you join a service such as WhatsApp you are quickly encouraged to upload a photo and add a quick status, this information acts as metadata for your phone number — enriching its contextual value. Information about your activity (last seen status) can be mined to map your behaviour and activity patterns. The scary part is that this can be achieved through a random search and discovery.

Tracking this information longitudinally can also provide sufficient scope for creating behavioural models — which can be further enriched if linked to social media profiles through reverse searches of mined information.

## Phone Number Structure
Phone numbers might look different in each country, but they all follow a well-defined structure; each number starts with a country code followed by a country-specific prefix and then the subscriber number.

```
|     +44      |        77      |      00000000     |
| Country Code | Country Prefix | Subscriber Number |
```

Each country can have telephone numbers of varying length or formatting structure, for example United Kingdom mobile phone numbers are typically 11 digits long and the country code (+44) is replaced with a 0 and typically starts with a 7 i.e. +4477.

This well-defined structure can be used to reduce the number of errors when crawling the data space and focus the area of attack.


It is worrisome that a core function of messaging applications, designed to facilitate ease of use and fostering social interactions can be used as a method of data scraping. Whilst social media platforms are a prime example of big data mining wells, we often forget about the, somewhat, fundamental unit of communication which is tied to our phone number.


[^1]: [All the Numbers are US: Large-scale Abuse of  Contact Discovery in Mobile Messengers](https://encrypto.de/papers/HWSDS21.pdf)

[^2]: [Findings under the Personal Information Protection and Electronic Documents Act (PIPEDA)](https://parryaftab.blogspot.com/2014/03/what-does-whatsapp-collect-that.html)