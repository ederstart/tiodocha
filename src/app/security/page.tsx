export default function SecurityPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Security Bulletin</h1>
      <p className="text-sm text-gray-500 mb-8">29 Jun 2026 · 6 min read</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Required action</h2>
        <p className="mb-4">
          The vulnerability affects Next.js versions 15.0.0 through 16.0.6. If you're running an affected version, upgrade immediately, regardless of other protections in place.
        </p>
        <p>
          Following the React2Shell disclosure, increased community research into React Server Components surfaced two additional vulnerabilities that require patching: CVE-2025-55184 (DoS) and CVE-2025-55183 (source code disclosure).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Updates</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>December 08, 8:31 PM PST — Vercel Agent can perform automated code reviews and open pull requests to upgrade vulnerable projects.</li>
          <li>December 08, 6:09 PM PST — We strongly recommend turning on Standard Protection for all of your deployments.</li>
          <li>December 06, 9:05 PM PST — If your application was online and unpatched as of December 4th, 2025 at 1:00 PM PT, rotate any secrets.</li>
          <li>December 05, 10:29 PM PST — Vercel has released an npm package to update your affected Next.js app.</li>
          <li>December 05, 3:44 PM PST — Vercel has partnered with HackerOne for responsible disclosure.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">When to upgrade your application</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You're using Next.js 15.0.0 through 16.0.6</li>
          <li>You're using Next.js 14 canary versions after 14.3.0-canary.76</li>
          <li>You're using React Server Components in any framework</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">How to upgrade and protect your Next.js app</h2>
        <p className="mb-4">Upgrade to the patched version based on your current version:</p>
        <table className="w-full text-sm border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-3 py-2 text-left">Vulnerable version</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Patched release</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 px-3 py-2">Next.js 15.0.x</td><td className="border border-gray-300 px-3 py-2">15.0.5</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Next.js 15.1.x</td><td className="border border-gray-300 px-3 py-2">15.1.9</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Next.js 15.2.x</td><td className="border border-gray-300 px-3 py-2">15.2.6</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Next.js 15.3.x</td><td className="border border-gray-300 px-3 py-2">15.3.6</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Next.js 15.4.x</td><td className="border border-gray-300 px-3 py-2">15.4.8</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Next.js 15.5.x</td><td className="border border-gray-300 px-3 py-2">15.5.7</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Next.js 16.0.x</td><td className="border border-gray-300 px-3 py-2">16.0.10</td></tr>
          </tbody>
        </table>
        <p>Run <code>npx fix-react2shell-next</code> for an automated upgrade, or update your <code>package.json</code> manually and run <code>npm install</code>.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Frequently asked questions</h2>
        <p>For additional questions, contact us at security@vercel.com.</p>
      </section>
    </main>
  );
}
