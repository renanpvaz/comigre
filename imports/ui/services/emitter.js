export default function emitter() {
  'ngInject';

  return function emit(func, data) {
    console.groupCollapsed(`EMMITED: ${func.name}`);
    console.log('DATA:', data);
    console.groupEnd();
    func({ $event: data });

    return {
      pipe: (otherFunc, newData = data) => emit(otherFunc, newData)
    };
  };
}
