/**
 * This file was auto-generated by Fern from our API Definition.
 */

export class PropifyApiError extends Error {
    readonly statusCode?: number;
    readonly responseBody?: unknown;

    constructor({
        message,
        statusCode,
        responseBody,
    }: {
        message?: string;
        statusCode?: number;
        responseBody?: string;
    }) {
        super(message);
        Object.setPrototypeOf(this, PropifyApiError.prototype);
        if (statusCode != null) {
            this.statusCode = statusCode;
        }

        if (responseBody != null) {
            try {
                this.responseBody = JSON.parse(responseBody);
            } catch {
                this.responseBody = responseBody;
            }
        }
    }
}
