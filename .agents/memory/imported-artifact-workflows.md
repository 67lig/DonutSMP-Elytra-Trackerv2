---
name: Imported artifact workflows
description: Workflow and artifact registration behavior for imported Replit workspaces
---

Imported projects can contain valid artifact manifests without those artifacts or their managed workflows being present in the workspace registry. They may also have an empty development database even when the schema files are present. In that case, restart and presentation calls using manifest-derived names fail until workflows are configured manually, and endpoint smoke checks fail until the existing schema is pushed.

**Why:** An imported workspace had working artifact files and manifests, but `listArtifacts()` and `listWorkflows()` were empty. The app only started after minimal workflows were configured with explicit runtime environment variables.

**How to apply:** Check the artifact and workflow registries before trying managed restarts. If absent and the user wants the app running, configure only the required services with descriptive names and include the manifest's PORT and BASE_PATH values in each command. Check and push the existing development schema before diagnosing endpoint failures as application bugs.