# Node.js Debugger

Debug the Node.js server with Chrome DevTools by passing the [`--inspect`](https://nodejs.org/api/debugger.html#debugger_v8_inspector_integration_for_node_js) flag:

```sh
$ node --inspect server.js
Debugger listening on ws://127.0.0.1:9229/dc9010dd-f8b8-4ac5-a510-c1a114ec7d29
For help, see: https://nodejs.org/en/docs/inspector
```

Open `chrome://inspect/#devices` in your Chrome browser and inspect the target.

When you go to `http://localhost:8080/`, the debugger will break at the breakpoint.

See [Debugging Guide](https://nodejs.org/en/docs/guides/debugging-getting-started/) for more information.
