declare namespace NodeJS {
  interface ProcessEnv {
    // Define your custom environment variable here
    readonly NEXT_PUBLIC_IMAGE_BASE_PATH: string;
    
    // You can also add other variables for completeness, like NODE_ENV
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}