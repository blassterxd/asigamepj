config = {
    serverDiscoveryUri: '/api/si/servers',
    rootUri: '/',
    ads: '<b></b>',
    rewriteUrl: true,
    forceHttps: false,
    registerServiceWorker: false,
    enableNoSleep: false,
    askForConsent: false,
    siStatisticsServiceUri: '/sistatistics',
    appRegistryServiceUri: '/appregistry',
    clearUrls: false
};

firebaseConfig = null;

onLoad = function () {
    console.log('SIGame successfully loaded');
};
