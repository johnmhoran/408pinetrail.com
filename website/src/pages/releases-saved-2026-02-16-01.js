import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";

export default function ReleasesPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/releases.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) {
    return (
      <Layout title="Releases">
        <div className="container margin-vert--lg">
          <p>Loading releases...</p>
        </div>
      </Layout>
    );
  }

  const formatUTC = (isoString) => {
    const d = new Date(isoString);
    return `${d.getUTCFullYear()}-${String(
      d.getUTCMonth() + 1
    ).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")} ${String(
      d.getUTCHours()
    ).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")} UTC`;
  };

  return (
    <Layout title="Releases">
      <div className="container margin-vert--lg">
        <h1>Repository Releases</h1>

        <p style={{ fontSize: "0.9rem", color: "#666" }}>
          Generated: {formatUTC(data.generated_at)}
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>Repository</th>
              <th style={thStyle}>Tag</th>
              <th style={thStyle}>Published (UTC)</th>
              <th style={thStyle}>Commits Since</th>
              <th style={thStyle}>Links</th>
            </tr>
          </thead>
          <tbody>
            {data.releases.map((release, index) => (
              <tr key={index}>
                <td style={tdStyle}>
                  <a href={release.repo_url} target="_blank" rel="noreferrer">
                    {release.repo}
                  </a>
                </td>
                <td style={tdStyle}>
                  <a href={release.tag_url} target="_blank" rel="noreferrer">
                    {release.tag}
                  </a>
                </td>
                <td style={tdStyle}>{formatUTC(release.published_at)}</td>
                <td style={tdStyle}>
                  <a href={release.compare_url} target="_blank" rel="noreferrer">
                    {release.commits_since}
                  </a>
                </td>
                <td style={tdStyle}>
                  <a
                    href={release.releases_page_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Releases Page
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

const thStyle = {
  borderBottom: "2px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const tdStyle = {
  borderBottom: "1px solid #eee",
  padding: "8px",
};
