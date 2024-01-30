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
          <button><BootstrapIcon name="window-fullscreen"></BootstrapIcon></button>
          <button><BootstrapIcon name="x-lg"></BootstrapIcon></button>
        </div>
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style>
.window {
  background-color: #dcdfde;
  width: 63vw;
  height: 60vh;
  min-width: 1280px;
  min-height: 720px;
  padding: 5px;
  border: outset 3px white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.window-header {
  background-color: #3a2681;
  height: 7%;
  border: inset 2px;
  border-radius: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.window-nav {
  width: 100%;
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

.content {
  background-color: #161414;
  height: 89%;
  margin: 18px 5px 5px 5px;
  border: inset 3px;
}
</style>
