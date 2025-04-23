sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hpe/svs/managepo/test/integration/FirstJourney',
		'hpe/svs/managepo/test/integration/pages/POsList',
		'hpe/svs/managepo/test/integration/pages/POsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hpe/svs/managepo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage
                }
            },
            opaJourney.run
        );
    }
);