# NoahWright.dev Site
This repo holds the code used to build the site at NoahWright.dev.  A tutorial for getting your own React-based site hosted on GitHub can be found here: https://github.com/gitname/react-gh-pages

# Features
As I add features, I will list them here.
- React + Bootstrap site, hosted on GitHub
- Resume generated from JSON file

# Work in Progress
I'm working on this in my (very limited) spare time, so pardon the dust.  Here are the changes I hope to see coming down the pipeline.

## 🥳 Recent Changes
- Revamped look and feel.  Used reactstrap to bootstrap-ify the site.  Still not the prettiest, but it *is* responsive.  Pages changed:
- Fixed copyright symbol in footer and made year based on current year.
- Resume download should work now

## ⌚ Future Changes
Some of the below will be selected for the next commit once I'm done with the above:
- A better favicon that isn't just my initials.
- Portfolio - add links to actual stuff
- Contact - make form actually function
- Parallax background somewhere, because they're cool 😎
- A color scheme of some sort
- Class for "skill icons"
  - Can be used throughout the site to indicate proficiency or what a project uses just be inserting a tag
  - Each skill needs an icon in at least two sizes (a scaleable SVG would be preferred)
  - Tapping / hovering should bring up a tooltip explaining why the icon is there (e.g.: "Site was written in React", "C# Backend")
- Class for "how's it done"
  - Anywhere something special is done on the site (special code written, outside services called, etc) have a common callout that can be clicked / hovered over to explain what's being done
- Movement / Animations
  - Color change when hovering over things
  - When going from page to page
  - When first landing on the page
  - Things appear as you scroll - resume is a good spot for that
  - Cycling through images in a spot or two
  - Something should pop up when scrolled all the way down
- Google Analytics

## 🏁 Changes Coming Eventually (maybe)
These are my more lofty goals, such as:
- Light/dark mode selectable in top navigation
- JSON-based resume improvements
  - Create an interface to enter resume details and create JSON
  - Eventually: have that JSON file served up by a cloud database
- Ongoing: add more projects to the Portfolio section