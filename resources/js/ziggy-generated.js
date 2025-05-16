const Ziggy = {"url":"http:\/\/localhost:8000","port":8000,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"login":{"uri":"\/","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"users.index":{"uri":"users","methods":["GET","HEAD"]},"users.create":{"uri":"users\/create","methods":["GET","HEAD"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"users.store":{"uri":"users\/store","methods":["POST"]},"users.destroy":{"uri":"users\/{user}","methods":["DELETE"],"parameters":["user"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
