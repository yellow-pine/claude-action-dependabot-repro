# Claude Code Action Dependabot Reproduction

This repository demonstrates the issue where Claude Code Action fails on Dependabot PRs due to incorrect permission checks.

## Issue Details

- **Issue**: [#387 - Claude Code Action incompatible with Dependabot PRs](https://github.com/anthropics/claude-code-action/issues/387)
- **PR**: [#388 - feat: add `trusted_bots` parameter to support Dependabot PRs](https://github.com/anthropics/claude-code-action/pull/388)

## Problem

Claude Code Action checks if the actor (e.g., `dependabot[bot]`) is a repository collaborator, which always fails for bots. This prevents the action from running on Dependabot PRs even when a valid GitHub token with write permissions is provided.

## This Repository Demonstrates

1. **Current Behavior**: The `claude-action-current.yml` workflow fails on Dependabot PRs with:
   ```
   Error: Actor does not have write permissions to the repository
   ```

2. **Proposed Fix**: The `claude-action-with-fix.yml` workflow shows how the proposed `trusted_bots` parameter would solve this issue.

## How to Reproduce

1. Fork this repository
2. Set up the required secrets:
   - `CLAUDE_CODE_OAUTH_TOKEN`: Your Claude Code OAuth token
   - `CLAUDE_GITHUB_APP_ID`: GitHub App ID (for the fix workflow)
   - `CLAUDE_GITHUB_PRIVATE_KEY`: GitHub App private key (for the fix workflow)

3. Enable Dependabot in the repository settings

4. Wait for Dependabot to create a PR (or manually trigger by further downgrading dependencies)

5. Observe the workflow results:
   - ❌ "Claude Code Action (Current - Will Fail)" - Shows the permission error
   - ✅ "Claude Code Action (With Fix - Would Succeed)" - Would work with the proposed fix

## Dependencies

This repository intentionally uses outdated dependencies to trigger Dependabot updates:
- `lodash`: 4.17.15 (current: 4.17.21)
- `axios`: 0.21.1 (current: 1.x)

## Solution

The proposed solution in PR #388 adds a `trusted_bots` parameter that allows specific bots to bypass actor permission checks when using external tokens with proper permissions.