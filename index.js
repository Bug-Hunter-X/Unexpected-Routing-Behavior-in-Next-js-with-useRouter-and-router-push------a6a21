```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    //Solution: Use router.replace('/'); to reliably redirect to home
    router.replace('/'); 
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
}
```