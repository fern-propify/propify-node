/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { PropifyApi } from "@fern-api/propify";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment: string;
        propifyApiKey?: core.Supplier<string>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Get all leases
     * @throws {PropifyApi.DefaultError}
     */
    public async getAllLeases(request?: PropifyApi.GetAllLeasesRequest): Promise<PropifyApi.AllLeases> {
        const _queryParams = new URLSearchParams();
        if (request?.orderBy != null) {
            _queryParams.append("order-by", request?.orderBy);
        }

        if (request?.offset != null) {
            _queryParams.append("offset", request?.offset.toString());
        }

        if (request?.limit != null) {
            _queryParams.append("limit", request?.limit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/leases/"),
            method: "GET",
            headers: {
                "propify-api-key": await core.Supplier.get(this.options.propifyApiKey),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.leases.getAllLeases.Response.parse(
                _response.body as serializers.leases.getAllLeases.Response.Raw
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
