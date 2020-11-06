import { Destination, DestinationNameAndJwt } from '../connectivity/scp-cf';
import { buildAxiosRequestConfig } from '../http-client';
import type {
  ConstructorType,
  FunctionReturnType,
  ParametersType
} from './types';

/**
 * Generic request builder for building and executing REST request requests based on apis generated by the OpenAPI generator.
 * @typeparam ApiT Interface of the generated api. All properties of the interface will be treated as functions.
 * @typeparam FnT Literal string type of the function name, must be a key of `ApiT` and represent a function.
 */
export class RestRequestBuilder<ApiT, FnT extends keyof ApiT> {
  private customHeaders: Record<string, string> = {};
  private args: ParametersType<ApiT, FnT>;

  /**
   * Create an instance of `RestRequestBuilder`.
   * @param apiConstructor Constructor of the underlying OpenApi api definition.
   * @param fn Name of the function represented in thie request builder.
   * @param args Arguments to pass to the api function.
   */
  constructor(
    private apiConstructor: ConstructorType<ApiT>,
    public fn: FnT,
    ...args: ParametersType<ApiT, FnT>
  ) {
    this.args = args;
  }

  /**
   * Add custom headers to the request.
   *
   * @param headers Key-value pairs denoting additional custom headers
   * @returns The request builder itself, to facilitate method chaining
   */
  withCustomHeaders(headers: Record<string, string>): this {
    Object.entries(headers).forEach(([key, value]) => {
      this.customHeaders[key.toLowerCase()] = value;
    });
    return this;
  }

  /**
   * Execute request.
   * @param destination  Destination to execute the request against.
   * @param options Options to employ when fetching destinations.
   * @returns A promise resolving to the requested return type.
   */
  async execute(
    destination: Destination | DestinationNameAndJwt
  ): Promise<FunctionReturnType<ApiT, FnT>> {
    const requestConfig = await buildAxiosRequestConfig(destination, {
      headers: this.customHeaders
    });

    const api = new this.apiConstructor(requestConfig);
    const fn = api[this.fn];

    if (typeof fn === 'function') {
      return fn.apply(api, this.args);
    }

    throw new Error(
      `'${this.fn}' is not a function of ${this.apiConstructor.name}`
    );
  }
}
