const fs = require('fs');

const OUTPUT_FOLDER = 'build';

new Promise(() => {
  fs.writeFileSync(
      `${OUTPUT_FOLDER}/robots.txt`,
      'User-agent: *\nDisallow: /'
  );
});
