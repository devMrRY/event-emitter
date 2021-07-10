import { useEffect, useState } from "react";
import event from "./eventEmitter";
import _ from "lodash";

export function useEventState(_events) {
  const [state, setState] = useState({});
  const [prevState, setPrevState] = useState({});

  const handleData = (() => {
    let _event = {};
    return (ev, data) => {
      if (_.isEqual(data, _event[ev])) return;
      setPrevState({ ..._event});
      _event[ev] = data;
      setState((prev) => ({ ...prev, [ev]: data }));
    };
  })();

  useEffect(() => {
    _events.forEach((ev) => event.subscribe(ev, handleData));
  }, []);

  return [ prevState, state ];
}

export const test = () => {
  window.child();
};
