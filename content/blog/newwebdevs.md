---
title: Advice for New Web Devs
description: The Indie Web doesn't exactly have a formal rulebook for good practice, and that's for good reason, you can do whatever you want. However, I still feel as though there's a few things people should know before getting into making their first site or a new site. (yes this article mentions SSGs again, no i'm not sorry)
date: 2024-08-21
tags: 
    web
---
There's not really a formal set of guidelines to web development, and I don't intend to make them, rather, my intention with this article is to make it so you don't have to completely remake your site after 3 weeks as I did. I'll mostly be covering things on the back-end that help with convenience, but I will touch briefly on accessibility. 

The worst trend I've been seeing as of late has to do with iframes. Iframes themselves aren't bad, and can be very useful, but improper usage of them is terrible to work with and terrible for the user. Iframes should not be used as a substitute for seperate pages, this makes your site a royal pain to work on, and effectively makes the site useless to screen reader users. If you need a way to keep a consistent layout on every page, either make a boiler plate layout you can copy paste, or put your site into an SSG with a templating engine. 

On a similar templating note, make sure your site has a consistent navbar layout. It's fine to change the layout of the individual pages if you want to, but the navbar is effectively the core of how your site is operated. It's important for the layout of it to be consistent, as it allows the user to orient themselves, and if needed, return to a previous page. Don't be the type of person to have the navbar mysteriously disappear and just expect the user to go back manually, your site viewers are more lazy than you think.

Another thing I feel a lot of new web developers (myself included, my first site was a war crime) forget, is that people have different screen sizes than you. Just because your site works perfectly on your 4K monitor doesn't mean that the majority of users on a 1080p monitor won't end up with a horizontal scrollbar. Generally speaking, don't make your website any wider than 1024px, this means that basically anyone, regardless of monitor, will be able to use your site without scrolling horizontally. Build your site down, not to the sides.

On a similar note of screen variations, color temperature is another rather important one. About a month ago there was a rather interesting saga involving a user with a site that used grey text on a black background. This was perfectly legible for them, and anyone else using an OLED monitor, but for everyone else it was impossible to read. Stick to contrasting colors, there's a reason so many sites still go for grey and white and white and black.


<img src="/img/unlegible.png" alt="black text on a grey background saying this isnt legible, sorry" height="50px" style="display: block; margin: 0 auto"/>

This is on a very different note, but don't feel the need to push your site out right away, I published my first site after a few hours of working on it, and it had aproximately nothing of substance. There's no need to rush your website out, take your time to get all the links filled out, nobody's going to mind waiting a few days to see your site. A more complete site is always better than a site with twenty links that all lead to nothing but a "sowwy coming soon" page.

I tried to hit all the bases of things I've noticed on others sites and from my old sites, but there's absolutely more things you'll end up learning through trial and error. If anyone else can think of some major things I missed, feel free to put them in the comments. TM out.