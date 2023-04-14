export default function ({ setGenerator }) {
  setGenerator("component", {
    description: "Create a new component and associated files",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
      {
        type: "confirm",
        name: "addStory",
        message: "Do you want to create stories?",
        default: true,
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/lib/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/lib/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "./templates/stories.tsx.hbs",
        skip: (data) => {
          if (!data.addStory) return "Not adding a story";
          return;
        },
      },
      {
        type: "add",
        path: "../src/lib/{{pascalCase name}}/index.ts",
        templateFile: "./templates/componentIndex.ts.hbs",
      },
      {
        type: "modify",
        path: "../src/lib/index.ts",
        pattern: /(PLOP_INJECT_IMPORT\s)/g,
        templateFile: `./templates/mainIndex.ts.hbs`,
      },
    ],
  });
}
