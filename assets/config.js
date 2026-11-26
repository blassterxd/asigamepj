config = {
    // Пусто: клиент работает с тем же адресом, с которого открыт сайт (nginx проксирует /api и /sionline на локальный сервер)
    serverUri: '',
    serverDiscoveryUri: '',
    rootUri: '/',
    ads: '<b></b>',
    rewriteUrl: true,
    forceHttps: false,
    registerServiceWorker: false,
    enableNoSleep: false,
    askForConsent: false,
    siStatisticsServiceUri: '/sistatistics',
    appRegistryServiceUri: '',
    clearUrls: false
};

firebaseConfig = null;

onLoad = function () {
    console.log('SIGame successfully loaded');
};
