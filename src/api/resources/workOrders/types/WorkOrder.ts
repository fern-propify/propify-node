/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PropifyApi } from "@fern-api/propify";

export interface WorkOrder {
    /** The unique identifier for the property */
    id: string;
    /** The date record first entered propify */
    createdAt: string;
    /** The date record was last updated in propify */
    updatedAt: string;
    /** The external ID from the source vendor */
    xId: string;
    /** The external ID of the property from the source vendor */
    xPropertyId?: string;
    /** The external ID of the unit from the source vendor */
    xUnitId?: string;
    /** The external ID of the resident from the source vendor */
    xResidentId?: string;
    /** The details of the work order */
    details?: string;
    /** The date the work order is due */
    dueDate?: string;
    /** The date the work order was completed */
    completedDate?: string;
    /** The contact who entered the work order */
    entryContact?: string;
    /** The date the work order was entered */
    entryDate?: string;
    /** The type of entry */
    entryType?: string;
    /** The amount of the invoice */
    invoiceAmount?: number;
    /** The number of the invoice */
    invoiceNumber?: string;
    /** The notes of the work order */
    notes?: string;
    /** The priority of the work order */
    priority?: string;
    /** The status of the work order */
    status?: string;
    /** The type of the work order */
    type?: string;
    /** The property management system of record */
    integrationVendor: PropifyApi.IntegrationVendor;
}
