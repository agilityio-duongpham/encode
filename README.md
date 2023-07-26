This is a project that aids in data encryption and decryption.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## API

- Localhost: https://localhost:3000/

- Deploy: https://encode-coral.vercel.app/

### Encode

```
  - Method: POST
  - URL: http://localhost:3000/api/encode
  - Header: {
      "Content-Type": "application/json",
  }
  - Body:{
      email: "my.email@domain.com.vn";
      target: "setup-password";
      code: "123456";
      expiredTime: 1885246086000;
  }
```

### Decode

```
  - Method: POST
  - URL: http://localhost:3000/api/decode
  - Header: {
      "Content-Type": "application/json",
  }
  - Body:{
      encode:"something...."
  }
```
