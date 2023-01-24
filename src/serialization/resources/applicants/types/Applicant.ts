/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PropifyApi } from "@fern-api/propify";
import * as core from "../../../../core";

export const Applicant: core.serialization.ObjectSchema<serializers.Applicant.Raw, PropifyApi.Applicant> =
    core.serialization.object({
        id: core.serialization.string(),
        createdAt: core.serialization.property("created_at", core.serialization.string()),
        updatedAt: core.serialization.property("updated_at", core.serialization.string()),
        xId: core.serialization.property("x_id", core.serialization.string()),
        xPropertyId: core.serialization.property("x_property_id", core.serialization.string().optional()),
        firstName: core.serialization.property("first_name", core.serialization.string().optional()),
        middleName: core.serialization.property("middle_name", core.serialization.string().optional()),
        lastName: core.serialization.property("last_name", core.serialization.string().optional()),
        dateOfBirth: core.serialization.property("date_of_birth", core.serialization.date().optional()),
        address1: core.serialization.property("address_1", core.serialization.string().optional()),
        address2: core.serialization.property("address_2", core.serialization.string().optional()),
        city: core.serialization.string().optional(),
        state: core.serialization.string().optional(),
        zip: core.serialization.string().optional(),
        phone1: core.serialization.property("phone_1", core.serialization.string().optional()),
        phone1Type: core.serialization.property("phone_1_type", core.serialization.string().optional()),
        phone2: core.serialization.property("phone_2", core.serialization.string().optional()),
        phone2Type: core.serialization.property("phone_2_type", core.serialization.string().optional()),
        email1: core.serialization.property("email_1", core.serialization.string().optional()),
        email2: core.serialization.property("email_2", core.serialization.string().optional()),
        notes: core.serialization.string().optional(),
        integrationVendor: core.serialization.property(
            "integration_vendor",
            core.serialization.lazy(async () => (await import("../../..")).IntegrationVendor)
        ),
    });

export declare namespace Applicant {
    interface Raw {
        id: string;
        created_at: string;
        updated_at: string;
        x_id: string;
        x_property_id?: string | null;
        first_name?: string | null;
        middle_name?: string | null;
        last_name?: string | null;
        date_of_birth?: string | null;
        address_1?: string | null;
        address_2?: string | null;
        city?: string | null;
        state?: string | null;
        zip?: string | null;
        phone_1?: string | null;
        phone_1_type?: string | null;
        phone_2?: string | null;
        phone_2_type?: string | null;
        email_1?: string | null;
        email_2?: string | null;
        notes?: string | null;
        integration_vendor: serializers.IntegrationVendor.Raw;
    }
}
