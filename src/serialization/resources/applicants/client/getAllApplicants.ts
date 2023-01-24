/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PropifyApi } from "@fern-api/propify";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.applicants.getAllApplicants.Response.Raw,
    PropifyApi.AllApplicants
> = core.serialization.lazyObject(async () => (await import("../../..")).AllApplicants);

export declare namespace Response {
    type Raw = serializers.AllApplicants.Raw;
}