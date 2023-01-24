/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PropifyApi } from "@fern-api/propify";
import * as core from "../../../../core";

export const Property: core.serialization.ObjectSchema<serializers.Property.Raw, PropifyApi.Property> =
    core.serialization.object({
        id: core.serialization.string(),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date()),
        xId: core.serialization.property("x_id", core.serialization.string()),
        name: core.serialization.string().optional(),
        numberOfUnits: core.serialization.property("number_of_units", core.serialization.number().optional()),
        streetAddress1: core.serialization.property("street_address_1", core.serialization.string().optional()),
        streetAddress2: core.serialization.property("street_address_2", core.serialization.string().optional()),
        city: core.serialization.string().optional(),
        state: core.serialization.string().optional(),
        zip: core.serialization.string().optional(),
        yearBuilt: core.serialization.property("year_built", core.serialization.number().optional()),
        managerName: core.serialization.property("manager_name", core.serialization.string().optional()),
        managerPhone1: core.serialization.property("manager_phone_1", core.serialization.string().optional()),
        managerPhone1Type: core.serialization.property("manager_phone_1_type", core.serialization.string().optional()),
        managerPhone2: core.serialization.property("manager_phone_2", core.serialization.string().optional()),
        managerPhone2Type: core.serialization.property("manager_phone_2_type", core.serialization.string().optional()),
        managerEmail: core.serialization.property("manager_email", core.serialization.string().optional()),
        integrationVendor: core.serialization.property("integration_vendor", core.serialization.string()),
    });

export declare namespace Property {
    interface Raw {
        id: string;
        created_at: string;
        updated_at: string;
        x_id: string;
        name?: string | null;
        number_of_units?: number | null;
        street_address_1?: string | null;
        street_address_2?: string | null;
        city?: string | null;
        state?: string | null;
        zip?: string | null;
        year_built?: number | null;
        manager_name?: string | null;
        manager_phone_1?: string | null;
        manager_phone_1_type?: string | null;
        manager_phone_2?: string | null;
        manager_phone_2_type?: string | null;
        manager_email?: string | null;
        integration_vendor: string;
    }
}
