# PP2

## Intro

![Screenshots of PP2 website on different devices]

View PP2 on Github Pages.

![GitHub last commit](https://img.shields.io/github/last-commit/EJFleet/cooking-quiz)
![GitHub language count](https://img.shields.io/github/languages/count/EJFleet/cooking-quiz)
![GitHub top language](https://img.shields.io/github/languages/top/ejfleet/cooking-quiz)
![W3C Validation](https://img.shields.io/w3c-validation/default?targetUrl=https%3A%2F%2Fejfleet.github.io%2Fcooking-quiz%2F)


---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
 
* [Features](#features)
  * [Header](#header)
  * [Footer](#footer)
  * [Favicon](#favicon)
 
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)
  * [Functionality](#functionality)
  * [Browser Compatibility](#browser-compatibility)
  * [Responsiveness](#responsiveness)
  * [HTML and CSS Validation](#html-and-css-validation)
  * [Solved Bugs](#solved-bugs)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

### User Stories

#### First-time Visitor Goals

I want to: 
* Play an entertaining game
* Understand the rules of the game
* Know what is the highest score that has been achieved
* Be told what the correct answer is if I get a question wrong
* See what my score is at the end of the game
* Be given the opportunity to play again

#### Returning Visitor Goals

I want to: 
* Try to beat my highest score
* Answer some questions that I didn't see on the first round

#### Frequent Visitor Goals

I want to:
* Keep improving my score
* Learn new facts about cooking and food


## Design

### Colour Scheme

The colour palette was created using the [Coolors](https://coolors.co/) website.  I checked the accessibility of the colours on [Deque University](https://dequeuniversity.com/rules/axe/4.9/color-contrast) and adjusted the accent colour (orange) to improve the contrast.

The main colours are green for the background (with a gradient that gets lighter from left to right) and orange for the buttons.

![Colour palette for the site](documentation/feature-screenshots/cooking-quiz-palette2.png)

### Typography

Google Fonts was used to import the chosen fonts for use in the site.

I chose to use the Oswald font throughout the site as it looks clean and modern.  It also comes in different weights, which is useful for different headings.

![Google Fonts example for the site](documentation/feature-screenshots/oswald-font-sample.png)

### Imagery

The imagery for the site consists of a small chef's hat for the favicon and a larger chef's hat for the logo in the header.

![Favicon](/chef-hat-favicon.png)

![Logo](/assets/images/chef-hat.png)

### Wireframes


#### Mobile

<details >
<summary>Mobile</summary>  

![wireframe-mobile](documentation/wireframes/cooking-quiz-mobile.png)
</details> 

#### Tablet

<details >
<summary>Tablet</summary>  

![wireframe-tablet](documentation/wireframes/cooking-quiz-tablet.png)
</details> 

#### Laptop / Desktop
<details >
<summary>Laptop / Desktop</summary>  

![wireframe-laptop-desktop](documentation/wireframes/cooking-quiz-pc.png)
</details> 


## Features

The website consists of one page with four different containers that are displayed/hidden depending on which stage of the site the user is at - home, game play, game over or time's up.

The site fits into the height of the screen and there is no need for scrolling.

The site was designed mobile-first and is responsive at every screen size.

The sections are divided into:

### Header

#### Mobile
![Header for mobile]

#### Desktop
![Header for desktop]

The header stretches across the whole viewport, even on very large screens, to give a framing effect to the content below.

### Footer

#### Mobile
![Footer for mobile]

#### Desktop
![Footer for desktop]

The footer contains a link to the home page.

As with the header, the footer stretches across the whole screen to give a framing effect.

### Favicon

![Favicon](/chef-hat-favicon.png)

The favicon for the site was downloaded from [Flaticon](https://www.flaticon.com/free-icon/chef-hat_4443003?k=1717963724519&sign-up=google) and is attributed to [Freepik](https://www.flaticon.com/authors/freepik).



### Future Implementations

I would like to add the following features:



### Accessibility

I have tried to make the site as accessible as possible.  Steps that I have been conscious to take are:

* Using semantic HTML
* Choosing fonts that are dyslexia-friendly
* Using descriptive alt attributes on all images 
* Providing aria-labels for screen readers where there are icons used and no text, i.e. the social media icons in the footer
* Ensuring that there is a sufficient colour contrast throughout the site


## Technologies Used

### Languages Used

HTML, CSS and JavaScript were the main languages used to build this site.  

### Frameworks, Libraries & Programs Used

Git - For version control.

Github - To save and store the files for the website.

Gitpod - For developing the site.

Google Fonts - To import the fonts used on the website.

Font Awesome - For the iconography on the website.

Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.

Lighthouse - Chrome extension used to assess accessibility.

[Shields.io](https://shields.io/) for adding badges to the readme.

[Favicon.io](https://favicon.io/favicon-generator/) for creating a custom favicon.

[Achecks.org](https://www.achecks.org/apca-wcag-3-accessible-colour-contrast-checker/) for checking the colour contrast for accessibility.

[Coolors.co](https://coolors.co) for creating a colour scheme.

[Deque Univerity](https://dequeuniversity.com/rules/axe/4.8/color-contrast) for adjusting colours to meet accessibility standards.

[Beautifier.io](https://beautifier.io/) to format the site's code.


## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Emma's Cooking Quiz](https://ejfleet.github.io/cooking-quiz).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [Emma's Cooking Quiz](https://github.com/EJFleet/cooking-quiz).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in or sign up to [Github](https://github.com/).
2. Go to the repository for this project, [Emma's Cooking Quiz](https://github.com/EJFleet/cooking-quiz).
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in or sign up to [Github](https://github.com/).
2. Go to the repository for this project, [EJFleet/cooking-quiz](https://github.com/EJFleet/cooking-quiz).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

### Functionality

|Test Label|Test Action|Expected Outcome|Test Outcome|
|-----|-----|-----|-----|


### Browser Compatibility

The website was tested on:
* Chrome
* Edge
* Safari
* Firefox
* Chrome for Android

### Responsiveness

The site was tested on the following devices: 
* Samsung S9
* Samsung Galaxy S22
* Google Pixel 6
* iPad Pro 2020
* 15.6" Laptop
* Desktop PC

It was extensively tested in Chrome Dev Tools for responsiveness from 300px - 5000px.

### HTML and CSS Validation

I used the W3C Markup Validator and W3C CSS Validator to validate the site and to ensure there were no syntax errors contained therein.

#### HTML



#### CSS


### Lighthouse

I used the Chrome extension Lighthouse to test the site, particularly for Performance and Accessibility.  Results below.

![Lighthouse results]


### Solved Bugs

* Clicked answer-button did not revert back to its original state when the next question was displayed, in mobile view only. 

* 

* 

## Credits

### Code Used



### Content


### Media


  
### Acknowledgments

