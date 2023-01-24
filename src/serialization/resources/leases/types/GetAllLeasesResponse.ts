/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PropifyApi } from "@fern-api/propify";
import * as core from "../../../../core";

export const GetAllLeasesResponse: core.serialization.ObjectSchema<
    serializers.GetAllLeasesResponse.Raw,
    PropifyApi.GetAllLeasesResponse
> = core.serialization.object({
    meta: core.serialization.lazyObject(async () => (await import("../../..")).Metadata),
    results: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Lease)),
});

export declare namespace GetAllLeasesResponse {
    interface Raw {
        meta: serializers.Metadata.Raw;
        results: serializers.Lease.Raw[];
    }
}
