import x from "https://cdn.jsdelivr.net/npm/@microsoft/powerbi-client/dist/powerbi.min.js";

var embedConfiguration = {
    type: 'report',   // Specify report or dashboard
    tokenType: models.TokenType.Embed,
    accessToken: 'YOUR_EMBED_TOKEN_HERE',
    embedUrl: 'YOUR_EMBED_URL_HERE',
    id: 'YOUR_REPORT_ID_HERE',
    pageView: 'fitToWidth'
};

var reportContainer = document.getElementById('reportContainer');
var powerbi = window.powerbi;
var report = powerbi.embed(reportContainer, embedConfiguration);

report.on('loaded', function() {
    console.log('Report loaded');
});
