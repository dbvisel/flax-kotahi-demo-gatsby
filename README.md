# flax-kotahi-demo-gatsby

Version of the Flax Kotahi demo done with Gatsby.

Public version: https://flax-kotahi-demo-gatsby.netlify.app

## Benefits:

- this is really easy to make (Gatsby gives us GraphQL & React for free)
- we get a client-side GraphQL playground in dev mode
- built on React, so we can use Pubsweet component library

## Downsides

- Gatsby's support for ISR isn't great at this point.

## To do:

- pull in a bit more metadata from WordPress
- actually implement Pubsweet components
  - do we need to process HTML coming in?

## Remember

Netlify build hook (which triggers rebuild) can be fired like this: 

```
curl -X POST -d {} https://api.netlify.com/build_hooks/61234a4e2d8c8275e0804bf5
```