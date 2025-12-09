import { rules } from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
    rules.configs.flat['recommended-latest'],
])