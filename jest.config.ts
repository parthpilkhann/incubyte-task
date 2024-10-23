import nextJest from "next/jest";

// Create Jest configuration with Next.js context
const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust this if your paths are different
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
};

export default createJestConfig(customJestConfig);
