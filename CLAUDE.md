# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a minimal reproduction repository demonstrating issue #387 with Claude Code Action failing on Dependabot PRs due to incorrect permission checks. The repository shows both the current failure and how the proposed fix (PR #388) would resolve it.

## Key Context

- **Issue**: [#387](https://github.com/anthropics/claude-code-action/issues/387) - Claude Code Action checks actor permissions instead of token permissions
- **PR**: [#388](https://github.com/anthropics/claude-code-action/pull/388) - Proposes `trusted_bots` parameter to fix the issue

## Repository Structure

The repository contains two GitHub Actions workflows that demonstrate the issue:
- `.github/workflows/claude-action-current.yml` - Shows current failure with Dependabot
- `.github/workflows/claude-action-with-fix.yml` - Shows how the proposed `trusted_bots` parameter would fix it

Dependencies are intentionally outdated to trigger Dependabot:
- `lodash`: 4.17.15 (current: 4.17.21)
- `axios`: 0.21.1 (current: 1.x)

## Required Secrets

When setting up this reproduction:
- `CLAUDE_CODE_OAUTH_TOKEN`: Claude Code OAuth token
- `CLAUDE_GITHUB_APP_ID`: GitHub App ID (for the fix workflow)
- `CLAUDE_GITHUB_PRIVATE_KEY`: GitHub App private key (for the fix workflow)

## Workflow Behavior

When Dependabot creates a PR:
1. "Claude Code Action (Current - Will Fail)" workflow will fail with: `Error: Actor does not have write permissions to the repository`
2. "Claude Code Action (With Fix - Would Succeed)" workflow demonstrates how the fix would work (currently commented out as the feature isn't implemented yet)

## Common Tasks

To trigger Dependabot updates manually:
- Further downgrade dependencies in `package.json`
- Push changes to trigger Dependabot security updates

## Commit Convention

This repository uses conventional commits (e.g., `feat:`, `fix:`, `docs:`).