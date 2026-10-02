import { defineEnvVars } from '@sveltejs/kit/env';

// release-sveltekit exports the real values into the build environment (stamped
// from ~/.devops/versions/<app>.env); the empty defaults in .env keep every other
// build compiling. Static and public: baked into the prerendered version endpoint.
export const variables = defineEnvVars({
  PUBLIC_VERSION: {
    public: true,
    static: true,
    schema: (value) => value ?? '',
    description: 'Release version stamped by release-sveltekit; empty outside a release'
  },
  PUBLIC_RELEASED_AT: {
    public: true,
    static: true,
    schema: (value) => value ?? '',
    description: 'Release timestamp stamped by release-sveltekit; empty outside a release'
  }
});
