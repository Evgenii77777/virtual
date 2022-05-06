import i18Obj from "./translate.js";
const area = document.getElementById("text");
const keys = document.querySelectorAll(".second__span");
const space = document.querySelector(".wrapper__dark-space");
const minus = document.querySelector(".span__minus");
const equal = document.querySelector(".span__equal");
const backspace = document.querySelector(".span__backspace");
const shift = document.querySelector(".span__shift");
const shiftRigth = document.querySelector(".span__shift-rigth");
const backuote = document.querySelector(".span__backuote");
const alt = document.querySelector(".span__alt");
const altRigth = document.querySelector(".span__alt-rigth");
const ctrl = document.querySelector(".span__ctrl");
const ctrlRigth = document.querySelector(".span__ctrl-rigth");
const caps = document.querySelector(".span__capslock");
const up = document.querySelector(".span__up");
const left = document.querySelector(".span__left");
const down = document.querySelector(".span__down");
const right = document.querySelector(".span__right");
const enter = document.querySelector(".span__enter");
const trans = document.querySelector(".trans");
const del = document.querySelector(".span__del");
const tab = document.querySelector(".span__tab");

keys.forEach((el) =>
  el.addEventListener("click", (e) => {
    if (caps.classList.contains("active__span")) {
      area.value += e.target.textContent.toUpperCase();
    } else {
      area.value += e.target.textContent.toLowerCase();
    }
    e.target.classList.add("active__span");
    setTimeout(() => {
      e.target.classList.remove("active__span");
    }, 1000);
  })
);

enter.addEventListener("click", () => {
  area.value += "\r\n";
  enter.classList.add("active__span");
  setTimeout(() => {
    enter.classList.remove("active__span");
  }, 1000);
});
backspace.addEventListener("click", () => {
  area.value = area.value.substring(0, area.value.length - 1);
  backspace.classList.add("active__span");
  setTimeout(() => {
    backspace.classList.remove("active__span");
  }, 1000);
});
shift.addEventListener("click", () => {
  shift.classList.add("active__span");
  setTimeout(() => {
    shift.classList.remove("active__span");
  }, 1000);
});
shiftRigth.addEventListener("click", () => {
  shiftRigth.classList.add("active__span");
  setTimeout(() => {
    shiftRigth.classList.remove("active__span");
  }, 1000);
});
backuote.addEventListener("click", () => {
  area.value += "`";
  backuote.classList.add("active__span");
  setTimeout(() => {
    backuote.classList.remove("active__span");
  }, 1000);
});
alt.addEventListener("click", () => {
  alt.classList.add("active__span");
  setTimeout(() => {
    alt.classList.remove("active__span");
  }, 1000);
});
altRigth.addEventListener("click", () => {
  altRigth.classList.add("active__span");
  setTimeout(() => {
    altRigth.classList.remove("active__span");
  }, 1000);
});
ctrl.addEventListener("click", () => {
  ctrl.classList.add("active__span");
  setTimeout(() => {
    ctrl.classList.remove("active__span");
  }, 1000);
});
ctrlRigth.addEventListener("click", () => {
  ctrlRigth.classList.add("active__span");
  setTimeout(() => {
    ctrlRigth.classList.remove("active__span");
  }, 1000);
});
caps.addEventListener("click", () => {
  if (caps.classList.contains("active__span")) {
    caps.classList.remove("active__span");
  } else {
    caps.classList.add("active__span");
  }
});
up.addEventListener("click", () => {
  up.classList.add("active__span");
  setTimeout(() => {
    up.classList.remove("active__span");
  }, 1000);
});
down.addEventListener("click", () => {
  down.classList.add("active__span");
  setTimeout(() => {
    down.classList.remove("active__span");
  }, 1000);
});
left.addEventListener("click", () => {
  left.classList.add("active__span");
  setTimeout(() => {
    left.classList.remove("active__span");
  }, 1000);
});
right.addEventListener("click", () => {
  right.classList.add("active__span");
  setTimeout(() => {
    right.classList.remove("active__span");
  }, 1000);
});
del.addEventListener("click", () => {
  del.classList.add("active__span");
  setTimeout(() => {
    del.classList.remove("active__span");
  }, 1000);
});
tab.addEventListener("click", () => {
  tab.classList.add("active__span");
  setTimeout(() => {
    tab.classList.remove("active__span");
  }, 1000);
});

document.addEventListener("keypress", (e) => onPress(e));
function onPress(e) {
  if (e.code !== "Enter" && caps.classList.contains("active__span")) {
    area.value += e.key.toUpperCase();
  } else if (e.code !== "Enter" && !caps.classList.contains("active__span")) {
    area.value += e.key.toLowerCase();
  }
  keys.forEach((el) => {
    if (
      el.textContent === e.key ||
      el.textContent.toLocaleLowerCase() === e.key
    ) {
      el.classList.add("active__span");
      setTimeout(() => {
        el.classList.remove("active__span");
      }, 1000);
    }
  });
  if (e.code.includes("Space")) {
    area.value += " ";
    keys.forEach(() => {
      space.classList.add("active__span");
      setTimeout(() => {
        space.classList.remove("active__span");
      }, 1000);
    });
  }
  if (e.code.includes("Minus")) {
    keys.forEach(() => {
      minus.classList.add("active__span");
      setTimeout(() => {
        minus.classList.remove("active__span");
      }, 1000);
    });
  }
  if (e.code.includes("Equal")) {
    keys.forEach(() => {
      equal.classList.add("active__span");
      setTimeout(() => {
        equal.classList.remove("active__span");
      }, 1000);
    });
  }
  if (e.code === "Backquote") {
    backuote.classList.add("active__span");
    setTimeout(() => {
      backuote.classList.remove("active__span");
    }, 1000);
  }
}

space.addEventListener("click", () => {
  area.value += " ";
  space.classList.add("active__span");
  setTimeout(() => {
    space.classList.remove("active__span");
  }, 1000);
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    area.value = area.value.substring(0, area.value.length - 1);
    backspace.classList.add("active__span");
    setTimeout(() => {
      backspace.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "ShiftLeft") {
    shift.classList.add("active__span");
    setTimeout(() => {
      shift.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "ShiftRight") {
    shiftRigth.classList.add("active__span");
    setTimeout(() => {
      shiftRigth.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "AltLeft") {
    alt.classList.add("active__span");
    setTimeout(() => {
      alt.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "AltRight") {
    altRigth.classList.add("active__span");
    setTimeout(() => {
      altRigth.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "ControlLeft") {
    ctrl.classList.add("active__span");
    setTimeout(() => {
      ctrl.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "ControlRight") {
    ctrlRigth.classList.add("active__span");
    setTimeout(() => {
      ctrlRigth.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "CapsLock") {
    if (caps.classList.contains("active__span")) {
      caps.classList.remove("active__span");
    } else {
      caps.classList.add("active__span");
    }
  }
  if (e.code === "ArrowLeft") {
    left.classList.add("active__span");
    setTimeout(() => {
      left.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "ArrowUp") {
    up.classList.add("active__span");
    setTimeout(() => {
      up.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "ArrowDown") {
    down.classList.add("active__span");
    setTimeout(() => {
      down.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "ArrowRight") {
    right.classList.add("active__span");
    setTimeout(() => {
      right.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "Delete") {
    del.classList.add("active__span");
    setTimeout(() => {
      del.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "Tab") {
    tab.classList.add("active__span");
    setTimeout(() => {
      tab.classList.remove("active__span");
    }, 1000);
  }
  if (e.code === "Enter") {
    area.value += "\r\n";
    enter.classList.add("active__span");
    setTimeout(() => {
      enter.classList.remove("active__span");
    }, 1000);
  }
});

function getTranslateRu() {
  const body = document.querySelectorAll("[data-i18]");

  body.forEach((el) => {
    el.textContent = i18Obj.ru[el.dataset.i18];
  });
}
function getTranslateEn() {
  const body = document.querySelectorAll("[data-i18]");

  body.forEach((el) => {
    el.textContent = i18Obj.en[el.dataset.i18];
  });
}

document.addEventListener("keydown", function (event) {
  if (event.shiftKey && event.altKey && trans.textContent === "Q") {
    getTranslateRu();
  } else if (event.shiftKey && event.altKey && trans.textContent === "Й") {
    getTranslateEn();
  }
});
