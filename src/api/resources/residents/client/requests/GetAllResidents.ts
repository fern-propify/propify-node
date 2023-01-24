/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface GetAllResidents {
    /**
     * Order the results by a field.
     * Optionally include asc or desc preceded by a colon (default is asc).
     * Example: `?order-by=vendor:asc,created_at:desc`
     *
     */
    orderBy?: string;
    /**
     * Can be used for paginating results
     */
    offset?: number;
    /**
     * A number between 1 and 250 to determine the number of results to return in a single query
     */
    limit?: number;
}
