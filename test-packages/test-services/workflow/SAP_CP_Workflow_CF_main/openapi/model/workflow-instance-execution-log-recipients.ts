/* tslint:disable */
/* eslint-disable */
/**
 * Workflow API for Cloud Foundry
 * This API in the SAP Cloud SDK uses the SAP Cloud Platform Workflow service REST API. With the API, you can, for example, start new workflow instances and work with tasks. <br/> For more information on how to obtain the necessary parameters, please see <a href=\"https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/abb1f66b2c3b4983b6b656654cfc3d2b.html\">Determine Service Configuration Parameters</a> in the documentation. The OAuth client you use must have <a href=\"https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/baf2847f6d1c401a83ca3a1427b8ff84.html\">extended scopes</a>.   <br/>Note: The underlying REST APIs are designed for loosely coupled clients. This means:   <ul><li>If workflow service adds fields to responses, the REST API version number does not increase. REST API clients must ignore new fields. These fields become available in the Workflow API in the SAP Cloud SDK only in new versions of the SDK.</li>   <li>The order of fields in responses and of entries in arrays may change. This applies unless the API provides an explicit means to specify the desired order.</li></ul> 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The recipients of a mail task.
 * @export
 * @interface WorkflowInstanceExecutionLogRecipients
 */
export interface WorkflowInstanceExecutionLogRecipients {
    /**
     * The \'to\' recipients.
     * @type {Array<string>}
     * @memberof WorkflowInstanceExecutionLogRecipients
     */
    to?: Array<string>;
    /**
     * The \'cc\' recipients.
     * @type {Array<string>}
     * @memberof WorkflowInstanceExecutionLogRecipients
     */
    cc?: Array<string>;
    /**
     * The \'bcc\' recipients.
     * @type {Array<string>}
     * @memberof WorkflowInstanceExecutionLogRecipients
     */
    bcc?: Array<string>;
    /**
     * The ignored recipients from \"to\", \"cc\" and \"bcc\" fields if they exist.
     * @type {Array<string>}
     * @memberof WorkflowInstanceExecutionLogRecipients
     */
    ignored?: Array<string>;
}


