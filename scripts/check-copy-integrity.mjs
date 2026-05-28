import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const roots = ["app", "components", "lib", "tests"];
const extensions = new Set([".ts", ".tsx"]);
const mojibakeMarkers = ["áƒ", "â‚", "â€¢", "â™"];

async function* walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      yield* walk(entryPath);
      continue;
    }

    if (extensions.has(path.extname(entry.name))) {
      yield entryPath;
    }
  }
}

const failures = [];

for (const root of roots) {
  for await (const file of walk(root)) {
    const source = await readFile(file, "utf8");

    for (const marker of mojibakeMarkers) {
      if (source.includes(marker)) {
        failures.push(`${file}: contains mojibake marker "${marker}"`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
}
