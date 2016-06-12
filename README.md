# PokerLeague
A poker league management app useful for socially tracking seasons, rankings, events, etc.

## Coding Standards
This app is built on [Ionic Framework](http://ionicframework.com/getting-started/). Follow the CSS and other conventions of the Ionic Framework. 

This codebase follows the [John Papa's AngularJS 1 style guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1) as closely as possible. Please do the same. 

## Developer Setup
### Setup Env

Update your OS hostname file to route "pokerleague.lssinc.com" to localhost.
> ```sudo vi /etc/hosts```

Add the following line to /etc/hosts
> ```127.0.0.1       pokerleague.lssinc.com```

Install [Node Package Manager (npm)](https://www.npmjs.com)

Clone the PokerLeague project locally (assumes you already have [git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git))
> ```$ cd /my/workspace```

> ```$ git clone https://github.com/tmichalski/PokerLeague.git```

> ```$ cd /my/workspace/PokerLeague```

[Apache Cordova](https://cordova.apache.org) & [Ionic Framework](http://ionicframework.com/getting-started/)
> ```$ npm install -g cordova ionic```

iOS Ionic/Cordova Platform (Mac OSX Only)
> ```$ ionic platform add ios```

Android Ionic/Cordova Platform
> ```$ ionic platform add android```

Browser Ionic/Cordova Platform (required for local testing)
> ```$ ionic platform add browser```

Install app dependencies
> ```$ bower install```

### Run App
Be sure the PokerLeagueAPI app is running and listening on whatever hostname:port is configured in /www/app/app.config.js

Emulate Browser (for local development)
> ```$ ionic emulate browser```

Emulate iOS
> ```$ ionic build ios```

> ```$ ionic emulate ios```

Emulate Android
> ```$ ionic build android```

> ```$ ionic emulate android```

## App Config
* Application config params are stored in */www/app/app.config.js*
* serverHostName: Sets the web services hostname and port. Default is *http://pokerleague.lssinc.com:8080*

### IDE: JetBrains WebStorm / IntelliJ IDEA
* IntellJ IDE > Preferences > Plugins > Browse Repositories...  and install the following plugins:
  * PhoneGap/Cordova
  * AngularJS
* Run > Edit Configurations
  * Click the "+" sign to add a new configuration
  * Choose "PhoneGap/Cordova" from the "+" drop-down list
  * Enter the following options
    * Name: Emulate Browser
    * PhoneGap/Cordova executable: /usr/local/bin/ionic
    * PhoneGap/Cordova working directory: <path to your project> (ie /Users/tim/Documents/workspace/PokerLeague)
    * Command: emulate
    * Platform: browser
  * Click "Ok" to save
  * Repeat this setup for each platform by changing the "Name" and "Platform" variables.
* In the "Run" drop-down list in the main toolbar, select your run option and click the green "Play" button to launch the app. 
  * Be sure the PokerLeagueAPI app is running and listening on whatever hostname:port is configured in */www/app/app.config.js*





