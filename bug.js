```javascript
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "../pages/api/auth/[...nextauth]";

export default async function MyComponent() {
  const session = await unstable_getServerSession(authOptions);

  if (!session) {
    return <Redirect to="/login" />
  }

  // ... rest of your component
}
```