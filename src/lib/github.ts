export async function getFeaturedProjects() {
  // Fetch the two actual GitHub repos that are the featured projects
  const repoNames = ["pw_java_thejakartapostcom", "pw_java_jsonplaceholder.typicode.com"];
  const repos: Array<{
    name: string;
    description: string;
    url: string;
    type: string;
    tags: string[];
    lastUpdated?: string;
    stars?: number;
  }> = [];

  for (const repoName of repoNames) {
    try {
      const url = `https://api.github.com/repos/almezi/${repoName}`;
      const response = await fetch(url, {
        headers: {
          "Accept": "application/vnd.github.v3+json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        repos.push({
          name: data.name || repoName,
          description: data.description || "",
          url: data.html_url || `https://github.com/almezi/${repoName}`,
          type: data.fork ? "API" : "Web UI",
          tags: [],
          lastUpdated: data.updated_at,
          stars: data.stargazers_count || 0,
        });
      }
    } catch (error) {
      console.warn(`Failed to fetch repo almezi/${repoName}:`, error.message);
    }
  }

  // If we got at least one repo, return them; otherwise fall back to empty (will use static)
  if (repos.length > 0) {
    return repos;
  }
  return [];
}