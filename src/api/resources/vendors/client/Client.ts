/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { PropifyApi } from "@fern-api/propify";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.PropifyApiEnvironment | string;
        propifyApiSecret?: core.Supplier<string>;
        propifyApiKey: string;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * @throws {PropifyApi.DefaultError}
     */
    public async getAll(): Promise<PropifyApi.GetAllVendorsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.PropifyApiEnvironment.Demo, "/v1/vendors"),
            method: "GET",
            headers: {
                "propify-api-key": this.options.propifyApiKey,
                "propify-api-secret": await core.Supplier.get(this.options.propifyApiSecret),
            },
        });
        if (_response.ok) {
            return await serializers.vendors.getAll.Response.parse(
                _response.body as serializers.vendors.getAll.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new PropifyApi.DefaultError(
                        await serializers.DefaultError.parse(_response.error.body as serializers.DefaultError.Raw)
                    );
                default:
                    throw new errors.PropifyApiError({
                        statusCode: _response.error.statusCode,
                        responseBody: _response.error.rawBody,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PropifyApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PropifyApiTimeoutError();
            case "unknown":
                throw new errors.PropifyApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
