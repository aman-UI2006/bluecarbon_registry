# Blue Carbon Registry

A multi-application prototype for monitoring, reporting, and verification (MRV) workflows for blue-carbon restoration projects. The repository brings together a web dashboard, a field-data mobile app, shared TypeScript code, and Solidity contracts for project and credit lifecycle concepts.

> **Project status:** prototype / active development. The repository contains application screens and smart-contract source, but a complete production backend, independent ecological verification process, and production carbon-credit marketplace are not established by this codebase. Do not interpret demo UI metrics as measured environmental outcomes or issued credits.

## Product goals

- Register restoration projects and organize project information.
- Support field teams with location-aware data collection and photo evidence.
- Provide review and verification workflows for submitted field data.
- Represent project, field-data, and carbon-credit lifecycle records in smart contracts.
- Give administrators and stakeholders visibility into project activity.

## Architecture

| Layer | Location | Current implementation |
|---|---|---|
| Web application | `apps/web/` | React 18, TypeScript, Vite, Chakra UI, React Router |
| Mobile application | `apps/mobile/` | React Native 0.72, Expo 49, navigation, camera and location packages |
| Shared package | `packages/shared/` | Shared TypeScript types and utilities |
| Smart contracts | `contracts/` | Solidity contracts, Hardhat, Ethers v6, OpenZeppelin dependencies |

The root package defines npm workspaces for `apps/*` and `packages/*`. The contracts package is managed separately in `contracts/`.

## Smart-contract model

The Solidity source includes project, field-data, and carbon-credit structures; role definitions for administrators, verifiers, project owners, and field collectors; and events for project creation, field-data submission/verification, and credit lifecycle actions.

Contract source is not equivalent to an audited or deployed carbon-credit registry. Review role setup, authorization, upgrade/deployment assumptions, token semantics, oracle inputs, and environmental verification before any real-world use.

## Web development

### Requirements
- Node.js 18+
- npm

From the repository root:

```bash
npm install
npm run shared:build
npm run web
```

The Vite development server prints its local URL in the terminal.

Useful web scripts:

```bash
cd apps/web
npm run build
npm run lint
npm run type-check
npm test
```

## Mobile development

```bash
npm run mobile
```

This starts the Expo development server. Use Expo tooling and a compatible device/emulator to run the app. Camera, location, and media permissions must be granted on the device.

## Smart contracts

Install the contract dependencies separately:

```bash
cd contracts
npm install
npm run compile
npm test
```

For local deployment, first configure the Hardhat local network and required accounts, then use the deployment script. Polygon deployment requires a correctly configured RPC endpoint, funded deployment wallet, and explorer key where verification is enabled.

**Never place a production private key in source control.** Use a dedicated test wallet for development and keep secrets in local environment configuration.

## Environment configuration

Start from [env.example](env.example). Configure only the values needed for the component being developed. Do not commit `.env` files, wallet keys, RPC credentials, or service tokens.

## Repository structure

```text
apps/
  web/          React web dashboard
  mobile/       Expo field-data application
packages/
  shared/       Shared TypeScript code
contracts/
  contracts/    Solidity source
  scripts/      Deployment scripts
```

## Current limitations and next engineering steps

1. Implement and document a backend API and persistent data model.
2. Connect field submissions to authenticated storage and a verifiable review workflow.
3. Define trusted MRV methodology, evidence standards, and independent verification.
4. Add integration tests across web, mobile, and contracts.
5. Resolve and pin dependency/compiler compatibility, then run contract tests and an independent security audit.
6. Add reproducible deployment configuration and observability.

## License

See [LICENSE](LICENSE).
