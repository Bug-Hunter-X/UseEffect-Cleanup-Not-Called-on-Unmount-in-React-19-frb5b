```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      console.log('Cleanup');
    };
  }, []);

  useEffect(() => {
    if(isMounted){
        console.log('Count:', count);
    }
  }, [count, isMounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```