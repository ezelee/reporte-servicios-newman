require('dotenv').config({path: __dirname + '/.env'})
const apiToken = process.env['API_TOKEN'];
//const apiToken = '';
const newman = require('newman'); // require newman in your project

var postmanCollection = '';
if (apiToken) {
	postmanCollection = 'https://api.getpostman.com/collections/10402387-5398570a-ba98-4a4d-97f9-d5695e4d85e2?apikey=' + apiToken
} else {
	postmanCollection = './newman/API.postman_collection.json'
}

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: postmanCollection,
    reporters: ['htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './index.html',
            // template: './template.hbs'
            // logs: true,
            // showOnlyFails: true,
            // noSyntaxHighlighting: true,
            // testPaging: true,
            browserTitle: "Reporte API",
            title: "Reporte Servicios API",
            // titleSize: 4,
            // omitHeaders: true,
            skipHeaders: "Authorization,AuthorizationESB",
            // omitRequestBodies: true,
            // omitResponseBodies: true,
            // hideRequestBody: ["Login"],
            // hideResponseBody: ["Auth Request"],
            // showEnvironmentData: true,
            // skipEnvironmentVars: ["API_KEY"],
            // showGlobalData: true,
            // skipGlobalVars: ["API_TOKEN"],
            // skipSensitiveData: true,
            // showMarkdownLinks: true,
            // showFolderDescription: true,
            timezone: "America/Argentina/Buenos_Aires",
            // skipFolders: "folder name with space,folderWithoutSpace",
            // skipRequests: "request name with space,requestNameWithoutSpace"
        }
    }
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
