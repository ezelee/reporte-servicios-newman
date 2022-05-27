require('dotenv').config({path: __dirname + '/.env'})
const apiToken = process.env['API_TOKEN'];
//const apiToken = '';
const newman = require('newman'); // require newman in your project

var postmanCollection = '';
var postmanCollectionTest = '';
if (apiToken) {
	postmanCollection = 'https://www.postman.com/collections/ae8a9914-cd0f-4b3e-ac34-34b3391e2855';
    //postmanCollection = 'https://api.getpostman.com/collections/10402387-5398570a-ba98-4a4d-97f9-d5695e4d85e2?apikey=' + apiToken;

    postmanCollectionTest = 'https://api.getpostman.com/collections/10402387-65df4021-7b80-4f79-9259-b7b56542770d?apikey=' + apiToken;
}

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: postmanCollection,
    reporters: ['htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './pint.html',
            // template: './template.hbs'
            // logs: true,
            // showOnlyFails: true,
            // noSyntaxHighlighting: true,
            // testPaging: true,
            browserTitle: "Reporte Servicios",
            title: "Reporte Servicios - PINT",
            // titleSize: 4,
            // omitHeaders: true,
            skipHeaders: "Authorization,AuthorizationESB,AuthorizationInfo",
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

//test
// newman.run({
//     collection: postmanCollectionTest,
//     reporters: ['htmlextra'],
//     iterationCount: 1,
//     reporter: {
//         htmlextra: {
//             export: './test.html',
//             // template: './template.hbs'
//             // logs: true,
//             // showOnlyFails: true,
//             // noSyntaxHighlighting: true,
//             // testPaging: true,
//             browserTitle: "Reporte Servicios",
//             title: "Reporte Servicios - Test",
//             // titleSize: 4,
//             // omitHeaders: true,
//             skipHeaders: "Authorization,AuthorizationESB,AuthorizationInfo",
//             // omitRequestBodies: true,
//             // omitResponseBodies: true,
//             // hideRequestBody: ["Login"],
//             // hideResponseBody: ["Auth Request"],
//             // showEnvironmentData: true,
//             // skipEnvironmentVars: ["API_KEY"],
//             // showGlobalData: true,
//             // skipGlobalVars: ["API_TOKEN"],
//             // skipSensitiveData: true,
//             // showMarkdownLinks: true,
//             // showFolderDescription: true,
//             timezone: "America/Argentina/Buenos_Aires",
//             // skipFolders: "folder name with space,folderWithoutSpace",
//             // skipRequests: "request name with space,requestNameWithoutSpace"
//         }
//     }
// }, function (err) {
// 	if (err) { throw err; }
//     console.log('collection run complete!');
// });
