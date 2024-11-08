const fs = require('fs-extra');
const path = require('path');

const moduleName = process.argv[2];

if (!moduleName) {
  console.error('Будь ласка, вкажіть назву модуля.');
  process.exit(1);
}

const toCamelCase = (str) =>
  str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

const toPascalCase = (str) => {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
};

const replacements = {
  __name__: moduleName.toLowerCase(),
  __Name__: toPascalCase(moduleName),
};

const templateDir = path.join(__dirname, 'template_module');
const targetDir = path.join(__dirname, 'src', moduleName);
const postmanTemplate = path.join(__dirname, 'postman_template.json');
const postmanTargetDir = path.join(
  __dirname,
  'postman',
  `${moduleName}_collection.json`,
);

if (fs.existsSync(targetDir)) {
  console.error(`Модуль "${moduleName}" вже існує.`);
  process.exit(1);
}

async function copyTemplates(srcDir, destDir) {
  const files = await fs.readdir(srcDir);

  for (const file of files) {
    const srcFile = path.join(srcDir, file);
    let destFile = path.join(destDir, file);

    Object.keys(replacements).forEach((key) => {
      destFile = destFile.replace(new RegExp(key, 'g'), replacements[key]);
    });

    const stats = await fs.stat(srcFile);

    if (stats.isDirectory()) {
      await copyTemplates(srcFile, destFile);
    } else {
      let content = await fs.readFile(srcFile, 'utf8');

      Object.keys(replacements).forEach((key) => {
        const regex = new RegExp(key, 'g');
        content = content.replace(regex, replacements[key]);
      });

      await fs.outputFile(destFile, content);
    }
  }
}

async function generatePostmanCollection() {
  let postmanContent = await fs.readFile(postmanTemplate, 'utf8');

  Object.keys(replacements).forEach((key) => {
    const regex = new RegExp(key, 'g');
    postmanContent = postmanContent.replace(regex, replacements[key]);
  });

  await fs.outputFile(postmanTargetDir, postmanContent);
}

copyTemplates(templateDir, targetDir)
  .then(() => {
    console.log(
      `Модуль "${moduleName}" успішно створено в папці "src/${moduleName}".`,
    );
    return generatePostmanCollection();
  })
  .then(() => {
    console.log(
      `Postman колекція для модуля "${moduleName}" успішно створена.`,
    );
  })
  .catch((err) => {
    console.error('Помилка при створенні модуля:', err);
  });
