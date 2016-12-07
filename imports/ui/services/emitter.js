export default function emitter() {
  'ngInject';

  return function emit(func, data) {
    console.groupCollapsed(`EMMITED: ${arguments.callee.caller.name}`);
    console.log(data);
    console.groupEnd();

    func({ $event: data });

    return {
      pipe: (otherFunc, newData = data) => emit(otherFunc, newData)
    };
  };
}
