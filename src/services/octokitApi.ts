const { Octokit } = require('@octokit/core');

import { auth } from './auth';

const octokit = new Octokit({
  auth: auth,
});

export const getIssues = async (organisation: string, repo: string) =>
  await octokit.request('GET /repos/{organisation}/{repo}/issues', {
    organisation,
    repo,
    type: 'public',
    has_issues: true,
  });
