function sendResponse()
{
                                <script src='https://cdn-prod.securiti.ai/consent/form-consent-sdk.js'></script>
                                <script>window.addEventListener('load',
    FormConsentSDK.initialize({
        codeGenMetadata:{"formPropertyId":"8","formSelector":"[id*=\"145\"]","subjectIdentifiers":[{"name":"name","selector":"[name = \"name\"]","isPrimary":false},{"name":"Enter Email - ","selector":"[name = \"email\"]","isPrimary":true},{"name":"submit","selector":"[name = \"submit\"]","isPrimary":false}],"consentIdentifiers":[{"type":"checkbox","name":"Agree","selector":"[name = \"Agree\"]","propertyId":43150,"consentValue":"checked"}],"consentTrigger":{"action":"submit","selector":"[name = \"submit\"]"}},
        url: 'https://app.securiti.ai/privaci/v1/',
        authToken:'eb250dbe-3781-4f87-b031-b802f5125913',
        orgId:'1',
        onConsentSuccess: null,
        onConsentFailure: null
    })
)</script>
alert("Bazinga!!!")
}
