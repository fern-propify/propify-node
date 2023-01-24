/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PropifyApi } from "@fern-api/propify";
import * as core from "../../../../core";

export const ResidentId: core.serialization.Schema<serializers.ResidentId.Raw, PropifyApi.ResidentId> =
    core.serialization.string();

export declare namespace ResidentId {
    type Raw = string;
}
