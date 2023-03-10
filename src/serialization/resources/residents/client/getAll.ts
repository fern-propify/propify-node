/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PropifyApi } from "@fern-api/propify";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.residents.getAll.Response.Raw,
    PropifyApi.GetAllResidentsResponse
> = core.serialization.lazyObject(async () => (await import("../../..")).GetAllResidentsResponse);

export declare namespace Response {
    type Raw = serializers.GetAllResidentsResponse.Raw;
}
