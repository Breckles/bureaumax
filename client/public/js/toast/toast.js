class Toast {
  static display = (msg, timeout = 3000) => {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;

    document.body.append(toast);

    setTimeout(() => {
      toast.remove();
    }, timeout);
  };
}

export default Toast;
