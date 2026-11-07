export async function getFeaturedProjects() {
  // Fetch the GitHub repos behind the featured projects so descriptions stay fresh at build time
  const repoNames = [
    "saku-appium",
    "SimpleMoneyTracker-KT",
    "petstore-swagger-io-playwright",
    "saucedemocom-ui-playwright",
    "AI-CICD",
    "pw_java_jsonplaceholder.typicode.com",
    "IFG_Hackerrank",
    "pw_java_thejakartapostcom",
    "pw_jumiacomng",
    "cy-tiketcom",
    "ebay-search",
  ];

  const repos: Array<{ url: string; description: string }> = [];

  for (const repoName of repoNames) {
    try {
      const response = await fetch(`https://api.github.com/repos/almezi/${repoName}`, {
        headers: {
          "Accept": "application/vnd.github.v3+json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        repos.push({
          url: data.html_url || `https://github.com/almezi/${repoName}`,
          description: data.description || "",
        });
      }
    } catch (error) {
      console.warn(`Failed to fetch repo almezi/${repoName}:`, error.message);
    }
  }

  return repos;
}