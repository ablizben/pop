# Vultr Tech Assessment

Utilizing Vultr's API to get a list of Vultr's Points of Presence,
build a UI consisting of HTML, CSS, and JavaScript.

![HTML Badge](https://img.shields.io/badge/-HTML-156DB5)
![CSS Badge](https://img.shields.io/badge/-CSS-01A990)
![JavaScript Badge](https://img.shields.io/badge/-JavaScript-01886A)

## Appendix

- [Demo](#demo)
- [Optimizations](#optimizations)
- [Roadmap](#roadmap)

## Demo

Insert gif or link to demo

## Optimizations

### Peformance Improvements

Tools used:

- Lighthouse

### Accessibility

To improve accessibility of the app, I went through the following checklist:

|     | Accessibility Changes                      |
| --- | ------------------------------------------ |
| ✓   | Semantic, valid HTML                       |
| ✓   | Alt attributes in img tags                 |
| ✓   | Aria attributes                            |
| ✓   | All content is reachable via keyboard      |
| ✓   | Ensure content and tab ordering make sense |
|     | Use sufficient color contrast              |
|     | Don't only use color to signify state      |

The one that I definitely did not follow well was using
sufficient color contrast as I was trying to follow the
site's color scheme. The following buttons showed low contrast:

- Sign up button
- Create account button
- All the location site onclick buttons.

In order to fix this, I would use a color contrast checker
and most likely invert the colors to fix.

Also, in order to make the site more accessible, I would make sure
all buttons and links not only have color changes, but
something else to show that the state has changed (ie. underline,
change font to uppercase)

Tools used:

- Lighthouse
- [WAVE](https://wave.webaim.org/)

## Roadmap

- Have API actually work.

- Run tests in Jest.

- Find proper images for each of the cities, or great
  drawings, instead of stock photos.

- Make page more accessible with recommendations above.

- Change all icons to SVG images and edit them with paths.

- Make navbar actually interactive instead of just aesthetic.
