# PokerLeague
A poker league management app useful for socially tracking seasons, rankings, events, etc.

## Coding Standards
This app is built on [Ionic Framework](http://ionicframework.com/getting-started/). Follow the CSS and other conventions of the Ionic Framework. 

This codebase follows the [John Papa's AngularJS 1 style guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1) as closely as possible. Please do the same. 

## Developer Setup
### Setup Env

Update your OS hostname file to route "pokerleague.lssinc.com" to localhost.
> ```sudo vi /etc/hosts```

Add the hostname
> ```127.0.0.1       pokerleague.lssinc.com```

[Node Package Manager (npm)](https://www.npmjs.com)
> ```$ git clone https://github.com/tmichalski/PokerLeague.git```

[Apache Cordova](https://cordova.apache.org) & [Ionic Framework](http://ionicframework.com/getting-started/)
> ```$ npm install -g cordova ionic```

iOS Ionic/Cordova Platform (Mac OSX Only)
> ```$ ionic platform add ios```

Android Ionic/Cordova Platform
> ```$ ionic platform add android```

Browser Ionic/Cordova Platform (required for local testing)
> ```$ ionic platform add browser```

### Run App
Emulate Browser (for local development)
> ```$ ionic emulate browser```

Emulate iOS
> ```$ ionic build ios```

> ```$ ionic emulate ios```

Emulate Android
> ```$ ionic build android```

> ```$ ionic emulate android```

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
* 







