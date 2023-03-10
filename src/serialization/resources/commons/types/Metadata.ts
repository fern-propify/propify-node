/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PropifyApi } from "@fern-api/propify";
import * as core from "../../../../core";

export const Metadata: core.serialization.ObjectSchema<serializers.Metadata.Raw, PropifyApi.Metadata> =
    core.serialization.object({
        offset: core.serialization.number().optional(),
        limit: core.serialization.number().optional(),
        orderBy: core.serialization.list(core.serialization.unknown()),
    });

export declare namespace Metadata {
    interface Raw {
        offset?: number | null;
        limit?: number | null;
        orderBy: unknown[];
    }
}
