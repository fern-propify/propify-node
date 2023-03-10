/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PropifyApi } from "@fern-api/propify";
import * as core from "../../../../core";

export const ErrorMessage: core.serialization.ObjectSchema<serializers.ErrorMessage.Raw, PropifyApi.ErrorMessage> =
    core.serialization.object({
        message: core.serialization.string(),
    });

export declare namespace ErrorMessage {
    interface Raw {
        message: string;
    }
}
