/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PropifyApi } from "@fern-api/propify";
import * as core from "../../../../core";

export const GetAllListingsResponse: core.serialization.ObjectSchema<
    serializers.GetAllListingsResponse.Raw,
    PropifyApi.GetAllListingsResponse
> = core.serialization.object({
    meta: core.serialization.lazyObject(async () => (await import("../../..")).Metadata),
    results: core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).Listing)),
});

export declare namespace GetAllListingsResponse {
    interface Raw {
        meta: serializers.Metadata.Raw;
        results: (serializers.Listing.Raw | undefined)[];
    }
}
