/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PropifyApi } from "@fern-api/propify";
import * as core from "../../../../core";

export const GetAllApplicantsResponse: core.serialization.ObjectSchema<
    serializers.GetAllApplicantsResponse.Raw,
    PropifyApi.GetAllApplicantsResponse
> = core.serialization.object({
    meta: core.serialization.lazyObject(async () => (await import("../../..")).Metadata),
    results: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Applicant)),
});

export declare namespace GetAllApplicantsResponse {
    interface Raw {
        meta: serializers.Metadata.Raw;
        results: serializers.Applicant.Raw[];
    }
}
