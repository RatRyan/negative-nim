<template>
  <div class="window">
    <div class="window-header">
      <div class="window-nav">
        <div class="title">
          <BootstrapIcon name="terminal-fill"></BootstrapIcon>
          <p><b>-Nim (because its like nim minus the nim)</b></p>
        </div>
        <div>
          <button><BootstrapIcon name="dash-lg"></BootstrapIcon></button>
          <button>
            <BootstrapIcon name="window-fullscreen"></BootstrapIcon>
          </button>
          <button><BootstrapIcon name="x-lg"></BootstrapIcon></button>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<style>
.window {
  background-color: #bec7c9;
  width: 63vw;
  height: 60vh;
  min-width: 1280px;
  min-height: 720px;
  padding: 5px;
  border: ridge 2px white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.window-header {
  background-color: #0000a8;
  height: 7%;
  border: inset 2px;
  border-radius: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.window-nav {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 7px;
}

.title {
  display: flex;
  align-items: center;
  margin-left: 18px;
}

.window-nav p {
  margin-left: 10px;
}

.window-nav button {
  align-items: center;
  border: outset 3px white;
  padding: 0;
  margin: 3px 3px;
  font-size: 18px;
  width: 30px;
  height: 30px;
}

.content-wrapper {
  background-color: #161414;
  height: calc(100% - 18px);
  overflow: hidden;
  margin: 30px 5px 5px 5px;
  border: inset 3px;
}
</style>
