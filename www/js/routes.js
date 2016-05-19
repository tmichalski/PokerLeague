angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cRB2016Season'
      2) Using $state.go programatically:
        $state.go('tabsController.cRB2016Season');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/
      /page1/tab2/
  */
  .state('tabsController.cRB2016Season', {
    url: '/',
    views: {
      'tab4': {
        templateUrl: 'templates/cRB2016Season.html',
        controller: 'cRB2016SeasonCtrl'
      },
      'tab2': {
        templateUrl: 'templates/cRB2016Season.html',
        controller: 'cRB2016SeasonCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cRB2016123Paul'
      2) Using $state.go programatically:
        $state.go('tabsController.cRB2016123Paul');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/event/1
      /page1/tab2/event/1
  */
  .state('tabsController.cRB2016123Paul', {
    url: '/event/1',
    views: {
      'tab4': {
        templateUrl: 'templates/cRB2016123Paul.html',
        controller: 'cRB2016123PaulCtrl'
      },
      'tab2': {
        templateUrl: 'templates/cRB2016123Paul.html',
        controller: 'cRB2016123PaulCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cRB2016612Schulz'
      2) Using $state.go programatically:
        $state.go('tabsController.cRB2016612Schulz');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/event/2
      /page1/tab2/event/2
  */
  .state('tabsController.cRB2016612Schulz', {
    url: '/event/2',
    views: {
      'tab4': {
        templateUrl: 'templates/cRB2016612Schulz.html',
        controller: 'cRB2016612SchulzCtrl'
      },
      'tab2': {
        templateUrl: 'templates/cRB2016612Schulz.html',
        controller: 'cRB2016612SchulzCtrl'
      }
    }
  })

  .state('tabsController.seasons', {
    url: '/seasons',
    views: {
      'tab2': {
        templateUrl: 'templates/seasons.html',
        controller: 'seasonsCtrl'
      }
    }
  })

  .state('tabsController.myProfile', {
    url: '/profile',
    views: {
      'tab3': {
        templateUrl: 'templates/myProfile.html',
        controller: 'myProfileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.addEvent'
      2) Using $state.go programatically:
        $state.go('tabsController.addEvent');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/event/add
      /page1/tab2/event/add
  */
  .state('tabsController.addEvent', {
    url: '/event/add',
    views: {
      'tab4': {
        templateUrl: 'templates/addEvent.html',
        controller: 'addEventCtrl'
      },
      'tab2': {
        templateUrl: 'templates/addEvent.html',
        controller: 'addEventCtrl'
      }
    }
  })

  .state('tabsController.seasonAdd', {
    url: '/season/add',
    views: {
      'tab2': {
        templateUrl: 'templates/seasonAdd.html',
        controller: 'seasonAddCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab4/')

  

});