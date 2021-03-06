---
slug: jamstack
date: 2020-10-19
title: 'Static sites are dead. Long live static sites?'
description: "JAMStack is a revolutionary new way to create blazing fast and secure web applications (PWA) and websites."
published: true
keywords: ['jamstack', 'technology', 'javascript', 'frontend', 'development']
---


JAMStack is a revolutionary new way to create blazing fast and secure web applications (PWA) and websites, all with dynamic content, too! It's modern architecture that provides an outstanding developer experience, cheaper infrastructure costs, easy scalability (with serverless architecture), and unbelievable SEO capabilities. To better understand this, we should travel back in time,<a rel="noreferrer noopener" href="https://www.amazon.com/Where-Wizards-Stay-Up-Late-ebook/dp/B000FC0WP6" target="_blank"> <em>Where The Wizards Stay Up Late (Yep, that's a reference to a wonderful book, check out here).</em></a>

<p style="font-size:18px"><strong>History</strong> <strong>of the</strong> <strong>World Wide Web</strong></p>

<p>In order to give things a little perspective, I recommend to check out <em>the first website ever:</em><a rel="noreferrer noopener" href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank"> http://info.cern.ch/hypertext/WWW/TheProject.html</a></p>

<figure class="wp-block-image size-large"><img src="https://screamingbox.com/wp-content/uploads/2020/10/www-Info-1-b-j-1024x522.jpg" alt="" class="wp-image-314"/></figure>

<p>The WorldWideWeb (W3) is a wide-area<a rel="noreferrer noopener" href="http://info.cern.ch/hypertext/WWW/WhatIs.html" target="_blank"> hypermedia</a> information retrieval initiative aiming to give universal access to a large universe of documents. Welcome to the beginnings of the Internet.</p>

<p>To help give a more detailed picture of how everything started, much of what there is online about W3 is linked directly or indirectly to this article, including an <a rel="noreferrer noopener" href="http://info.cern.ch/hypertext/WWW/Summary.html" target="_blank">executive summary</a> of the project, <a rel="noreferrer noopener" href="http://info.cern.ch/hypertext/WWW/Administration/Mailing/Overview.html" target="_blank">Mailing lists</a> , <a rel="noreferrer noopener" href="http://info.cern.ch/hypertext/WWW/Policy.html" target="_blank">Policy</a> , November's <a rel="noreferrer noopener" href="http://info.cern.ch/hypertext/WWW/News/9211.html" target="_blank">W3 news</a>  and <a rel="noreferrer noopener" href="http://info.cern.ch/hypertext/WWW/FAQ/List.html" target="_blank">Frequently Asked Questions</a> .</p>

<p style="font-size:18px"><strong>In The Beginning</strong></p>

<p>In the beginning, the internet consisted only of static sites. They were just markups, no wonderful styling, dynamic data, had ugly PHP, or unnecessary server-client-server communications. While this was great for the time, it started growing and the way consumers consumed content started changing. The late 1990's and early 2000's brought more dynamic content, interactions (like posting and commenting), and the<a href="https://en.wikipedia.org/wiki/Web_2.0" target="_blank" rel="noreferrer noopener"> web 2.0</a>.</p>

<p>As an answer for the consumers’ need for more interactions and control, Content Management Systems (CMS) were born, like WordPress or Drupal <em>(high5 to folks, who know Joomla! or e107).</em> These monolithic systems traditionally saved data into SQL databases, ran on a shared hosting with Apache &amp; PHP, were managed by cPanel, and caused lots of headaches.</p>

<p style="font-size:23px"><strong><u>How Do CMS's Work?</u></strong></p>

<p>In a nutshell, when a user opens a Wordpress&nbsp; website, the client asks the server for the whole page and it's content, the server then queries the database, which gets back to the server with the data. Then the server generates that data at run time, to give it back to the user. Is this good or bad? Well, while this gives the opportunity to create dynamic content, it needs unnecessary high processing power and it is extremely vulnerable, especially for a marketing website, which is the most common usage of&nbsp; CMS.</p>



<p style="font-size:18px"><strong>The Web is Slow</strong></p>



<p>The web becomes slower and slower because Wordpress's architecture has not been developed very much over the years. It goes through the same long process, referred to above, every single time - when a user opens a page it doesn't matter if the user or any other user viewed the page before.</p>

<p>The next stage of the World Wide Web was mobile. The end of 2000's and the 2010's were all about mobile devices, 3G &amp; 4G networks, the death of Flash <em>(we will never forget you, ActionScript...)</em>, smartphones and tablets. The usage of mobile phones and tablets for browsing exploded, but these devices weren't as fast as they are now, especially with 3G only connection. Less processing power, smaller screens, and slower connections meant a worse user experience, which resulted in less conversions <em>(about half of the mobile users leave the website if it loads for more than 3 seconds)</em> and sales <em>(every 100ms of waiting time means 7 percent less sales!)</em>. It was obvious there was a burning need for more optimized and mobile friendly websites.</p>

<p style="font-size:18px"><strong>CMS's Are Not Secure</strong></p>

<p>Why aren’t CMS’s secure? There are two main reasons. First, because of the unnecessary client-server communication on every pageview, which creates an opportunity for hackers to hijack that connection. The risk exponentially grows, if that CMS is a well known (looking at you, WP, by powering 30% of the internet) one. And we didn't even mention the sites with tens or hundreds of installed plugins and themes without updating those even once after the client handover.</p>

<p>The other reason is because they are not secure, from the customer's point of view. Google (you know, the company behind <em>everything</em> internet) works hard and makes it their mission to create a more polished experience for its users. So, they update the Search Algorithm from time to time. Most of these, however, are not handled well by boxed CMS systems and shared hosting providers. Think about the 2015<a href="https://en.wikipedia.org/wiki/Mobilegeddon"> Mobilegeddon</a>, or the mandatory SSL from January 2018, or the 2021<a href="https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html"> Page-Experience Update</a>. This one is a killer for most unoptimized CMS's or dynamic websites.</p>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/saUCN5oVOssLu446VgNGvVWiuDC5j77TCxANMa64zgZYywpK6k0RgqZnwiIP9nAfzrssPUljfdfxMhsUwfKFnUr89zg97dHSN1CoPPYrzgOCEcIvtBI7iK5AMH_uuTgDBUq4GFwT" alt=""/></figure>

<p class="has-text-align-center"><em>An optimized JAMStack Website Lighthouse audit</em></p>

<p class="has-text-align-center"><img width="624" height="217" src="https://lh6.googleusercontent.com/bpKi4vBJocXcjy4cZJpH799Qq7yuTIZavSmSFJSIgNvhILh7w25Cw-vOkTMCPKGmINr5tcMVyxpUJtHM1ImipCy08n3-zOYLym_8gLcPoy08V_7zsJD9xLIF2zDW73DGvVtXFWSe" /></p>

<p class="has-text-align-center"><em>An unoptimized WordPress website Lighthouse audit</em></p>

<p style="font-size:23px"><strong><u>Static is the New Dynamic</u></strong></p>

<p>So, what about JAMStack? Word consists of Javascript (JS), API, Markup, but this doesn't mean that you'll strictly need JS to start using it. Why is it better than the previous examples?</p>

<p>JAMStack sites do not require a server connection because these are static supercharged sites and the client only gets a static HTML file (and the linked assets too, of course). But where are they served from? JAMStack sites are traditionally hosted on your preferred VCS (GitHub, GitLab, etc.) and get deployed to CDN's near your customers. This means extraordinary low latency, fast loading times, and no vulnerable servers/connections.</p>

<p>Developer experience is outstanding. Use the tools you're familiar with. React? Go with Next.js or Gatsby. Vue? Try out Nuxt.js or Vuepress. Plain old JavaScript? 11ty? Continuous Integration? These all have you covered. Just link your git provider and get testing - deployment and previews are free. Focus on front-end development, deploy to the Edge by using one command, create backend functionalities with serverless Javascript functions and feel the power.</p>

<p>Need to scale? No problem, CDN handles it through Vercel or Netlify. Leave this frustration to containers and load balancers on monolithic projects. Worried about costs? You don't have to be! Start for free, then pay only for bandwidth once you have reached over thousands of page views and data transfers.</p>

<p style="font-size:18px"><strong>Static vs. Dynamic Content</strong></p>

<p>With JAMStack you have two options. First, go fully static and update data by coding when you need it. It isn't user friendly, but it works. The second option is to use a headless CMS, which is fully detached from your application. A fully featured CMS system tailored to your needs. It could be a database backed one, or Markdown based. How do you consume it? There is the J, A, and M from the JAM = Javascript, APIs, and Markup. Consume Headless CMS API's with some data fetching from JavaScript, and display them in your Markup. Every CMS update triggers a build, which builds your website by your Static Site Generator (SSG) or Server Side Rendering (SSR). This way your dynamic content will always be static.</p>

<p style="font-size:18px"><strong>Is JAMStack the Future?</strong>&nbsp;</p>

<p>Well, there are some serious disputes surrounding whether JAMStack is the future, mostly by<a href="https://thenewstack.io/wordpress-co-founder-matt-mullenweg-is-not-a-fan-of-jamstack/" target="_blank" rel="noreferrer noopener"> Matt Mulenweg, Wordpress Co-Founder</a>. But the industry is definitely growing and going in this direction. One of the biggest players in the JAMStack field is<a href="https://million-devs.netlify.com/" target="_blank" rel="noreferrer noopener"> Netlify which reached 1 million devs</a> this year, and lots of other big corporations have started using it. Some of those corporations include Nike, Spotify, IBM, Figma, AirBnB, Braun, Hopper, Victoria Beckham Beauty, Figma, and counting...</p>

<p style="font-size:18px"><strong>How to Get Started with JAMStack</strong></p>

<p>Let me help you get started with JAMStack! <a href="https://discord.gg/t85HAUu4Xq" rel="noreferrer noopener" target="_blank" >Join my Discord</a></p>
