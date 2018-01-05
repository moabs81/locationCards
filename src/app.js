import { buildTableComponent } from './components/workBenchContainer/jsModules/workBenchLayout'; //import the wrapper page. parallax baby #ForNoGoodReason

import React from 'react'; //import React
import ReactDOM from 'react-dom'; //import ReactDOM

import APICall from './components/application/branchCard/jsModules/apiCalls';
import BranchCards from './components/application/branchCard/jsModules/branchCard'; //React Component

//get data using APICall
const locationsAPICall = function (cbReturn) {
    const buildAPICall = {
        /*baseURI: 'http://localhost:3000',
        searchURI: '/offices',*/
        baseURI: 'https://my-json-server.typicode.com/moabs81/fakeJSONServer',
        searchURI: '/officeCards',
        method: 'GET',
        success: function (result) {
            cbReturn(result);
        }
    };
    APICall.call(buildAPICall);
};

buildTableComponent(function (result) { //callback function returns the DOM target for your app   
    const targetDiv = result;
    locationsAPICall(function (result) {
        ReactDOM.render(
            <BranchCards locationData={JSON.parse(result.srcElement.responseText)} />, document.getElementById(targetDiv)
        );
    });
});