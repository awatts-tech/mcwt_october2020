Here are the following steps to get started with an Angular project:

1. Make sure you're not already in a git repository.
   Angular creates the repo for you.

Run `git status`, and the correct response should be

```
fatal: not a git repository (or any of the parent directories): .git
```

2. Run `ng new <project-name>`. Separate words in your project name with hyphens, all lowercase. Fill in all of the options. Let the process complete.
3. Run `ng serve --o`. This will start the server running Angular and then open it in your browser. It will take a moment compile.
4. Create your first component, using `ng generate component <my-component>`.
5. Replace `app.component.html` placeholder content with a tag for the first component, using the selector in your `my-component/my-component.component.ts`
