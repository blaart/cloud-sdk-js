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


import { Configuration } from "./configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';

export const BASE_PATH = "https://sandbox.api.sap.com/workflow-service/rest".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;
    protected basePath: string | undefined = BASE_PATH;
    protected axios: AxiosInstance = globalAxios;

    constructor(requestConfig: AxiosRequestConfig) {
      this.configuration = { baseOptions: requestConfig };
      this.basePath = requestConfig.baseURL;
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}
