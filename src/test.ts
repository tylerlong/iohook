import ioHook, {IOHookEvent} from './index';

ioHook.on('mousedown', (event: IOHookEvent) => {
  console.log(event);
});

ioHook.start();
