# Postman Collection for Oxa Backend API

This folder contains the Postman collection for the Oxa backend API.
The collection is designed to exercise authentication, session/profile flows, contact management, validation/error handling, and NoSQL security scenarios.

## Files

- `Oxa_Backend_Postman_Collection.json` - Postman v2.1.0 collection export.

## Setup

1. Open Postman.
2. Import `Oxa_Backend_Postman_Collection.json`.
3. Create or select an environment with the following variable:
   - `BASE_URL` — base API URL for the backend.

   Example:
   ```text
   BASE_URL = http://localhost:10000
   ```

## Running the Collection

- Use the Postman Collection Runner to execute the full collection.
- Run folders in order to preserve collection variable state between requests.
- The first authentication request generates reusable test identities via pre-request scripts.

## Collection Structure

- `01_Authentication` — signup, duplicate checks, login, and auth failure cases.
- `02_User_Profile_And_Session` — authenticated profile access, session validation, and logout behavior.
- `03_Contacts_Management` — add, update, and delete contact workflows with authorization checks.
- `04_Negative_and_Validation` — API validation errors, malformed payloads, and negative route tests.
- `05_NoSQL_Security_and_Input_Sanitization` — injection patterns, malformed identifiers, and auth tampering checks.

## Notes

- Requests use collection variables to share generated usernames, emails, passwords, JWT tokens, and contact IDs.
- The collection is intended for local backend testing, but the `BASE_URL` environment variable allows targeting any hosted instance.
- If you encounter failures, verify the backend is running and reachable at `BASE_URL`.
