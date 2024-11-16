---
title: Thoughts on Astro (vs. 11ty)
description: Astro is an extremely popular SSG, and I can see why, but honestly, I'm not sure it's the best for personal sites. The great trademarkhell.net SSG discourse is back...
date: 2024-11-17
tags: 
        - web
        - opinion
---
SSGs are a topic that come up in the Nekoweb Discord at least once a week, and usually, it defaults to ThinLiquid (thinliquid.dev) shilling whatever extremely esoteric proprietary system he currently uses, and everyone else shilling 11ty, but as of late, Astro has been coming up quite a bit. Astro piqued my interest, and as such, I've been experimenting with it a bit for the past day or so, before I decide what to build my next iste version on.

Astro is rather interesting to me, as it's pretty much the opposite of 11ty, despite both serving the same purose. 11ty, for good and for bad, is as barebones as it gets, you choose a templating language of your choice, and for the most part, it's just HTML you're writing. 11ty is a lot less about what it offers, and more, that you can do whatever you want with it. There's pretty much zero restrictions, you can use just about any UI framework, and all the commonly used templating languages, all at the same time, if you really want.

Astro, on the other hand, is a full framework in and of itself, whilst also having native support for Tailwind, and a variety of UI frameworks, and a rather interesting pseudo-dynamic "island" system. It's in this complexity, though, that I feel it suffers. Astro, with all the same .MD files as this website currently has, took 4-5 seconds to build the site, whereas 11ty does this in less than half a second, which is extremely important when you're localhosting the site as you work on it. I'm sure that there's a way to trim down Astro and get it to build your site faster, be it with Bun or Yarn, or the like, but I'm stubborn, and want my SSG to 'just work'. 

In the "field" of personal websites, too, I feel as though Astro's feature set wouldn't exactly be used. If you want to use Svelte and Typescript on your personal site, with an elaborate nested templating system, power to you, but I just make my website for fun, and I find writing more or less raw HTML to be fun, even if it looks terrible. I'd rather waste my time writing HTML than waiting for Astro to build my site, especially given I'm planning to switch from .MD to .MDX, which will likely take even longer to write on Astro.

Astro is absolutely the more feature rich SSG, in fact, an SSG is just part of Astro, but, for my usecase, and I imagine a great deal of personal site's usecases, a lot of Astro's featured would just go unused. I love 11ty for it's simplicity, even if it doesn't do everything, and even if it has the worst documentation ever written.

I'll finish the new layout eventually, with 11ty. TM out.

