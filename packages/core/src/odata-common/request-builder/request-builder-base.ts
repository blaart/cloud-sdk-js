import { errorWithCause } from '@sap-cloud-sdk/util';
import {
  useOrFetchDestination,
  Destination,
  DestinationNameAndJwt,
  DestinationRetrievalOptions,
  isDestinationNameAndJwt
} from '../../connectivity/scp-cf';
import { ODataRequest } from '../request/odata-request';
import { ODataRequestConfig } from '../request/odata-request-config';

/**
 * Base class for all request builders.
 *
 * @typeparam EntityT - Type of the entity to create a request for
 */
export abstract class MethodRequestBuilderBase<
  RequestConfigT extends ODataRequestConfig = any
> {
  /**
   * Creates an instance of MethodRequestBuilderBase.
   *
   * @param requestConfig - Request configuration to initialize with
   */
  constructor(public requestConfig: RequestConfigT) {}

  /**
   * Create the url based on configuration of the given builder.
   *
   * @param destination - Destination to execute the request against
   * @param options - Options to employ when fetching destinations.
   * @returns Promise resolving to the url for the request
   */
  async url(
    destination: Destination | DestinationNameAndJwt,
    options?: DestinationRetrievalOptions
  ): Promise<string> {
    const request = await this.build(destination, options);
    return request.url();
  }

  /**
   * Create the relative url based on configuration of the given builder.
   *
   * @returns The relative url for the request
   */
  relativeUrl(): string {
    return this.build().relativeUrl();
  }

  /**
   * Add custom headers to the request.
   *
   * @param headers - Key-value pairs denoting additional custom headers
   * @returns The request builder itself, to facilitate method chaining
   * @deprecated Since version 1.34.0 Use [[addCustomHeaders]] instead.
   */
  withCustomHeaders(headers: Record<string, string>): this {
    this.requestConfig.addCustomHeaders(headers);
    return this;
  }

  /**
   * Add custom headers to the request. Existing headers will be overwritten.
   *
   * @param headers - Key-value pairs denoting additional custom headers.
   * @returns The request builder itself, to facilitate method chaining.
   */
  addCustomHeaders(headers: Record<string, string>): this {
    this.requestConfig.addCustomHeaders(headers);
    return this;
  }

  /**
   * Add custom query parameters to the request.
   *
   * @param queryParameters - Key-value pairs denoting additional custom query parameters to be set in the request
   * @returns The request builder itself, to facilitate method chaining
   * @deprecated Since version 1.34.0 Use [[addCustomQueryParameters]] instead.
   */
  withCustomQueryParameters(queryParameters: Record<string, string>): this {
    this.requestConfig.addCustomQueryParameters(queryParameters);
    return this;
  }

  /**
   * Add custom query parameters to the request. If a query parameter with the given name already exists it is overwritten.
   *
   * @param queryParameters - Key-value pairs denoting additional custom query parameters to be set in the request
   * @returns The request builder itself, to facilitate method chaining
   */
  addCustomQueryParameters(queryParameters: Record<string, string>): this {
    this.requestConfig.addCustomQueryParameters(queryParameters);
    return this;
  }

  /**
   * Replace the default service path with the given custom path.
   * In case of the S/4HANA apis the servicePath defaults to '/sap/opu/odata/sap/<SERVICE_NAME>' and can be overwritten here.
   *
   * @param servicePath - Path to override the default with
   * @returns The request builder itself, to facilitate method chaining
   * @deprecated Since version 1.34.0 Use [[setCustomServicePath]] instead.
   */
  withCustomServicePath(servicePath: string): this {
    this.requestConfig.customServicePath = servicePath;
    return this;
  }

  /**
   * Replace the default service path with the given custom path.
   * In case of the S/4HANA apis the servicePath defaults to '/sap/opu/odata/sap/<SERVICE_NAME>' and can be overwritten here.
   *
   * @param servicePath - Path to override the default with
   * @returns The request builder itself, to facilitate method chaining
   */
  setCustomServicePath(servicePath: string): this {
    this.requestConfig.customServicePath = servicePath;
    return this;
  }

  build(): ODataRequest<RequestConfigT>;
  build(
    destination: Destination | DestinationNameAndJwt,
    options?: DestinationRetrievalOptions
  ): Promise<ODataRequest<RequestConfigT>>;
  /**
   * Build an ODataRequest that holds essential configuration for the service request and executes it.
   * @deprecated Since v1.30.0. This method will be protected and should not be used externally.
   *
   * @param destination - Targeted destination on which the request is performed.
   * @param options - Options to employ when fetching destinations.
   * @returns The OData request executor including the destination configuration, if one was given.
   */
  build(
    destination?: Destination | DestinationNameAndJwt,
    options?: DestinationRetrievalOptions
  ): ODataRequest<RequestConfigT> | Promise<ODataRequest<RequestConfigT>> {
    if (destination) {
      return useOrFetchDestination(destination, options)
        .then(dest => {
          if (!dest) {
            throw Error(noDestinationErrorMessage(destination));
          }
          return new ODataRequest(this.requestConfig, dest);
        })
        .catch(error =>
          Promise.reject(
            errorWithCause(noDestinationErrorMessage(destination), error)
          )
        );
    }
    return new ODataRequest(this.requestConfig);
  }
}

function noDestinationErrorMessage(
  destination: Destination | DestinationNameAndJwt
): string {
  return isDestinationNameAndJwt(destination)
    ? `Could not find a destination with name "${destination.destinationName}"! Unable to execute request.`
    : 'Could not find a destination to execute request against and no destination name has been provided (this should never happen)!';
}
