<template>
  <div class="window">
    <div class="window-header">
      <div class="window-nav">
        <p><b>-Nim (because its like nim minus the nim)</b></p>
        <div>
          <button><b>_</b></button>
          <button><b>X</b></button>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.window {
  background-color: #dcdfde;
  width: 60vw;
  height: 60vh;
  min-width: 900px;
  min-height: 600px;
  padding: 5px;
  border: outset 3px white;
  border-radius: 1px;
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

.window-nav p {
  margin-left: 10px;
}

.window-nav button {
  border: outset 3px white;
  margin: 3px 3px;
  font-size: 18px;
  width: 30px;
  height: 30px;
}

.content-wrapper {
  background-color: #161414;
  height: 89%;
  margin: 18px 3px 3px 3px;
  border: inset 3px;
}
.content {
  height: 100%;
  width: 100%;
}

.message-log {
  height: 100px;
  width: 100px;
  overflow-y: scroll;
}
</style>
