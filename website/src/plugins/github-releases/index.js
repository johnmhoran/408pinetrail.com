// src/plugins/github-releases/index.js
module.exports = function githubReleasesPlugin(context, options) {
  return {
    name: 'github-releases-plugin',
    async loadContent() {
      const response = await fetch('https://api.github.com/repos/johnmhoran/docusaurus-sandbox-2026-01-15/releases');
      if (!response.ok) {
        throw new Error(`Failed to fetch releases: ${response.statusText}`);
      }
      const releases = await response.json();
      // Filter/process as needed (e.g., exclude drafts)
      return releases.filter(release => !release.draft && !release.prerelease).map(release => ({
        tag: release.tag_name,
        name: release.name,
        body: release.body,  // Markdown notes
        date: release.published_at,
        url: release.html_url,
      }));
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ releases: content });
    },
  };
};
